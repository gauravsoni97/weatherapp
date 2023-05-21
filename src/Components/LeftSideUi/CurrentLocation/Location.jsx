import React, { useEffect, useState } from "react";

const LocationComponent = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);

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

  return (
    <div>
      {latitude && longitude ? (
        <div>
          Latitude: {latitude}
          <br />
          Longitude: {longitude}
          <br />
          City: {city || "Loading..."}
        </div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default LocationComponent;
