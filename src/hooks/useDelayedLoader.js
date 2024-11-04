import { useState, useEffect } from "react";

export function useDelayedLoader(isLoading, delay = 300) {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timer;
    if (isLoading) {
      timer = setTimeout(() => setShowLoader(true), delay);
    } else {
      clearTimeout(timer);
      setShowLoader(false);
    }

    return () => clearTimeout(timer);
  }, [isLoading, delay]);

  return showLoader;
}
