import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Backpack, Check, Compass, FileDown, Footprints, LockKeyhole, Mail, Map, Timer, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { PageMeta, SitePage } from "./SiteChrome";
import "./ruckstride.css";

const UPDATED = "12 October 2026";
const HOME = "/ruckstride";
const PRIVACY = `${HOME}/privacy-policy`;
const TERMS = `${HOME}/terms-of-service`;
const SUPPORT = `${HOME}/support`;
const EMAIL = "mailto:info@digitalsprout.org?subject=Ruckstride%20Support";

function usePageStart(path) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [path]);
}

function RuckstrideMark() {
  return <span className="rs-mark" aria-hidden="true"><Backpack size={25} strokeWidth={1.7} /></span>;
}

function RouteIllustration() {
  return (
    <figure className="rs-preview">
      <div className="rs-preview__header"><span><span className="rs-status-dot" /> OUTDOOR RUCK</span><Compass size={20} aria-hidden="true" /></div>
      <svg className="rs-route" viewBox="0 0 440 270" role="img" aria-label="Illustration of a recorded walking route across contour lines">
        <g fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".3">
          <path d="M-40 200C70 100 5 36 98 6S252 35 319-20M-20 227C93 137 36 64 117 35S254 65 358-10M-20 259C103 178 79 93 140 66S245 114 397 0M8 292C133 199 113 126 161 102S269 140 461 2M77 285C147 249 141 171 179 142S254 193 456 57M161 291C154 246 161 212 209 200S317 189 470 114M221 285C206 257 221 237 264 235S373 201 468 169M294 288C303 260 385 254 464 219" />
          <path d="M-20 66C49 57 33-6 70-23M-20 104C55 92 55 3 84-20M343 299C377 281 416 279 469 265" />
        </g>
        <path d="M92 205C74 165 114 166 127 137S98 91 147 81S178 107 206 71S263 63 283 99S258 126 292 151S345 170 330 198S244 196 217 219S161 215 145 209S105 230 92 205Z" fill="none" stroke="#c3d889" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="92" cy="205" r="9" fill="#c3d889" stroke="#243b32" strokeWidth="4" />
        <circle cx="92" cy="205" r="2" fill="#243b32" />
      </svg>
      <div className="rs-preview__caption"><span>Every mile has a story.</span><Check size={18} aria-hidden="true" /></div>
      <dl className="rs-preview__metrics">
        <div><dt>Distance</dt><dd>3.2 <small>mi</small></dd></div>
        <div><dt>Time</dt><dd>58 <small>min</small></dd></div>
        <div><dt>Pack load</dt><dd>20 <small>lb</small></dd></div>
      </dl>
      <figcaption>Illustrative workout · not an app screenshot</figcaption>
    </figure>
  );
}

