import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchVenueById } from "../../utils/api";
import UpdateVenueForm from "../../components/Form/UpdateVenueForm";

const VenueEditPage = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getVenue = async () => {
      try {
        setIsLoading(true);
        const data = await fetchVenueById(id);
        setVenue(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      getVenue();
    }
  }, [id]);

  if (isLoading) {
    return <p>Loading venue...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!venue) {
    return <p>Venue not found</p>;
  }

  return (
    <div className="venue-edit-page p-4">
      <UpdateVenueForm
        venue={venue}
        venueId={id}
        onUpdateSuccess={() => console.log("Venue updated successfully")}
        onClose={() => console.log("Closing form")}
      />
    </div>
  );
};

export default VenueEditPage;
