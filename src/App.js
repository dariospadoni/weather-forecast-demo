import React, { useState, useEffect } from 'react';
import ForecastCard from './components/ForecastCard/ForecastCard';
import Summary from './components/Summary/Summary';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import './App.css';

/* using some public proxy to avoid CORS issues */
const WEATHER_DATA_URL = 'https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22';

function App() {
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState({});
  const [forecasts, setForecasts] = useState([]);
  const [summary, setSummary] = useState();
  const [selectedForecast, setSelectedForecast] = useState();

  const extractSummary = data => ({
    status: data.weather[0].main,
    date: data.dt_txt,
    tempMin: data.main.temp_min,
    tempMax: data.main.temp_max,
    temp: data.main.temp,
    icon: data.weather[0].icon,
  });

  const selectForecast = data => {
    setSelectedForecast(data.dt);
    setSummary(extractSummary(data));
    // smoothly scroll to top (useful for small screens)
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    fetch(WEATHER_DATA_URL)
      .then(response => response.json())
      .then(data => {
        setCity(data.city);
        setForecasts(data.list);
        setSelectedForecast(data.list[0].dt);
        setSummary(extractSummary(data.list[0]));
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">

      {loading && <LoadingSpinner />}

      {!loading && <>
        
        <Summary weather={summary} cityName={city.name} />
        
        <ul className="forecastsList">
          {forecasts.map((d) =>
            <li key={d.dt} onClick={() => selectForecast(d)}  > 
              <ForecastCard
                selected={selectedForecast === d.dt}
                temperature={d.main.temp}
                date={new Date(d.dt_txt)} 
                icon={d.weather[0].icon} 
              />
            </li>)
          }
        </ul>
      </>}

    </div>
  );
}

export default App;
