import React from "react";

export default function TimeandDate(prop) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[prop.date.getDay()];
  let hours = prop.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = prop.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <span>
      {day} {hours}:{minutes}
    </span>
  );
}
