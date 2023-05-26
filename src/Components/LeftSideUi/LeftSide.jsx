import React, { useState } from "react";
import "./LeftSide.css";
import moment from "moment/moment";
import { BallTriangle, Circles, FallingLines } from "react-loader-spinner";

const LeftSide = ({ weatherBackground, data, loader }) => {
  const currentDate = moment().format("ll");
  const [currentTime, setCurrentTime] = useState(moment().format("LTS"));

  setInterval(() => {
    setCurrentTime(moment().format("LTS"));
  }, 1000);

  return (
    <div
      className="weatherBackground"
      style={{
        backgroundImage: ` linear-gradient(45deg,
      rgba(0,0,0, 0.3),
      rgba(0,0,0, 0.3)),URL(${weatherBackground})`,
      }}
    >
      {/* show city temprature time date and weather type */}

      <p className="currentDateAndTime">
        {currentDate} &nbsp; || &nbsp; {currentTime}
      </p>

      <div className="currentWeather">
        {loader ? (
        <FallingLines
        color="white"
        width="100"
        visible={true}
        ariaLabel='falling-lines-loading'
      />
        ) : (
          <>
            <h1 className="currentTemp"> {Math.round(data.temp)}°c</h1>
            <h2 className="currentLocation">
              {data.cityName}, {data.countryName}, {}
            </h2>
            <h3>{}</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default LeftSide;
