import React from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import TopRated from "../../components/Venues/TopRated";

const HomePage = ({ venues, loading, error }) => (
  <div className="mt-4">
    <h1>Welcome to Holidaze!</h1>
    <p>
      Discover some of the most beautiful venues for your stay. Book with ease
      and enjoy unforgettable experiences.
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
  </div>
);

export default HomePage;
