import { useState } from "react";
import "./App.css";
import { DefaultApiFactory, WeatherForecast } from "./../openapi/api";

function App() {
  const [forecasts, setForecasts] = useState<WeatherForecast[]>([]);
  const fetchData = async () => {
    try {
      const response = await DefaultApiFactory().getWeatherForecast();
      setForecasts(response.data);
    } catch (error) {
      console.log(`Featching data failed. ${error}`);
    }
  };

  return (
    <>
      <button onClick={() => fetchData()}>リクエストするﾝｺﾞ～</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature</th>
            <th>TemperatureF</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast, index) => {
            // なぜかforecast.Date等がundefinedになってしまう謎
            // 仕方なく各値を取り出している
            const [date, tempC, tempF, summary] = Object.values(forecast);
            return (
              <tr key={index}>
                <td>{date}</td>
                <td>{tempC}</td>
                <td>{tempF}</td>
                <td>{summary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
