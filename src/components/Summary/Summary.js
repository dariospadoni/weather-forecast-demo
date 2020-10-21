import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './Summary.scss';
import getIcon from '../WeatherIcons';
import { toCelsius } from '../../utils';


const Summary = ({ weather, cityName }) => {
  const date = moment(weather.date);
  return (
    <header className="summary">
      <article className="summary__icon">
        {getIcon(weather.icon)}
      </article>
      <article className="summary__condition"> 
        <div className="summary__overline summary__overline--status">
          <div>
            {weather.status} 
          </div>
          <div>
            {toCelsius(weather.tempMax)} / {toCelsius(weather.tempMin)}
          </div>
        </div>
        <div className="summary__condition__temperature">
          {toCelsius(weather.temp)}
        </div>    
      </article>
      <article> 
        <div className="summary__overline">
          {cityName}
        </div>
        <div className="summary__date">
          {date.format('dddd')}<br />
          {date.format('D. MMMM')}
        </div>
      </article>
    </header>);
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
