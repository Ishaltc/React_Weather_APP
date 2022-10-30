import axios from "axios";

import { FORECAST_API_URL, WEATHER_API_URL } from "../../api";

export const getCurrentWeather = async (place) => {
  try {
    const data = await axios.get(
      `${WEATHER_API_URL}${place}&agi=no&units=metric`
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

// forecast function
export const getForecast = async (place, count) => {
  try {
    const data = await axios.get(
      `${FORECAST_API_URL}${place}&days=${count}&aqi=no&alerts=no`
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
