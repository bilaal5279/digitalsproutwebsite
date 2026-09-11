import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';
import App from './App';
import { legalDirectory, studioProjects } from './site/siteData';

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
    expect(await screen.findByRole('heading', { name: /practical apps.*thoughtfully made/i })).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('23 projects');
    expect(screen.getAllByRole('article')).toHaveLength(26);
  });

  test('renders the TipMint product page', async () => {
    renderAt('/tip-tracker');
    expect(await screen.findByRole('heading', { name: /own the shift.*know the total/i })).toBeInTheDocument();
    expect(screen.getAllByText(/estimated earnings/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/net tips/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/\$5\.99/)).toBeInTheDocument();
    expect(screen.getByText(/\$34\.99/)).toBeInTheDocument();
    expect(screen.getByText(/does not calculate taxes or payroll deductions/i)).toBeInTheDocument();
  });

  test('renders TipMint privacy and legal facts', async () => {
    renderAt('/tip-tracker/privacy-policy');
    expect(await screen.findByRole('heading', { name: 'Privacy Policy' })).toBeInTheDocument();
    expect(screen.getByText(/shift records are stored locally on your device/i)).toBeInTheDocument();
    expect(screen.getByText(/this purchase analytics does not include/i)).toBeInTheDocument();
  });

  test('states the TipMint calculation limitation in its terms', async () => {
    renderAt('/tip-tracker/terms-of-service');
    expect(await screen.findByRole('heading', { name: 'Terms of Service' })).toBeInTheDocument();
    expect(screen.getByText(/\$5\.99 per month/i)).toBeInTheDocument();
    expect(screen.getByText(/\$34\.99 per year/i)).toBeInTheDocument();
    expect(screen.getByText(/does not calculate taxes or payroll deductions/i)).toBeInTheDocument();
  });

  test('renders dedicated TipMint support', async () => {
    renderAt('/tip-tracker/support');
    expect(await screen.findByRole('heading', { name: /let’s get you.*back on shift/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Delete your TipMint data.' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /request data deletion/i })).toHaveAttribute('href', 'mailto:info@digitalsprout.org?subject=TipMint%20Data%20Deletion');
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

describe('project directory', () => {
  test('searches by name and clears the search', () => {
    renderAt('/');
    fireEvent.change(screen.getByRole('searchbox', { name: 'Search apps' }), { target: { value: ' luma ' } });
    expect(screen.getByRole('status')).toHaveTextContent('1 project');
    expect(screen.getByRole('heading', { name: 'Luma' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Revive' })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Clear app search' }));
    expect(screen.getByRole('status')).toHaveTextContent('23 projects');
  });

  test('combines category filters and search, then resets empty results', () => {
    renderAt('/');
    fireEvent.click(screen.getByRole('button', { name: 'Wellbeing' }));
    expect(screen.getByRole('button', { name: 'Wellbeing' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('status')).toHaveTextContent(`${studioProjects.filter((app) => app.category === 'Wellbeing').length} projects in Wellbeing`);
    fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'TipMint' } });
    expect(screen.getByRole('heading', { name: 'No apps found' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Show all apps' }));
    expect(screen.getByRole('searchbox')).toHaveValue('');
    expect(screen.getByRole('button', { name: 'All apps' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('status')).toHaveTextContent('23 projects');
  });

  test('keeps every app policy at its original URL in the support hub', () => {
    renderAt('/support');
    for (const app of legalDirectory) {
      const card = screen.getByRole('heading', { name: app.name, level: 3 }).closest('article');
      expect(within(card).getByRole('link', { name: `${app.name} privacy policy` })).toHaveAttribute('href', app.privacy);
      if (app.terms) expect(within(card).getByRole('link', { name: `${app.name} terms of service` })).toHaveAttribute('href', app.terms);
    }
  });
});

const policyPaths = legalDirectory.flatMap((app) => [app.privacy, app.terms].filter(Boolean));
const preservedAliases = ['/ask-tarot/terms', '/puptempo/terms', '/throughline/terms', '/oche/privacy', '/oche/terms', '/luma/privacy', '/luma/terms', '/migraine-tracker/privacy', '/migraine-tracker/terms', '/vocal-remover/privacy', '/vocal-remover/terms'];

describe('all published policy URLs', () => {
  test.each([...policyPaths, ...preservedAliases])('%s renders its legal content', async (path) => {
    renderAt(path);
    expect(await screen.findByRole('heading', { level: 1 })).toHaveTextContent(/privacy|terms|end user license agreement/i);
    expect(screen.queryByRole('heading', { name: /this page hasn’t sprouted/i })).not.toBeInTheDocument();
  });
});
