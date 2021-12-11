import React from "react";
import { IoClose } from "react-icons/io5";
import { useGlobalContext } from "../../Context";
import OpenWeather from "./OpenWeather.svg";
import "./styles.css";

function Sidebar() {
  const { isSideBarOpen, closeSideBar, setShowCelsius } = useGlobalContext();

  return (
    <aside
      className={`rounded-t-3xl rounded-b-3xl sidebar ${
        isSideBarOpen && "show-sidebar"
      }`}
    >
      <header className="sidebar-header">
        <button className="close-btn" onClick={closeSideBar}>
          <IoClose />
        </button>
        <div>
          <button onClick={() => setShowCelsius(true)} className="font-light">
            °C
          </button>
          /
          <button onClick={() => setShowCelsius(false)} className="font-light">
            °F
          </button>
        </div>
      </header>
      <footer className="flex justify-center items-end pb-3">
        <h4 className="mr-3">Lautaro Figueroa ft. </h4>
        <a href="https://openweathermap.org/api" target="_blank">
          <img
            src={OpenWeather}
            alt="OpenWeather"
            className="w-24 text-white"
          />
        </a>
      </footer>
    </aside>
  );
}

export default Sidebar;