export function RuckstridePage() {
  usePageStart(HOME);
  return (
    <SitePage>
      <PageMeta title="Ruckstride — Rucking & weighted walking tracker for iPhone" description="Track outdoor rucks and indoor weighted walks with Ruckstride. Record your route, time, distance and pack load, then build a useful workout history on your iPhone." path={HOME} />
      <section className="rs-hero">
        <div className="ds-shell rs-hero__grid">
          <div className="rs-hero__copy">
            <div className="rs-identity"><RuckstrideMark /><span>RUCKSTRIDE</span></div>
            <p className="rs-eyebrow">Rucking &amp; weighted walking · for iPhone</p>
            <h1>A little weight.<br /><em>A little further.</em></h1>
            <p className="rs-lede">Put your pack on. Find your pace. Keep a clear record of the miles, minutes and load that make each walk your own.</p>
            <div className="ds-actions"><a className="ds-button rs-button" href="#how-it-works">Explore Ruckstride <ArrowRight size={17} aria-hidden="true" /></a><Link className="rs-quiet-link" to={SUPPORT}>App support</Link></div>
            <p className="rs-launch-note"><span /> In development for iPhone. Not yet available on the App Store.</p>
          </div>
          <RouteIllustration />
        </div>
      </section>
      <nav className="rs-product-nav" aria-label="Ruckstride navigation"><div className="ds-shell"><a href="#how-it-works">The everyday essentials</a><a href="#ruckstride-pro">Ruckstride Pro</a><Link to={PRIVACY}>Privacy</Link><Link to={TERMS}>Terms</Link><Link to={SUPPORT}>Support <ArrowRight size={15} aria-hidden="true" /></Link></div></nav>
      <section className="rs-section" id="how-it-works">
        <div className="ds-shell">
          <div className="rs-section-heading"><p className="rs-eyebrow">A record worth coming back to</p><h2>Out on the trail.<br />Or on the treadmill.</h2><p>From a short neighbourhood loop to a longer weekend walk, keep the details together without making another account.</p></div>
          <div className="rs-features">
            <article><Map size={27} aria-hidden="true" /><span>01 / OUTDOORS</span><h3>Take the route with you.</h3><p>Record an outdoor workout with GPS, then revisit the route, elapsed time, distance, pack load and recorded elevation.</p></article>
            <article><Timer size={27} aria-hidden="true" /><span>02 / INDOORS</span><h3>Make indoor miles count.</h3><p>Use the manual treadmill mode to record an indoor session. Enter the distance from your treadmill without needing GPS.</p></article>
            <article><Footprints size={27} aria-hidden="true" /><span>03 / YOUR ROUTINE</span><h3>See the work add up.</h3><p>Keep your workout history and goals in one place. Core tracking, your journal and a JSON copy of your data are available without Pro.</p></article>
          </div>
        </div>
      </section>
      <section className="rs-pro" id="ruckstride-pro">
        <div className="ds-shell rs-pro__grid">
          <div><p className="rs-eyebrow">For the habit you’re building</p><h2>Go further<br />with Ruckstride Pro.</h2><p>Optional tools for planning ahead, looking back and taking your records with you.</p></div>
          <div className="rs-pro__details">
            <ul><li><Compass size={22} aria-hidden="true" /><div><strong>Plans</strong><span>Give your next sessions a little structure.</span></div></li><li><TrendingUp size={22} aria-hidden="true" /><div><strong>Trends</strong><span>Review your recorded workouts over time.</span></div></li><li><FileDown size={22} aria-hidden="true" /><div><strong>CSV &amp; GPX exports</strong><span>Choose when to save or share your workout data.</span></div></li></ul>
            <p className="rs-pro__billing">Monthly or yearly auto-renewing subscriptions. Available options, local price and billing period are shown in the app and by Apple before you confirm. <Link to={TERMS}>Read subscription terms.</Link></p>
          </div>
        </div>
      </section>
      <section className="rs-section rs-privacy">
        <div className="ds-shell rs-privacy__grid"><div className="rs-privacy__symbol" aria-hidden="true"><LockKeyhole size={44} strokeWidth={1.4} /></div><div><p className="rs-eyebrow">Your history, on your iPhone</p><h2>Keep the walk personal.</h2><p>Your workout records stay in the app’s storage on your device. There is no Ruckstride account, workout server or advertising. Apple provides maps and payments; RevenueCat handles Pro access and purchase information.</p><Link to={PRIVACY}>Read the full privacy policy <ArrowRight size={16} aria-hidden="true" /></Link></div></div>
      </section>
      <section className="rs-help"><div className="ds-shell rs-help__inner"><div><p className="rs-eyebrow">A small studio. A real inbox.</p><h2>Help for your next step.</h2><p>Location, purchases, exports or a question about the app.</p></div><Link className="ds-button ds-button--ink" to={SUPPORT}>Ruckstride support <ArrowRight size={17} aria-hidden="true" /></Link></div></section>
    </SitePage>
  );
}

function Section({ number, title, children }) {
  return <section className="legal-section"><span className="legal-section__number">{number}</span><div><h2>{title}</h2>{children}</div></section>;
}

function Contact() {
  return <address><strong>DIGITALSPROUT LTD</strong><br />Company number 16297589<br />Registered office: 1 Paxton Road, Stourbridge, England, DY9 8YD<br /><a href={EMAIL}>info@digitalsprout.org</a></address>;
}

