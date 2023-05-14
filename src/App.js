import React, { useEffect, useState } from "react";
import LeftSide from "./Components/LeftSideUi/LeftSide";
import RightSide from "./Components/RightSideUi/RightSide";
import weatherBackground from "./Images/rain.jpg";

const App = () => {
  const [cityWeather, setCityWeather] = useState("Hanumangarh");
  const [data, setData] = useState([]);

  const weatherApi = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityWeather}&appid=92218c2573f89c85e3d99b1d2d125fb4
      `
    );
    const result = await response.json();
    console.log("this is result ", result);
    setData(result);
  };
  useEffect(() => {
    weatherApi();
  }, [cityWeather]);

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
