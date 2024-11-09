// src/utils/api.js
import { ApiURLs } from "../constants/ApiURLs";

export const fetchVenueById = async (id) => {
  try {
    console.log("Fetching venue with ID:", id);

    const response = await fetch(`${ApiURLs.VENUES}/${id}`);
    console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched venue data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching venue:", error);
    throw error;
  }
};
