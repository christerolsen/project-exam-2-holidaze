import React from "react";
import waveImage from "../../assets/wave.png";

const SignatureWave = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${waveImage})` }}
    ></div>
  );
};

export default SignatureWave;
