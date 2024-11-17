// src/components/Profile/MyVenues.jsx
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchUserVenues, deleteVenue } from "../../utils/api";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { calculatePrice } from "../../utils/calculatePrice";
import Button from "../Button";

const MyVenues = () => {
  const { user } = useAuth();
  const [venues, setVenues] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getVenues = async () => {
      try {
        setIsLoading(true);
        const data = await fetchUserVenues(user.name);
        setVenues(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (user) {
      getVenues();
    }
  }, [user]);

  const handleDelete = async (venueId) => {
    try {
      await deleteVenue(venueId);
      setVenues((prevVenues) =>
        prevVenues.filter((venue) => venue.id !== venueId)
      );
      setMessage("Venue deleted successfully.");
    } catch (error) {
      setError("Error deleting venue.");
      console.error("Error deleting venue:", error);
    }
  };

  if (isLoading) {
    return <p>Loading your venues...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (venues.length === 0) {
    return <p>You have no venues.</p>;
  }

  return (
    <div className="my-venues">
      <div className="m-4">
        <h3 className="m-4 mt-8 mb-2">Your venues</h3>

        <Link to="/venues/create" className="mb-4">
          <Button variant="primary" type="button">
            Create Venue
          </Button>
        </Link>
        {message && <p className="text-green-500 mt-4">{message}</p>}
        <div className="grid gap-4">
          {venues.map((venue) => (
            <div
              key={venue.id}
              className="venue-item p-4 bg-white rounded-lg shadow-custom"
            >
              <h4 className="mb-4">{venue.name || "N/A"}</h4>
              <h5>Bookings at this venue:</h5>
              {venue.bookings && venue.bookings.length > 0 ? (
                <div className="mt-2 flex flex-wrap gap-4">
                  {venue.bookings.map((booking) => (
                    <div key={booking.id} className="mb-4">
                      <h6 className="mt-2">
                        {new Date(booking.dateFrom).toLocaleDateString()}
                      </h6>
                      <ul>
                        <li>
                          <span className="font-bold">Guests: </span>
                          {booking.guests}
                        </li>
                        <li>
                          <span className="font-bold">Total price: </span>$
                          {calculatePrice(
                            venue.price,
                            booking.dateFrom,
                            booking.dateTo
                          )}
                        </li>
                        <li>
                          <span className="font-bold">Check out: </span>
                          {new Date(booking.dateTo).toLocaleDateString()}
                        </li>
                        <li>
                          <span className="font-bold">Customer: </span>
                          {booking.customer.name}
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No bookings for this venue.</p>
              )}
              <div className="flex flex-col gap-4">
                <Link to={`/venues/${venue.id}`} className="text-primary">
                  View Venue
                </Link>
                <Link to={`/venues/${venue.id}/edit`} className="text-primary">
                  Edit Venue
                </Link>
                <Button
                  variant="danger"
                  type="button"
                  onClick={() => handleDelete(venue.id)}
                >
                  Delete Venue
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

MyVenues.propTypes = {
  user: PropTypes.object,
};

export default MyVenues;
