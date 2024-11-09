// src/components/Venues/TopRated/index.jsx
import React from "react";
import VenueCard from "../VenueCard";
import Loader from "../../Loader";
import { useFetchVenues } from "../../../hooks/useFetchVenues";

const TopRated = () => {
  // Fetch all venues using the useFetchVenues hook
  const { venues, loading, error } = useFetchVenues();

  // Filter for top-rated venues (5 stars only) and limit to 5 items
  const topRatedVenues = venues
    .filter((venue) => venue.rating === 5)
    .slice(0, 5);

  if (loading) return <Loader />;
  if (error)
    return <p className="text-error">Error loading venues: {error.message}</p>;

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="flex flex-wrap justify-center gap-6">
        {topRatedVenues.map((venue) => (
          <div key={venue.id} className="flex-grow-0 flex-shrink-0 basis-72">
            <VenueCard venue={venue} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;
