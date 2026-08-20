import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';
import App from './App';

afterEach(() => {
  cleanup();
  window.history.pushState({}, '', '/');
});

function renderAt(path) {
  window.history.pushState({}, '', path);
  return render(<App />);
}

describe('public routes', () => {
  test('renders the redesigned studio homepage', async () => {
    renderAt('/');
    expect(await screen.findByRole('heading', { name: /small apps.*genuinely useful/i })).toBeInTheDocument();
  });

  test('renders the TipMint product page', async () => {
    renderAt('/tip-tracker');
    expect(await screen.findByRole('heading', { name: /own the shift.*know the total/i })).toBeInTheDocument();
  });

  test('renders TipMint privacy and legal facts', async () => {
    renderAt('/tip-tracker/privacy-policy');
    expect(await screen.findByRole('heading', { name: 'Privacy Policy' })).toBeInTheDocument();
    expect(screen.getByText(/shift records are stored locally on your device/i)).toBeInTheDocument();
  });

  test('renders dedicated TipMint support', async () => {
    renderAt('/tip-tracker/support');
    expect(await screen.findByRole('heading', { name: /let’s get you.*back on shift/i })).toBeInTheDocument();
  });

  test('preserves a lazy-loaded legacy legal route', async () => {
    renderAt('/sobertracker/privacy-policy');
    expect(await screen.findByRole('heading', { name: 'Privacy Policy' })).toBeInTheDocument();
    expect(screen.getByText(/welcome to sobertracker/i)).toBeInTheDocument();
  });

  test('renders the catch-all page', async () => {
    renderAt('/not-a-real-page');
    expect(await screen.findByRole('heading', { name: /this page hasn’t sprouted/i })).toBeInTheDocument();
  });
});
