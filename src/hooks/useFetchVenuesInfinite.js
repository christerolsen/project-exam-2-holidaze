// src/hooks/useFetchVenuesInfinite.js
import { useInfiniteQuery } from "@tanstack/react-query";
import { ApiURLs } from "../constants/ApiURLs";

const fetchVenuesPaginated = async ({ pageParam = 1 }) => {
  const response = await fetch(`${ApiURLs.VENUES}?page=${pageParam}&limit=20`);
  if (!response.ok) {
    throw new Error("Failed to fetch venues");
  }
  return await response.json();
};

export const useFetchVenuesInfinite = () => {
  return useInfiniteQuery(["venues"], fetchVenuesPaginated, {
    getNextPageParam: (lastPage) => lastPage.meta.nextPage || undefined,
  });
};