function RuckstrideDocument({ title, description, path, children }) {
  usePageStart(path);
  return (
    <SitePage>
      <PageMeta title={`${title} — Ruckstride`} description={description} path={path} />
      <header className="legal-hero rs-document-hero"><div className="ds-shell legal-hero__inner"><Link to={HOME}><ArrowLeft size={16} aria-hidden="true" /> Back to Ruckstride</Link><div className="legal-hero__identity"><Backpack size={25} aria-hidden="true" /><span>RUCKSTRIDE · EVERY STEP ADDS UP</span></div><h1>{title}</h1><p>{path === SUPPORT ? "Practical help for your next walk" : `Effective ${UPDATED}`}</p></div></header>
      <div className="ds-shell legal-layout"><aside aria-label="Ruckstride information"><strong>{path === SUPPORT ? "Here to help" : "At a glance"}</strong><p>{description}</p>{path !== PRIVACY && <p><Link to={PRIVACY}>Read the Privacy Policy</Link></p>}{path !== TERMS && <p><Link to={TERMS}>Read the Terms of Service</Link></p>}{path !== SUPPORT && <p><Link to={SUPPORT}>Ruckstride support</Link></p>}<a href={EMAIL}>Email the studio <Mail size={14} aria-hidden="true" /></a></aside><article className="legal-document">{children}</article></div>
    </SitePage>
  );
}

