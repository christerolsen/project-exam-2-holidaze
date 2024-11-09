// src/components/VenueCard/index.jsx
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Button from "../../Button";
import NoImagePlaceholder from "../../../assets/no-image-placeholder.png";

const VenueCard = ({ venue }) => {
  const { id, name, location, price, rating, media } = venue;

  const imageUrl =
    media && media.length > 0 && typeof media[0] === "object"
      ? media[0].url
      : NoImagePlaceholder;

  return (
    <div className="shadow-custom rounded-xl overflow-hidden bg-white mobile:w-full laptop:w-[300px] h-[500px] flex flex-col">
      {" "}
      <div className="h-1/2">
        <img
          src={imageUrl}
          alt={`${name}`}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Card Details */}
      <div className="p-4 bg-white text-text flex-grow flex flex-col justify-between">
        <h4 className="text-h4">{name}</h4>
        <p className="body-large hidden">
          {location.city || "Unknown Location"}
        </p>
        <p className="body-large">{location.city}</p>

        {/* Rating and Price */}
        <div className="mt-4">
          <div className="text-primary">
            {"★".repeat(rating)}
            <span className="text-gray-400">{"★".repeat(5 - rating)}</span>
          </div>
          <p className="text-lg font-semibold">${price} a night</p>
        </div>

        <Link to={`/venues/${id}`}>
          <Button variant="accent" className="mt-4">
            View more
          </Button>
        </Link>
      </div>
    </div>
  );
};

// Prop types validation
VenueCard.propTypes = {
  venue: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      city: PropTypes.string,
    }),
    price: PropTypes.number.isRequired,
    rating: PropTypes.number,
    media: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default VenueCard;
