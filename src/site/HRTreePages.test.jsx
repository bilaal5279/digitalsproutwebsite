import { cleanup, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, expect, test } from 'vitest';
import App from '../App';

afterEach(() => {
  cleanup();
  window.history.pushState({}, '', '/');
});

function renderAt(path) {
  window.history.pushState({}, '', path);
  return render(<App />);
}

test('HRTree privacy distinguishes local records, exports, backups and optional Apple features', async () => {
  renderAt('/hrtree/privacy-policy');
  expect(await screen.findByRole('heading', { name: 'Privacy Policy' })).toBeInTheDocument();
  expect(screen.getByText(/we do not operate a backend or cloud journal database/i)).toHaveTextContent(/no app analytics SDK.*advertising SDK.*automatic cloud sync/i);
  expect(screen.getByText(/when you create a care report/i)).toHaveTextContent(/does not automatically send it/i);
  expect(screen.getByText(/depending on your device settings, iCloud or computer backups/i)).toBeInTheDocument();
  expect(screen.getByText(/HRTree may ask for a rating/i)).toHaveTextContent(/StoreKit.*locally/i);
  await waitFor(() => expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://digitalsprout.org/hrtree/privacy-policy'));
  expect(screen.getByRole('link', { name: 'Read the Terms of Service' })).toHaveAttribute('href', '/hrtree/terms-of-service');
});

test('HRTree terms explain clinical and reminder limits without removing consumer rights', async () => {
  renderAt('/hrtree/terms-of-service');
  expect(await screen.findByRole('heading', { name: 'Terms of Service' })).toBeInTheDocument();
  expect(screen.getByText(/it does not diagnose a condition/i)).toBeInTheDocument();
  expect(screen.getByText(/reminders are optional and depend on/i)).toHaveTextContent(/Delivery is not guaranteed/i);
  expect(screen.getByText(/you retain ownership of the information/i)).toBeInTheDocument();
  expect(screen.getByText(/nothing in these terms excludes or limits liability/i)).toBeInTheDocument();
  expect(screen.getByText(/these terms are governed by the laws of England and Wales/i)).toHaveTextContent(/mandatory consumer protections/i);
});

test('HRTree support provides a working contact and local deletion instructions', async () => {
  renderAt('/hrtree/support');
  expect(await screen.findByRole('heading', { name: 'A little help, when you need it.' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Delete your HRTree data' })).toBeInTheDocument();
  expect(screen.getByText(/open HRTree’s settings, choose Reset local data/i)).toHaveTextContent(/Delete all records/);
  expect(screen.getByRole('link', { name: 'email HRTree support' })).toHaveAttribute('href', 'mailto:info@digitalsprout.org?subject=HRTree%20Support');
  expect(screen.getByRole('link', { name: 'send a privacy request' })).toHaveAttribute('href', 'mailto:info@digitalsprout.org?subject=HRTree%20Privacy%20Request');
});

test.each([
  ['/hrtree-privacy', 'Privacy Policy', '/hrtree/privacy-policy'],
  ['/hrtree-terms', 'Terms of Service', '/hrtree/terms-of-service'],
])('HRTree short URL %s resolves to the canonical document', async (path, title, canonical) => {
  renderAt(path);
  expect(await screen.findByRole('heading', { name: title })).toBeInTheDocument();
  await waitFor(() => expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', `https://digitalsprout.org${canonical}`));
});

test('HRTree policies and support are discoverable in the existing directory', async () => {
  renderAt('/support');
  const card = (await screen.findByRole('heading', { name: 'HRTree', level: 3 })).closest('article');
  expect(within(card).getByRole('link', { name: 'HRTree support' })).toHaveAttribute('href', '/hrtree/support');
  expect(within(card).getByRole('link', { name: 'HRTree privacy policy' })).toHaveAttribute('href', '/hrtree/privacy-policy');
  expect(within(card).getByRole('link', { name: 'HRTree terms of service' })).toHaveAttribute('href', '/hrtree/terms-of-service');
});
