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

import Jump from "react-reveal/Jump";

import FilterDramaRoundedIcon from "@mui/icons-material/FilterDramaRounded";
import { Slide } from "react-reveal";

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
      <div className="leftTopSection">
        <p>Weather App.</p>
        <p>
        {currentTime}  &nbsp;|&nbsp; {currentDate}
        </p>
      </div>

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
                <h2 className="currentLocation">{data.cityName}, {data.countryName}</h2>
              </div>

              <div className="weatherType">
                <img
                  className="weatherImage"
                  src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
                  alt="icon"
                />
                <Slide bottom>
                  <p>{data.weatherType}</p>
                </Slide>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LeftSide;
