import { useEffect, useRef } from "react";
import { ArrowUpRight, Mail, Menu } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { legalDirectory } from "./siteData";

export { PageMeta } from "./PageMeta";

export function Brand({ inverse = false }) {
  return (
    <span className={`ds-brand ${inverse ? "ds-brand--inverse" : ""}`}>
      <img src="/assets/digitalsprout-mark.png" alt="" className="ds-brand__mark" />
      <span className="ds-brand__name">Digital<span>Sprout</span></span>
    </span>
  );
}

export function SiteHeader({ dark = false }) {
  const menu = useRef(null);
  const location = useLocation();
  useEffect(() => { if (menu.current) menu.current.open = false; }, [location]);
  return (
    <header className={`ds-header ${dark ? "ds-header--dark" : ""}`}>
      <div className="ds-shell ds-header__inner">
        <Link to="/" aria-label="DigitalSprout home" className="ds-logo-link">
          <Brand inverse={dark} />
        </Link>
        <nav className="ds-nav" aria-label="Main navigation">
          <NavLink to="/apps">Our apps</NavLink>
          <NavLink to="/about">The studio</NavLink>
          <Link to="/support#policies">Privacy & terms</Link>
          <Link to="/support" className="ds-button ds-button--small ds-button--ink">
            Get support <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </nav>
        <details className="ds-mobile-menu" ref={menu} onKeyDown={(event) => { if (event.key === "Escape") { event.currentTarget.open = false; event.currentTarget.querySelector("summary").focus(); } }}>
          <summary aria-label="Open navigation"><Menu size={22} aria-hidden="true" /> Menu</summary>
          <nav aria-label="Mobile navigation">
            <NavLink to="/apps">Our apps</NavLink>
            <NavLink to="/about">The studio</NavLink>
            <Link to="/support#policies">Privacy & terms</Link>
            <Link to="/support">Get support</Link>
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
            <NavLink to="/apps">Our apps</NavLink>
            <NavLink to="/about">The studio</NavLink>
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
          <span>© {new Date().getFullYear()} DigitalSprout Ltd · United Kingdom</span>
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
      <main id="main-content" tabIndex={-1}>{children}</main>
      <SiteFooter />
    </div>
  );
}
