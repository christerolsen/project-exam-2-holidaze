// src/components/Venues/VenuesList/index.jsx
import React, { useState } from "react";
import { useFetchVenues } from "../../../hooks/useFetchVenues";

import Loader from "../../Loader";
import VenueCard from "../VenueCard";
import Button from "../../Button";
import SearchBar from "../../SearchBar";

const VenuesList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { venues, loading, error, loadMore, hasMore, resetPage } =
    useFetchVenues(searchQuery);

  const handleSearch = (query) => {
    setSearchQuery(query);
    resetPage();
  };

  if (loading && venues.length === 0) return <Loader />;
  if (error) return <p>Error loading venues: {error.message}</p>;

  return (
    <div className="mt-4 p-4 flex flex-col justify-center items-center">
      <div className="w-full laptop:flex gap-8">
        <h1 className="mb-4 self-start">Venues</h1>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="mt-4 p-4 flex flex-wrap justify-center align-center gap-6">
        {venues.map((venue) => (
          <div key={venue.id} className="flex-grow-0 flex-shrink-0 basis-72">
            {" "}
            <VenueCard venue={venue} />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {!searchQuery && hasMore && (
        <div className="flex justify-center mt-6">
          <Button variant="primary" onClick={loadMore}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default VenuesList;
