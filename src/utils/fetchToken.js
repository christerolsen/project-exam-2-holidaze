import { loadFromLocalStorage } from "./localStorage";

// Function to fetch the token from local storage
export function fetchToken() {
  return loadFromLocalStorage("token");
}
