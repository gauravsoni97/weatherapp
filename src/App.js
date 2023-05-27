import React, { useEffect, useState } from "react";
import LeftSide from "./Components/LeftSideUi/LeftSide";
import RightSide from "./Components/RightSideUi/RightSide";
import weatherBackground from "./Images/rain.jpg";
import { CirclesWithBar, Triangle } from "react-loader-spinner";
import WeatherImages from "./Components/jsonData/weatherImgs";

const App = () => {
  const weatherImgList = WeatherImages;

  const [weatherImage, setWeatherImage] = useState('');

  console.log("img from json", weatherImage);

  const [loader, setLoader] = useState(true);
  // ---------- Current location  ----------

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  // ---------- Weather api integration ---------------

  const [cityWeather, setCityWeather] = useState("");
  const [data, setData] = useState({
    temp: "",
    cityName: "",
    countryName: "",
    weatherType: "",
    pressure: "",
    humidity: "",
    lon: "",
    lat: "",
    windSpeed: "",
    windDeg: "",
    feelsLike: "",
    minTemp: "",
    maxTemp: "",
    seaLevel: "",
    groundLevel: "",
    sunrise: "",
    sunset: "",
    icon: "",
  });

  useEffect(() => {
    const weatherApi = async () => {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityWeather}&units=metric&appid=5dc4d0db9fc5256a0ace471a19e48871
     `;
      const response = await fetch(apiUrl);
      const result = await response.json();

      console.log("Weather Api Response", result);

      setData({
        temp: result.main.temp,
        cityName: result.name,
        countryName: result.sys.country,
        weatherType: result.weather[0].main,
        pressure: result.main.pressure,
        humidity: result.main.humidity,
        lon: result.coord.lon,
        lat: result.coord.lat,
        windSpeed: result.wind.speed,
        windDeg: result.wind.deg,
        feelsLike: result.main.feels_like,
        minTemp: result.main.temp_min,
        maxTemp: result.main.temp_max,
        seaLevel: result.main.sea_level,
        groundLevel: result.main.grnd_level,
        sunrise: result.sys.sunrise,
        sunset: result.sys.sunset,
        icon: result.weather[0].icon,
      });

      const currentWeatherImage = weatherImgList.filter((elem)=>{
        return elem.weather === data.weatherType 
      })

      setWeatherImage(currentWeatherImage);

      

      setLoader(false);
    };
    setLoader(true);
    setTimeout(() => {
      weatherApi();
    }, 500);
  }, [cityWeather]);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        setLoader(true); // Show loader initially

        const successCallback = (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setLoader(false); // Remove loader on success
        };

        const errorCallback = (error) => {
          setError(error.message);
          setLoader(true); // Show loader continuously on error
        };

        navigator.geolocation.getCurrentPosition(
          successCallback,
          errorCallback
        );
      } else {
        setError("Geolocation is not supported by your browser.");
      }
    };

    getLocation();
  }, []);

  // ----------- setting city name via cooordinates --------

  useEffect(() => {
    const getCityName = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10`
        );
        const data = await response.json();
        if (response.ok) {
          const current =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            data.address.hamlet ||
            "Unknown";
          setCityWeather(current);
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

  return (
    <div
      className="WeatherAppParent"
      style={{
        backgroundImage: `linear-gradient(45deg,
        rgba(0,0,0, 0.5),
        rgba(0,0,0, 0.5)),url(${weatherImage[0].img})`,
      }}
    >
      {error && loader ? (
        <>
          <Triangle
            height="80"
            width="80"
            color="white"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
          Please allow your location for fetching Weather Details
        </>
      ) : (
        <>
          <div className="blurLayer"></div>
          <div className="weatherapp_sections">
            <LeftSide
              loader={loader}
              data={data}
              weatherBackground={weatherImage[0].img}
            />
            <RightSide
              loader={loader}
              data={data}
              setCityWeather={setCityWeather}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
