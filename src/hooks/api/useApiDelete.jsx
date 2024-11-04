import { useState } from "react";
import { fetchToken } from "../../utils/fetchToken";

export function useApiDelete(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const del = async () => {
    setLoading(true);
    try {
      const token = fetchToken();
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete data");
      }

      return await response.json();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { del, loading, error };
}
