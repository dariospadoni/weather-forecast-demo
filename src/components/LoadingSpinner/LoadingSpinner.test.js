import React from 'react';
import { render } from '@testing-library/react';
import LoadingSpinner from './LoadingSpinner';
 
it('renders correctly', () => {
  const component = render(<LoadingSpinner />);
  expect(component).toMatchSnapshot();
});
