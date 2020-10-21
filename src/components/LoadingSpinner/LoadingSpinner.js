import React from 'react';
import './LoadingSpinner.scss';

const LoadingSpinner = () => 
  <div className="spinner">
    <label className="spinner__label">
      Loading… 
    </label>
    <progress></progress>
  </div>;
  
export default LoadingSpinner;
