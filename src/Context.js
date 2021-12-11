import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useCallback,
} from "react";

const getLocalStorage = () => {
  const savedValue = JSON.parse(localStorage.getItem("city"));
  if (savedValue) {
    return savedValue;
  }
  return "Texas";
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [searchCity, setSearchCity] = useState(getLocalStorage()); // City to be searched
  const [loading, setLoading] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState({});
  const [showInput, setShowInput] = useState(false); // Used in Header.js and InputCity.js
  // const [listOfCities, setListOfCities] = useState([]); // Saved values of previous cities searched
  const [showCelsius, setShowCelsius] = useState(true);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false); // Handle close and open buttons for the sidebar

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  const API_KEY = "c261ec41f057770760e1d73508f35feb";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}`;

  const fetchWeather = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      const data = response.json();

      if (data) {
        new Promise((resolve, reject) => {
          if (data)
            resolve(
              /* :/  */
              data.then((response) => {
                const {
                  name: city,
                  sys: { country, sunrise, sunset } = {},
                  main: {
                    temp,
                    feels_like,
                    temp_min,
                    temp_max,
                    pressure,
                    humidity,
                  } = {},
                  weather: [{ main: mainWeather, description, icon }] = [{}],
                  wind: { speed, deg: direction } = {},
                  clouds: { all: percentageOfClouds } = {},
                  dt: dateTime,
                  coord,
                } = response;
                return setWeatherInfo({
                  city,
                  country,
                  sunrise,
                  sunset,
                  temp,
                  feels_like,
                  temp_min,
                  temp_max,
                  pressure,
                  humidity,
                  mainWeather,
                  description,
                  icon,
                  speed,
                  direction,
                  percentageOfClouds,
                  dateTime,
                  coord,
                });
              })
            );
          else reject(new Error("No info to display"));
        });
      } else {
        setWeatherInfo({});
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, [searchCity]);

  // Save city into localStorage
  useEffect(() => {
    fetchWeather();

    localStorage.setItem("city", JSON.stringify(searchCity));
  }, [searchCity]);

  return (
    <AppContext.Provider
      value={{
        searchCity,
        setSearchCity,
        loading,
        setLoading,
        weatherInfo,
        showInput,
        setShowInput,
        isSideBarOpen,
        openSideBar,
        closeSideBar,
        showCelsius,
        setShowCelsius,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
