import React from "react";
import "./WeatherInfo.css";

export default function WeatherTemperature({ celsius, unit = "celsius" }) {
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
        <h1>{fahrenheit}º</h1>
      </div>
    );
  }
}
