// src/components/Form/Checkbox.jsx
import React from "react";
import { useController } from "react-hook-form";

const Checkbox = ({ name, control, label, ...props }) => {
  const { field } = useController({ name, control });

  return (
    <div className="mb-m">
      <label className="flex items-center font-roboto">
        <input type="checkbox" {...field} {...props} className="mr-2" />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
