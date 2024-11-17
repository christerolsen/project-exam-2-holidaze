// src/pages/VenueDetailsPage/index.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Container from "../../Container";
import Loader from "../../components/Loader";
import { fetchVenueById } from "../../utils/api";
import ImageGallery from "../../components/Venues/ImageGallery";
import Details from "../../components/Venues/Details";
import Booking from "../../components/Venues/Booking";

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

  const media = venue?.data?.media || [];
  const name = venue?.data?.name || "Venue";

  return (
    <Container>
      <div className=" bg-background flex flex-col gap-l">
        <div className="w-full mb-l">
          <ImageGallery media={media} name={name} />
        </div>

        <div className="w-full flex flex-col laptop:flex-row gap-l">
          <div className="w-full laptop:w-2/3 space-y-l">
            <Details
              description={venue.data.description}
              maxGuests={venue.data.maxGuests}
              location={venue.data.location}
              price={venue.data.price}
              meta={venue.data.meta}
            />
          </div>

          <div className="w-full laptop:w-1/3">
            <Booking
              price={venue.data.price}
              rating={venue.data.rating}
              maxGuests={venue.data.maxGuests}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default VenueDetailsPage;
