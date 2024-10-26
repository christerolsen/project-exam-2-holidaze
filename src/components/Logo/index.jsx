import React from "react";
import PropTypes from "prop-types";

import mainLogo from "../../assets/logo/holidaze-logo-main.png";
import blackLogo from "../../assets/logo/holidaze-logo-black.png";
import whiteLogo from "../../assets/logo/holidaze-logo-white.png";
import iconWhite from "../../assets/logo/holidaze-icon-white.png";
import iconBlack from "../../assets/logo/holidaze-icon-black.png";

const logoVariants = {
  main: mainLogo,
  black: blackLogo,
  white: whiteLogo,
  iconWhite: iconWhite,
  iconBlack: iconBlack,
};

const Logo = ({
  variant = "main",
  altText = "Holidaze Logo",
  className = "",
}) => {
  const logoSrc = logoVariants[variant];

  if (!logoSrc) {
    console.warn(
      `Logo variant "${variant}" does not exist. Using "main" variant as default.`
    );
    return <img src={mainLogo} alt={altText} className={className} />;
  }

  return <img src={logoSrc} alt={altText} className={className} />;
};

Logo.propTypes = {
  variant: PropTypes.oneOf([
    "main",
    "black",
    "white",
    "iconWhite",
    "iconBlack",
  ]),
  altText: PropTypes.string,
  className: PropTypes.string,
};

export default Logo;
