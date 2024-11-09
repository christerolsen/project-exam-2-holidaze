import React from "react";
import SignatureWave from "../../SignatureWave";

const Footer = () => {
  return (
    <footer className="relative w-full mobile:h-[150px] tablet:h-[300px] laptop:h-[450px] desktop:h-[500px] overflow-hidden">
      <SignatureWave />

      <p className="absolute w-full text-center bottom-4 left-1/2 transform -translate-x-1/2 text-shadow font-bold font-lato z-10 text-body-small">
        All rights reserved © 2024 Holidaze
      </p>
    </footer>
  );
};

export default Footer;
