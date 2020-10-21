import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './ForecastCard.scss';
import getIcon from '../WeatherIcons';
import { toCelsius } from '../../utils';


const ForecastCard = ({ selected, icon, date, temperature }) => 
  <article className={`forecast__card ${selected ? 'forecast--active': ''}`}>
    <div className="forecast__card__time">
      {moment(date).format('HH:mm')}
    </div>
    <div className="forecast__card__condition">
      {getIcon(icon)}
      </div>
    <div className="forecast__card__temperature">
      {toCelsius(temperature)}
    </div>
  </article>;


ForecastCard.propTypes = {
  selected: PropTypes.bool,
  date: PropTypes.instanceOf(Date).isRequired,
  temperature: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};


export default ForecastCard;
