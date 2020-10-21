import React from 'react';
import { render } from '@testing-library/react';
import LoadingSpinner from './LoadingSpinner';
 
it('renders correctly', () => {
  const { container, getByText } = render(<LoadingSpinner />);
  const loadingText = getByText(/Loading…/);
  expect(loadingText).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
