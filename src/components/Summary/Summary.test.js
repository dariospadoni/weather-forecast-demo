import React from 'react';
import { render } from '@testing-library/react';
import Summary from './Summary';

const mockData = {
  cityName: 'Berlin',
  weather: {
    icon: '01d',
    status: 'Clean',
    date: '2020-08-04 18:00:00',
    temp: 293.55,
    tempMax: 294.05,
    tempMin:  293.55,
  }
}

it('renders correctly', () => {
  const component = render(<Summary cityName={mockData.cityName} weather={mockData.weather} />);
  expect(component).toMatchSnapshot();
});
