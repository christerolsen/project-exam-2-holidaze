// src/Container/index.jsx
import React from "react";

const Container = ({ children }) => {
  return (
    <div className="mt-4 p-4 w-full max-w-[1440px] tablet:w-full laptop:min-w-[75%] desktop:min-w-[50%]">
      {children}
    </div>
  );
};

export default Container;
