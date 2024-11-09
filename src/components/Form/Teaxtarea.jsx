// src/components/Form/Textarea.jsx
import React from "react";
import { useController } from "react-hook-form";

const Textarea = ({
  name,
  control,
  label,
  state = "default",
  message = "",
  ...props
}) => {
  const { field } = useController({ name, control });

  const stateClasses = {
    default: "border-gray-300",
    active: "border-primary text-primary",
    success: "border-success text-success",
    warning: "border-warning text-warning",
    error: "border-error text-error",
  };

  return (
    <div className="mb-m">
      <label className="block mb-1 font-roboto font-bold">{label}</label>
      <textarea
        {...field}
        {...props}
        className={`border p-2 rounded-md w-full ${stateClasses[state]}`}
      />
      {message && (
        <p className={`mt-1 text-${state} font-roboto text-body-small`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Textarea;
