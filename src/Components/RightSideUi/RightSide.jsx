import React, { useState } from "react";
import "./rightside.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const RightSide = ({ setCityWeather }) => {
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
        <p>Weather Details</p>

        <div className="WeatherDetails">
          <div className="details_list">
            <span>Cloudy</span>
            <span>86%</span>
          </div>
          <div className="details_list">
            <span>Humidity</span>
            <span>86%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
