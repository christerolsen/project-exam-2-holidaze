import React from "react";

import Button from "../../Button";

const VenueCard = ({ venue }) => {
  return (
    <div className="border border-gray-300 rounded-md shadow-md overflow-hidden">
      <img
        src={venue.image}
        alt={venue.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-m">
        <h2 className="text-h4 font-bold">{venue.name}</h2>
        <p className="text-body-regular text-gray-600">@{venue.location}</p>
        <p className="text-body-large font-bold mt-s">${venue.price} a night</p>
        <Button variant="accent">View more</Button>
      </div>
    </div>
  );
};

export default VenueCard;
