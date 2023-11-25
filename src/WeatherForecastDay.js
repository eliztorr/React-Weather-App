import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function minTemperature() {
    return Math.round(props.data.temp.min);
  }

  function maxTemperature() {
    return Math.round(props.data.temp.max);
  }

  return (
    <div>
      <h3 className="WeatherForecast-day">{day()}</h3>
      <WeatherIcon code={props.data.weather[0].icon} size={42} />
      <p>
        <span className="WeatherForecast-temp-max fw-bold">
          <WeatherTemperature celsius={maxTemperature()} unit={props.unit} />
        </span>{" "}
        <span className="WeatherForecast-temp-min">
          <WeatherTemperature celsius={minTemperature()} unit={props.unit} />
        </span>
      </p>
    </div>
  );
}
