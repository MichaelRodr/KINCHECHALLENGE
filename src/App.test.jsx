import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Apollo app react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/First search App/i);
  expect(linkElement).toBeInTheDocument();
});
