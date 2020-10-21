import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './Forecast.css';
import getIcon from '../Icons';
import { toCelsius } from '../../utils';


const Forecast = ({ selected, icon, date, temperature }) => 
  <div className={`forecast ${selected ? 'active': ''}`}>
    <div className="time">
      {moment(date).format('HH:mm')}
    </div>
    <div className="condition">{getIcon(icon)}</div>
    <div className="temperature">{toCelsius(temperature)}</div>
  </div>;

Forecast.propTypes = {
  selected: PropTypes.bool,
  date: PropTypes.instanceOf(Date).isRequired,
  temperature: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Forecast;
