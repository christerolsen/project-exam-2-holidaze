// src/components/Venues/BookingCard/index.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const BookingCards = ({ price, rating, maxGuests }) => {
  const [guestCount, setGuestCount] = useState(1);

  return (
    <div className="bg-white p-m rounded-lg shadow-custom">
      <p className="text-h4 font-lato">${price} a night</p>
      <div className="text-yellow-400 text-xl mb-m">
        {"★".repeat(rating)}
        <span className="text-gray-300">{"★".repeat(5 - rating)}</span>
      </div>

      <form className="space-y-s">
        {/* Check-in and Check-out Dates */}
        <div className="flex gap-s">
          <div className="flex-1">
            <label className="text-body-small block">Check in</label>
            <input type="date" className="w-full border rounded-md p-s" />
          </div>
          <div className="flex-1">
            <label className="text-body-small block">Check out</label>
            <input type="date" className="w-full border rounded-md p-s" />
          </div>
        </div>

        {/* Guest Selector */}
        <div>
          <label className="text-body-small block">Guest(s)</label>
          <input
            type="number"
            min="1"
            max={maxGuests}
            value={guestCount}
            onChange={(e) => setGuestCount(e.target.value)}
            className="w-full border rounded-md p-s"
          />
        </div>

        {/* Total Amount */}
        <p className="text-h5 font-bold mt-s">Total amount</p>
        <p className="text-h4">${price * guestCount}</p>

        {/* Book Now Button */}
        <Button variant="primary" className="w-full mt-m">
          Book now
        </Button>
      </form>
    </div>
  );
};

BookingCard.propTypes = {
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  maxGuests: PropTypes.number.isRequired,
};

export default BookingCards;
