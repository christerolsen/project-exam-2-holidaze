// src/components/Form/Dropdown.jsx
import React from "react";
import { useController } from "react-hook-form";

const Dropdown = ({ name, control, label, options = [], ...props }) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className="mb-4">
      <label className="block mb-1 font-bold">{label}</label>
      <select {...field} {...props} className="border p-2 rounded w-full">
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 mt-1">{error.message}</p>}
    </div>
  );
};

export default Dropdown;
