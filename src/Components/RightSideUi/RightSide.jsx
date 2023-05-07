import React from 'react'
import WeatherFilter from './WeatherFilter'
import WeatherDetails from './WeatherDetails'
import "./rightside.css"

const RightSide = () => {
  return (
    <div className='rightSide'>
        <WeatherFilter/>
        <WeatherDetails/>
    </div>
  )
}

export default RightSide