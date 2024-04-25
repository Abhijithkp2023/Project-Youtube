import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Head from "./Head";
import { useSelector } from "react-redux";

const Body = () => {

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-20 bg-white">
      <Head />
      </div>
      <div className="flex w-full mt-24">
        <div className="fixed bg-white h-ful">
        <Sidebar />
      </div>
          <Outlet />
      </div>
    </div>
  );
};

export default Body;
