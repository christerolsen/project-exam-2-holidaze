import { useState } from "react";
import { fetchToken } from "../../utils/fetchToken";

export function useApiPost(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = async (body) => {
    setLoading(true);
    try {
      const token = fetchToken();
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
      return await response.json();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { post, loading, error };
}
