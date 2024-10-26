import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="h-[100px] bg-background flex shadow-custom">
      <div className="container mx-auto flex justify-between items-center px-l">
        <Link to="/">
          <Logo variant="main" altText="Holidaze Logo" className="h-8" />
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
