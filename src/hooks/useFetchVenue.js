// src/hooks/useFetchVenue.js
import { useQuery } from "@tanstack/react-query";
import { ApiURLs } from "../constants/ApiURLs";

const fetchVenue = async (id) => {
  const response = await fetch(`${ApiURLs.VENUE.replace("[id]", id)}`);
  if (!response.ok) {
    throw new Error("Kunne ikke hente venue");
  }
  return await response.json();
};

export const useFetchVenue = (id) => {
  return useQuery({
    queryKey: ["venue", id], // Pass `queryKey` as an object property
    queryFn: () => fetchVenue(id), // Pass `queryFn` as an object property
    enabled: !!id, // Use additional options as needed
  });
};
