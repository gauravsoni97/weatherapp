import React, { useEffect, useState } from "react";
import "./rightside.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const RightSide = ({ setCityWeather, weatherApi }) => {
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
            <span>86%</span>
          </div>
          <div className="details_list">
            <span>Pressure</span>
            <span>86%</span>
          </div>
          <div className="details_list">
            <span>Humidity</span>
            <span>86%</span>
          </div>
          <div className="details_list">
            <span>Sea Level</span>
            <span>86%</span>
          </div>
          <div className="details_list">
            <span>Sun Rise</span>
            <span>86%</span>
          </div>
          <div className="details_list">
            <span>Sun Set</span>
            <span>86%</span>
          </div>
          <div className="details_list">
            <span>Wind Speed</span>
            <span>86%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
