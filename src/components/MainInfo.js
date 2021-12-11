import React from "react";
import {
  kelvinToCelsius,
  kelvinToFahrenheit,
  unixToHuman,
} from "./Calcs/Convert";
import SwitchDate from "./Calcs/SwitchDate";
import SwitchWind from "./Calcs/SwitchWind";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function MainInfo({ weatherInfo, showCelsius }) {
  const {
    city,
    country,
    dateTime,
    temp,
    mainWeather,
    icon,
    description,
    temp_min,
    temp_max,
    direction,
    speed,
  } = weatherInfo;

  const getCurrentDay = SwitchDate(new Date().getUTCDay());

  return (
    <>
      {/* City, date, and main temperature*/}
      <div className="flex items-center justify-center flex-wrap text-center">
        <h1 className="text-3xl inline">{city + ","}</h1>
        <span className="ml-2 text-sm">{country}</span>
      </div>
      <h6 className="text-gray-400 tracking-wider">
        {getCurrentDay}, {unixToHuman(dateTime)}
      </h6>
      <h1 className="text-5xl">
        {showCelsius
          ? kelvinToCelsius(temp) + "°C"
          : kelvinToFahrenheit(temp) + "°F"}
      </h1>
      <hr className="w-1/2" />

      {/* Weather image and max-min*/}
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center">
          <h6>{mainWeather}</h6>
          <img
            src={`http://openweathermap.org/img/w/${icon}.png`}
            alt={description}
            className="mb-1"
          />
        </div>
        <h4 className="text-base">
          {showCelsius
            ? `${kelvinToCelsius(temp_min)} °C / ` +
              `${kelvinToCelsius(temp_max)} °C`
            : `${kelvinToFahrenheit(temp_min)} °F / ` +
              `${kelvinToFahrenheit(temp_max)} °F`}
        </h4>
      </div>

      {/* Wind */}
      <h4 className=" text-base">
        Wind <span className="text-blue-300">{SwitchWind(direction)}</span>,{" "}
        {speed} km/h
      </h4>
      <div className="arrow-container">
        <MdOutlineKeyboardArrowDown className="arrow-down text-xl" />
      </div>
    </>
  );
}

export default MainInfo;
