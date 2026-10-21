export const siteUrl = "https://digitalsprout.org";
export const defaultImage = `${siteUrl}/assets/digitalsprout-og.png`;
export const absoluteUrl = (path = "/") => /^https?:\/\//.test(path) ? path : `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

export const routeAliases = {
  "/apps/tipmint": "/tip-tracker",
  "/ask-tarot/terms": "/ask-tarot/terms-of-service",
  "/puptempo/terms": "/puptempo/terms-of-service",
  "/throughline/terms": "/throughline/terms-of-service",
  "/oche/privacy": "/oche/privacy-policy",
  "/oche/terms": "/oche/terms-of-service",
  "/luma/privacy": "/luma/privacy-policy",
  "/luma/terms": "/luma/terms-of-service",
  "/migraine-tracker/privacy": "/luma/privacy-policy",
  "/migraine-tracker/terms": "/luma/terms-of-service",
  "/vocal-remover/privacy": "/vocal-remover/privacy-policy",
  "/vocal-remover/terms": "/vocal-remover/terms-of-service",
  "/hrtree-privacy": "/hrtree/privacy-policy",
  "/hrtree-terms": "/hrtree/terms-of-service",
};

export function canonicalPath(path = "/") {
  const clean = path.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
  return routeAliases[clean] || clean;
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "DigitalSprout",
  legalName: "DigitalSprout Ltd",
  url: `${siteUrl}/`,
  logo: `${siteUrl}/assets/digitalsprout-mark.png`,
  email: "info@digitalsprout.org",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "DigitalSprout",
  url: `${siteUrl}/`,
  publisher: { "@id": `${siteUrl}/#organization` },
};

const schemaCategories = {
  Wellbeing: "HealthApplication",
  "Work & money": "BusinessApplication",
  Creative: "MultimediaApplication",
  "Everyday tools": "UtilitiesApplication",
};

export function appSchema(app) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${absoluteUrl(app.product) }#app`,
    name: app.name,
    description: app.description,
    url: absoluteUrl(app.product),
    applicationCategory: schemaCategories[app.category] || "UtilitiesApplication",
    publisher: { "@id": `${siteUrl}/#organization` },
  };
  if (app.image) schema.image = absoluteUrl(app.image);
  if (app.platform) schema.operatingSystem = app.platform;
  const downloads = [app.appStoreUrl, app.googlePlayUrl].filter(Boolean);
  if (downloads.length) schema.downloadUrl = downloads;
  return schema;
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path || item.url || "/"),
    })),
  };
}

export function normalizeMeta(meta) {
  return {
    ...meta,
    path: canonicalPath(meta.path),
    image: absoluteUrl(meta.image || defaultImage),
    noindex: Boolean(meta.noindex),
    structuredData: meta.structuredData || null,
  };
}

export const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character]));
export const safeJson = (value) => JSON.stringify(value).replace(/</g, "\\u003c");

export function renderMetaHead(input) {
  const meta = normalizeMeta(input);
  const values = [
    ["name", "description", meta.description],
    ["name", "robots", meta.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"],
    ["property", "og:type", "website"],
    ["property", "og:site_name", "DigitalSprout"],
    ["property", "og:title", meta.title],
    ["property", "og:description", meta.description],
    ["property", "og:url", absoluteUrl(meta.path)],
    ["property", "og:image", meta.image],
    ["property", "og:image:alt", meta.title],
    ["name", "twitter:card", "summary_large_image"],
    ["name", "twitter:title", meta.title],
    ["name", "twitter:description", meta.description],
    ["name", "twitter:image", meta.image],
  ];
  return [
    `<title>${escapeHtml(meta.title)}</title>`,
    ...values.map(([attribute, name, content]) => `<meta ${attribute}="${name}" content="${escapeHtml(content)}" />`),
    `<link rel="canonical" href="${escapeHtml(absoluteUrl(meta.path))}" />`,
    meta.structuredData ? `<script id="page-structured-data" type="application/ld+json">${safeJson(meta.structuredData)}</script>` : "",
  ].filter(Boolean).join("\n    ");
}
