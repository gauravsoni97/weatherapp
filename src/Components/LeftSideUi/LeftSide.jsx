import React from "react";
import "./LeftSide.css";


const LeftSide = ({weatherBackground}) => {
  return (
    <div className="weatherBackground" style={{ backgroundImage: `URL(${weatherBackground})` }}>
      {/* show city temprature time date and weather type */}
      <h1>India</h1>
    </div>
  );
};

export default LeftSide;
