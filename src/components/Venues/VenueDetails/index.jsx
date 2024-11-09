// src/components/Venues/VenueDetails/index.jsx
import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const VenueDetailss = ({ description, maxGuests, location, price, meta }) => {
  return (
    <div className="bg-white p-m rounded-lg shadow-custom">
      <h2 className="text-h2 font-lato mb-s">Venue details</h2>
      <p className="text-body-medium mb-m">
        {description || "No description available"}
      </p>
      <p className="font-bold">Guest capacity: {maxGuests}</p>
      <p>Address: {location.address || "N/A"}</p>
      <p>City: {location.city || "Unknown"}</p>
      <p>Country: {location.country || "Unknown"}</p>
      <p>Price: ${price} per night</p>

      <h3 className="text-h4 mt-m mb-s">Facilities</h3>
      <div className="flex flex-wrap gap-s">
        {meta?.wifi && <Button variant="secondary">WiFi</Button>}
        {meta?.parking && <Button variant="secondary">Parking</Button>}
        {meta?.breakfast && <Button variant="secondary">Breakfast</Button>}
        {meta?.pets && <Button variant="secondary">Pets</Button>}
      </div>
    </div>
  );
};

VenueDetails.propTypes = {
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

export default VenueDetailss;
