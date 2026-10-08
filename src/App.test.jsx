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
    expect(screen.getByRole('status')).toHaveTextContent(`${studioProjects.length} projects`);
    expect(screen.getAllByRole('article')).toHaveLength(studioProjects.length + 3);
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

  test('renders Haulfolio privacy disclosures and canonical URL', async () => {
    renderAt('/haulfolio/privacy-policy');
    expect(await screen.findByRole('heading', { name: 'Privacy Policy' })).toBeInTheDocument();
    expect(screen.getByText(/randomly generated app user identifier/i)).toBeInTheDocument();
    expect(screen.getByText(/RevenueCat provides subscription analytics/i)).toBeInTheDocument();
    expect(screen.getByText(/stored locally in the app’s storage/i)).toBeInTheDocument();
    expect(screen.getByText(/random identifier for this app installation/i)).toHaveTextContent(/failed update launches or startup errors/i);
    expect(screen.getByText(/We do not use the update service to upload/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Expo’s Privacy Policy' })).toHaveAttribute('href', 'https://expo.dev/privacy');
    expect(screen.getByText(/On Android, barcode scanning uses Google ML Kit/i)).toHaveTextContent(/installation identifier.*scanner usage events.*error diagnostics/i);
    expect(screen.getByText(/On Android, barcode scanning uses Google ML Kit/i)).toHaveTextContent(/not sent to Google by the scanner/i);
    expect(screen.getByText(/Camera access is optional, and manual barcode entry remains available/i)).toHaveTextContent(/does not promise that all ML Kit technical reporting is disabled/i);
    expect(screen.getByRole('link', { name: 'ML Kit privacy information' })).toHaveAttribute('href', 'https://developers.google.com/ml-kit/terms');
    expect(screen.getByRole('link', { name: 'Android SDK data disclosure' })).toHaveAttribute('href', 'https://developers.google.com/ml-kit/android-data-disclosure');
    expect(document.title).toBe('Privacy Policy — Haulfolio');
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://digitalsprout.org/haulfolio/privacy-policy');
    expect(screen.getByRole('link', { name: 'Read the Terms of Service' })).toHaveAttribute('href', '/haulfolio/terms-of-service');
    expect(screen.getByText(/billing initialization associates a pseudonymous identifier/i)).toHaveTextContent(/purchase and restore continuity.*eBay service does not contact RevenueCat/i);
    expect(screen.getByText(/eBay imports do not require a subscription check with RevenueCat/i)).toHaveTextContent(/random device key.*privacy receipts/i);
    expect(screen.getByText(/After you have used the app, it may request a rating/i)).toHaveTextContent(/request timestamps and app versions locally.*does not tell the app whether you submitted a rating/i);
    expect(screen.getByText(/minimal deletion marker in Google Cloud Firestore/i)).toHaveTextContent(/London region.*does not contain the seller’s username/i);
    expect(screen.getByText(/The minimal eBay deletion markers have no automatic expiry/i)).toBeInTheDocument();
    expect(screen.getByText(/While an eBay source cannot be verified/i)).toHaveTextContent(/imported records are hidden/i);
    expect(screen.getByText(/Backups do not include store receipts/i)).toHaveTextContent(/eBay authorization tokens or the secret device connection key/i);
    expect(screen.getByText(/cannot remotely remove files you already saved/i)).toBeInTheDocument();
    expect(screen.getByText(/When you submit an in-app eBay search/i)).toHaveTextContent(/search text or barcode.*service and eBay.*does not send your subscription identifier to RevenueCat/i);
    expect(screen.getByText(/Public search results are held in working memory/i)).toHaveTextContent(/expire within two minutes.*does not save these results to inventory, drafts or backups/i);
    expect(screen.getByText(/To invalidate public search previews/i)).toHaveTextContent(/contains no seller details or search history.*not a promise of immediate erasure/i);
  });

  test('renders Haulfolio subscription terms and retained record access', async () => {
    renderAt('/haulfolio/terms-of-service');
    expect(await screen.findByRole('heading', { name: 'Terms of Service' })).toBeInTheDocument();
    expect(screen.getByText(/free plan allows seven owned, unsold physical units/i)).toHaveTextContent(/Each unit counts.*Archived unsold units still count.*All tools are available without Pro/i);
    expect(screen.getByText(/Pro removes only the owned, unsold inventory limit/i)).toBeInTheDocument();
    expect(screen.getByText(/If Pro expires, existing records are not removed merely because your subscription ended/i)).toHaveTextContent(/subject to the eBay privacy checks/i);
    expect(screen.getByText(/If Pro expires, existing records are not removed merely because your subscription ended/i)).toHaveTextContent(/manual additions, purchase lots and unsold imports.*Physical returns and backup restoration remain available even above the allowance/i);
    expect(screen.getByText(/does not itself cancel automatic renewal/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Read the Privacy Policy' })).toHaveAttribute('href', '/haulfolio/privacy-policy');
    expect(screen.getByText(/Haulfolio itself does not require an account or sign-in/i)).toBeInTheDocument();
    expect(screen.getByText(/eBay-derived records require online account-deletion checks/i)).toHaveTextContent(/including copies it manages in recovery storage and backups/i);
    expect(screen.getByText(/They do not transfer eBay authorization/i)).toHaveTextContent(/original device’s secure key/i);
    expect(screen.getByText(/does not publish or edit marketplace listings/i)).toBeInTheDocument();
    expect(screen.getByText(/Public in-app results are temporary previews/i)).toHaveTextContent(/Open the listing on eBay to check its current details/i);
    expect(screen.getByRole('link', { name: 'eBay API License Agreement' })).toHaveAttribute('href', 'https://developer.ebay.com/join/api-license-agreement');
  });

  test('makes both Haulfolio documents discoverable from support', async () => {
    renderAt('/support');
    const names = await screen.findAllByText('Haulfolio');
    const entry = names.map((name) => name.closest('article')).find(Boolean);
    expect(entry).toBeInTheDocument();
    expect(within(entry).getByRole('link', { name: 'Haulfolio privacy policy' })).toHaveAttribute('href', '/haulfolio/privacy-policy');
    expect(within(entry).getByRole('link', { name: 'Haulfolio terms of service' })).toHaveAttribute('href', '/haulfolio/terms-of-service');
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
    expect(screen.getByRole('status')).toHaveTextContent(`${studioProjects.length} projects`);
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
    expect(screen.getByRole('status')).toHaveTextContent(`${studioProjects.length} projects`);
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
