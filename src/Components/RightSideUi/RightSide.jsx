import React, { useEffect, useState } from "react";
import "./rightside.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import moment from "moment/moment";
import { MutatingDots, Puff, ThreeDots, Triangle } from "react-loader-spinner";
import { Fade, Slide } from "react-reveal";

const RightSide = ({ setCityWeather, data, loader }) => {
  const {
    temp,
    cityName,
    countryName,
    weatherType,
    pressure,
    humidity,
    lon,
    lat,
    windSpeed,
    windDeg,
    feelsLike,
    minTemp,
    maxTemp,
    seaLevel,
    groundLevel,
    sunrise,
    sunset,
  } = data;

  const dataToShow = [
    { id: 1, text: "Temprature", value: `${temp} °C` },

    { id: 2, text: "City", value: `${cityName}` },

    { id: 3, text: "Country", value: `${countryName}` },

    { id: 4, text: "Weather", value: `${weatherType}` },

    { id: 5, text: "Pressure", value: `${pressure} mb` },
    { id: 17, text: "Humidity", value: `${humidity} %` },

    { id: 6, text: "Longitude", value: `${lon}` },

    { id: 7, text: "Latitude", value: `${lat}` },

    { id: 8, text: "Wind Speed", value: `${windSpeed} Km/h` },

    { id: 9, text: "Wind Degree", value: `${windDeg} Deg` },

    { id: 10, text: "Feels Like", value: `${feelsLike}  °C` },

    { id: 11, text: "Min Temp", value: `${minTemp} °C` },

    { id: 12, text: "Max Temp", value: `${maxTemp} °C` },

    { id: 13, text: "Sea Level", value: `${seaLevel} m` },

    { id: 14, text: "Ground Level", value: `${groundLevel} m` },

    {
      id: 15,
      text: "Sun Rise",
      value: `${moment.unix(sunrise).format("h:mm A")}`,
    },

    {
      id: 16,
      text: "Sun Set",
      value: `${moment.unix(sunset).format("h:mm A")}`,
    },
  ];

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCityWeather(inputValue);
    setInputValue("");
  };

  return (
    <div className="rightSide">
      <form onSubmit={handleSubmit}>
        <div className="SearchSection">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="searchBar"
            placeholder="Search city here..."
            type="search"
            required
            autoComplete="off"
          />
          <button type="submit" className="searchButton">
            <SearchRoundedIcon />
          </button>
        </div>
      </form>
      <div className="weatherDetailsSection">
        <Fade bottom>
          <p className="weatherDetailsTxt">Weather Details</p>
        </Fade>
        <div className="WeatherDetails">
          {dataToShow.map((ele, idx) => {
            const { id, text, value } = ele;
            return (
              <>
                <div className="details_list" key={idx}>
                  <Fade bottom>
                    <span>{text}</span>

                    {loader ? (
                      <Puff
                        height="10"
                        width="10"
                        radius={1}
                        color="gray"
                        ariaLabel="puff-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                      />
                    ) : (
                      <span>{value}</span>
                    )}
                  </Fade>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightSide;
