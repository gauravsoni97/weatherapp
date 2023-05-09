import React, { useEffect, useState } from "react";
import LeftSide from "./Components/LeftSideUi/LeftSide";
import RightSide from "./Components/RightSideUi/RightSide";
import weatherBackground from "./Images/rain.jpg";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentCity, setCurrentCity] = useState("");

  // current location

  // https://ipapi.co/json

  const currentLocation = async () => {
    const response = await fetch("https://ipapi.co/json");
    const result = await response.json();
    console.log(result.city);
    setCurrentCity(result);
  };

  console.log("This is current city", currentCity);

  useEffect(() => {
    currentLocation();
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
        <LeftSide
          currentCity={currentCity}
          weatherBackground={weatherBackground}
        />
        <RightSide setSearchValue={setSearchValue} searchValue={searchValue} />
      </div>
    </div>
  );
};

export default App;
