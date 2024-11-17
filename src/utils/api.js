// src/utils/api.js
import axios from "axios";
import { ApiURLs } from "../constants/ApiURLs";
import { createAuthHeaders } from "./fetchToken";

// Get - Fetch All Venues
export const fetchAllVenues = async () => {
  try {
    let allVenues = [];
    let currentPage = 1;
    let totalPages = 1;

    while (currentPage <= totalPages) {
      const response = await axios.get(`${ApiURLs.VENUES}`, {
        params: { page: currentPage },
        ...createAuthHeaders(),
      });

      const data = response.data;

      allVenues = [...allVenues, ...data.data];
      totalPages = data.meta.pageCount;
      currentPage++;
    }

    return { data: allVenues };
  } catch (error) {
    console.error("Error fetching all venues:", error);
    throw error;
  }
};

// GET - Fetch Single Venue by id with bookings
export const fetchVenueById = async (id) => {
  try {
    const response = await axios.get(`${ApiURLs.VENUES}/${id}`, {
      params: { _bookings: true },
      ...createAuthHeaders(),
    });

    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching venue:", error);
    throw error;
  }
};

// GET - Fetch User Venues
export const fetchUserVenues = async (username) => {
  try {
    const response = await axios.get(`${ApiURLs.PROFILE}/${username}/venues`, {
      params: { _bookings: true },
      ...createAuthHeaders(),
    });

    if (response.status !== 200) {
      throw new Error(`Error: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching user bookings:", error);
    throw error;
  }
};

// GET - Fetch User Bookings
export const fetchUserBookings = async (username) => {
  try {
    const response = await axios.get(
      `${ApiURLs.PROFILE}/${username}/bookings`,
      {
        params: { _venue: true },
        ...createAuthHeaders(),
      }
    );

    if (response.status !== 200) {
      throw new Error(`Error: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching user bookings:", error);
    throw error;
  }
};

// PUT - Update Venue
export const updateVenue = async (id, venueData) => {
  try {
    const response = await axios.put(`${ApiURLs.VENUES}/${id}`, venueData, {
      ...createAuthHeaders(),
    });

    if (response.status !== 200) {
      throw new Error(`Error: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error updating venue:", error);
    throw error;
  }
};

// PUT - Update User Profile
export const updateProfile = async (username, profileData) => {
  try {
    const response = await axios.put(
      `${ApiURLs.PROFILE}/${username}`,
      profileData,
      { ...createAuthHeaders() }
    );

    if (response.status !== 200) {
      throw new Error(`Error: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  }
};

// POST - Create a new booking
export const createBooking = async ({ dateFrom, dateTo, guests, venueId }) => {
  try {
    const response = await axios.post(
      `${ApiURLs.BOOKINGS}`,
      { dateFrom, dateTo, guests, venueId },
      { ...createAuthHeaders() }
    );

    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};

// POST - Create a new venue
export const createVenue = async (venueData) => {
  try {
    const response = await axios.post(`${ApiURLs.VENUES}`, venueData, {
      ...createAuthHeaders(),
    });

    if (response.status !== 201) {
      throw new Error(`Error: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error creating venue:", error);
    throw error;
  }
};

// DELETE - Delete Venue
export const deleteVenue = async (id) => {
  try {
    const response = await axios.delete(`${ApiURLs.VENUES}/${id}`, {
      ...createAuthHeaders(),
    });

    if (response.status !== 204) {
      throw new Error(`Error: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error deleting venue:", error);
    throw error;
  }
};
