// src/components/Button/BackToTop/index.jsx

import React, { useEffect, useState } from "react";
import Button from "..";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <div style={styles.container}>
        <Button onClick={scrollToTop}>&uarr; Top</Button>
      </div>
    )
  );
};

const styles = {
  container: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 10000,
  },
};

export default BackToTop;
