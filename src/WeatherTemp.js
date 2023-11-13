import React from "react";
import "./WeatherInfo.css";
import { useState } from "react";

export default function WeatherTemperature(props) {
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  const [unit, setUnit] = useState("celsius");
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature d-inline-flex">
        <h1>{props.celsius}</h1>
        <span className="UnitLink">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="WeatherTemperature d-inline-flex">
        <h1>{fahrenheit}</h1>
        <span className="UnitLink">
          <a href="/" onClick={convertToCelsius}>
            {" "}
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
