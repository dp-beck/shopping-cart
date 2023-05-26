import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Animal Crossing Fish Market/i);
  expect(linkElement).toBeInTheDocument();
});
