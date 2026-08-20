import { ArrowLeft, ArrowRight, Mail, SearchX } from "lucide-react";
import { Link } from "react-router-dom";
import { PageMeta, SitePage } from "./SiteChrome";
import { legalDirectory } from "./siteData";

export function SupportPage() {
  return (
    <SitePage>
      <PageMeta
        title="DigitalSprout Support — Help with our apps"
        description="Contact DigitalSprout support or find the privacy policy and terms for your app."
        path="/support"
      />
      <section className="studio-support">
        <div className="ds-shell studio-support__grid">
          <div>
            <p className="ds-eyebrow">Studio support</p>
            <h1>A human answer,<br /><em>from a small team.</em></h1>
            <p>Tell us which app you’re using, what you expected, and what happened. Helpful details include your device, operating-system version, and app version.</p>
            <a className="ds-button ds-button--ink" href="mailto:info@digitalsprout.org?subject=DigitalSprout%20App%20Support">Email support <Mail size={17} /></a>
            <small>Please do not email passwords, full payment details, health records, or other sensitive information.</small>
          </div>
          <aside>
            <span>SUPPORT DESK</span>
            <h2>info@digitalsprout.org</h2>
            <p>Purchase and refund requests are ultimately handled by the app store where you bought the app. We can still help you find the right next step.</p>
            <Link to="/tip-tracker/support">Using TipMint? Visit dedicated support <ArrowRight size={16} /></Link>
          </aside>
        </div>
      </section>
      <section className="ds-section studio-support__legal">
        <div className="ds-shell">
          <div className="ds-section-heading"><p className="ds-kicker">App documents</p><h2>Find the right policy.</h2><p>Choose an app to open its current privacy policy or terms.</p></div>
          <div className="studio-support__directory">
            {legalDirectory.map((app) => <article key={app.name}><strong>{app.name}</strong><span><Link to={app.privacy}>Privacy</Link>{app.terms && <Link to={app.terms}>Terms</Link>}</span></article>)}
          </div>
        </div>
      </section>
    </SitePage>
  );
}

export function NotFoundPage() {
  return (
    <SitePage>
      <PageMeta title="Page not found — DigitalSprout" description="The DigitalSprout page you requested could not be found." path="/404" />
      <section className="not-found">
        <div className="ds-shell not-found__inner">
          <SearchX size={44} aria-hidden="true" />
          <p className="ds-kicker">404 · Off the path</p>
          <h1>This page hasn’t sprouted.</h1>
          <p>The link may be old, or the address may have a typo. The app policies and support pages are still close by.</p>
          <div className="ds-actions"><Link className="ds-button ds-button--ink" to="/"><ArrowLeft size={16} /> Back home</Link><Link className="ds-text-link" to="/support">Find app support</Link></div>
        </div>
      </section>
    </SitePage>
  );
}
