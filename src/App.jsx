// src/App.jsx
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { useAuth } from "./context/AuthContext";

import Layout from "./components/Layout";

import BookingPage from "./pages/BookingPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import VenueCreatePage from "./pages/VenueCreatePage";
import VenueEditPage from "./pages/VenueEditPage";
import VenueDetailsPage from "./pages/VenueDetailsPage";
import VenuePage from "./pages/VenuePage";
import VenuesPage from "./pages/VenuesPage";

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/venues" element={<VenuesPage />} />
        <Route path="/venues/:id" element={<VenuePage />} />
        <Route path="/venues/create" element={<VenueCreatePage />} />
        <Route path="/venues/:id/edit" element={<VenueEditPage />} />
      </Route>
    </Routes>
  );
}

export default App;
