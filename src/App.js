import React, { useEffect, useState } from "react";
import LeftSide from "./Components/LeftSideUi/LeftSide";
import RightSide from "./Components/RightSideUi/RightSide";
import weatherBackground from "./Images/rain.jpg";

const App = () => {
  const [cityWeather, setCityWeather] = useState("");
  const [data, setData] = useState({
    temp: 0,
    pressure: 0,
    humidity: 0,
    weather: "",
    icon: "",
    windSpeed: 0,
    lon: 0,
    lat: 0,
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
      pressure: result.current.pressure,
      humidity: result.current.humidity,
      weather: result.current.weather_descriptions,
      icon: result.weather_icons,
      windSpeed: result.current.wind_speed,
      lon: result.location.lon,
      lat: result.location.lat,
      city: result.location.name,
      state: result.location.region,
      country: result.location.country,
    });
  };


  
  useEffect(() => {
    weatherApi();
    console.log("Api Result", data);
    setCityWeather("Sirsa")
  }, []);


  useEffect(() => {
    weatherApi();
    console.log("Weather Change use Effect", data);
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
