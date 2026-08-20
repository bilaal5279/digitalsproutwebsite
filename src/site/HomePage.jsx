import {
  ArrowRight,
  ArrowUpRight,
  Check,
  FileSpreadsheet,
  LockKeyhole,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
  TimerReset,
} from "lucide-react";
import { Link } from "react-router-dom";
import { PageMeta, SitePage } from "./SiteChrome";

const studioApps = [
  { name: "Luma", type: "Migraine journal", color: "lilac" },
  { name: "Throughline", type: "Symptom journal", color: "sky" },
  { name: "SoberTracker", type: "Sobriety companion", color: "mint" },
  { name: "PupTempo", type: "Training timer", color: "coral" },
  { name: "Ask Tarot", type: "Card companion", color: "ink" },
  { name: "Vocal Remover", type: "Audio utility", color: "sun" },
];

function TipMintPreview() {
  return (
    <div className="tm-preview" aria-label="Illustration of the TipMint shift summary">
      <div className="tm-preview__glow tm-preview__glow--one" />
      <div className="tm-preview__glow tm-preview__glow--two" />
      <div className="tm-phone">
        <div className="tm-phone__bar"><span>9:41</span><i /></div>
        <div className="tm-phone__brand">
          <img src="/assets/tipmint-icon.png" alt="" />
          <div><small>Good evening</small><strong>TipMint</strong></div>
        </div>
        <div className="tm-shift-card">
          <span>Tonight’s shift</span>
          <strong>$186.50</strong>
          <small>6h 42m · $27.84 / hour</small>
          <div className="tm-shift-card__split"><i /><i /><i /></div>
        </div>
        <div className="tm-metric-row">
          <div><small>Cash</small><strong>$74.00</strong></div>
          <div><small>Card</small><strong>$112.50</strong></div>
        </div>
        <div className="tm-week">
          <span><strong>This week</strong><small>$642.80 total</small></span>
          <div className="tm-bars" aria-hidden="true">
            {[42, 68, 35, 82, 58, 91, 22].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
          </div>
        </div>
      </div>
      <div className="tm-float-card tm-float-card--privacy"><ShieldCheck size={18} /> On-device</div>
      <div className="tm-float-card tm-float-card--export"><FileSpreadsheet size={18} /> CSV ready</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <SitePage>
      <PageMeta
        title="DigitalSprout — Small apps. Genuinely useful."
        description="DigitalSprout is an independent UK app studio making focused, privacy-minded tools for everyday life. Meet TipMint, the shift and tip tracker for hospitality workers."
      />

      <section className="ds-hero">
        <div className="ds-shell ds-hero__grid">
          <div className="ds-hero__copy">
            <p className="ds-eyebrow"><Sparkles size={15} aria-hidden="true" /> Independent app studio · UK</p>
            <h1>Small apps.<br /><em>Genuinely useful.</em></h1>
            <p className="ds-hero__lede">
              We make calm, focused tools that solve one real problem well—without noisy dashboards, ad-tech, or unnecessary accounts.
            </p>
            <div className="ds-actions">
              <Link className="ds-button ds-button--ink" to="/tip-tracker">
                Explore TipMint <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <a className="ds-text-link" href="#apps">See the studio shelf <MoveUpRight size={16} aria-hidden="true" /></a>
            </div>
            <div className="ds-hero__notes" aria-label="Studio principles">
              <span><Check size={15} aria-hidden="true" /> Clear purpose</span>
              <span><Check size={15} aria-hidden="true" /> Thoughtful privacy</span>
              <span><Check size={15} aria-hidden="true" /> Human support</span>
            </div>
          </div>

          <div className="ds-hero__visual">
            <div className="ds-hero__stamp" aria-hidden="true">MADE<br />WITH<br />CARE</div>
            <TipMintPreview />
          </div>
        </div>
      </section>

      <div className="ds-manifesto-strip" aria-hidden="true">
        <span>Useful by design</span><i />
        <span>Private by instinct</span><i />
        <span>Built for real life</span><i />
        <span>Useful by design</span>
      </div>

      <section className="ds-section ds-section--tipmint" id="apps">
        <div className="ds-shell">
          <div className="ds-section-heading ds-section-heading--split">
            <div>
              <p className="ds-kicker">Featured app · TipMint</p>
              <h2>Clock out.<br />Know your number.</h2>
            </div>
            <p>TipMint gives servers and hospitality workers a clean place to record shifts, understand tip income, and keep useful records—right on their iPhone.</p>
          </div>

          <div className="ds-feature-grid">
            <article className="ds-feature-card ds-feature-card--hero">
              <div className="ds-feature-card__icon"><TimerReset size={24} aria-hidden="true" /></div>
              <span className="ds-card-number">01</span>
              <h3>Shift-first tracking</h3>
              <p>Capture hours and tips while the shift is still fresh, then see useful totals without spreadsheet busywork.</p>
              <Link to="/tip-tracker">Take a closer look <ArrowUpRight size={16} aria-hidden="true" /></Link>
            </article>
            <article className="ds-feature-card">
              <div className="ds-feature-card__icon ds-feature-card__icon--coral"><FileSpreadsheet size={24} aria-hidden="true" /></div>
              <span className="ds-card-number">02</span>
              <h3>Your records, portable</h3>
              <p>Export a spreadsheet or create a portable JSON backup whenever you want a copy under your control.</p>
            </article>
            <article className="ds-feature-card ds-feature-card--dark">
              <div className="ds-feature-card__icon ds-feature-card__icon--light"><LockKeyhole size={24} aria-hidden="true" /></div>
              <span className="ds-card-number">03</span>
              <h3>Private on purpose</h3>
              <p>No account. No ads. No behavioural tracking. Your shift data stays on your device.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="ds-section ds-section--shelf">
        <div className="ds-shell">
          <div className="ds-section-heading">
            <p className="ds-kicker">The studio shelf</p>
            <h2>A growing set of focused tools.</h2>
            <p>Different jobs, one standard: make the useful thing feel effortless.</p>
          </div>
          <div className="ds-app-shelf">
            {studioApps.map((app, index) => (
              <article className={`ds-app-tile ds-app-tile--${app.color}`} key={app.name}>
                <span className="ds-app-tile__glyph" aria-hidden="true">{app.name.slice(0, 1)}</span>
                <div><h3>{app.name}</h3><p>{app.type}</p></div>
                <span className="ds-app-tile__index">0{index + 1}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ds-section ds-section--approach" id="approach">
        <div className="ds-shell ds-approach">
          <div>
            <p className="ds-kicker ds-kicker--light">Our approach</p>
            <h2>Less software.<br /><em>More signal.</em></h2>
          </div>
          <div className="ds-approach__list">
            <article><span>01</span><div><h3>Start with the real moment</h3><p>We design around the thing someone is trying to do, not a feature checklist.</p></div></article>
            <article><span>02</span><div><h3>Keep the data boundary clear</h3><p>Local-first choices and plain-language policies make privacy easier to understand.</p></div></article>
            <article><span>03</span><div><h3>Stay close to the details</h3><p>Independent means the people making the app are also listening when you need help.</p></div></article>
          </div>
        </div>
      </section>

      <section className="ds-section ds-cta">
        <div className="ds-shell ds-cta__inner">
          <img src="/assets/digitalsprout-mark.png" alt="" />
          <div><p className="ds-kicker">Fresh from the studio</p><h2>Make every shift add up.</h2></div>
          <Link className="ds-button ds-button--coral" to="/tip-tracker">Meet TipMint <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>
    </SitePage>
  );
}
