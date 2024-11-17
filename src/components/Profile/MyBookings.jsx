// src/components/Profile/MyBookings.jsx
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchUserBookings } from "../../utils/api";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const MyBookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBookings = async () => {
      try {
        setIsLoading(true);
        const data = await fetchUserBookings(user.name, { _venue: true });
        setBookings(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (user) {
      getBookings();
    }
  }, [user]);

  if (isLoading) {
    return <p>Loading your bookings...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (bookings.length === 0) {
    return <p>You have no upcoming bookings.</p>;
  }

  return (
    <div className="my-bookings p-4">
      <h3 className="mb-4">Your bookings</h3>
      <div className="flex flex-wrap gap-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="booking-item p-4 bg-white rounded-lg shadow-custom"
          >
            <h4 className="mb-4">{booking.venue?.name || "N/A"}</h4>
            <p>
              <span className="font-bold">Check-in:</span>{" "}
              {new Date(booking.dateFrom).toLocaleDateString()}
            </p>
            <p>
              <span className="font-bold">Check-out:</span>{" "}
              {new Date(booking.dateTo).toLocaleDateString()}
            </p>
            <p className="mb-4">
              <span className="font-bold">Guests:</span> {booking.guests}
            </p>
            <Link to={`/venues/${booking.venue?.id}`} className="text-primary">
              View details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

MyBookings.propTypes = {
  user: PropTypes.object,
};

export default MyBookings;
