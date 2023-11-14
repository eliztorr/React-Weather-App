import { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather container">
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
              </form>
            </div>
            <WeatherInfo data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates} />
          </header>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
