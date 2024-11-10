// src/components/SearchBar/index.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "../Button";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  return (
    <div className="relative w-full mb-4 laptop:pr-48">
      <input
        type="text"
        placeholder="Search venues..."
        value={inputValue}
        onChange={handleInputChange}
        className="p-2 w-full pr-20"
      />
      <button
        onClick={handleSearchClick}
        className="absolute right-0 laptop:right-48 top-0 h-full bg-primary text-white px-4 rounded-r-md hover:bg-accent"
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
