import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useGlobalContext } from "../Context";
import InputCity from "./InputCity";
import "./SideBar/styles.css";

function Header() {
  const { loading, showInput, setShowInput, openSideBar } = useGlobalContext();

  return (
    <nav className="container py-1 text-white font-medium">
      <ul className="flex justify-around min-w-full items-center my-1 pl-0">
        <li className="text-custom1 px-7">
          <RiMenu2Line onClick={openSideBar} className="sidebar-toggle" />
        </li>
        <li className="custom-width text-center text-md px-6">
          {loading
            ? `Loading...`
            : showInput
            ? "Add new location"
            : "TheWeatherApp"}
        </li>
        <li className="text-custom1 px-7">
          <AiOutlinePlusCircle
            onClick={() => setShowInput(!showInput)}
            className="cursor-pointer"
          />
        </li>
      </ul>
      {showInput && <InputCity />}
    </nav>
  );
}

export default Header;
