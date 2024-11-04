export async function registerUser(userDetails) {
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });

    return await response.json();
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
}
