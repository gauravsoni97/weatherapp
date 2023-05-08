import React from "react";
import "./LeftSide.css";
import moment from "moment/moment";


const LeftSide = ({weatherBackground}) => {

  const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');

  return (
    <div className="weatherBackground" style={{ backgroundImage: ` linear-gradient(45deg,
      rgba(0,0,0, 0.3),
      rgba(0,0,0, 0.3)),URL(${weatherBackground})` }}>
      {/* show city temprature time date and weather type */}
      <p className="projectTitle">
        Weather App
      </p>
      <p className="currentDateAndTime">
        {currentDate}
      </p>
      <div className="currentWeather">

      <h1 className="currentTemp">60 C</h1>
      <h2 className="currentLocation">Location</h2>
      <span>Weather icons with name</span>


      </div>
    </div>
  );
};

export default LeftSide;
