// src/components/Venues/Booking/index.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../Button";

const Booking = ({ price, rating = 0, maxGuests }) => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);

  const handleBooking = () => {
    console.log("Booking details:", { checkInDate, checkOutDate, guests });
  };

  return (
    <div className="bg-white p-m rounded-lg shadow-custom">
      <h3 className="text-h4 font-bold mb-s">${price} a night</h3>

      <div className="flex items-center mb-m text-primary">
        {"★".repeat(Math.floor(rating))}
        <span className="text-gray-400">
          {"★".repeat(5 - Math.floor(rating))}
        </span>
      </div>

      <div className="mb-m">
        <label className="block text-body-small mb-xs">Check in</label>
        <input
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-m">
        <label className="block text-body-small mb-xs">Check out</label>
        <input
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>

      <div className="mb-m">
        <label className="block text-body-small mb-xs">Guests</label>
        <select
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="border border-gray-300 rounded-md p-2 w-full"
        >
          {Array.from({ length: maxGuests }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>

      <p className="text-lg font-bold mt-m">Total amount</p>
      <p className="text-xl font-bold mb-m">${price * guests}</p>

      <Button className="full" onClick={handleBooking}>
        Book now
      </Button>
    </div>
  );
};

Booking.propTypes = {
  price: PropTypes.number.isRequired,
  rating: PropTypes.number,
  maxGuests: PropTypes.number.isRequired,
};

export default Booking;
