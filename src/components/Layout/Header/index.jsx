import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../Logo";
import Nav from "./Nav";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <header className="relative bg-background shadow-md w-full h-[100px] flex items-center">
      <div className="w-full flex justify-between items-center mobile:p-4 tablet:p-16 desktop:px-32">
        <Link to="/">
          <Logo variant="main" altText="Holidaze Logo" className="h-8" />
        </Link>
        <div className="hidden laptop:flex w-full">
          <Nav />
        </div>
        <div className="laptop:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
