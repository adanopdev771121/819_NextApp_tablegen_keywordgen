export const fetchWeatherData = async (cityname: string) => {
  const climate = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=996b4c80de92403d85d195917240508&q=${cityname}`
  ).then((res) => res.json());

  return {
    location: climate.location.name,
    country: climate.location.country,
    weather: climate.current.condition.text,
    temperature: climate.current.temp_c,
    humidity: climate.current.humidity,
    wind: climate.current.wind_mph,
    windDirection: climate.current.wind_dir,
  };
};
