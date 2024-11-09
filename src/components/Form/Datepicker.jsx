// src/components/Form/Datepicker.jsx
import React from "react";
import { useController } from "react-hook-form";

const Datepicker = ({ name, control, label, ...props }) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className="mb-4">
      <label className="block mb-1 font-bold">{label}</label>
      <input
        type="date"
        {...field}
        {...props}
        className="border p-2 rounded w-full"
      />
      {error && <p className="text-red-500 mt-1">{error.message}</p>}
    </div>
  );
};

export default Datepicker;
