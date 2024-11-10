// src/hooks/useFetchVenues.js
import { useState, useEffect } from "react";
import { ApiURLs } from "../constants/ApiURLs";

export const useFetchVenues = (searchQuery = "") => {
  const [venues, setVenues] = useState([]);
  const [filteredVenues, setFilteredVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${ApiURLs.VENUES}?page=${page}&limit=20&search=${encodeURIComponent(
            searchQuery
          )}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch venues");
        }

        const data = await response.json();

        setVenues((prevVenues) => {
          return page === 1 ? data.data : [...prevVenues, ...data.data];
        });
        setHasMore(data.data.length === 20);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
  }, [page, searchQuery]);

  useEffect(() => {
    // Client-side filtering for name, location, and description
    const results = venues.filter((venue) => {
      const lowerSearch = searchQuery.toLowerCase();
      return (
        venue.name.toLowerCase().includes(lowerSearch) ||
        (venue.location.city &&
          venue.location.city.toLowerCase().includes(lowerSearch)) ||
        (venue.description &&
          venue.description.toLowerCase().includes(lowerSearch))
      );
    });
    setFilteredVenues(results);
  }, [venues, searchQuery]);

  // Function to fetch all pages when in search mode
  useEffect(() => {
    if (searchQuery && hasMore && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [venues, searchQuery, hasMore, loading]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const resetPage = () => {
    setPage(1);
    setVenues([]);
    setFilteredVenues([]);
  };

  return {
    venues: filteredVenues,
    loading,
    error,
    loadMore,
    hasMore,
    resetPage,
  };
};
