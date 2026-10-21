import '@testing-library/jest-dom/vitest';
import { configure } from '@testing-library/react';
import { beforeEach, vi } from 'vitest';

// Cold lazy imports can take several seconds on the desktop workspace runtime.
configure({ asyncUtilTimeout: 30000 });

// jsdom has no viewport to scroll; exercise navigation without its unsupported API.
beforeEach(() => {
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
});
