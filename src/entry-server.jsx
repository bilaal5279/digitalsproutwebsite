import { StrictMode } from "react";
import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouter } from "react-router-dom";
import { AppRoutes, RouteScroll } from "./App";
import { MetadataContext } from "./site/PageMeta";
import { legalDirectory, studioProjects } from "./site/siteData";
import { routeAliases } from "./site/seo";

export const routes = [...new Set([
  "/", "/apps", "/about", "/support", "/404",
  ...studioProjects.map((app) => app.product),
  ...legalDirectory.flatMap((app) => [app.privacy, app.terms, app.support]),
  "/tip-tracker/support",
  "/hrtree/privacy-policy", "/hrtree/terms-of-service", "/hrtree/support",
  "/ruckstride/privacy-policy", "/ruckstride/terms-of-service", "/ruckstride/support",
  // This marketing alias uses a host-level 301, so do not shadow it with a file.
  ...Object.keys(routeAliases).filter((path) => path !== "/apps/tipmint"),
].filter(Boolean))];

export async function render(path) {
  const collector = { current: null };
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <MetadataContext.Provider value={collector}>
        <StaticRouter location={path}><RouteScroll /><AppRoutes /></StaticRouter>
      </MetadataContext.Provider>
    </StrictMode>,
  );
  let html = "";
  for await (const chunk of prelude) html += chunk.toString();
  if (!collector.current) throw new Error(`No metadata was provided for ${path}`);
  return { html, meta: collector.current };
}
