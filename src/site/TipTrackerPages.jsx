import { createElement } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleDollarSign,
  Clock3,
  FileDown,
  HelpCircle,
  LockKeyhole,
  Mail,
  RefreshCw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { PageMeta, SitePage } from "./SiteChrome";

const EFFECTIVE_DATE = "20 August 2026";

function ProductHeroArt() {
  return (
    <div className="tm-product-art" aria-label="TipMint app summary illustration">
      <div className="tm-product-art__halo" />
      <div className="tm-product-card">
        <div className="tm-product-card__head">
          <img src="/assets/tipmint-icon.png" alt="" />
          <div><small>TIPMINT</small><strong>Shift complete</strong></div>
          <span><Check size={16} aria-hidden="true" /></span>
        </div>
        <div className="tm-product-card__total"><small>Total tips</small><strong>$186.50</strong><span>+$32.50 vs shift average</span></div>
        <dl>
          <div><dt>Hours</dt><dd>6h 42m</dd></div>
          <div><dt>Tip rate</dt><dd>$27.84/hr</dd></div>
          <div><dt>Cash</dt><dd>$74.00</dd></div>
        </dl>
        <div className="tm-product-card__action"><span>Save shift</span><ArrowRight size={17} /></div>
      </div>
      <span className="tm-product-pill tm-product-pill--one"><LockKeyhole size={16} /> No account</span>
      <span className="tm-product-pill tm-product-pill--two"><FileDown size={16} /> CSV export</span>
    </div>
  );
}

