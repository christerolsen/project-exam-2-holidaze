import { saveToLocalStorage } from "../utils/localStorage";

export async function logInUser(credentials) {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (response.ok) {
      saveToLocalStorage("token", data.token); // Save token to local storage
    }

    return data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}
