import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    if (props.coordinates && props.coordinates.lon && props.coordinates.lat) {
      let lon = props.coordinates.lon;
      let lat = props.coordinates.lat;
      let apiKey = "aa09763d916df0424c840d55bfc2d2c9";
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleResponse);
    } else {
      console.error("Coordinates are undefined");
    }
    return null;
  }

  if (loaded) {
    const filteredForecast = forecast.slice(0, 5);

    return (
      <div className="WeatherForecast mt-3 mb-2">
        <div className="row">
          {filteredForecast.map((dailyForecast, index) => (
            <div className="col" key={index}>
              <WeatherForecastDay
                data={dailyForecast}
                unit={props.unit}
                onUnitChange={props.onUnitChange}
              />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
