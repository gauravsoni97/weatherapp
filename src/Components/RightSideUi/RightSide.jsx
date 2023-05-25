import React, { useEffect, useState } from "react";
import "./rightside.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import moment from "moment/moment";

const RightSide = ({ setCityWeather, data }) => {
  const {
    temp,
    cityName,
    countryName,
    weatherType,
    pressure,
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
        <p className="weatherDetailsTxt">Weather Details</p>
        <div className="WeatherDetails">
          <div className="details_list">
            <span>City Name</span>
            <span>{cityName}</span>
          </div>
          <div className="details_list">
            <span>Country</span>
            <span>{countryName}</span>
          </div>
          <div className="details_list">
            <span>Temprature</span>
            <span>{temp} °C</span>
          </div>

          <div className="details_list">
            <span>Minmum Temprature</span>
            <span>{minTemp} °C</span>
          </div>
          <div className="details_list">
            <span>Maximum Temprature</span>
            <span>{maxTemp} °C</span>
          </div>
          
          <div className="details_list">
            <span>Pressure</span>
            <span>{pressure} mb</span>
          </div>
          <div className="details_list">
            <span>Weather</span>
            <span>{weatherType}</span>
          </div>

          <div className="details_list">
            <span>Wind Speed</span>
            <span>{windSpeed}Kmph</span>
          </div>
          <div className="details_list">
            <span>Wind Degree</span>
            <span>{windDeg}</span>
          </div>
          <div className="details_list">
            <span>Longitude</span>
            <span>{lon}</span>
          </div>

          <div className="details_list">
            <span>Latitude</span>
            <span>{lat}</span>
          </div>
          <div className="details_list">
            <span>Feels Like</span>
            <span>{feelsLike}</span>
          </div>
       
          <div className="details_list">
            <span>Sea Level</span>
            <span>{seaLevel} m</span>
          </div>
          <div className="details_list">
            <span>Ground Level</span>
            <span>{groundLevel} m</span>
          </div>
          <div className="details_list">
            <span>Sun Rise</span>
            <span>{moment.unix(sunrise).format('h:mm A')}</span>
          </div>
          <div className="details_list">
            <span>Sun Set</span>
            <span>{moment.unix(sunset).format('h:mm A')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
