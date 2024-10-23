import React from "react";

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to Holidaze</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
