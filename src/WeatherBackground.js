import React from "react";

export default function WeatherBackground({ weatherCondition }) {
  const backgroundImageMapping = {
    CLEAR_DAY: "url(media/clear-sky.jpg)",
    CLEAR_NIGHT: "url(media/clear-night.jpg)",
    PARTLY_CLOUDY_DAY: "url(media/partly-cloudy-day.jpg)",
    PARTLY_CLOUDY_NIGHT: "url(media/partly-cloudy-night.jpg)",
    CLOUDY: "url(media/cloudy.jpg)",
    RAIN: "url(media/Rain.jpg)",
    SNOW: "url(media/snow.jpg)",
    FOG: "url(media/fog-day.jpg)",
  };

  const backgroundImage = backgroundImageMapping[weatherCondition];

  const backgroundStyle = {
    backgroundImage,
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return <div style={backgroundStyle}></div>;
}
