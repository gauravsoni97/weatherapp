import React from "react";
import LeftSide from "./Components/LeftSideUi/LeftSide";
import RightSide from "./Components/RightSideUi/RightSide";
import weatherBackground from "./Images/strom.jpg";

const App = () => {

  return (
    <div
      className="WeatherApp"
    >
      <LeftSide currentWeatherImg={weatherBackground} />
      <RightSide />
    </div>
  );
};

export default App;
