import React from "react";
import { Link } from "react-router-dom";
import Container from "../../Container";

import Button from "../../components/Button";
import TopRated from "../../components/Venues/TopRated";

const HomePage = ({ venues, loading, error }) => (
  <Container>
    <h1>Welcome to Holidaze!</h1>
    <p>
      We are delighted to have you here. Whether you’re looking for the perfect
      place to stay, or managing venues for guests, our platform offers a
      seamless experience designed just for you. Let us help you find exactly
      what you need, so you can focus on what matters most—enjoying your
      journey.
    </p>
    <div className="flex justify-center m-4 p-4">
      <Link to="/venues">
        <Button>Explore!</Button>
      </Link>
    </div>
    <div className="mt-8">
      <h2 className="mb-4">Popular venues</h2>
      <TopRated venues={venues} loading={loading} error={error} />
    </div>
  </Container>
);

export default HomePage;
