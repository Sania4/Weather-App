import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox"
import "./WeatherApp.css"
import { useState } from "react";


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
      city: "Bangalore",
      feelsLike: 25.63,
      humidity: 76,
      temp: 25.08,
      tempMax: 25.8,
      tempMin: 23.9,
      weather: "mist"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }

    return (
        <div className="weather-app">
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}