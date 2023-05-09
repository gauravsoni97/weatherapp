import React, { useEffect, useState } from "react";
import LeftSide from "./Components/LeftSideUi/LeftSide";
import RightSide from "./Components/RightSideUi/RightSide";
import weatherBackground from "./Images/rain.jpg";

const App = () => {
  const [searchValue, setSearchValue] = useState("");

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
        <RightSide searchValue={searchValue}  setSearchValue={setSearchValue} />
      </div>
    </div>
  );
};

export default App;
