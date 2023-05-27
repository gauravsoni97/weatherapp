import React, { useState } from "react";
import "./LeftSide.css";
import moment from "moment/moment";
import {
  BallTriangle,
  Circles,
  FallingLines,
  ThreeDots,
  Triangle,
} from "react-loader-spinner";

import FilterDramaRoundedIcon from "@mui/icons-material/FilterDramaRounded";

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

      <p>Weather App.</p>
      <div className="currentWeather">
        {loader ? (
          <Triangle
            height="70"
            width="70"
            color="white"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : (
          <>
            <div className="ShowOutput">
              <div>
                <h1 className="currentTemp"> {Math.round(data.temp)}°c</h1>
              </div>

              <div className="CityDateTime">
                <h2 className="currentLocation">{data.cityName}</h2>

                <p className="currentDateAndTime">
                  {currentDate} &nbsp;|&nbsp; {currentTime}
                </p>
              </div>

              <div className="weatherType">
                <span className="weatherIcon">
                  <img 
                    src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
                    alt="icon"
                  />
                </span>{" "}
                <br />
                <p>{data.weatherType}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LeftSide;
