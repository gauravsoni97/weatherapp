import React from "react";
import "./LeftSide.css";


const LeftSide = ({weatherBackground}) => {
  return (
    <div className="weatherBackground" style={{ backgroundImage: ` linear-gradient(45deg,
      rgba(0,0,0, 0.3),
      rgba(0,0,0, 0.3)),URL(${weatherBackground})` }}>
      {/* show city temprature time date and weather type */}
      <p className="dateAndTime">Date and time current</p>
      <div className="currentWeather">

      <h1>60 C</h1>
      <h2>Location</h2>
      <span>Weather icons with name</span>


      </div>
    </div>
  );
};

export default LeftSide;
