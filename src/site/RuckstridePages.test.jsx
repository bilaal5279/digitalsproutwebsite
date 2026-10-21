import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, expect, test, vi } from "vitest";
import App from "../App";

beforeEach(() => {
  vi.spyOn(window, "scrollTo").mockImplementation(() => {});
});

afterEach(() => {
  cleanup();
  window.history.pushState({}, "", "/");
  vi.restoreAllMocks();
});

function renderAt(path) {
  window.history.pushState({}, "", path);
  return render(<App />);
}

test.each([
  ["/ruckstride/privacy-policy", "Privacy Policy"],
  ["/ruckstride/terms-of-service", "Terms of Service"],
  ["/ruckstride/support", "Keep your next step simple."],
])("Ruckstride route %s renders its own document and canonical URL", async (path, heading) => {
  renderAt(path);
  expect(await screen.findByRole("heading", { name: heading, level: 1 })).toBeInTheDocument();
  await waitFor(() => expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute("href", `https://digitalsprout.org${path}`));
});

test("the removed marketing page is not publicly promoted", async () => {
  renderAt("/ruckstride");
  expect(await screen.findByRole("heading", { name: /this page hasn’t sprouted/i })).toBeInTheDocument();
  expect(document.querySelector('meta[name="robots"]')).toHaveAttribute("content", "noindex, follow");
  expect(screen.queryByRole("link", { name: /download/i })).not.toBeInTheDocument();
});

test("privacy separates local routes from map and subscription processing and retains a free export", async () => {
  renderAt("/ruckstride/privacy-policy");
  await screen.findByRole("heading", { name: "Privacy Policy", level: 1 });
  expect(screen.getByText(/there is no Ruckstride account or backend/i)).toHaveTextContent(/do not automatically receive or upload your workout history or GPS route/i);
  expect(screen.getByText(/when you choose outdoor recording/i)).toHaveTextContent(/background location is used only while recording an outdoor workout/i);
  expect(screen.getByText(/map displays use Apple MapKit/i)).toHaveTextContent(/requests to Apple/i);
  expect(screen.getByText(/RevenueCat provides purchase validation/i)).toHaveTextContent(/subscription analytics/i);
  expect(screen.getByText(/you can use the free Export my data/i)).toHaveTextContent(/JSON copy/i);
  expect(screen.getByText(/erasing local data does not cancel/i)).toHaveTextContent(/RevenueCat purchase information/i);
});

test("terms and support preserve free data controls and explain separate Apple billing", async () => {
  renderAt("/ruckstride/terms-of-service");
  await screen.findByRole("heading", { name: "Terms of Service", level: 1 });
  expect(screen.getByText(/core outdoor and indoor tracking/i)).toHaveTextContent(/JSON export of your data are available without Pro/i);
  expect(screen.getByText(/manage or cancel through iPhone Settings/i)).toHaveTextContent(/deleting the app.*does not cancel a subscription/i);
  expect(screen.getByText(/nothing in these terms excludes or limits/i)).toBeInTheDocument();
  cleanup();
  renderAt("/ruckstride/support");
  await screen.findByRole("heading", { name: "Keep your next step simple.", level: 1 });
  const exportHelp = screen.getByText(/open You → Your data → Export my data/i);
  expect(exportHelp).toHaveTextContent(/free JSON copy/i);
  expect(exportHelp).toHaveTextContent(/Export workout data in the same section for a CSV/i);
  expect(exportHelp).toHaveTextContent(/open a saved outdoor workout in Journal and choose Export route as GPX/i);
  expect(screen.getByText(/open You → Your data → Delete all workout data/i)).toHaveTextContent(/available without Pro/i);
  expect(screen.getByRole("link", { name: "email Ruckstride support" })).toHaveAttribute("href", "mailto:info@digitalsprout.org?subject=Ruckstride%20Support");
});

test("Ruckstride stays out of the public directories while its support URL is retained", async () => {
  renderAt("/apps");
  expect(screen.queryByRole("heading", { name: "Ruckstride", level: 3 })).not.toBeInTheDocument();
  cleanup();
  renderAt("/support");
  expect(screen.queryByRole("heading", { name: "Ruckstride", level: 3 })).not.toBeInTheDocument();
  cleanup();
  renderAt("/ruckstride/support");
  expect(await screen.findByRole("heading", { name: "Keep your next step simple.", level: 1 })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "email Ruckstride support" })).toHaveAttribute("href", "mailto:info@digitalsprout.org?subject=Ruckstride%20Support");
});
