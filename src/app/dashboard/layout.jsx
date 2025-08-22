"use client";
import React from "react";
import SideBar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex w-full">
        <SideBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
