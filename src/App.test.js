import React from 'react';
import { render, waitForElementToBeRemoved, act, fireEvent } from '@testing-library/react';
import App from './App';
import mockData from '../__mocks__/weather.json';

let scrollIntoViewMock = jest.fn();
document.body.scrollIntoView = scrollIntoViewMock;

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockData)
  })
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders the loading indicator when no data has been fetched', async() => {
  await act(async () => {
    const { container } = render(<App />);
    expect(container.querySelector('progress')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
    expect(container.querySelector('header.summary')).not.toBeInTheDocument();
    expect(container.querySelector('ul.forecastsList')).not.toBeInTheDocument();
  });
});

test('renders correctly when data has been fetched', async() => {
  await act(async () => {
    const { container } = render(<App />);
    await waitForElementToBeRemoved(() => container.querySelector('progress'));
    expect(container).toMatchSnapshot();
    expect(container.querySelector('header.summary')).toBeInTheDocument();
    expect(container.querySelector('ul.forecastsList')).toBeInTheDocument();
  })
});

test('shows the selected forecast and scroll to top on click', async() => {
  await act(async () => {
    const { container } = render(<App />);
    await waitForElementToBeRemoved(() => container.querySelector('progress'));
    expect(container.querySelector('.summary__condition__temperature').textContent).toBe('14°');
    fireEvent.click(container.querySelector('ul.forecastsList > li:nth-child(4)'));
    expect(scrollIntoViewMock).toHaveBeenCalled();
    expect(container).toMatchSnapshot();
    expect(container.querySelector('ul.forecastsList > li:nth-child(4) > article').classList.contains('forecast--active')).toBe(true);
    expect(container.querySelector('.summary__condition__temperature').textContent).toBe('0°');
  })
});
