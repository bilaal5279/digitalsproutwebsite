import { cleanup, render, screen, waitFor, within } from "@testing-library/react";
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
  ["/ruckstride", /a little weight.*a little further/i],
  ["/ruckstride/privacy-policy", "Privacy Policy"],
  ["/ruckstride/terms-of-service", "Terms of Service"],
  ["/ruckstride/support", "Keep your next step simple."],
])("Ruckstride route %s renders its own document and canonical URL", async (path, heading) => {
  renderAt(path);
  expect(await screen.findByRole("heading", { name: heading, level: 1 }, { timeout: 5000 })).toBeInTheDocument();
  await waitFor(() => expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute("href", `https://digitalsprout.org${path}`));
});

test("the landing page accurately identifies launch status and links to support and policies", async () => {
  renderAt("/ruckstride");
  expect(await screen.findByText(/not yet available on the App Store/i)).toBeInTheDocument();
  const nav = screen.getByRole("navigation", { name: "Ruckstride navigation" });
  expect(within(nav).getByRole("link", { name: "Privacy" })).toHaveAttribute("href", "/ruckstride/privacy-policy");
  expect(within(nav).getByRole("link", { name: "Terms" })).toHaveAttribute("href", "/ruckstride/terms-of-service");
  expect(within(nav).getByRole("link", { name: /support/i })).toHaveAttribute("href", "/ruckstride/support");
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

test("Ruckstride is discoverable in the existing app and support directories", async () => {
  renderAt("/");
  const appCard = (await screen.findByRole("heading", { name: "Ruckstride", level: 3 })).closest("article");
  expect(within(appCard).getByRole("link", { name: "Explore Ruckstride" })).toHaveAttribute("href", "/ruckstride");
  expect(within(appCard).getByText("In development")).toBeInTheDocument();
  cleanup();
  renderAt("/support");
  const supportCard = (await screen.findByRole("heading", { name: "Ruckstride", level: 3 })).closest("article");
  expect(within(supportCard).getByRole("link", { name: "Ruckstride support" })).toHaveAttribute("href", "/ruckstride/support");
  expect(within(supportCard).getByRole("link", { name: "Ruckstride privacy policy" })).toHaveAttribute("href", "/ruckstride/privacy-policy");
  expect(within(supportCard).getByRole("link", { name: "Ruckstride terms of service" })).toHaveAttribute("href", "/ruckstride/terms-of-service");
});
