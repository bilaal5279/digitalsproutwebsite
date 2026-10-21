import { createContext, useContext, useEffect } from "react";
import { absoluteUrl, normalizeMeta, safeJson } from "./seo";

export const MetadataContext = createContext(null);

export function PageMeta({ title, description, path = "/", image, structuredData, noindex = false }) {
  const collector = useContext(MetadataContext);
  const meta = normalizeMeta({ title, description, path, image, structuredData, noindex });
  const json = meta.structuredData ? safeJson(meta.structuredData) : "";
  if (collector) collector.current = meta;

  useEffect(() => {
    document.title = title;
    const values = [
      ["name", "description", description],
      ["name", "robots", noindex ? "noindex, follow" : "index, follow, max-image-preview:large"],
      ["property", "og:type", "website"],
      ["property", "og:site_name", "DigitalSprout"],
      ["property", "og:title", title],
      ["property", "og:description", description],
      ["property", "og:url", absoluteUrl(meta.path)],
      ["property", "og:image", meta.image],
      ["property", "og:image:alt", title],
      ["name", "twitter:card", "summary_large_image"],
      ["name", "twitter:title", title],
      ["name", "twitter:description", description],
      ["name", "twitter:image", meta.image],
    ];
    for (const [attribute, name, content] of values) {
      let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    }
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = absoluteUrl(meta.path);
    let structured = document.getElementById("page-structured-data");
    if (json) {
      if (!structured) {
        structured = document.createElement("script");
        structured.id = "page-structured-data";
        structured.type = "application/ld+json";
        document.head.appendChild(structured);
      }
      structured.textContent = json;
    } else structured?.remove();
  }, [title, description, meta.path, meta.image, noindex, json]);

  return null;
}
