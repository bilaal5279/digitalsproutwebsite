import { readFile } from 'node:fs/promises';
import { act } from '@testing-library/react';
import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { expect, test, vi } from 'vitest';
import App from '../App';
import { studioProjects } from './siteData';

test('a category URL hydrates the static all-apps directory before applying its filter', async () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  // Run after npm run build: use the shipped HTML so server and browser React
  // renderers cannot share context state inside the same test process.
  const html = await readFile('dist/apps/index.html', 'utf8');
  const builtPage = new DOMParser().parseFromString(html, 'text/html');
  container.innerHTML = builtPage.getElementById('root').innerHTML;
  const status = () => container.querySelector('[role="status"]');
  expect(status().textContent).toBe(`${studioProjects.length} apps in the collection`);
  const serverSearchId = container.querySelector('input[type="search"]').id;
  const errors = [];
  const consoleErrors = [];
  const consoleSpy = vi.spyOn(console, 'error').mockImplementation((...args) => consoleErrors.push(args));
  let root;
  try {
    window.history.pushState({}, '', '/apps?category=Creative');
    await act(async () => {
      root = hydrateRoot(container, <StrictMode><App /></StrictMode>, { onRecoverableError: (error) => errors.push(error.message) });
    });
    expect(status().textContent).toBe(`${studioProjects.filter((app) => app.category === 'Creative').length} apps in Creative`);
    expect(errors).toEqual([]);
    expect(consoleErrors).toEqual([]);
    expect(container.querySelector('input[type="search"]').id).toBe(serverSearchId);
    expect(container.querySelector('label[for]')).toHaveAttribute('for', serverSearchId);
    expect([...container.querySelectorAll('h3')].map((heading) => heading.textContent)).toContain('Revive');
    expect([...container.querySelectorAll('h3')].map((heading) => heading.textContent)).not.toContain('Luma');
  } finally {
    if (root) await act(async () => root.unmount());
    consoleSpy.mockRestore();
    container.remove();
    window.history.pushState({}, '', '/');
  }
});
