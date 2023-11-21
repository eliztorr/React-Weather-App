import React from "react";
import "./WeatherInfo.css";
import TemperatureConverter from "./TemperatureConverter";

export default function WeatherTemperature({
  celsius,
  unit = "celsius",
  onUnitChange,
}) {
  const convertToFahrenheit = (event) => {
    event.preventDefault();
    console.log("Converting to Fahrenheit");
    onUnitChange("fahrenheit");
  };

  const convertToCelsius = (event) => {
    event.preventDefault();
    console.log("Converting to Celsius");
    onUnitChange("celsius");
  };

  console.log("Unit:", unit);

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature d-inline-flex">
        <h1>{celsius}º</h1>
      </div>
    );
  } else {
    let fahrenheit = Math.round((celsius * 9) / 5 + 32);
    return (
      <div className="WeatherTemperature d-inline-flex">
        <h1>{fahrenheit}</h1>º
      </div>
    );
  }
}
