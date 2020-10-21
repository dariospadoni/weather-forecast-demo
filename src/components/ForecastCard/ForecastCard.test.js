import React from 'react';
import { render } from '@testing-library/react';
import ForecastCard from './ForecastCard';
 
it('renders correctly when it is not selected', () => {
  const { container } = render(<ForecastCard date={new Date('2020-08-04 18:00:00')} icon={'01d'} temperature={294.05} selected={false} />);
  expect(container.firstChild.classList.contains('forecast--active')).toBe(false);
  expect(container).toMatchSnapshot();
});

it('renders correctly when selected', () => {
  const { container }  = render(<ForecastCard date={new Date('2020-08-04 18:00:00')} icon={'01d'} temperature={294.05} selected={true} />);
  expect(container.firstChild.classList.contains('forecast--active')).toBe(true);
  expect(container).toMatchSnapshot();
});
