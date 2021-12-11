import React from "react";
import {
  kelvinToCelsius,
  kelvinToFahrenheit,
  unixToHuman,
} from "./Calcs/Convert";

function MoreDetails({ weatherInfo, celsius }) {
  const {
    feels_like,
    sunrise,
    sunset,
    pressure,
    humidity,
    percentageOfClouds,
  } = weatherInfo;

  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-2.5">
      <div className="flex-flex-columns">
        <h6 className="font-light">Feels like</h6>
        <p>
          {celsius
            ? `${kelvinToCelsius(feels_like)} °C`
            : `${kelvinToFahrenheit(feels_like)} °F`}
        </p>
      </div>
      <div className="flex-flex-columns">
        <h6 className="font-light">Humidity</h6>
        <p>{humidity}%</p>
      </div>
      <div className="flex-flex-columns">
        <h6 className="font-light">Sunrise</h6>
        <p>{unixToHuman(sunrise)}</p>
      </div>
      <div className="flex-flex-columns">
        <h6 className="font-light">Sunset</h6>
        <p>{unixToHuman(sunset)}</p>
      </div>
      <div className="flex-flex-columns">
        <h6 className="font-light">Clouds</h6>
        <p>{percentageOfClouds}%</p>
      </div>
      <div className="flex-flex-columns">
        <h6 className="font-light">Pressure hPa</h6>
        <p>{pressure}</p>
      </div>
      <div className="flex-flex-columns">
        <h6 className="font-light">visibility</h6>
        <p>100%</p>
      </div>
    </div>
  );
}

export default MoreDetails;
