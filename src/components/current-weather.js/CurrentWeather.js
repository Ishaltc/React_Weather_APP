import "./current-weather.css";

export default function CurrentWeather({ data }) {

  return (
    <div className="weather">
      <div className="top">
        <div>
          <div className="first">
            <p>{data.location.localtime}</p>
            <p className="city">{data.location.name}</p>
            <span className="country">({data.location.country})</span>
          </div>
          <p className="locate">{data.location.tz_id}</p>
          <div className="latitude">
            <p>Latitude:{data.location.lat}</p>
            <p>Longitude:{data.location.lon}</p>
          </div>

          <p className="weather-description">{data.current.condition.text}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={data.current.condition.icon}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.current.cloud)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label"> Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label"> Feels like</span>
            <span className="parameter-value">
              {Math.round(data.current.feelslike_c)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label"> Wind</span>
            <span className="parameter-value">
              {data.current.wind_degree}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Temperature</span>
            <span className="parameter-value">{data.current.temp_c}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label"> Pressure</span>
            <span className="parameter-value">{Math.round(data.current.pressure_in)}°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
