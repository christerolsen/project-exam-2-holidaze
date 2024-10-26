import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between w-full">
      {/* Centered Links */}
      <div className="flex space-x-6 mx-auto">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-text text-h6 font-lato font-bold hover:text-primary ${
              isActive ? "text-primary underline" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/venues"
          className={({ isActive }) =>
            `text-text text-h6 font-lato font-bold hover:text-primary ${
              isActive ? "text-primary underline" : ""
            }`
          }
        >
          Venues
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-text text-h6 font-lato font-bold hover:text-primary ${
              isActive ? "text-primary underline" : ""
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-text text-h6 font-lato font-bold hover:text-primary ${
              isActive ? "text-primary underline" : ""
            }`
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Log In Link to the Right */}
      <div>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `text-text text-h6 font-lato font-bold hover:text-primary ${
              isActive ? "text-primary underline" : ""
            }`
          }
        >
          Log in
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
