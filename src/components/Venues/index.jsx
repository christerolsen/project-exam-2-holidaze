// src/components/TestVenues.jsx
import React from "react";
import { useFetchVenues } from "../../hooks/useFetchVenues";

const TestVenues = () => {
  const { venues, loading, error } = useFetchVenues();

  if (loading) return <p>Loading venues...</p>;
  if (error) return <p>Error loading venues: {error.message}</p>;

  return (
    <div>
      <h1>Venues Test</h1>
      <p>Check the console for API response.</p>
    </div>
  );
};

export default TestVenues;
