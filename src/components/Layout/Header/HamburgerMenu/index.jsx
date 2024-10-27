import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import SignatureWave from "../../../SignatureWave";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-700"></span>
      </button>

      {/* Fullscreen Mobile Menu Overlay */}
      <div
        className={`${
          isOpen
            ? "fixed inset-0 bg-white flex flex-col items-center justify-center z-50"
            : "hidden"
        }`}
      >
        {/* Menu Links */}
        <nav className="flex flex-col items-center space-y-4">
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `text-gray-700 text-xl font-lato font-bold hover:text-primary ${
                isActive ? "text-primary underline" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/venues"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `text-gray-700 text-xl font-lato font-bold hover:text-primary ${
                isActive ? "text-primary underline" : ""
              }`
            }
          >
            Venues
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `text-gray-700 text-xl font-lato font-bold hover:text-primary ${
                isActive ? "text-primary underline" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `text-gray-700 text-xl font-lato font-bold hover:text-primary ${
                isActive ? "text-primary underline" : ""
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/login"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `text-gray-700 text-xl font-lato font-bold hover:text-primary ${
                isActive ? "text-primary underline" : ""
              }`
            }
          >
            Log in
          </NavLink>
        </nav>

        {/* Close Menu Overlay */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-700 text-2xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default HamburgerMenu;
