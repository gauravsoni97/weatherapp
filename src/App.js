import React, { useEffect, useState } from "react";
import LeftSide from "./Components/LeftSideUi/LeftSide";
import RightSide from "./Components/RightSideUi/RightSide";
import weatherBackground from "./Images/rain.jpg";

const App = () => {
  // ------- Current Location--------
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);

  // ------------------------------------

  const [cityWeather, setCityWeather] = useState("");
  const [data, setData] = useState({
    temp: 0,
    pressure: 0,
    humidity: 0,
    weather: "",
    icon: "",
    windSpeed: 0,
    lon: 0,
    lat: 0,
    city: "",
    state: "",
    country: "",
  });

  useEffect(() => {
    const weatherApi = async () => {
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=702dbdf22774e470cac8d592973f8a2f&query=${cityWeather}`
      );
      const result = await response.json();

      setData({
        temp: result.current.temperature,
        pressure: result.current.pressure,
        humidity: result.current.humidity,
        weather: result.current.weather_descriptions,
        icon: result.weather_icons,
        windSpeed: result.current.wind_speed,
        lon: result.location.lon,
        lat: result.location.lat,
        city: result.location.name,
        state: result.location.region,
        country: result.location.country,
      });
    };

    weatherApi();
  }, [cityWeather]);
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            setError(error.message);
          }
        );
      } else {
        setError("Geolocation is not supported by your browser.");
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    const getCityName = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10`
        );
        const data = await response.json();
        if (response.ok) {
          const currentCity =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            data.address.hamlet ||
            "Unknown";
          setCity(currentCity);
        } else {
          setError("Unable to retrieve city name.");
        }
      } catch (error) {
        setError("An error occurred while fetching the city name.");
      }
    };

    if (latitude && longitude) {
      getCityName();
    }
  }, [latitude, longitude]);

  useEffect(() => {
    setCityWeather(city);
  }, []);

  return (
    <div
      className="WeatherAppParent"
      style={{
        backgroundImage: `linear-gradient(45deg,
        rgba(0,0,0, 0.5),
        rgba(0,0,0, 0.5)),url(${weatherBackground})`,
      }}
    >
      <div className="blurLayer"></div>
      <div className="weatherapp_sections">
        {latitude && longitude ? (
          <>
            <LeftSide data={data} weatherBackground={weatherBackground} />
            <RightSide data={data} setCityWeather={setCityWeather} />
          </>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default App;
