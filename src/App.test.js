import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const freebooter = screen.getByText(/freebooter/i);
  expect(freebooter).toBeInTheDocument();
});

test('App renders nav element', () => {
  render(<App />);
  const about = screen.getByText(/about/i);
  const products = screen.getByText(/products/i);
  const contact = screen.getByText(/contact/i);
  expect(about).toBeInTheDocument();
  expect(products).toBeInTheDocument();
  expect(contact).toBeInTheDocument();
});