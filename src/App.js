import React, { useState } from "react";
import Weather from "./Weather";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./App.css";

export default function App() {
  const [unit, setUnit] = useState("celsius");

  return (
    <div className="App">
      <div className="container p-0">
        <WeatherInfo unit={unit} />
        <WeatherForecast unit={unit} />
        <Weather defaultCity="Barcelona" />
      </div>
      <footer>
        Open source code by{" "}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/elizabethtorralbo/"
          rel="noreferrer"
        >
          Elizabeth Torralbo
        </a>{" "}
        available on{" "}
        <a
          target="_blank"
          href="https://github.com/eliztorr/React-Weather-App"
          rel="noreferrer"
        >
          Github{" "}
        </a>
        and hosted on{" "}
        <a
          target="_blank"
          href="https://vocal-elf-22c086.netlify.app/"
          rel="noreferrer"
        >
          Netlify
        </a>{" "}
      </footer>
    </div>
  );
}