export function RuckstridePrivacyPolicy() {
  return (
    <RuckstrideDocument title="Privacy Policy" path={PRIVACY} description="Your workouts stay on your device. Location is used for outdoor recording; Apple maps and RevenueCat purchases involve separate service processing. You choose when to export.">
      <p className="legal-intro">Ruckstride is a rucking and weighted walking journal for iPhone. This policy explains local workout records, optional location access, Pro purchases, exports and support communications.</p>
      <Section number="01" title="Who is responsible"><p>Ruckstride is provided by DIGITALSPROUT LTD, registered in England and Wales. We are the controller for personal information processed on our behalf to provide the app and answer support requests. Our contact details are below.</p></Section>
      <Section number="02" title="Workout records on your device">
        <p>Ruckstride stores your workout history, goals and preferences locally in the app’s storage. Records can include workout dates, duration, distance, pack load, recorded elevation and GPS route coordinates for outdoor sessions. Indoor treadmill records use the information you enter manually. The app uses these records on your device to show history, progress, plans and trends.</p>
        <p>There is no Ruckstride account or backend workout database. We do not automatically receive or upload your workout history or GPS route. The app does not access Apple Health or HealthKit, include advertising, or use a behavioural analytics SDK. We do not sell personal information or share it for targeted advertising.</p>
      </Section>
      <Section number="03" title="Location and Apple maps">
        <p>When you choose outdoor recording, Ruckstride requests access to location through iOS. With permission, it uses Core Location to record your route and calculate workout distance and elevation. Background location is used only while recording an outdoor workout, so a session can continue when the screen locks or you switch apps. Ruckstride does not record a location history between workouts. Indoor manual mode does not require location permission.</p>
        <p>You can change or withdraw permission in iOS Settings → Privacy &amp; Security → Location Services → Ruckstride. Precise Location improves route recording. Denying access, using approximate location or changing permission during a session can prevent or reduce the accuracy of outdoor recording.</p>
        <p>Map displays use Apple MapKit. Loading maps involves requests to Apple and can disclose the map area being viewed, location where authorised, network information and technical details needed to provide the service. A local workout record does not mean that map use is entirely offline. Apple processes its service data under the <a href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</a>, <a href="https://www.apple.com/legal/privacy/data/en/apple-maps/">Apple Maps privacy information</a> and <a href="https://www.apple.com/legal/privacy/data/en/location-services/">Location Services privacy information</a>.</p>
      </Section>
      <Section number="04" title="Pro purchases and RevenueCat">
        <p>Ruckstride uses RevenueCat to check, unlock and restore optional Pro access. When the purchase service is configured, it can contact RevenueCat when the app starts and checks access, even if you do not buy a subscription. RevenueCat generates an anonymous app user ID. This is a pseudonymous identifier for purchase continuity; it does not create a Ruckstride account.</p>
        <p>RevenueCat processes that identifier, product and transaction identifiers, purchase or receipt information, subscription dates and entitlement status, together with limited technical information such as app and SDK versions, platform, locale and currency. We do not send workout records, GPS routes or goals to RevenueCat.</p>
        <p>RevenueCat provides purchase validation and subscription analytics, including purchases, renewals and cancellations. This is separate from tracking your workout behaviour. Apple handles payment; we do not receive your full payment-card or bank details. RevenueCat processes purchase information on our behalf. Read its <a href="https://www.revenuecat.com/privacy/">Privacy Policy</a> and <a href="https://www.revenuecat.com/docs/platform-resources/apple-platform-resources/apple-app-privacy">app privacy information</a>, plus <a href="https://www.apple.com/legal/privacy/data/en/appstore/">App Store privacy information</a>.</p>
      </Section>
      <Section number="05" title="Exports and device backups">
        <p>You can use the free Export my data control to obtain a JSON copy of your records. Pro also provides CSV and GPX convenience exports. Files are prepared when you choose to export and are not automatically sent to the studio or another person. You select a destination through the iOS share sheet. Exported data, especially GPS routes, can reveal precise locations such as your home; review the contents and recipient before sharing.</p>
        <p>Once saved or shared outside Ruckstride, a file is controlled by you and the destination service. Deleting a workout in Ruckstride does not delete exported copies. Exports are portable records, not a promise of a full, restorable app backup.</p>
        <p>Depending on your device settings, iCloud or computer backups may include app data. Apple or your backup provider manages those copies. Ruckstride does not provide its own cloud sync or account-based recovery service.</p>
      </Section>
      <Section number="06" title="Support and reasons for processing">
        <p>If you email us, we receive your email address, message and any attachments you choose to send. We use them to respond and troubleshoot. Please avoid sending precise routes, medical information or full payment details unless necessary for your request. Our email service provider processes support correspondence on our behalf.</p>
        <p>We process purchase information to provide and maintain the service you request. Our legitimate interests include responding to support, understanding subscription performance and preventing misuse. Legal obligations may require us to keep limited business records. Optional location access is controlled by your iOS permission, which you can withdraw at any time. We do not use workout information for advertising or automated decisions with legal or similarly significant effects.</p>
      </Section>
      <Section number="07" title="Retention, deletion and security">
        <p>Your local records remain until you delete them, use the app’s erase controls or remove the app, subject to operating-system behaviour and backups. We cannot remotely retrieve or erase a workout that exists only on your device. Protect your iPhone with a passcode and keep iOS updated.</p>
        <p>Erasing local data does not cancel a subscription, delete Apple’s purchase records or automatically remove RevenueCat purchase information, support emails, shared exports or device backups. Purchase information is retained as needed to validate and restore access, handle disputes and meet legal requirements. Support correspondence is kept while needed to resolve your request and for necessary follow-up or legal records; it is then deleted or anonymised.</p>
        <p>For a request about purchase or support information processed on our behalf, contact us. We may need enough information to locate the record and verify your request, and will explain any legal retention requirement. Removing a purchase record cannot cancel Apple billing; manage the subscription separately.</p>
      </Section>
      <Section number="08" title="Providers, international transfers and your rights">
        <p>Apple and RevenueCat may process information outside the UK or your home country, including in the United States. Where required, transfers of information processed on our behalf use appropriate safeguards such as approved contractual terms. We may disclose information we hold when legally required, to protect legal rights, or as part of a business transfer subject to applicable data-protection requirements.</p>
        <p>Depending on where you live, you may have rights to access, correct, delete or receive a copy of personal information, restrict or object to processing, and withdraw consent where applicable. Contact us to exercise those rights. You may also complain to your local data-protection authority; in the UK this is the <a href="https://ico.org.uk/make-a-complaint/">Information Commissioner’s Office</a>.</p>
      </Section>
      <Section number="09" title="Children, changes and contact">
        <p>Ruckstride is not directed to children under 13. If you believe a child has sent personal information to us, contact us so we can review and address it.</p>
        <p>We may update this policy when the app, our providers or legal requirements change. The effective date identifies this version. We will provide appropriate notice of material changes and request consent where required.</p><Contact />
      </Section>
    </RuckstrideDocument>
  );
}

