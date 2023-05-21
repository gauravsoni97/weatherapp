import React, { useEffect, useState } from "react";
import LeftSide from "./Components/LeftSideUi/LeftSide";
import RightSide from "./Components/RightSideUi/RightSide";
import weatherBackground from "./Images/rain.jpg";

const App = () => {
  const [cityWeather, setCityWeather] = useState("Sirsa");
  const [data, setData] = useState({
    temp: 0,
    humidity: 0,
    weather: "",
    icon: "",
    windSpeed: 0,
    city: "",
    state: "",
    country: "",
  });

  const weatherApi = async () => {
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=702dbdf22774e470cac8d592973f8a2f&query=${cityWeather}`
    );
    const result = await response.json();

    console.log("api result", result);
    setData({
      temp: result.current.temperature,
      humidity: result.current.humidity,
      weather: result.weather_descriptions,
      icon: result.weather_icons,
      windSpeed: result.wind_speed,
      city: result.location.name,
      state: result.location.region,
      country: result.location.country,
    });
  };

  useEffect(() => {
    weatherApi();
    console.log("Api Result", data);
  }, []);

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
        <RightSide
          data={data}
          setCityWeather={setCityWeather}
          weatherApi={weatherApi}
        />
      </div>
    </div>
  );
};

export default App;
