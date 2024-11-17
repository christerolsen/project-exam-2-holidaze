import { loadFromLocalStorage } from "./localStorage";

export const API_KEY = "9bc54da8-bbc3-4858-bc28-9c5cf6b085f4";

// Retrieve the JWT token from local storage
export function fetchToken() {
  const token = loadFromLocalStorage("token");
  return token || null;
}

// Create headers with Authorization and API key
export function createAuthHeaders() {
  const accessToken = fetchToken();
  const headers = {
    "X-Noroff-API-Key": API_KEY,
    "Content-Type": "application/json",
  };

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  return { headers };
}
