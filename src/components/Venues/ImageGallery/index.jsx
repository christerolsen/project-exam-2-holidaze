// src/components/Venues/ImageGallery/index.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ImageGallery.css";

const ImageGallery = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!media || media.length === 0) {
    return <p>No images available for this venue.</p>;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === media.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image-gallery relative w-full">
      <div className="gallery-image-container w-full h-64 md:h-96">
        <div
          className="w-full h-full bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${media[currentIndex].url})` }}
        ></div>
      </div>
      {media.length > 1 && (
        <>
          <button className="gallery-nav-button left-0" onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          <button className="gallery-nav-button right-0" onClick={handleNext}>
            <FaChevronRight />
          </button>
        </>
      )}
    </div>
  );
};

ImageGallery.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ),
};

export default ImageGallery;