export function RuckstrideTermsOfService() {
  return (
    <RuckstrideDocument title="Terms of Service" path={TERMS} description="The terms for using Ruckstride, optional monthly or yearly Pro subscriptions, workout recording, exported files and your consumer rights.">
      <p className="legal-intro">These terms apply to your use of Ruckstride, provided by DIGITALSPROUT LTD. By using the app, you agree to these terms. Please read them together with our <Link to={PRIVACY}>Privacy Policy</Link>.</p>
      <Section number="01" title="Using Ruckstride"><p>Ruckstride helps you record outdoor rucks and indoor weighted walks, maintain a workout history and review your goals. You must be legally able to agree to these terms or have permission from a parent or guardian where required. The app is not directed to children under 13.</p><p>Apple’s <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Standard End User Licence Agreement</a> governs the iOS software licence. These service terms supplement that licence and the applicable App Store terms. Apple is not the provider of Ruckstride’s workout journal or support service.</p></Section>
      <Section number="02" title="Your activity and the limits of recording">
        <p>Ruckstride is a fitness recordkeeping tool. It does not provide medical advice, diagnose or treat a condition, or determine a safe pack weight, route or training intensity for you. Plans and goals are general organisational features, not personalised medical or coaching advice. We do not promise a particular fitness outcome or precise calorie expenditure.</p>
        <p>Choose activity appropriate to your experience and circumstances, use suitable equipment and pay attention to your surroundings. Stop if you feel unwell. If you are unsure whether weighted walking is suitable for you, seek advice from a qualified professional.</p>
        <p>Recorded distance, elevation, pace and routes are estimates affected by GPS reception, permissions, terrain, battery, device operation and the details you enter. Background recording may be interrupted by iOS or a device shutdown. Check important records before using or sharing them. Ruckstride is not an emergency, navigation or location-sharing service.</p>
      </Section>
      <Section number="03" title="Ruckstride Pro subscriptions">
        <p>Core outdoor and indoor tracking, your local workout history, deletion controls and a JSON export of your data are available without Pro. Optional Ruckstride Pro offers additional features such as plans, trends and CSV or GPX convenience exports. The app shows the features included in the offer before purchase. Available subscription options are monthly and yearly; the current local price, currency, billing period and any applicable offer are displayed in the app and Apple’s purchase confirmation. No purchase is completed without your confirmation.</p>
        <p>Payment is charged to your Apple Account. Subscriptions renew automatically for the selected period unless cancelled before renewal. To avoid the next charge, cancel at least 24 hours before the current period ends. If a trial or introductory offer is displayed, its duration, eligibility and subsequent price are shown before you agree; no trial is promised by these terms.</p>
        <p>Manage or cancel through iPhone Settings → your name → Subscriptions → Ruckstride, or the app’s subscription-management link. Apple’s <a href="https://support.apple.com/en-gb/118428">cancellation instructions</a> explain the current process. Deleting the app, erasing records or contacting support does not cancel a subscription. After cancellation, access ordinarily continues until the paid period ends, subject to Apple’s rules for trials and refunds.</p>
        <p>Use Restore Purchases with the Apple Account used for the original purchase to recover eligible Pro access. An internet connection may be needed to verify access. Restoring a purchase restores entitlement, not local workout history. RevenueCat helps manage that entitlement.</p>
        <p>Apple handles billing and refund requests through <a href="https://reportaproblem.apple.com/">Report a Problem</a>. Refund eligibility depends on Apple’s rules and applicable law. Nothing here removes statutory cancellation, refund or other consumer rights. Any changes to subscription pricing or renewal terms are communicated through the required Apple process.</p>
      </Section>
      <Section number="04" title="Your records and exports">
        <p>Your workout content remains yours. You permit the app to process it as needed to deliver the features you choose. Workouts are stored locally; we do not provide a server backup or an account-based recovery service. Keep copies of information you need before erasing records, deleting the app or changing devices.</p>
        <p>You decide when and where to save or share JSON, CSV and GPX exports. A route can reveal private locations. Check the file and its destination before sharing. Exported files are not a full restorable app backup, and we cannot remove copies held by recipients or other services. Exercising your applicable privacy rights does not require a Pro subscription.</p>
      </Section>
      <Section number="05" title="Responsible use and ownership"><p>You may use Ruckstride for personal use on supported devices you own or control, subject to the applicable licence and App Store rules. The app’s software, design and branding belong to their respective owners; your workout records remain yours.</p><p>Do not distribute unauthorised copies, interfere with the app or its purchase services, misuse support, or infringe someone else’s rights. These restrictions do not prohibit anything that applicable law or an open-source licence expressly allows.</p></Section>
      <Section number="06" title="Availability and your legal rights"><p>We aim to maintain a useful and reliable app and may release fixes or change features. Maps, purchases and other platform services depend on Apple, RevenueCat, connectivity and device compatibility. We cannot promise uninterrupted service, complete GPS tracks or compatibility with every future device or operating-system version.</p><p>We remain responsible for obligations imposed by applicable law, including remedies for defective digital content or services. Nothing in these terms excludes or limits liability for fraud, death or personal injury caused by negligence, or any liability that cannot lawfully be excluded or limited.</p><p>If we discontinue the app or make a material adverse change to paid functionality, we will provide reasonable notice where practicable and respect applicable cancellation or refund rights. Changes do not retrospectively remove rights relating to an existing purchase.</p></Section>
      <Section number="07" title="Ending use, updates and concerns"><p>You can stop using Ruckstride at any time. Cancel any subscription separately and keep any records you need before deleting local data. We may update these terms when the app or legal requirements change, with appropriate notice of material changes and agreement where required.</p><p>These terms are governed by the laws of England and Wales, without removing mandatory consumer protections where you ordinarily live. The courts of England and Wales have non-exclusive jurisdiction; you retain any right under applicable law to bring a claim in your local courts.</p><p>Contact us if you have a question or concern so we can try to resolve it.</p><Contact /></Section>
    </RuckstrideDocument>
  );
}

