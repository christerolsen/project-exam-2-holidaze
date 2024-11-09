// src/components/SearchBar/index.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  return (
    <div className="relative w-full mb-4 laptop:w-[50%]">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search venues..."
        value={inputValue}
        onChange={handleInputChange}
        className="border border-gray-300 rounded-l-md p-2 w-full pr-20" // No right border radius
      />

      {/* Search Button Inside Input */}
      <button
        onClick={handleSearchClick}
        className="absolute right-0 top-0 h-full bg-primary text-white px-4 rounded-r-md hover:bg-accent" // No left border radius, fills input height
      >
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
