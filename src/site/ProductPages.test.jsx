import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';
import App from '../App';
import { studioProjects } from './siteData';

afterEach(() => {
  cleanup();
  window.history.pushState({}, '', '/');
});

function renderAt(path) {
  window.history.pushState({}, '', path);
  return render(<App />);
}

function structuredData() {
  const value = JSON.parse(document.getElementById('page-structured-data')?.textContent || 'null');
  return Array.isArray(value) ? value : value ? [value] : [];
}

describe('individual app discovery', () => {
  test.each(studioProjects)('$name has a complete product page and accurate search metadata', async (app) => {
    renderAt(app.product);
    expect(await screen.findByRole('heading', { level: 1 })).toHaveTextContent(app.tagline);
    expect(document.title).toBe(`${app.seoTitle} | DigitalSprout`);
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', app.intro);
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', `https://digitalsprout.org${app.product}`);
    expect(document.querySelector('meta[property="og:url"]')).toHaveAttribute('content', `https://digitalsprout.org${app.product}`);
    expect(document.querySelector('meta[name="robots"]')?.content).not.toContain('noindex');
    expect(screen.getByRole('link', { name: 'Read the privacy policy' })).toHaveAttribute('href', app.privacy);

    const appNavigation = screen.getByRole('navigation', { name: `${app.name} navigation` });
    if (app.terms) expect(within(appNavigation).getByRole('link', { name: 'Terms' })).toHaveAttribute('href', app.terms);
    expect(app.features.length).toBeGreaterThan(0);
    for (const feature of app.features) expect(screen.getByRole('heading', { name: feature.title })).toBeInTheDocument();
    expect(app.faqs.length).toBeGreaterThan(0);
    for (const faq of app.faqs) expect(screen.getByText(faq.question)).toBeInTheDocument();

    const schemas = structuredData();
    const software = schemas.find((item) => item['@type'] === 'SoftwareApplication');
    expect(software).toMatchObject({ name: app.name, url: `https://digitalsprout.org${app.product}` });
    expect(software).not.toHaveProperty('aggregateRating');
    expect(software).not.toHaveProperty('offers');
    const breadcrumbs = schemas.find((item) => item['@type'] === 'BreadcrumbList');
    expect(breadcrumbs.itemListElement.at(-1)).toMatchObject({ name: app.name, item: `https://digitalsprout.org${app.product}` });

    if (app.appStoreUrl) {
      for (const link of screen.getAllByRole('link', { name: `Download ${app.name} on the App Store` })) expect(link).toHaveAttribute('href', app.appStoreUrl);
      expect(new URL(app.appStoreUrl).hostname).toBe('apps.apple.com');
    }
    if (app.googlePlayUrl) {
      for (const link of screen.getAllByRole('link', { name: `Get ${app.name} on Google Play` })) expect(link).toHaveAttribute('href', app.googlePlayUrl);
      expect(new URL(app.googlePlayUrl).hostname).toBe('play.google.com');
    }
    if (!app.appStoreUrl && !app.googlePlayUrl) {
      expect(screen.queryByRole('link', { name: new RegExp(`Download ${app.name} on the App Store|Get ${app.name} on Google Play`) })).not.toBeInTheDocument();
      expect(screen.getAllByRole('link', { name: 'Ask about availability' })[0]).toHaveAttribute('href', `mailto:info@digitalsprout.org?subject=${encodeURIComponent(`${app.name} availability`)}`);
    }
  });

  test('a directory visit and product navigation update the page and metadata together', async () => {
    renderAt('/apps?category=Wellbeing');
    fireEvent.click(screen.getByRole('link', { name: 'Explore Luma' }));
    const luma = studioProjects.find((app) => app.name === 'Luma');
    expect(await screen.findByRole('heading', { level: 1 })).toHaveTextContent(luma.tagline);
    expect(window.location.pathname).toBe('/apps/luma');
    expect(document.title).toBe(`${luma.seoTitle} | DigitalSprout`);
    fireEvent.click(screen.getByRole('link', { name: 'Read the privacy policy' }));
    expect(await screen.findByRole('heading', { level: 1, name: 'Privacy Policy' })).toBeInTheDocument();
    await waitFor(() => expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://digitalsprout.org/luma/privacy-policy'));
    expect(structuredData().some((item) => item['@type'] === 'SoftwareApplication')).toBe(false);
    fireEvent.click(screen.getByRole('link', { name: 'Back to home' }));
    expect(await screen.findByRole('heading', { level: 1, name: /good apps/i })).toBeInTheDocument();
    expect(document.title).toBe('DigitalSprout — Useful apps for your everyday');
  });

  test('unknown app routes are noindex and cannot retain the previous app schema', async () => {
    renderAt('/apps/luma');
    expect(structuredData().some((item) => item['@type'] === 'SoftwareApplication')).toBe(true);
    cleanup();
    renderAt('/apps/not-a-real-app');
    expect(await screen.findByRole('heading', { name: /this page hasn’t sprouted/i })).toBeInTheDocument();
    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute('content', 'noindex, follow');
    expect(structuredData()).toEqual([]);
    cleanup();
    renderAt('/apps/luma');
    expect(document.querySelector('meta[name="robots"]')?.content).not.toContain('noindex');
  });

  test.each([
    ['/luma/privacy', '/luma/privacy-policy'],
    ['/migraine-tracker/terms', '/luma/terms-of-service'],
    ['/vocal-remover/privacy', '/vocal-remover/privacy-policy'],
    ['/puptempo/terms', '/puptempo/terms-of-service'],
    ['/oche/privacy', '/oche/privacy-policy'],
  ])('legacy alias %s declares its preferred canonical URL', async (path, canonical) => {
    renderAt(path);
    expect(await screen.findByRole('heading', { level: 1 })).toHaveTextContent(/privacy|terms/i);
    await waitFor(() => expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', `https://digitalsprout.org${canonical}`));
  });
});
