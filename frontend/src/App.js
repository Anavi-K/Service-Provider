import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const res = await axios.get(
  `https://service-provider-w.onrender.com/weather?city=${city}`
);
      setWeather(res.data);
    } catch (err) {
      alert("Could not fetch weather. Make sure the weather API is running.");
      setWeather(null);
    }
  };

  return (
    <div className="app-container">
      <h1>🌤 Weather Checker</h1>
      <div className="card">
        <input
          type="text"
          placeholder="Enter city (e.g., Chennai)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Check Weather</button>

        {weather && (
          <div className="result">
            <h2>{weather.city}</h2>
            <p>{weather.temp}°C</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