export function TipTrackerPage() {
  const features = [
    { icon: Clock3, title: "Log the shift", copy: "Record your hours and tip totals in a flow designed for the end of a busy service." },
    { icon: CircleDollarSign, title: "See the pattern", copy: "Review useful totals and rates across your shift history without building a spreadsheet." },
    { icon: FileDown, title: "Take it with you", copy: "Export records as CSV, create a JSON backup, or prepare a formatted Pro report." },
    { icon: ShieldCheck, title: "Keep it yours", copy: "Shift data lives on your device. There is no TipMint account, advertising, or behavioural tracking." },
  ];

  return (
    <SitePage>
      <PageMeta
        title="TipMint — Tip tracker for servers and hospitality workers"
        description="Track shifts, tips, hours, and useful earnings totals on iPhone. TipMint keeps shift data on-device, requires no account, and supports portable exports."
        path="/tip-tracker"
      />

      <section className="tm-product-hero">
        <div className="ds-shell tm-product-hero__grid">
          <div>
            <p className="ds-eyebrow ds-eyebrow--mint"><Sparkles size={15} /> Tip tracker for iPhone</p>
            <div className="tm-product-identity"><img src="/assets/tipmint-icon.png" alt="TipMint app icon" /><span>TIPMINT</span></div>
            <h1>Own the shift.<br /><em>Know the total.</em></h1>
            <p>TipMint is the calm, private shift companion for servers and hospitality workers who want a clearer view of their tip income.</p>
            <div className="ds-actions">
              <a className="ds-button ds-button--mint" href="mailto:info@digitalsprout.org?subject=TipMint%20launch%20updates">Get launch updates <ArrowRight size={17} /></a>
              <a className="ds-text-link ds-text-link--light" href="#features">See how it works</a>
            </div>
            <small className="tm-launch-note">App Store launch in progress · No marketing list or account required</small>
          </div>
          <ProductHeroArt />
        </div>
      </section>

      <section className="tm-proof-strip">
        <div className="ds-shell">
          <span><LockKeyhole size={18} /> No account</span>
          <span><ShieldCheck size={18} /> No ads or tracking</span>
          <span><FileDown size={18} /> CSV export</span>
          <span><RefreshCw size={18} /> Restore purchases</span>
        </div>
      </section>

      <section className="ds-section tm-features" id="features">
        <div className="ds-shell">
          <div className="ds-section-heading ds-section-heading--split">
            <div><p className="ds-kicker">Made for the post-shift moment</p><h2>The useful bits.<br />Nothing in the way.</h2></div>
            <p>TipMint turns the details you already know at clock-out into a simple history you can actually use.</p>
          </div>
          <div className="tm-feature-list">
            {features.map(({ icon: Icon, title, copy }, index) => (
              <article key={title}>
                <span className="tm-feature-list__number">0{index + 1}</span>
                {createElement(Icon, { size: 26, "aria-hidden": true })}
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <p className="tm-calculation-note">TipMint calculations are organisational estimates for your personal records, not payroll, tax, accounting, or legal advice. Always verify official pay records independently.</p>
        </div>
      </section>

      <section className="ds-section tm-privacy-callout">
        <div className="ds-shell tm-privacy-callout__grid">
          <div className="tm-privacy-orbit" aria-hidden="true"><LockKeyhole size={58} /><span /><span /><span /></div>
          <div>
            <p className="ds-kicker ds-kicker--light">Privacy without detective work</p>
            <h2>Your shift history stays on your iPhone.</h2>
            <p>TipMint does not create an account, serve ads, or track your activity across apps. RevenueCat receives pseudonymous purchase identifiers and entitlement status to unlock premium access; Apple handles all billing.</p>
            <Link className="ds-text-link ds-text-link--light" to="/tip-tracker/privacy-policy">Read the plain-language privacy policy <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="ds-section tm-pricing">
        <div className="ds-shell">
          <div className="ds-section-heading"><p className="ds-kicker">Simple options</p><h2>Choose the fit that works.</h2><p>Final price and currency are always shown by Apple before you buy.</p></div>
          <div className="tm-pricing__grid">
            <article><small>Monthly</small><strong>$2.99 <span>/ month</span></strong><p>Flexible access, billed monthly through Apple.</p></article>
            <article className="tm-pricing__featured"><span className="tm-pricing__badge">Trial if eligible</span><small>Annual</small><strong>$19.99 <span>/ year</span></strong><p>Eligible new subscribers may receive a 7-day trial where offered.</p></article>
            <article><small>Lifetime</small><strong>$49.99 <span>once</span></strong><p>One-time Pro access for the commercial life of the app; terms apply.</p></article>
          </div>
          <p className="tm-pricing__fine">Prices shown in USD and may vary by storefront, currency, tax, or Apple pricing changes. Subscriptions renew automatically unless cancelled through Apple.</p>
        </div>
      </section>

      <section className="ds-section tm-help-cta">
        <div className="ds-shell tm-help-cta__inner">
          <div><p className="ds-kicker">Questions are welcome</p><h2>Support from the people making the app.</h2></div>
          <div className="ds-actions"><Link className="ds-button ds-button--ink" to="/tip-tracker/support">TipMint support <HelpCircle size={17} /></Link><Link className="ds-text-link" to="/tip-tracker/terms-of-service">Subscription terms</Link></div>
        </div>
      </section>
    </SitePage>
  );
}

function LegalSection({ number, title, children }) {
  return (
    <section className="legal-section">
      <span className="legal-section__number">{number}</span>
      <div><h2>{title}</h2>{children}</div>
    </section>
  );
}

function TipMintLegalLayout({ kind, title, description, children }) {
  const path = kind === "privacy" ? "/tip-tracker/privacy-policy" : "/tip-tracker/terms-of-service";
  return (
    <SitePage>
      <PageMeta title={`${title} — TipMint`} description={description} path={path} />
      <header className="legal-hero">
        <div className="ds-shell legal-hero__inner">
          <Link to="/tip-tracker"><ArrowLeft size={16} /> Back to TipMint</Link>
          <div className="legal-hero__identity"><img src="/assets/tipmint-icon.png" alt="" /><span>TIPMINT</span></div>
          <h1>{title}</h1>
          <p>Effective {EFFECTIVE_DATE} · Written to be read by humans</p>
        </div>
      </header>
      <div className="ds-shell legal-layout">
        <aside aria-label="Document summary"><strong>At a glance</strong><p>{description}</p><a href="mailto:info@digitalsprout.org">Ask a question <Mail size={14} /></a></aside>
        <article className="legal-document">{children}</article>
      </div>
    </SitePage>
  );
}

export function TipTrackerPrivacyPolicy() {
  return (
    <TipMintLegalLayout
      kind="privacy"
      title="Privacy Policy"
      description="Your shift data stays on your device. TipMint has no account, ads, or behavioural tracking. Purchase access is handled by RevenueCat and Apple."
    >
      <p className="legal-intro">This Privacy Policy explains how DigitalSprout Ltd (“we”, “us”, or “our”), a company registered in the United Kingdom, handles information when you use the TipMint iOS app (“TipMint” or the “App”). DigitalSprout Ltd is the controller for personal information described in this policy.</p>

      <LegalSection number="01" title="The short version">
        <ul><li>Your shift records are stored locally on your device.</li><li>You do not need to create a TipMint account.</li><li>Optional Face ID access is handled by iOS; TipMint receives only the authentication result.</li><li>We do not run ads or track you across apps or websites.</li><li>RevenueCat helps validate purchases; Apple handles payment and billing.</li><li>You control when and where an export, backup, or report is saved or shared.</li></ul>
      </LegalSection>

      <LegalSection number="02" title="Information stored on your device">
        <p>TipMint stores the shift information you choose to enter—such as hours, tip amounts, dates, and related app settings—locally on your device. We do not operate a server that receives or stores this shift history.</p>
        <p>You can edit or delete records in the App. Removing the App normally removes its locally stored data, subject to your device backups and Apple’s operating-system behaviour.</p>
        <p>If you choose to protect TipMint with Face ID, authentication is performed by iOS using Apple’s system security. TipMint receives only a success or failure response. We do not receive, access, or store your face image, Face ID data, or biometric template.</p>
      </LegalSection>

      <LegalSection number="03" title="Purchases and premium access">
        <p>In configured iOS builds, RevenueCat initializes when TipMint launches so the App can check premium access. This can happen whether or not you have purchased TipMint Pro. RevenueCat may process a pseudonymous app-user identifier, product identifiers, transaction or receipt information supplied by Apple, entitlement status, and limited technical information needed to provide purchase access, including when you view, buy, restore, or use a premium entitlement.</p>
        <p>Apple processes the purchase itself. We do not receive your full payment-card or bank details. RevenueCat and Apple handle their information under their own policies:</p>
        <ul><li><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noreferrer">RevenueCat Privacy Policy</a></li><li><a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer">Apple Privacy Policy</a></li></ul>
      </LegalSection>

      <LegalSection number="04" title="No advertising or behavioural tracking">
        <p>TipMint does not include third-party advertising, sell personal information, or use data to track you across other companies’ apps and websites. We do not use your shift history for marketing or profiling.</p>
        <p>Apple may make diagnostics available if you separately choose to share analytics with Apple and developers in your device settings. That platform-level choice is controlled by you and Apple.</p>
      </LegalSection>

      <LegalSection number="05" title="Exports, backups, and reports">
        <p>TipMint lets you create a CSV spreadsheet, a JSON backup that can be restored in the App, and, with TipMint Pro, a formatted PDF report. These files are created only when you choose the relevant action.</p>
        <p>Once you save or share a file outside TipMint, its security and retention depend on the destination you selected—for example Files, email, cloud storage, or another app. Delete exported copies, backups, and reports separately when you no longer need them.</p>
      </LegalSection>

      <LegalSection number="06" title="Why information is processed">
        <p>Local shift information is processed on your device to provide the features you request. Purchase information is processed to perform our contract with you by validating, restoring, and maintaining premium access. We may also retain limited purchase or correspondence records where needed to comply with law, resolve disputes, or protect our legitimate interests.</p>
      </LegalSection>

      <LegalSection number="07" title="Sharing and international processing">
        <p>We do not share your shift history because we do not receive it. Purchase-related information is processed by Apple and RevenueCat as described above. These providers may process information outside the UK; their policies describe the legal safeguards they use for international transfers.</p>
      </LegalSection>

      <LegalSection number="08" title="Retention and deletion">
        <p>On-device records remain until you delete them or remove the App, subject to device backups. RevenueCat and Apple retain purchase information according to their policies and legal duties. Emails you send us may be retained while we handle your request and for a reasonable period afterward for support and record-keeping.</p>
      </LegalSection>

      <LegalSection number="09" title="Security">
        <p>Local storage reduces the amount of information sent away from your device, but no system is completely secure. Protect your device with a passcode and current software. Keep exported files only in locations you trust.</p>
      </LegalSection>

      <LegalSection number="10" title="Children">
        <p>TipMint is intended for working-age users and is not directed to children under 13. We do not knowingly collect personal information from children through a TipMint account because the App has no account system.</p>
      </LegalSection>

      <LegalSection number="11" title="Your privacy rights">
        <p>Depending on where you live, you may have rights to access, correct, delete, restrict, or object to processing of personal information we hold, and to complain to a regulator. Because shift history stays on your device, we cannot access or delete it for you. For purchase or support information we may hold, contact us at <a href="mailto:info@digitalsprout.org">info@digitalsprout.org</a>.</p>
        <p>UK users may also contact the <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noreferrer">Information Commissioner’s Office</a>.</p>
      </LegalSection>

      <LegalSection number="12" title="Changes and contact">
        <p>We may update this policy when TipMint, our providers, or legal requirements change. We will post the current version here and update the effective date. Questions or privacy requests can be sent to:</p>
        <address><strong>DIGITALSPROUT LTD</strong><br />Company number 16297589<br />Registered office: 1 Paxton Road, Stourbridge, England, DY9 8YD<br /><a href="mailto:info@digitalsprout.org">info@digitalsprout.org</a></address>
      </LegalSection>
    </TipMintLegalLayout>
  );
}

export function TipTrackerTermsOfService() {
  return (
    <TipMintLegalLayout
      kind="terms"
      title="Terms of Service"
      description="These terms explain the TipMint licence, subscriptions and lifetime purchase, acceptable use, calculation limitations, and your consumer rights."
    >
      <p className="legal-intro">These Terms of Service (“Terms”) form an agreement between you and DigitalSprout Ltd (“we”, “us”, or “our”), a company registered in the United Kingdom, for your use of the TipMint iOS app (“TipMint” or the “App”). By downloading, purchasing, or using TipMint, you agree to these Terms.</p>

      <LegalSection number="01" title="App licence and eligibility">
        <p>We give you a personal, limited, non-exclusive, non-transferable, revocable licence to use TipMint on Apple devices you own or control, subject to these Terms and Apple’s applicable rules. You must be legally able to enter this agreement. If you use TipMint for work, you remain responsible for following your employer’s policies and applicable laws.</p>
      </LegalSection>

      <LegalSection number="02" title="What TipMint does">
        <p>TipMint helps you organise shift hours, tips, and related personal records. Its totals, rates, summaries, and exports are based on the information you enter and the calculation rules available in the App.</p>
      </LegalSection>

      <LegalSection number="03" title="Important calculation disclaimer">
        <p><strong>TipMint is an organisational tool, not a payroll system.</strong> It does not provide tax, accounting, employment, financial, or legal advice and does not determine wages or legal tip entitlement. Results may be incomplete or inaccurate if entries are incomplete, laws differ, rounding occurs, or workplace rules apply.</p>
        <p>Always compare TipMint records with official payslips, employer records, bank deposits, and professional advice where appropriate. You are responsible for tax reporting and compliance with workplace or tip-sharing requirements.</p>
      </LegalSection>

      <LegalSection number="04" title="Subscriptions and purchases">
        <p>TipMint may offer these premium options:</p>
        <ul><li><strong>Monthly:</strong> $2.99 per month.</li><li><strong>Annual:</strong> $19.99 per year, with a 7-day free trial when shown as eligible by Apple.</li><li><strong>Lifetime:</strong> $49.99 as a one-time purchase.</li></ul>
        <p>These are reference prices in US dollars. The price, currency, tax, trial eligibility, and exact offer shown by Apple before confirmation control your purchase and may vary by country, storefront, or later pricing change.</p>
        <p>Monthly and annual subscriptions renew automatically through Apple unless cancelled in your Apple subscription settings before renewal. If you begin an eligible trial and do not cancel before it ends, Apple will charge the displayed subscription price. Apple’s purchase screen and terms control the exact billing and cancellation timing.</p>
      </LegalSection>

      <LegalSection number="05" title="Lifetime access, restoration, and refunds">
        <p>A lifetime purchase provides access to the premium TipMint features offered under that entitlement for the commercial lifetime of the App. It is associated with the Apple account used to buy it, is not transferable, and does not guarantee that every future feature or separate product will be included forever.</p>
        <p>You can use Restore Purchases in TipMint to ask Apple and RevenueCat to restore an eligible entitlement. Apple controls billing and refunds. Refund requests must be made through Apple and remain subject to Apple’s rules and any mandatory consumer rights.</p>
      </LegalSection>

      <LegalSection number="06" title="Your data and exports">
        <p>Your shift records are stored locally on your device. You are responsible for the accuracy of entries, maintaining any backups you need, and protecting CSV exports, JSON backups, and PDF reports after they leave the App. We are not responsible for loss caused by deletion, device loss, failed backups, third-party storage, or sharing a file with the wrong recipient.</p>
        <p>Our handling of information is explained in the <Link to="/tip-tracker/privacy-policy">TipMint Privacy Policy</Link>.</p>
      </LegalSection>

      <LegalSection number="07" title="Acceptable use">
        <p>You must not misuse TipMint, attempt to bypass premium access, reverse engineer it except where law expressly permits, interfere with its operation, use it unlawfully, or infringe our or another person’s rights. You may not resell, rent, sublicense, or distribute the App.</p>
      </LegalSection>

      <LegalSection number="08" title="Availability, changes, and termination">
        <p>We may fix, update, change, suspend, or discontinue parts of TipMint where reasonably necessary for security, law, platform requirements, or product maintenance. We do not promise uninterrupted or error-free availability. We may end your licence if you materially breach these Terms, subject to applicable law.</p>
      </LegalSection>

      <LegalSection number="09" title="Intellectual property">
        <p>TipMint, its branding, design, software, and original content belong to DigitalSprout Ltd or its licensors. These Terms grant only the limited right to use the App; they do not transfer ownership. Your shift information remains yours.</p>
      </LegalSection>

      <LegalSection number="10" title="Warranties and liability">
        <p>TipMint is provided on an “as available” basis. To the fullest extent permitted by law, we disclaim implied warranties not expressly stated here and are not liable for indirect, incidental, or consequential losses, lost income, tax errors, payroll disputes, or decisions based on App calculations.</p>
        <p>Nothing in these Terms excludes liability that cannot lawfully be excluded, including liability for death or personal injury caused by negligence, fraud, or your mandatory consumer rights. If you are a consumer, you retain all protections provided by applicable law.</p>
      </LegalSection>

      <LegalSection number="11" title="Apple terms">
        <p>Your use of TipMint is also subject to the applicable Apple Media Services terms and App Store licence terms. Apple is not responsible for providing TipMint support. Where required by Apple’s standard end-user licence agreement, Apple and its subsidiaries may enforce relevant provisions as third-party beneficiaries.</p>
      </LegalSection>

      <LegalSection number="12" title="Law, changes, and contact">
        <p>These Terms are governed by the laws of England and Wales. If you are a consumer elsewhere, this does not remove mandatory rights or courts available where you live. We may update these Terms for reasonable legal, security, or product reasons; the current version will appear here with its effective date.</p>
        <address><strong>DIGITALSPROUT LTD</strong><br />Company number 16297589<br />Registered office: 1 Paxton Road, Stourbridge, England, DY9 8YD<br /><a href="mailto:info@digitalsprout.org">info@digitalsprout.org</a></address>
      </LegalSection>
    </TipMintLegalLayout>
  );
}

export function TipTrackerSupport() {
  const faqs = [
    { q: "How do I restore a purchase?", a: "Open TipMint’s purchase screen and choose Restore Purchases while signed in to the Apple account that made the purchase. If access does not return, email us with the product you bought—never send full payment details." },
    { q: "How do I cancel a subscription?", a: "Subscriptions are managed by Apple. On iPhone, open Settings, tap your name, choose Subscriptions, select TipMint, and follow Apple’s cancellation options. Deleting the App does not cancel a subscription." },
    { q: "Where is my shift data?", a: "TipMint stores shift records locally on your device. We cannot view or recover them from a server. Use a JSON backup when you want a restorable copy or CSV for a spreadsheet, and protect those files wherever you save them." },
    { q: "How do I delete my data?", a: "Delete individual records using the controls in TipMint. Removing the App normally removes its local data, although device backups, JSON backups, CSV exports, and PDF reports you created must be managed separately." },
    { q: "Why does my total differ from payroll?", a: "TipMint uses the information you enter and is not an official payroll or tax system. Check your entries and compare them with employer records or professional advice." },
  ];

  return (
    <SitePage>
      <PageMeta title="TipMint Support — Help with shifts and purchases" description="Get help with TipMint, including purchase restoration, subscription cancellation, local shift data, backups, exports, and calculation questions." path="/tip-tracker/support" />
      <section className="support-hero">
        <div className="ds-shell support-hero__inner">
          <div><p className="ds-eyebrow ds-eyebrow--mint"><HelpCircle size={15} /> TipMint support</p><h1>Let’s get you<br /><em>back on shift.</em></h1><p>Clear answers for common questions, plus a direct line to the small team making TipMint.</p></div>
          <div className="support-contact-card"><img src="/assets/tipmint-icon.png" alt="TipMint app icon" /><small>Email support</small><h2>Tell us what happened.</h2><p>Include your iPhone model, iOS version, TipMint version, and the steps that led to the issue. Please do not send payment-card details or sensitive workplace records.</p><a className="ds-button ds-button--mint" href="mailto:info@digitalsprout.org?subject=TipMint%20Support">Email info@digitalsprout.org <Mail size={16} /></a></div>
        </div>
      </section>
      <section className="ds-section support-faq">
        <div className="ds-shell"><div className="ds-section-heading"><p className="ds-kicker">Quick answers</p><h2>Start here.</h2></div><div className="support-faq__list">{faqs.map((faq, index) => <details key={faq.q} open={index === 0}><summary><span>0{index + 1}</span>{faq.q}</summary><p>{faq.a}</p></details>)}</div><div className="support-legal-links"><span>Looking for the fine print?</span><Link to="/tip-tracker/privacy-policy">Privacy Policy</Link><Link to="/tip-tracker/terms-of-service">Terms of Service</Link></div></div>
      </section>
    </SitePage>
  );
}
