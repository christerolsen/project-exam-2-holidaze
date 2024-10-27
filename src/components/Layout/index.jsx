import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mobile:p-4 tablet:p-16 desktop:px-32">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
