// src/components/Venues/Booking/index.jsx
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";
import Button from "../../Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Booking = ({ venue }) => {
  const { price, rating = 0, maxGuests, bookings = [] } = venue;
  const { user } = useAuth();

  const schema = yup.object().shape({
    checkInDate: yup
      .date()
      .required("Check-in date is required")
      .notOneOf(
        bookings.map((booking) => new Date(booking.dateFrom)),
        "Check-in date is already booked"
      ),
    checkOutDate: yup
      .date()
      .required("Check-out date is required")
      .notOneOf(
        bookings.map((booking) => new Date(booking.dateTo)),
        "Check-out date is already booked"
      )
      .min(
        yup.ref("checkInDate"),
        "Check-out date cannot be before check-in date"
      ),
    guests: yup
      .number()
      .required("Number of guests is required")
      .min(1, "At least one guest is required")
      .max(maxGuests, `Maximum number of guests is ${maxGuests}`),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Booking details:", data);
  };

  const isDateBooked = (date) => {
    return bookings.some(
      (booking) =>
        new Date(date) >= new Date(booking.dateFrom) &&
        new Date(date) <= new Date(booking.dateTo)
    );
  };

  const availableDates = useMemo(() => {
    const today = new Date();
    const dates = [];
    for (let i = 0; i < 365; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      if (!isDateBooked(date)) {
        dates.push(date.toISOString().split("T")[0]);
      }
    }
    return dates;
  }, [bookings]);

  return (
    <div className="bg-background p-m rounded-lg shadow-custom">
      <h3 className="font-bold mb-s">${price} a night</h3>

      <div className="flex items-center mb-m text-primary">
        {"★".repeat(Math.floor(rating))}
        <span className="text-gray-400">
          {"★".repeat(5 - Math.floor(rating))}
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-m">
        <div>
          <label className="block text-body-small mb-xs">Check in</label>
          <input
            type="date"
            {...register("checkInDate")}
            disabled={!user}
            list="available-dates"
          />
          <datalist id="available-dates">
            {availableDates.map((date) => (
              <option key={date} value={date} />
            ))}
          </datalist>
          <p className="text-red-500">{errors.checkInDate?.message}</p>
        </div>

        <div>
          <label className="block text-body-small mb-xs">Check out</label>
          <input type="date" {...register("checkOutDate")} disabled={!user} />
          <p className="text-red-500">{errors.checkOutDate?.message}</p>
        </div>

        <div>
          <label className="block text-body-small mb-xs">Guests</label>
          <select {...register("guests")} disabled={!user}>
            {Array.from({ length: maxGuests }, (_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          <p className="text-red-500">{errors.guests?.message}</p>
        </div>

        <p className="text-lg font-bold mt-m">Total amount</p>
        <p className="text-xl font-bold mb-m">${price}</p>

        {user ? (
          <Button variant="primary">Book now</Button>
        ) : (
          <>
            <p className="text-error">
              <Link to="/login">Log in</Link> or{" "}
              <Link to="/register">register</Link> to book this venue
            </p>
          </>
        )}
      </form>
    </div>
  );
};

Booking.propTypes = {
  venue: PropTypes.shape({
    price: PropTypes.number.isRequired,
    rating: PropTypes.number,
    maxGuests: PropTypes.number.isRequired,
    bookings: PropTypes.arrayOf(
      PropTypes.shape({
        dateFrom: PropTypes.string.isRequired,
        dateTo: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default Booking;
