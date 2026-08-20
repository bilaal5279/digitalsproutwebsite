import { useEffect } from "react";
import { ArrowUpRight, Mail, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { legalDirectory } from "./siteData";

export function PageMeta({ title, description, path = "/" }) {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (selector, attributes) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    };

    ensureMeta('meta[name="description"]', { name: "description", content: description });
    ensureMeta('meta[property="og:title"]', { property: "og:title", content: title });
    ensureMeta('meta[property="og:description"]', { property: "og:description", content: description });
    ensureMeta('meta[property="og:url"]', { property: "og:url", content: `https://digitalsprout.org${path}` });
    ensureMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    ensureMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://digitalsprout.org${path}`);
  }, [description, path, title]);

  return null;
}

export function Brand({ inverse = false }) {
  return (
    <span className={`ds-brand ${inverse ? "ds-brand--inverse" : ""}`}>
      <img src="/assets/digitalsprout-mark.png" alt="" className="ds-brand__mark" />
      <span className="ds-brand__name">Digital<span>Sprout</span></span>
    </span>
  );
}

export function SiteHeader({ dark = false }) {
  return (
    <header className={`ds-header ${dark ? "ds-header--dark" : ""}`}>
      <div className="ds-shell ds-header__inner">
        <Link to="/" aria-label="DigitalSprout home" className="ds-logo-link">
          <Brand inverse={dark} />
        </Link>
        <nav className="ds-nav" aria-label="Main navigation">
          <Link to="/#apps">Apps</Link>
          <Link to="/#approach">Approach</Link>
          <Link to="/support">Support</Link>
          <Link to="/tip-tracker" className="ds-button ds-button--small ds-button--ink">
            Meet TipMint <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </nav>
        <details className="ds-mobile-menu">
          <summary aria-label="Open navigation"><Menu size={22} aria-hidden="true" /> Menu</summary>
          <nav aria-label="Mobile navigation">
            <Link to="/#apps">Apps</Link>
            <Link to="/#approach">Approach</Link>
            <Link to="/support">Support</Link>
            <Link to="/tip-tracker">Meet TipMint</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="ds-footer">
      <div className="ds-shell">
        <div className="ds-footer__top">
          <div>
            <Brand inverse />
            <p>Independent apps with a clear purpose, thoughtfully made in the UK.</p>
          </div>
          <div className="ds-footer__links" aria-label="Footer navigation">
            <Link to="/tip-tracker">TipMint</Link>
            <Link to="/support">Support</Link>
            <a href="mailto:info@digitalsprout.org">Email us</a>
          </div>
        </div>

        <details className="ds-legal-directory">
          <summary>App privacy policies and terms <span>View directory</span></summary>
          <div className="ds-legal-directory__grid">
            {legalDirectory.map((app) => (
              <div className="ds-legal-directory__item" key={app.name}>
                <strong>{app.name}</strong>
                <span>
                  <Link to={app.privacy}>Privacy</Link>
                  {app.terms && <Link to={app.terms}>Terms</Link>}
                </span>
              </div>
            ))}
          </div>
        </details>

        <div className="ds-footer__bottom">
          <span>© {new Date().getFullYear()} DigitalSprout, UK</span>
          <a href="mailto:info@digitalsprout.org"><Mail size={14} aria-hidden="true" /> info@digitalsprout.org</a>
        </div>
      </div>
    </footer>
  );
}

export function SitePage({ children, darkHeader = false }) {
  return (
    <div className="ds-site">
      <a className="ds-skip-link" href="#main-content">Skip to content</a>
      <SiteHeader dark={darkHeader} />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}
