import React from "react";

import Logo from "../../Logo";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Logo variant="main" altText="Holidaze Main Logo" className="h-10" />
      </div>
    </header>
  );
};

export default Header;
