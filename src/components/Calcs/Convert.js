// Convert Kelvin to Celsius
export const kelvinToCelsius = (kelvin) => {
  return (kelvin - 273.15).toFixed(1);
};

// Convert Kelvin to Fahrenheit
export const kelvinToFahrenheit = (kelvin) => {
  return ((kelvin - 273.15) * 1.8 + 32).toFixed(1);
};

//3 Convert Unix time to human-readable
export const unixToHuman = (unix) => {
  const dateObj = new Date(unix * 1000);

  const hours = dateObj.getUTCHours().toString().padStart(2, 0);
  const minutes = dateObj.getUTCMinutes().toString().padStart(2, 0);

  return [hours, minutes].join(":");
};
