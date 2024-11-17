// src/components/Venues/TopRated/index.jsx
import React, { useEffect, useState } from "react";
import { fetchAllVenues } from "../../../utils/api";
import Button from "../../Button";
import { Link } from "react-router-dom";

const TopRatedVenues = ({ title = "Top Rated Venues" }) => {
  const [topRatedVenues, setTopRatedVenues] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTopRatedVenues = async () => {
      try {
        setIsLoading(true);
        const data = await fetchAllVenues();
        const filteredVenues = data.data
          .filter((venue) => venue.rating === 5)
          .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
          .slice(0, 3);
        setTopRatedVenues(filteredVenues);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTopRatedVenues();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (isLoading) {
    return <p>Loading top-rated venues...</p>;
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-6">
        {topRatedVenues.map((venue) => (
          <div
            key={venue.id}
            className="flex-grow-0 flex-shrink-0 basis-72 bg-white p-4 rounded-lg shadow-custom flex flex-col justify-between h-[450px]"
          >
            <div className="flex-grow">
              <div className="w-full h-1/2 rounded-t-lg overflow-hidden mb-4">
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
                  <span key={index} className={`text-primary fill-current`}>
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
    </div>
  );
};

export default TopRatedVenues;
