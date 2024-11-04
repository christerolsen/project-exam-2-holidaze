import { useState } from "react";
import { fetchToken } from "../../utils/fetchToken";

export function useApiPut(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const put = async (body) => {
    setLoading(true);
    try {
      const token = fetchToken();
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Failed to update data");
      }

      return await response.json();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { put, loading, error };
}
