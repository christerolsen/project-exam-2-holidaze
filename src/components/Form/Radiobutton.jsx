// src/components/Form/RadioButton.jsx
import React from "react";
import { useController } from "react-hook-form";

const RadioButton = ({ name, control, label, options = [], ...props }) => {
  const { field } = useController({ name, control });

  return (
    <div className="mb-m">
      <label className="block font-bold mb-1 font-roboto">{label}</label>
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center mb-2 font-roboto"
        >
          <input
            type="radio"
            {...field}
            value={option.value}
            checked={field.value === option.value}
            className="mr-2"
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
