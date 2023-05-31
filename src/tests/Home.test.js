import { render, screen } from '@testing-library/react';
import Home from '../Home';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Welcome to the Animal Crossing Fish Market/i);
  expect(linkElement).toBeInTheDocument();
});
