// src/components/Form/BookingForm.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useAuth } from "../../context/AuthContext";
import { createBooking } from "../../utils/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";

const bookingSchema = yup.object().shape({
  dateFrom: yup.date().required("Check-in date is required"),
  dateTo: yup.date().required("Check-out date is required"),
  guests: yup
    .number()
    .min(1, "At least 1 guest is required")
    .required("Number of guests is required"),
});

const BookingForm = ({ venueId, onBookingSuccess }) => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(bookingSchema),
  });

  const onSubmit = async (data) => {
    try {
      const bookingData = {
        ...data,
        venueId,
        dateFrom: formatDate(data.dateFrom),
        dateTo: formatDate(data.dateTo),
      };
      console.log("POST URL:", "https://v2.api.noroff.dev/holidaze/bookings");
      console.log("Request Body:", bookingData);
      const response = await createBooking(bookingData);
      console.log("Response:", response);
      onBookingSuccess(response);
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  return (
    <div className="booking-form-container p-4 bg-white rounded-lg shadow-custom">
      <h3 className="text-xl font-bold mb-4">Book Your Stay</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="dateFrom" className="block font-semibold mb-1">
            Check-in Date:
          </label>
          <input
            type="date"
            id="dateFrom"
            {...register("dateFrom")}
            className="p-2 border border-gray-300 rounded-lg w-full"
            disabled={!user}
          />
          {errors.dateFrom && (
            <p className="text-red-500">{errors.dateFrom.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="dateTo" className="block font-semibold mb-1">
            Check-out Date:
          </label>
          <input
            type="date"
            id="dateTo"
            {...register("dateTo")}
            className="p-2 border border-gray-300 rounded-lg w-full"
            disabled={!user}
          />
          {errors.dateTo && (
            <p className="text-red-500">{errors.dateTo.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="guests" className="block font-semibold mb-1">
            Number of Guests:
          </label>
          <input
            type="number"
            id="guests"
            {...register("guests")}
            className="p-2 border border-gray-300 rounded-lg w-full"
            disabled={!user}
          />
          {errors.guests && (
            <p className="text-red-500">{errors.guests.message}</p>
          )}
        </div>
        {user ? (
          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded-lg mt-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Booking..." : "Book Now"}
          </button>
        ) : (
          <p className="text-red-500">
            <Link to="/login" className="text-primary font-semibold">
              Log in
            </Link>{" "}
            or{" "}
            <Link to="/register" className="text-primary font-semibold">
              register
            </Link>{" "}
            to book this venue
          </p>
        )}
      </form>
    </div>
  );
};

BookingForm.propTypes = {
  venueId: PropTypes.string.isRequired,
  onBookingSuccess: PropTypes.func.isRequired,
};

export default BookingForm;
