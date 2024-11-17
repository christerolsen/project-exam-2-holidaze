// src/pages/VenuePage/index.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchVenueById } from "../../utils/api";
import ImageGallery from "../../components/Venues/ImageGallery";
import Details from "../../components/Venues/Details";
import Container from "../../Container";
import BookingCalendar from "../../components/Venues/Calendar";
import BookingForm from "../../components/Form/BookingForm";

const VenuePage = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        setIsLoading(true);
        const data = await fetchVenueById(id);
        setVenue(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVenue();
  }, [id]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (isLoading) {
    return <p>Loading venue details...</p>;
  }
  return (
    <Container>
      <div className="col-span-2 mb-8">
        <ImageGallery media={venue.data.media} />
      </div>
      <div className="grid grid-cols-1 laptop:grid-cols-2 grid-rows-3 laptop:grid-rows-2 desktop:gap-10">
        <div className="laptop:row-span-2">
          <Details
            name={venue.data.name}
            description={venue.data.description}
            location={venue.data.location}
            maxGuests={venue.data.maxGuests}
            price={venue.data.price}
            rating={venue.data.rating}
            amenities={venue.data.meta}
          />
        </div>
        <div className="flex-1">
          {venue && venue.data.bookings && (
            <BookingCalendar bookings={venue.data.bookings} />
          )}
        </div>
        <div className="">
          <BookingForm
            venueId={id}
            onBookingSuccess={(data) =>
              console.log("Booking successful:", data)
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default VenuePage;
