// src/components/Venues/Calendar/index.jsx
import React from "react";
import Calendar from "react-calendar";
import PropTypes from "prop-types";
import "react-calendar/dist/Calendar.css";
import "./CalendarStyles.css";

const BookingCalendar = ({ bookings }) => {
  const bookedDates = bookings
    .map((booking) => {
      const start = new Date(booking.dateFrom);
      const end = new Date(booking.dateTo);
      const dates = [];
      while (start <= end) {
        dates.push(new Date(start));
        start.setDate(start.getDate() + 1);
      }
      return dates;
    })
    .flat();

  const tileDisabled = ({ date }) => {
    return bookedDates.some(
      (bookedDate) =>
        bookedDate.getFullYear() === date.getFullYear() &&
        bookedDate.getMonth() === date.getMonth() &&
        bookedDate.getDate() === date.getDate()
    );
  };

  return (
    <div className="calendar-container">
      <h3 className="mb-4 text-text">Availability</h3>
      <Calendar tileDisabled={tileDisabled} className="custom-calendar" />
    </div>
  );
};

BookingCalendar.propTypes = {
  bookings: PropTypes.arrayOf(
    PropTypes.shape({
      dateFrom: PropTypes.string.isRequired,
      dateTo: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BookingCalendar;
