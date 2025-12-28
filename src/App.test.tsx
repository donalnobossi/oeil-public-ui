import { test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('App header should have correct value', () => {
  // Render the component
  render(<App />);

  // Get the count display element
  const pageTitle = screen.getByTestId('page-title');
  
  // Initial state assertion
  expect(pageTitle).toHaveTextContent('Vite + React');
});

test('App increments correctly', () => {
    // Render the component
    render(<App />);

    // Get the count display element
    const btnCount = screen.getByTestId('btn-count');

    // Initial state assertion
    expect(btnCount).toHaveTextContent('count is 0');

    // Simulate user clicking the "btnCount" button
    fireEvent.click(btnCount);

    // Assertion after incrementing
    expect(btnCount).toHaveTextContent('count is 1');
});