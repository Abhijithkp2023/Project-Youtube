import React from "react";
import { useDispatch } from "react-redux"
import {toggleMenu} from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1"> 
        <img
        onClick={() => toggleMenuHandler()}
        className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <img
        className="h-8 p-1"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="col-span-10 text-center">
        <input type="text" className="w-1/2 border border-gray-500 p-2 rounded-l-full"   placeholder="Search" />
        <button className= " border border-gray-900 py-2 px-5 bg-gray-200 rounded-r-full">🔍</button>
      </div>
      <div className="col-span-1">
        <img
        className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
