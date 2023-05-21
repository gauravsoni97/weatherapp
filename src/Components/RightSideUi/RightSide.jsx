import React, { useEffect, useState } from "react";
import "./rightside.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const RightSide = ({ setCityWeather, data }) => {
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
            <span>Temprature</span>
            <span>{data.temp}</span>
          </div>
          <div className="details_list">
            <span>Pressure</span>
            <span>{data.pressure} mb</span>
          </div>
          <div className="details_list">
            <span>Weather</span>
            <span>{data.weather}</span>
          </div>
          <div className="details_list">
            <span>Humidity</span>
            <span>{data.humidity} g.m<sup>-3</sup></span>
          </div>
          <div className="details_list">
            <span>Wind Speed</span>
            <span>{data.windSpeed}Kmph</span>
          </div>
          <div className="details_list">
            <span>Longitude</span>
            <span>{data.lon}</span>
          </div>
     
          <div className="details_list">
            <span>Latitude</span>
            <span>{data.lat}</span>
          </div>
     
        
        </div>
      </div>
    </div>
  );
};

export default RightSide;
