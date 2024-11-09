import React, { useState } from "react";
import { useApiGet } from "../../hooks/api/useApiGet";
import SearchBar from "../SearchBar";
import Loader from "../Loader";

const TestComponent = () => {
  const {
    data: venues,
    meta,
    loading,
    error,
    goToNextPage,
    goToPreviousPage,
  } = useApiGet("VENUES");
  const [searchQuery, setSearchQuery] = useState("");

  if (error) return <p>Error: {error.message}</p>;

  // Filter venues based on the search query
  const filteredVenues = venues.filter((venue) =>
    venue.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Venues</h1>
      <SearchBar onSearch={setSearchQuery} />
      <ul>
        {filteredVenues.map((venue) => (
          <li key={venue.id}>{venue.name}</li>
        ))}
      </ul>

      {loading && <Loader />}

      <div className="mt-4 flex justify-between">
        <button
          onClick={goToPreviousPage}
          disabled={meta.currentPage === 1}
          className={`px-4 py-2 rounded ${
            meta.currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"
          }`}
        >
          Previous
        </button>

        <button
          onClick={goToNextPage}
          disabled={meta.isLastPage}
          className={`px-4 py-2 rounded ${
            meta.isLastPage ? "bg-gray-300" : "bg-blue-500 text-white"
          }`}
        >
          Next
        </button>
      </div>

      <p className="mt-2">
        Page {meta.currentPage} of {meta.pageCount}
      </p>
    </div>
  );
};

export default TestComponent;