export function RuckstrideSupport() {
  return (
    <RuckstrideDocument title="Keep your next step simple." path={SUPPORT} description="Help with location recording, indoor workouts, Pro purchases, exports and deleting local data. Contact the studio for a technical question.">
      <p className="legal-intro">A few practical answers for your next walk. If you need more help, <a href={EMAIL}>email Ruckstride support</a>. Ruckstride is currently in development for iPhone.</p>
      <Section number="01" title="Contact the studio"><p>Include your iPhone model, iOS version, Ruckstride version, what you expected and what happened. For a recording issue, tell us whether the workout was outdoors or indoors and whether the screen was locked. You do not need to send a precise route, health information or full payment details for ordinary technical support.</p><Contact /></Section>
      <Section number="02" title="Get an outdoor route recording"><p>Start an outdoor session and allow location access when iOS asks. Check iOS Settings → Privacy &amp; Security → Location Services → Ruckstride if permission was previously denied. Enable Precise Location for better route accuracy.</p><p>Location is used in the background only while an outdoor workout is recording. End the session when you have finished. Buildings, tree cover and weak GPS reception can affect the track. If the app is force-quit, permissions change or the device shuts down, recording may be interrupted. A map is a record of your session, not a navigation or emergency tool.</p></Section>
      <Section number="03" title="Record a treadmill workout"><p>Choose the indoor manual mode and enter the workout details, including your treadmill distance and pack load. Indoor mode does not need GPS. Check the units and values before saving; these sessions use your entries rather than an outdoor route.</p></Section>
      <Section number="04" title="Restore or manage Pro"><p>If Pro is missing after reinstalling or changing devices, use Restore Purchases while signed in to the Apple Account that made the purchase, with an internet connection available. Restoring Pro does not recover workouts that were stored only on the previous device.</p><p>To change or cancel a subscription, open iPhone Settings → your name → Subscriptions → Ruckstride, or use the app’s subscription-management link. Deleting the app does not stop renewal. See <a href="https://support.apple.com/en-gb/118428">Apple’s subscription help</a> or request an eligible refund through <a href="https://reportaproblem.apple.com/">Apple’s Report a Problem</a>.</p></Section>
      <Section number="05" title="Export a record"><p>Open Settings → Your data → Export my data for a free JSON copy of your records. With Pro, Export workout data provides CSV and GPX options. Choose a destination in the iOS share sheet. CSV is useful for workout records; GPX contains recorded route information for compatible mapping tools. An indoor session has no GPS route to export.</p><p>Review the file before sending it, especially if the route begins or ends at home. Exporting does not automatically email the studio. Shared copies must be managed separately, and exports cannot be assumed to restore your full app history.</p></Section>
      <Section number="06" title="Erase your local data"><p>Open Settings → Your data → Delete all workout data and confirm the deletion. This control is available without Pro. Save any records you want to keep first. We cannot remotely restore a workout that was stored only on your device. Erasing local records does not delete exports or operating-system backups and does not cancel Pro billing.</p><p>To ask about purchase or support information processed on our behalf, <a href="mailto:info@digitalsprout.org?subject=Ruckstride%20Privacy%20Request">send a privacy request</a>. You can find the complete details in our <Link to={PRIVACY}>Privacy Policy</Link>.</p></Section>
    </RuckstrideDocument>
  );
}
