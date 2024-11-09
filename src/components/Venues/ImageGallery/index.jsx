// src/components/Venues/ImageGallery/index.jsx
import React from "react";
import PropTypes from "prop-types";

const ImageGallery = ({ media, name }) => {
  const images = media.slice(0, 5); // Only show up to 5 images

  return (
    <div className="w-full space-y-m">
      {/* Main Image */}
      <div className="bg-gray-200 rounded-lg shadow-custom overflow-hidden h-80">
        <img
          src={images[0]?.url || "/placeholder-image.jpg"}
          alt={images[0]?.alt || name}
          className="w-full h-full object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-s">
          {images.slice(1).map((image, index) => (
            <div
              key={index}
              className={`bg-gray-200 rounded-lg overflow-hidden h-24 shadow-custom ${
                images.length < 5 && index >= images.length - 1
                  ? "opacity-0"
                  : ""
              }`}
            >
              <img
                src={image.url}
                alt={image.alt || name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

ImageGallery.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
};

export default ImageGallery;
