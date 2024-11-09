import React from "react";

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="mb-1">
      <input
        type="text"
        placeholder="Search venues..."
        className="border border-gray-300 rounded-md p-s w-full"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
