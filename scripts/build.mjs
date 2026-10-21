import { build } from "vite";
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { pathToFileURL } from "node:url";
import { absoluteUrl, canonicalPath, escapeHtml, renderMetaHead } from "../src/site/seo.js";

const output = resolve("dist");
const serverOutput = resolve("node_modules/.cache/digitalsprout-prerender");

await build();
await build({
  build: { ssr: "src/entry-server.jsx", outDir: serverOutput, emptyOutDir: true },
  logLevel: "warn",
});

try {
  const { routes, render } = await import(pathToFileURL(resolve(serverOutput, "entry-server.js")));
  let template = await readFile(resolve(output, "index.html"), "utf8");
  // Lazy legal routes also need their CSS before JavaScript loads.
  const routeStyles = (await readdir(resolve(output, "assets")))
    .filter((name) => name.endsWith(".css") && !template.includes(`/assets/${name}`))
    .map((name) => `<link rel="stylesheet" href="/assets/${name}" />`).join("\n    ");
  template = template.replace("</head>", `${routeStyles}\n  </head>`);
  const canonicalRoutes = [];

  for (const route of routes) {
    const { html, meta } = await render(route);
    if (!html.includes("<h1")) throw new Error(`Missing page content at ${route}`);
    const rendered = template
      .replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, renderMetaHead(meta))
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    const destination = route === "/" ? resolve(output, "index.html")
      : route === "/404" ? resolve(output, "404.html")
      : resolve(output, `.${route}`, "index.html");
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, rendered);
    if (!meta.noindex && canonicalPath(route) === canonicalPath(meta.path) && route !== "/404") canonicalRoutes.push(canonicalPath(route));
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...new Set(canonicalRoutes)].map((route) => `  <url><loc>${escapeHtml(absoluteUrl(route))}</loc></url>`).join("\n")}\n</urlset>\n`;
  await writeFile(resolve(output, "sitemap.xml"), sitemap);
  await writeFile(resolve(output, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl("/sitemap.xml")}\n`);
  // Netlify and Cloudflare Pages use top-level 404.html automatically.
  // Do not add a SPA catch-all: that would hide the pre-rendered route content.
  await writeFile(resolve(output, "seo-routes.json"), JSON.stringify({ routes, canonicalRoutes: [...new Set(canonicalRoutes)] }, null, 2));
  console.log(`Pre-rendered ${routes.length} pages with complete HTML, metadata and sitemap.`);
} finally {
  await rm(serverOutput, { recursive: true, force: true });
}
