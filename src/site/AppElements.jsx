import { ArrowUpRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

export function AppIcon({ app, className = "", eager = false }) {
  return app.image ? <img className={`app-icon ${className}`} src={app.image} alt="" width="88" height="88" loading={eager ? "eager" : "lazy"} /> : <span className={`app-icon app-icon--${app.tone} ${className}`} aria-hidden="true">{app.monogram}</span>;
}

export function StoreLinks({ app, compact = false }) {
  return <div className={`store-links ${compact ? "store-links--compact" : ""}`}>
    {app.appStoreUrl && <a href={app.appStoreUrl} className="store-button" aria-label={`Download ${app.name} on the App Store`}><Download size={19} aria-hidden="true" /><span><small>Download on the</small>App Store</span><ArrowUpRight size={16} aria-hidden="true" /></a>}
    {app.googlePlayUrl && <a href={app.googlePlayUrl} className="store-button" aria-label={`Get ${app.name} on Google Play`}><svg width="19" height="21" viewBox="0 0 19 21" fill="none" aria-hidden="true"><path d="M2 2v17l15-8.5L2 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg><span><small>Get it on</small>Google Play</span><ArrowUpRight size={16} aria-hidden="true" /></a>}
    {!app.appStoreUrl && !app.googlePlayUrl && <a className="ds-button ds-button--ink" href={`mailto:info@digitalsprout.org?subject=${encodeURIComponent(`${app.name} availability`)}`}>Ask about availability <ArrowUpRight size={17} /></a>}
  </div>;
}

export function ProductCard({ app, featured = false }) {
  return <article className={`product-card product-card--${app.tone} ${featured ? "product-card--featured" : ""}`}>
    <Link className="product-card__art" to={app.product} tabIndex={-1} aria-hidden="true"><span className="product-card__orb" /><AppIcon app={app} /><span className="product-card__art-label">{app.category}</span><ArrowUpRight className="product-card__arrow" size={21} /></Link>
    <div className="product-card__body"><div className="product-card__title"><h3><Link to={app.product}>{app.name}</Link></h3><span>{app.appStoreUrl && app.googlePlayUrl ? "iOS & Android" : app.appStoreUrl ? "iOS" : app.googlePlayUrl ? "Android" : "From the studio"}</span></div><p>{app.description}</p><Link className="text-link" to={app.product} aria-label={`Explore ${app.name}`}>Explore app <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
  </article>;
}
