import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './Summary.css';
import getIcon from '../Icons';
import { toCelsius } from '../../utils';


const Summary = ({ weather, cityName }) => {
  const date = moment(weather.date);
  return (
    <main className="summary">
      <div className="icon">
        {getIcon(weather.icon)}
      </div>
      <div className="condition"> 
        <div className="overline">
          <div>
            {weather.status} 
          </div>
          <div>
            {toCelsius(weather.tempMax)} / {toCelsius(weather.tempMin)}
          </div>
        </div>
        <div className="temperature">
          {toCelsius(weather.temp)}
        </div>    
      </div>
      <div className="city"> 
        <div className="overline">
          {cityName}
        </div>
        <div className="date">
          {date.format('dddd')}<br />
          {date.format('D. MMMM')}
        </div>
      </div>
    </main>);
};

Summary.propTypes = {
  cityName: PropTypes.string.isRequired,
  weather: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    tempMax: PropTypes.number.isRequired,
    tempMin: PropTypes.number.isRequired,
  }).isRequired,
};


export default Summary;
