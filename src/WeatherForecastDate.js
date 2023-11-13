import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDate(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  return (
    <div>
      <h3 className="WeatherForecast-day">{day()}</h3>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <p>
        <span className="WeatherForecast-temp-max fw-bold">
          {maxTemperature()}°
        </span>{" "}
        <span className="WeatherForecast-temp-min">{minTemperature()}°</span>
      </p>
    </div>
  );
}
