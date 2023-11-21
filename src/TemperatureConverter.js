import React from "react";
import "./TemperatureConverter.css";

export default function TemperatureConverter({ unit, onUnitChange }) {
  const convertToFahrenheit = (event) => {
    event.preventDefault();
    onUnitChange("fahrenheit");
  };

  const convertToCelsius = (event) => {
    event.preventDefault();
    onUnitChange("celsius");
  };

  return (
    <div className="TemperatureConverter">
      <button
        className={`TemperatureButton ${unit === "celsius" ? "active" : ""}`}
        onClick={convertToCelsius}
      >
        °C
      </button>
      <span>|</span>
      <button
        className={`TemperatureButton ${unit === "fahrenheit" ? "active" : ""}`}
        onClick={convertToFahrenheit}
      >
        °F
      </button>
    </div>
  );
}
