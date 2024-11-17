// src/components/Venues/VenuesList/index.jsx
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchAllVenues } from "../../../utils/api";
import Button from "../../Button";
import { Link } from "react-router-dom";

const VenuesList = ({ title = "All Venues" }) => {
  const [allVenues, setAllVenues] = useState([]);
  const [visibleVenues, setVisibleVenues] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [venuesPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        setIsLoading(true);
        const data = await fetchAllVenues();
        setAllVenues(Array.isArray(data.data) ? data.data : []);
        setVisibleVenues(
          Array.isArray(data.data) ? data.data.slice(0, venuesPerPage) : []
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVenues();
  }, [venuesPerPage]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const newVisibleVenues = allVenues.slice(0, nextPage * venuesPerPage);
    setVisibleVenues(newVisibleVenues);
    setCurrentPage(nextPage);
  };

  const filteredVenues = visibleVenues.filter(
    (venue) =>
      venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      venue.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (isLoading) {
    return <p>Loading venues...</p>;
  }

  return (
    <div className="p-4 flex flex-col justify-center items-center w-full">
      <h1 className="w-full">Venues</h1>
      <input
        type="text"
        placeholder="Search for a venue..."
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 mb-4 border border-gray-300 rounded-lg w-full max-w-md"
      />
      <div className="flex flex-wrap justify-center gap-6">
        {filteredVenues.map((venue) => (
          <div
            key={venue.id}
            className="flex-grow-0 flex-shrink-0 basis-72 bg-background p-4 rounded-lg shadow-custom flex flex-col justify-between h-[450px]"
          >
            <div className="flex-grow">
              <div className="w-full h-1/2 rounded-t-lg overflow-hidden shadow-custom mb-4">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${
                      venue.media?.[0]?.url || "https://via.placeholder.com/400"
                    })`,
                  }}
                ></div>
              </div>
              <h3 className="text-h4 font-bold mb-2">{venue.name}</h3>
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={`text-primary ${
                      index < Math.floor(venue.rating || 0)
                        ? "fill-current"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="font-bold mb-4">${venue.price} per night</p>
            </div>
            <div className="flex items-end">
              <Link to={`/venues/${venue.id}`}>
                <Button variant="accent">View details</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {visibleVenues.length < allVenues.length && (
        <div className="text-center mt-6">
          <Button variant="primary" onClick={handleLoadMore}>
            Load more venues
          </Button>
        </div>
      )}
    </div>
  );
};

VenuesList.propTypes = {
  title: PropTypes.string,
};

export default VenuesList;
