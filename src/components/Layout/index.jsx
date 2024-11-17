import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-[100%] items-center">
      <Header />
      <main className="flex flex-grow justify-center w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
