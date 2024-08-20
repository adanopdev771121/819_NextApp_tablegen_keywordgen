import { fetchWeatherData } from "@/lib/utils/fetchWeatherData";

interface StringIndexedWeather {
  [key: string]: string;
}

export default async function Page({
  params,
}: {
  params: { cityname: string };
}) {
  const weather: StringIndexedWeather = await fetchWeatherData(params.cityname);

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
