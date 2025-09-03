import React from "react";
import styles from "./Weather.module.css";

const weatherData = {
  hanoi: {
    city: "Hà Nội",
    temp: 22,
    weather: "Nhiều mây",
    humidity: 65,
    wind: 24,
    rain: 0,
  },
  hcm: {
    city: "TP.HCM",
    temp: 20,
    weather: "Có mưa",
    humidity: 78,
    wind: 23,
    rain: 50,
  },
  danang: {
    city: "Đà Nẵng",
    temp: 30,
    weather: "Nắng gắt",
    humidity: 82,
    wind: 20,
    rain: 5,
  },
};

const random = [5, -5];

const WeatherApp = () => {
  const [location, setLocation] = React.useState("hanoi");
  const [weather, setWeather] = React.useState(weatherData["hanoi"]);

  const handleLocationChange = (event) => {
    const selectedLocation = event.target.value;
    setLocation(selectedLocation);
    setWeather(weatherData[selectedLocation]);
  };

  const handleSetImgWeather = () => {
    if (weather.temp >= 26) {
      return "icons8-sun-96.png";
    } else if (weather.temp <= 25 && weather.rain >= 50) {
      return "icons8-storm-96.png";
    } else if (weather.temp <= 25) {
      return "icons8-partly-cloudy-day-96.png";
    }
  };

  function updateWeather(weatherRefresh, random) {
    const getValue = () => {
      if (weatherRefresh.temp > 40 || weatherRefresh.temp < 0) {
        weatherRefresh.temp = 30;
        return 0;
      }
      if (weatherRefresh.wind < 10 || weatherRefresh.wind > 50) {
        weatherRefresh.wind = 20;
        weatherRefresh.humidity = 20;
        return 0;
      }
      if (weatherRefresh.rain < 10 || weatherRefresh.rain >= 90) {
        weatherRefresh.rain = 30;
        return 0;
      }
      return random[Math.floor(Math.random() * random.length)];
    };

    ["temp", "wind", "humidity", "rain"].forEach((key) => {
      weatherRefresh[key] += getValue();
    });

    return weatherRefresh;
  }

  const refreshWeather = () => {
    let weatherRefresh = {
      ...weather,
    };
    weatherRefresh = updateWeather(weatherRefresh, random);

    if (weatherRefresh.temp >= 26) {
      weatherRefresh.weather = "Nắng gắt";
    } else if (weatherRefresh.temp <= 25 && weather.rain >= 50) {
      weatherRefresh.weather = "Mưa nhẹ";
    } else if (weatherRefresh.temp <= 25) {
      weatherRefresh.weather = "Nhiều mây";
    }

    setWeather(weatherRefresh);
  };

  return (
    <div className={styles.container}>
      <div className={styles["weather-phone"]}>
        <div className={styles["weather-card"]}>
          <div className={styles["location-container"]}>
            <i className="fa-solid fa-location-dot"></i>
            <select
              value={location}
              onChange={handleLocationChange}
              className={styles.location}
            >
              <option value="hanoi">Ha Noi</option>
              <option value="hcm">TP HCM</option>
              <option value="danang">Nha Trang</option>
            </select>
          </div>
          <figure className={styles.icon}>
            <img src={handleSetImgWeather()} alt="" />
          </figure>
          <div className={styles.temperature}>
            <p>
              {weather.temp}
              <span>°</span>
            </p>
          </div>
          <div className={styles.status}>{weather.weather}</div>
          <div className={styles.date}>Monday, 17 May</div>

          <div className={styles.details}>
            <div className={styles.detail}>
              <span>{weather.wind} km/h</span>
              <span>Wind</span>
            </div>
            <div className={styles.detail}>
              <span>{weather.humidity}%</span>
              <span>Humidity</span>
            </div>
            <div className={styles.detail}>
              <span>{weather.rain}%</span>
              <span>Rain</span>
            </div>
          </div>
        </div>

        <div onClick={refreshWeather} className={styles["weather-refresh"]}>
          <i className="fa-solid fa-rotate-right"></i>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
