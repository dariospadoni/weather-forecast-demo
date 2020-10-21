import React from 'react';
import { ReactComponent as SunIcon } from '../icons/weather-sun.svg';

const getIcon = iconCode => {
	switch(iconCode) {
		case '01d':
			return <SunIcon />;
		/* 
			Here there would be other mapping between icon returned by the API and local icons
		*/ 
		default:
			console.log('default');
			return <SunIcon />;
	}
}


export default getIcon;
