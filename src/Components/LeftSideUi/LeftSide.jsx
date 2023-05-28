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
import { Slide, Fade } from "react-reveal";

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
        <Slide top>
          <p>Weather App.</p>
        </Slide>
        <Slide top>
          <p>
            {currentTime} &nbsp;|&nbsp; {currentDate}
          </p>
        </Slide>
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
                <Fade bottom>
                  <h1 className="currentTemp"> {Math.round(data.temp)}°c</h1>
                </Fade>
              </div>

              <div className="CityDateTime">
                <Fade bottom>
                  <h2 className="currentLocation">
                    {data.cityName}, {data.countryName}
                  </h2>
                </Fade>
              </div>

              <div className="weatherType">
                <Fade bottom>
                  <img
                    className="weatherImage"
                    src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
                    alt="icon"
                  />

                  <p>{data.weatherType}</p>
                </Fade>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LeftSide;
