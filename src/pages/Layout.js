import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/TopBar/Header";

const Layout = () => {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
