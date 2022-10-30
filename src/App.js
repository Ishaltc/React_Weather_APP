
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Forecast from "./components/forecast/Forecast";
import CurrentWeather from "./components/current-weather.js/CurrentWeather";
import Search from "./components/search/Search";
import { getCurrentWeather, getForecast } from "./components/helpers/functions";




export default function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const { place } = useSelector((state) => ({ ...state }));
  const {count } = useSelector((state)=>({...state}))

  useEffect(() => {
    handleSearchChange();
  }, [place]);

  useEffect(() => {
    forecastDetails();
  }, [place]);

  const forecastDetails = async () => {
    const res = await getForecast(place,count);
    setForecast(res);
  };

  const handleSearchChange = async () => {
    const res = await getCurrentWeather(place);
    setCurrentWeather(res.data);
  };

  return (
    <div className="container">
      <Search onKeyDown={handleSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}
