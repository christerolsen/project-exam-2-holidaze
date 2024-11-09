// src/hooks/useFetchVenues.js
import { useQuery } from "@tanstack/react-query";
import { ApiURLs } from "../constants/ApiURLs";

const fetchVenues = async () => {
  const response = await fetch(ApiURLs.VENUES);
  if (!response.ok) {
    throw new Error("Failed to fetch venues");
  }
  const data = await response.json();
  return data;
};

export const useFetchVenues = () => {
  return useQuery(["venues"], fetchVenues);
};
