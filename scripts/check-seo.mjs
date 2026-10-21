import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { absoluteUrl, canonicalPath, routeAliases } from "../src/site/seo.js";

const output = resolve("dist");
const { routes, canonicalRoutes } = JSON.parse(await readFile(resolve(output, "seo-routes.json"), "utf8"));
const sitemap = await readFile(resolve(output, "sitemap.xml"), "utf8");
const titles = new Map();
const pages = new Map();
const imagePaths = new Set();
for (const route of routes) {
  const file = route === "/" ? "index.html" : route === "/404" ? "404.html" : `.${route}/index.html`;
  const html = await readFile(resolve(output, file), "utf8");
  pages.set(route, html);
  for (const image of html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)) {
    if (image[1].startsWith("/")) imagePaths.add(image[1]);
  }
  const head = html.split("</head>")[0];
  assert.equal((head.match(/<title>/g) || []).length, 1, `Exactly one title: ${route}`);
  assert.equal((head.match(/rel="canonical"/g) || []).length, 1, `Exactly one canonical: ${route}`);
  assert.ok(html.includes('<div id="root">') && html.includes("<h1"), `Visible SSR content: ${route}`);
  assert.ok(!html.includes("Loading page…"), `No suspense fallback: ${route}`);
  assert.match(head, /name="description" content=".{20,}"/, `Useful description: ${route}`);
  assert.ok(head.includes(`href="${absoluteUrl(canonicalPath(route))}"`), `Correct canonical: ${route}`);
  assert.match(head, /property="og:image"/, `Social preview: ${route}`);
  for (const match of head.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
  if (!routeAliases[route] && route !== "/404") {
    const title = head.match(/<title>(.*?)<\/title>/s)?.[1];
    assert.ok(!titles.has(title), `Duplicate title at ${route} and ${titles.get(title)}`);
    titles.set(title, route);
  }
}
for (const route of canonicalRoutes) assert.ok(sitemap.includes(`<loc>${absoluteUrl(route)}</loc>`), `Sitemap includes ${route}`);
for (const alias of Object.keys(routeAliases)) assert.ok(!sitemap.includes(`<loc>${absoluteUrl(alias)}</loc>`), `Sitemap excludes alias ${alias}`);
assert.ok(!sitemap.includes("/404"), "404 must not be indexed");
const notFound = await readFile(resolve(output, "404.html"), "utf8");
assert.ok(notFound.includes('content="noindex, follow"'), "404 has noindex metadata");
for (const image of imagePaths) await access(resolve(output, `.${image}`));
let internalLinks = 0;
for (const [route, html] of pages) {
  for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    const url = new URL(match[1].replaceAll("&amp;", "&"), absoluteUrl(route));
    if (url.origin !== absoluteUrl("").replace(/\/$/, "")) continue;
    const target = url.pathname.replace(/\/+$/, "") || "/";
    const targetPage = pages.get(target) || pages.get(routeAliases[target]);
    assert.ok(targetPage, `Broken internal link ${match[1]} on ${route}`);
    if (url.hash) {
      const id = decodeURIComponent(url.hash.slice(1));
      assert.ok(targetPage.includes(`id="${id}"`), `Missing anchor ${match[1]} on ${route}`);
    }
    internalLinks++;
  }
}
console.log(`SEO checks passed for ${routes.length} pre-rendered pages, ${canonicalRoutes.length} canonical sitemap URLs and ${internalLinks} internal links.`);
