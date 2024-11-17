// src/components/Venues/Details/index.jsx
import React from "react";
import PropTypes from "prop-types";

const Details = ({
  name,
  description,
  location,
  maxGuests,
  price,
  rating,
  amenities,
}) => {
  return (
    <div className="details p-4">
      <h1 className="mb-4">{name}</h1>
      <div className="flex items-center mb-2">
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            className={`text-primary ${
              index < Math.floor(rating) ? "fill-current" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
      <p className="mb-4">{description}</p>
      <div className="mb-8">
        <p>
          <span className="font-bold">Location: </span>{" "}
          {location.city ? location.city : "N/A"},{" "}
          {location.country ? location.country : "N/A"}{" "}
        </p>
        <p>
          <span className="font-bold">Guests capacity: </span>
          {maxGuests}
        </p>
        <p>
          <span className="font-bold">Price: </span>${price} per night
        </p>
      </div>
      <div className="facilities">
        <h3 className="mb-2">Facilities:</h3>
        {amenities && Object.keys(amenities).length > 0 ? (
          Object.keys(amenities).map((amenity) => (
            <p key={amenity} className="capitalize">
              <span className="font-bold">{amenity}: </span>
              {amenities[amenity] ? "Yes" : "No"}
            </p>
          ))
        ) : (
          <p>No amenities available</p>
        )}
      </div>
    </div>
  );
};

Details.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  maxGuests: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  amenities: PropTypes.object.isRequired,
};

export default Details;
