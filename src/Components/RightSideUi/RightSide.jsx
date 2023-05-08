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
    </div>
  );
};

export default RightSide;
