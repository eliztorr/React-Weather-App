import React from "react";
import TimeandDate from "./TimeandDate";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  if (!props.data) {
    return null;
  }

  return (
    <div className="WeatherInfo">
      <div className=" row mt-3">
        <div className="col-7">
          <h2 className="mb-2">{props.data.city}</h2>
          <p>
            <TimeandDate date={props.data.date} />
          </p>
          <p className="text-capitalize">{props.data.description}</p>
        </div>
        <div className="WeatherDescription col-5 ">
          <p>
            Humidity:{" "}
            <span className="WeatherData">{props.data.humidity} </span>%
          </p>
          <p>
            Pressure:{" "}
            <span className="WeatherData"> {props.data.pressure} </span>
            hPa
          </p>
          <p>
            Wind:
            <span className="WeatherData"> {props.data.wind} </span>km/h
          </p>
        </div>
      </div>
      <WeatherIcon code={props.data.icon} size={72} />
      <WeatherTemperature celsius={props.data.temperature} unit={props.unit} />
    </div>
  );
}
