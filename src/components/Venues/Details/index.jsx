// src/components/Venues/VenueDetails/index.jsx
import React from "react";
import PropTypes from "prop-types";
import Button from "../../Button";

const Details = ({
  description = "No description available",
  maxGuests,
  location = {},
  price,
  meta = {},
}) => {
  return (
    <div className="">
      <h2 className="text-h2 font-lato mb-s">Venue details</h2>
      <p className="text-body-medium mb-m">{description}</p>

      <div className="space-y-s">
        <p className="font-bold">Guest capacity: {maxGuests}</p>
        <p>Address: {location.address || "N/A"}</p>
        <p>City: {location.city || "Unknown"}</p>
        <p>Country: {location.country || "Unknown"}</p>
        <p>Price: ${price} per night</p>
      </div>

      <h3 className="text-h4 mt-m mb-s">Facilities</h3>
      <div className="flex flex-wrap gap-s">
        {meta.wifi && (
          <span className="bg-secondary text-text font-bold px-s py-xs rounded-lg">
            WiFi
          </span>
        )}
        {meta.parking && (
          <span className="bg-secondary text-text font-bold px-s py-xs rounded-lg">
            Parking
          </span>
        )}
        {meta.breakfast && (
          <span className="bg-secondary text-tex font-bold px-s py-xs rounded-lg">
            Breakfast
          </span>
        )}
        {meta.pets && (
          <span className="bg-secondary text-text font-bold px-s py-xs rounded-lg">
            Pets
          </span>
        )}
      </div>
    </div>
  );
};

Details.propTypes = {
  description: PropTypes.string,
  maxGuests: PropTypes.number.isRequired,
  location: PropTypes.shape({
    address: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  price: PropTypes.number.isRequired,
  meta: PropTypes.shape({
    wifi: PropTypes.bool,
    parking: PropTypes.bool,
    breakfast: PropTypes.bool,
    pets: PropTypes.bool,
  }),
};

export default Details;
