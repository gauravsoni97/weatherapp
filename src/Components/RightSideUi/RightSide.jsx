import React from "react";
import "./rightside.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const RightSide = () => {
  return (
    <div className="rightSide">
      <div className="SearchSection">
        <input className="searchBar" type="search" required autoComplete="off" />
        <button className="searchButton">
          <SearchRoundedIcon />
        </button>
      </div>
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
