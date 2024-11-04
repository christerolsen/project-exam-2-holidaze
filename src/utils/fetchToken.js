import { getFromLocalStorage } from "./localStorage";

export function fetchToken() {
  return getFromLocalStorage("token");
}
