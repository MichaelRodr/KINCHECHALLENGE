import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Apollo app react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/My first Apollo app/i);
  expect(linkElement).toBeInTheDocument();
});
