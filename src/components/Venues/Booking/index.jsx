// src/components/Venues/Booking/index.jsx
import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const Booking = ({ price, rating = 0, maxGuests }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Booking details:", data);
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

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-m">
        {/* Check-in Date */}
        <div>
          <label className="block text-body-small mb-xs">Check in</label>
          <input type="date" {...register("checkInDate")} />
        </div>

        {/* Check-out Date */}
        <div>
          <label className="block text-body-small mb-xs">Check out</label>
          <input type="date" {...register("checkOutDate")} />
        </div>

        {/* Guests Dropdown */}
        <div>
          <label className="block text-body-small mb-xs">Guests</label>
          <select {...register("guests")}>
            {Array.from({ length: maxGuests }, (_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>

        {/* Total Amount */}
        <p className="text-lg font-bold mt-m">Total amount</p>
        <p className="text-xl font-bold mb-m">${price}</p>

        {/* Submit Button */}
        <button type="submit" className="primary w-full">
          Book now
        </button>
      </form>
    </div>
  );
};

Booking.propTypes = {
  price: PropTypes.number.isRequired,
  rating: PropTypes.number,
  maxGuests: PropTypes.number.isRequired,
};

export default Booking;
