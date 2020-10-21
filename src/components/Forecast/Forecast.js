import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './Forecast.scss';
import getIcon from '../Icons';
import { toCelsius } from '../../utils';


const Forecast = ({ selected, icon, date, temperature }) => 
  <div className={`forecast ${selected ? 'forecast--active': ''}`}>
    <div className="forecast__time">
      {moment(date).format('HH:mm')}
    </div>
    <div className="forecast__condition">{getIcon(icon)}</div>
    <div className="forecast__temperature">{toCelsius(temperature)}</div>
  </div>;


Forecast.propTypes = {
  selected: PropTypes.bool,
  date: PropTypes.instanceOf(Date).isRequired,
  temperature: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};


export default Forecast;
