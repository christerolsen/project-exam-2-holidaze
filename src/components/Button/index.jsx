import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ variant, size, disabled, children, onClick }) => {
  const baseStyles =
    "font-lato font-bold rounded-lg transition duration-200 focus:outline-none px-btn-x py-btn-y border border-2 border-background";
  const disabledStyles =
    "border border-text bg-shadow text-text cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-primary text-background hover:bg-background hover:text-primary hover:border-primary",
    accent:
      "bg-accent text-background hover:bg-background hover:text-accent hover:border-accent",
  };

  const buttonClasses = classNames(
    baseStyles,
    {
      [variantStyles[variant]]: !disabled,
      [disabledStyles]: disabled,
    },
    {
      "w-full": size === "full",
    }
  );

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "accent", "disabled"]),
  size: PropTypes.oneOf(["default", "full"]),
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: "primary",
  size: "default",
  disabled: false,
  onClick: () => {},
};

export default Button;
