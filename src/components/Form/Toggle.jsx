// src/components/Form/Toggle.jsx
import React from "react";
import { useController } from "react-hook-form";

const Toggle = ({ name, control, label, ...props }) => {
  const { field } = useController({ name, control });

  return (
    <div className="mb-m">
      <label className="flex items-center font-roboto">
        <input
          type="checkbox"
          {...field}
          {...props}
          className="hidden toggle-checkbox"
        />
        <span
          className={`toggle-switch ${
            field.value ? "bg-primary" : "bg-gray-300"
          } rounded-full p-xs transition duration-200`}
        ></span>
        <span className="ml-2">{field.value ? "ON" : "OFF"}</span>
      </label>
    </div>
  );
};

export default Toggle;
