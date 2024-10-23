import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="./assets/logo/holidaze-logo-main.png"
            alt="Holidaze Logo"
            className="h-10"
          />
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-primary transition duration-150"
          >
            Home
          </Link>
          <Link
            to="/venues"
            className="text-gray-700 hover:text-primary transition duration-150"
          >
            Venues
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-primary transition duration-150"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-primary transition duration-150"
          >
            Contact
          </Link>
        </nav>

        {/* Login Link */}
        <div>
          <Link
            to="/login"
            className="text-gray-700 hover:text-primary transition duration-150"
          >
            Log in
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
