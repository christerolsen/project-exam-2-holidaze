// src/pages/VenuesPage/index.jsx
import React from "react";

import Container from "../../Container";
import VenuesList from "../../components/Venues/VenuesList";

const VenuesPage = () => {
  return (
    <Container>
      <VenuesList />
    </Container>
  );
};

export default VenuesPage;
