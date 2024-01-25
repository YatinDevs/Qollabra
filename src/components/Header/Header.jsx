import React from "react";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import "./style.css";
import Profile from "./NavProfile/Profile";
import Trips from "./Trips/Trips";

function Header() {
  return (
    <header className="w-full h-16 bg-white shadow-sm">
      <div className="w-full max-w-[1440px] mx-auto h-full flex items-center px-[50px] justify-between max-sm:px-2">
        <div className="flex items-center h-full">
          <Logo />
          <Navbar />
        </div>
        <div className="flex">
          <Trips />
          <Profile />
        </div>
      </div>
    </header>
  );
}

export default Header;
