import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function WeatherApp() {
  const [unit, setUnit] = useState("celsius");

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
  };

  return (
    <div>
      {/* Pass unit and onUnitChange to WeatherInfo */}
      <WeatherInfo unit={unit} onUnitChange={handleUnitChange} />

      {/* Pass unit and onUnitChange to WeatherForecast */}
      <WeatherForecast unit={unit} onUnitChange={handleUnitChange} />
    </div>
  );
}
