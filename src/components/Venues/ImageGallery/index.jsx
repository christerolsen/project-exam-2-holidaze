// src/components/Venues/ImageGallery/index.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import NoImagePlaceholder from "../../../assets/no-image-placeholder.png";

const ImageGallery = ({ media = [], name = "Venue" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images =
    media.length > 0
      ? media
      : [{ url: NoImagePlaceholder, alt: "Placeholder" }];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full mx-auto space-y-m">
      <div className="bg-gray-200 rounded-lg shadow-custom overflow-hidden h-80 w-full flex items-center justify-center">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].alt || name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100"
          >
            ❯
          </button>
        </>
      )}

      <div className="flex justify-center space-x-2 mt-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

ImageGallery.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
  name: PropTypes.string,
};

export default ImageGallery;
