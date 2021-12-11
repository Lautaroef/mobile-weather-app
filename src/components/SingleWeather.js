import React from "react";
import { useGlobalContext } from "../Context";
import Loader from "./Loader";
import MainInfo from "./MainInfo";
import MoreDetails from "./MoreDetails";

function SingleWeather() {
  const { loading, weatherInfo, showCelsius } = useGlobalContext();

  return (
    // If no city show this
    <div className="container flex flex-col justify-center items-center gap-y-4 my-8 ">
      {weatherInfo.city === undefined ? (
        <p className="text-white font-medium self-start pl-8 mt-0">
          No locations found.
        </p>
      ) : (
        // Else show Loader and then all info
        <>
          {loading ? (
            <Loader />
          ) : (
            <>
              <MainInfo weatherInfo={weatherInfo} showCelsius={showCelsius} />
              <hr className="w-9/12" />
              <MoreDetails weatherInfo={weatherInfo} celsius={showCelsius} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default SingleWeather;
