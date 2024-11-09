// src/pages/VenueDetailsPage/index.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Loader from "../../components/Loader";
import { fetchVenueById } from "../../utils/api";
import ImageGallery from "../../components/Venues/ImageGallery/index.jsx";
import VenueDetailss from "../../components/Venues/VenueDetails/index.jsx";
import BookingCards from "../../components/Venues/BookingCard/index.jsx";

const VenueDetailsPage = () => {
  const { id } = useParams();

  const {
    data: venue,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["venue", id],
    queryFn: () => fetchVenueById(id),
  });

  if (isLoading) return <Loader />;
  if (isError)
    return <p className="text-error text-h4">Error loading venue details.</p>;

  return (
    <div className="p-xl bg-background min-h-screen flex flex-col laptop:flex-row gap-l">
      {/* Left Column: Image Gallery and Venue Details */}
      <div className="w-full laptop:w-2/3 space-y-l">
        <ImageGallery media={venue.media} name={venue.name} />
        <VenueDetailss
          description={venue.description}
          maxGuests={venue.maxGuests}
          location={venue.location}
          price={venue.price}
          meta={venue.meta}
        />
      </div>

      {/* Right Column: Booking Card */}
      <div className="w-full laptop:w-1/3">
        <BookingCards
          price={venue.price}
          rating={venue.rating}
          maxGuests={venue.maxGuests}
        />
      </div>
    </div>
  );
};

export default VenueDetailsPage;
