import React, { useEffect, useState } from "react";
import LeftSide from "./Components/LeftSideUi/LeftSide";
import RightSide from "./Components/RightSideUi/RightSide";
import weatherBackground from "./Images/rain.jpg";

const App = () => {
  // ---------- Weather api integration ---------------

  const [cityWeather, setCityWeather] = useState("sirsa");
  const [data, setData] = useState({
    temp: null,
    pressure: null,
    humidity: null,
    weather: "",
    icon: "",
    windSpeed: null,
    lon: null,
    lat: null,
    city: "",
    state: "",
    country: "",
  });

  useEffect(() => {
    const weatherApi = async () => {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityWeather}&units=metric&appid=5dc4d0db9fc5256a0ace471a19e48871
     `;
      const response = await fetch(apiUrl);
      const result = await response.json();

      console.log("Weather Api Response", result);

      setData({
        // temp: result.current.temperature,
        // pressure: result.current.pressure,
        // humidity: result.current.humidity,
        // weather: result.current.weather_descriptions,
        // icon: result.weather_icons,
        // windSpeed: result.current.wind_speed,
        // lon: result.location.lon,
        // lat: result.location.lat,
        // city: result.location.name,
        // state: result.location.region,
        // country: result.location.country,
      });
    };

    weatherApi();
  }, [cityWeather]);

  return (
    <div
      className="WeatherAppParent"
      style={{
        backgroundImage: `linear-gradient(45deg,
        rgba(0,0,0, 0.5),
        rgba(0,0,0, 0.5)),url(${weatherBackground})`,
      }}
    >
      <div className="blurLayer"></div>
      <div className="weatherapp_sections">
        <LeftSide data={data} weatherBackground={weatherBackground} />
        <RightSide data={data} setCityWeather={setCityWeather} />
      </div>
    </div>
  );
};

export default App;
