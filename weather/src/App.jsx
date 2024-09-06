import "./App.css";
import WeatherBox from "./WeatherBox";
import BtnCon from "./BtnCon";
import { useCallback, useState } from "react";
import { useEffect } from "react";

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
  const [weatherInfo, setWeatherInfo] = useState({});

  const cities = ["current", "hongkong", "paris", "new york", "seoul"];
  const [city, setCity] = useState("current");

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("API 호출 중 오류 발생");
      const data = await res.json();
      return {
        city: data.name,
        country: data.sys.country,
        temp: (data.main.temp - 273.15).toFixed(1),
        desc: data.weather[0].description,
      };
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  const getWeather = useCallback(
    async (lat, lng) => {
      let url = `${BASE_URL}?lat=${lat}&lon=${lng}&lang=kr&appid=${API_KEY}`;
      const result = await fetch(url);
      if (result) setWeatherInfo(result);
    },
    [fetchData]
  );

  const getWeatherByCity = async (city) => {
    async(city) =>{
      let url = `${BASE_URL}?q=${city}&lang=kr&appid=${API_KEY}`;
      const result = await fetch(url);
      if(result) setWeatherInfo(result);
    },[fetchData]
  },
);

  // 현재 위치 위도, 경도 가져오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      getWeather(latitude, longitude);
    });
  },[getWeather];

  useEffect(() => {
    if (city === "current") {
      getCurrentLocation();
    } else {
      getWeatherByCity(city);
    }
  }, [city]);
  // console.log(weatherInfo);

  const handleClick = (btnName) => {
    console.log(btnName);
    setCity(btnName);
  };

  return (
    <>
      <main className="main">
        <h1>날씨 api 활용 </h1>
        <WeatherBox data={weatherInfo} />
        <BtnCon cities={cities} handleClick={handleClick} />
      </main>
    </>
  );
}

export default App;
