import React, { useEffect, useState } from "react";
import LeftSide from "./Components/LeftSideUi/LeftSide";
import RightSide from "./Components/RightSideUi/RightSide";
import weatherBackground from "./Images/rain.jpg";

const App = () => {
  const [searchValue, setSearchValue] = useState("Sirsa");

  // api = https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=983980943e4afc86d97243b4f1873779


  async function WeatherApi() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=983980943e4afc86d97243b4f1873779`);
    const result = await response.json();
    console.log("This is api result",result);
  }
  

  useEffect(() => {
    WeatherApi();
  }, []);

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
        <LeftSide weatherBackground={weatherBackground} />
        <RightSide />
      </div>
    </div>
  );
};

export default App;
