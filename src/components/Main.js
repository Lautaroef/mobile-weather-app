import React from "react";
import SingleWeather from "./SingleWeather";
import Header from "./Header";
import Sidebar from "./SideBar/index";

function Main() {
  return (
    <main className="relative overflow-y-scroll overflow-x-hidden rounded-t-3xl px-0 rounded-b-3xl bg-gray-700 text-white">
      <Sidebar />
      <Header />
      <SingleWeather />
    </main>
  );
}

export default Main;
