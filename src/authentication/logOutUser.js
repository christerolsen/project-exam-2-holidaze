import { clearLocalStorage } from "../utils/localStorage";

export function logOutUser() {
  clearLocalStorage("token"); // Clear token from local storage
}
