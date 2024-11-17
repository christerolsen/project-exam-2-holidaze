import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";

const Nav = () => {
  const { user, logout } = useAuth();

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
      </div>

      {/* Log In Link to the Right */}
      <div>
        {user ? (
          <div className="flex space-x-6 mx-auto">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `text-text text-h6 font-lato font-bold hover:text-primary ${
                  isActive ? "text-primary underline" : ""
                }`
              }
            >
              Profile
            </NavLink>
            <NavLink
              onClick={logout}
              className="text-text text-h6 font-lato font-bold hover:text-primary"
            >
              Log out
            </NavLink>
          </div>
        ) : (
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
        )}
      </div>
    </nav>
  );
};

export default Nav;
