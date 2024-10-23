import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VenuesPage from "./pages/VenuesPage";
import VenuePage from "./pages/VenuePage";
import BookingPage from "./pages/BookingPage";
import VenueCreatePage from "./pages/VenueCreatePage";
import VenueEditPage from "./pages/VenueEditPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import LogoutPage from "./pages/LogoutPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/venues" element={<VenuesPage />} />
        <Route path="/venues/id" element={<VenuePage />} />
        <Route path="/venues/confirmation" element={<BookingPage />} />
        <Route path="/venues/create" element={<VenueCreatePage />} />
        <Route path="/venues/edit" element={<VenueEditPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
