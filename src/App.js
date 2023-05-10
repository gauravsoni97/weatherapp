import React, { useEffect, useState } from "react";
import LeftSide from "./Components/LeftSideUi/LeftSide";
import RightSide from "./Components/RightSideUi/RightSide";
import weatherBackground from "./Images/rain.jpg";

const App = () => {

  const [cityWeather, setCityWeather] = useState("Hanumangarh")
  const [data,setData]= useState([])

  const weatherApi = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityWeather}&appid=983980943e4afc86d97243b4f1873779
      `
    );
    const result = await response.json();
    console.log(result);
    setData(result)
  };
  useEffect(() => {
  weatherApi();
  }, [cityWeather])
  

  return (
    <div
      className="WeatherAppParent"
      style={{
        backgroundImage: `   linear-gradient(45deg,
        rgba(0,0,0, 0.5),
        rgba(0,0,0, 0.5)),url(${weatherBackground})`,
      }}
    >
      <div className="blurLayer"></div>
      <div className="weatherapp_sections">
        <LeftSide data={data} weatherBackground={weatherBackground} />
        <RightSide setCityWeather={setCityWeather} />
      </div>
    </div>
  );
};

export default App;
