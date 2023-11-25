import React, { useState, useEffect } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import TemperatureConverter from "./TemperatureConverter";
import WeatherIcon from "./WeatherIcon";

import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");

  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  const backgroundImageMapping = {
    CLEAR_DAY: "clear-sky.jpg",
    CLEAR_NIGHT: "clear-night.jpg",
    PARTLY_CLOUDY_DAY: "partly-cloudy-day.jpg",
    PARTLY_CLOUDY_NIGHT: "partly-cloudy-night.jpg",
    CLOUDY: "cloudy.jpg",
    RAIN: "rain-day.jpg",
    SNOW: "snow-night.jpg",
    FOG: "fog-day.jpg",
  };

  const weatherCondition = weatherData.icon;
  console.log("Weather Condition:", weatherCondition);
  const backgroundImage = backgroundImageMapping[weatherCondition];
  console.log("Background Image:", backgroundImage);

  const rootStyle = {
    backgroundImage: `url(/${
      backgroundImageMapping[codeMapping[weatherData.icon]]
    })`,
    backgroundSize: "cover",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  useEffect(() => {
    // Set background dynamically when weatherData changes
    if (weatherData.icon) {
      const backgroundContainer = document.getElementById(
        "background-container"
      );
      if (backgroundContainer) {
        backgroundContainer.style.backgroundImage =
          backgroundImageMapping[weatherData.icon];
      }
    }
  }, [weatherData]);

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      coordinates: response.data.coord,
      ready: true,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "aa09763d916df0424c840d55bfc2d2c9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }

  function handleError(error) {
    console.error("Error fetching weather data:", error);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleUnitChange(newUnit) {
    setUnit(newUnit);
  }
  const handleCurrentLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const apiKey = "aa09763d916df0424c840d55bfc2d2c9";
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

          axios.get(apiUrl).then(handleResponse).catch(handleError);
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  if (weatherData.ready) {
    return (
      <div className="Weather container" style={rootStyle}>
        <div className="Wrapper">
          <header className="Weather-header mt-3">
            <div className="Search-form ">
              <form className="row ms-1" onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="col-8"
                  onChange={handleCityChange}
                />
                <button
                  type="submit"
                  className="btn btn-primary  col-3"
                  autoFocus="on"
                  onClick={handleSubmit}
                >
                  Search
                </button>
                <button
                  className="btn btn-secondary col-3"
                  id="current-city"
                  onClick={handleCurrentLocationClick}
                >
                  Current location
                </button>
              </form>
            </div>
            <div className="col ">
              <span>
                <WeatherInfo data={weatherData} unit={unit} />
              </span>
              <TemperatureConverter
                unit={unit}
                onUnitChange={handleUnitChange}
              />
            </div>
            <WeatherForecast
              coordinates={weatherData.coordinates}
              unit={unit}
            />
          </header>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
