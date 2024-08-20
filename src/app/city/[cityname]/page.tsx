"use client";

import { useEffect, useState } from "react";

interface stringIndexedWeather {
  [key: string]: string;
}

export default function Page({ params }: { params: { cityname: string } }) {
  const [weather, setWeather] = useState<stringIndexedWeather>({
    location: "",
    country: "",
    weather: "",
    temperature: "",
    humidity: "",
    wind: "",
    windDirection: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const climate = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=996b4c80de92403d85d195917240508&q=${params.cityname}`
      ).then((res) => res.json());

      setWeather({
        location: climate.location.name,
        country: climate.location.country,
        weather: climate.current.condition.text,
        temperature: climate.current.temp_c,
        humidity: climate.current.humidity,
        wind: climate.current.wind_mph,
        windDirection: climate.current.wind_dir,
      });
    };

    fetchData();
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(weather).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{weather[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
