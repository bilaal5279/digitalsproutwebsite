import { ArrowLeft, Mail, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { PageMeta, SitePage } from "./SiteChrome";

const EFFECTIVE_DATE = "26 September 2026";
const PRIVACY_PATH = "/haulfolio/privacy-policy";
const TERMS_PATH = "/haulfolio/terms-of-service";

function LegalSection({ number, title, children }) {
  return (
    <section className="legal-section">
      <span className="legal-section__number">{number}</span>
      <div><h2>{title}</h2>{children}</div>
    </section>
  );
}

function OperatorContact() {
  return (
    <address>
      <strong>DIGITALSPROUT LTD</strong><br />
      Company number 16297589<br />
      Registered office: 1 Paxton Road, Stourbridge, England, DY9 8YD<br />
      <a href="mailto:info@digitalsprout.org">info@digitalsprout.org</a>
    </address>
  );
}

function HaulfolioLegalLayout({ kind, title, description, children }) {
  const isPrivacy = kind === "privacy";
  return (
    <SitePage>
      <PageMeta title={`${title} — Haulfolio`} description={description} path={isPrivacy ? PRIVACY_PATH : TERMS_PATH} />
      <header className="legal-hero">
        <div className="ds-shell legal-hero__inner">
          <Link to="/support"><ArrowLeft size={16} /> Back to support</Link>
          <div className="legal-hero__identity"><Package size={24} aria-hidden="true" /><span>HAULFOLIO</span></div>
          <h1>{title}</h1>
          <p>Effective {EFFECTIVE_DATE} · Written to be read by humans</p>
        </div>
      </header>
      <div className="ds-shell legal-layout">
        <aside aria-label="Document summary">
          <strong>At a glance</strong>
          <p>{description}</p>
          <p><Link to={isPrivacy ? TERMS_PATH : PRIVACY_PATH}>{isPrivacy ? "Read the Terms of Service" : "Read the Privacy Policy"}</Link></p>
          <a href="mailto:info@digitalsprout.org">Ask a question <Mail size={14} /></a>
        </aside>
        <article className="legal-document">{children}</article>
      </div>
    </SitePage>
  );
}

export function HaulfolioPrivacyPolicy() {
  return (
    <HaulfolioLegalLayout
      kind="privacy"
      title="Privacy Policy"
      description="Your inventory and photos are stored on your device. Purchases use Apple or Google and RevenueCat. You choose when to export, search eBay or use an available connection."
    >
      <p className="legal-intro">Haulfolio helps clothing resellers keep track of inventory, sales and recorded costs without creating an account. This policy explains the app’s data handling and what happens when you contact us.</p>

      <LegalSection number="01" title="Who is responsible">
        <p>Haulfolio is provided by DIGITALSPROUT LTD, a company registered in England and Wales. We are the controller of personal information we process to provide Haulfolio and customer support. Our contact details appear at the end of this policy.</p>
      </LegalSection>

      <LegalSection number="02" title="Inventory, photos and other local records">
        <p>Your inventory records, quantities, barcodes, item and receipt photos, purchase costs and dates, sources, storage locations, sales, fees, returns, expenses, notes and app preferences are stored locally in the app’s storage on your device. Core record keeping works offline. We do not operate a cloud inventory database or automatically upload these records to our servers or RevenueCat.</p>
        <p>The app uses the system photo or file picker to access only the photos or files you choose. You can decline optional permissions and still use basic record keeping, and change permissions in your device settings.</p>
        <p>If you use barcode scanning, Haulfolio asks for camera permission and reads UPC or EAN barcodes on your device. The scanner does not save or upload camera images or record audio. A barcode is stored as an item reference when you choose to save it; you can enter the number manually instead of using the camera.</p>
        <p>Business mileage is a manual log. The trip date, purpose, distance, miles or kilometres, and any start location, end location or notes you enter stay in your local workspace. Haulfolio does not use GPS, track your location or automatically record your journeys.</p>
        <p>Haulfolio does not require access to contacts, device location or your microphone. It does not use your photos for AI training or product recognition. Please avoid entering unnecessary personal information about buyers or other people.</p>
      </LegalSection>

      <LegalSection number="03" title="Purchases and RevenueCat">
        <p>Apple’s App Store or Google Play processes subscription payments. We do not receive your full payment-card or bank details. The store handles its own account and payment information under its privacy policy.</p>
        <p>We use RevenueCat to check purchases, restore eligible subscriptions, enable Pro features, prevent purchase fraud and understand subscription performance. RevenueCat processes a randomly generated app user identifier, purchase history, store receipts or transaction identifiers, product and subscription status, and technical information such as the app platform, SDK version, locale and currency. Requests to online services also expose an IP address to the receiving service.</p>
        <p>The subscription service may connect when you open Haulfolio, including when you have not bought Pro. Its generated identifier is not a Haulfolio login. If you choose an available in-app eBay feature, a further identifier derived from a random key on your device is associated with your RevenueCat purchase record so our connection service can check Pro access. This does not use your name, email address or eBay username as your subscription identifier. We do not send your inventory, photos or sales records to RevenueCat as customer attributes.</p>
        <p>RevenueCat provides subscription analytics, such as purchase and renewal reporting. Haulfolio has no advertising SDK, separate behavioral analytics SDK or advertising-identifier tracking, and we do not sell personal information or share it for targeted advertising. Learn more in <a href="https://www.revenuecat.com/privacy">RevenueCat’s Privacy Policy</a>, <a href="https://www.apple.com/legal/privacy/">Apple’s Privacy Policy</a> and <a href="https://policies.google.com/privacy">Google’s Privacy Policy</a>.</p>
      </LegalSection>

      <LegalSection number="04" title="Imports, exports, backups and device services">
        <p>CSV files you select for import are read and checked on your device. After you review the column mapping and preview, the app can add inventory and historical sales records, including quantities, sources, storage locations, costs, dates, shipping, fees and supported adjustments. Importing a CSV does not upload it to us or connect to a marketplace account.</p>
        <p>When you choose to export a CSV or full backup, the app creates a file for the destination you select. A full backup contains your records and managed photos; a CSV export does not include the photos. Exports are not sent to us automatically. A backup does not contain your RevenueCat purchase identity, eBay connection credentials or device connection key, and does not grant a subscription.</p>
        <p>Files saved to email, cloud storage or another app are handled by that service. Exported files may contain private business information and are not password-encrypted by Haulfolio. Store them somewhere you trust and remove copies you no longer need.</p>
        <p>Depending on your operating system and settings, device backups may include Haulfolio’s local files. You control those backups through Apple, Google or your device provider. Haulfolio does not provide automatic cloud sync. Restoring a subscription does not restore inventory.</p>
      </LegalSection>

      <LegalSection number="05" title="Support and purposes of processing">
        <p>If you email us, we receive your email address, message and any attachments you choose to send. We use this information to answer your request and resolve problems. Send only the information needed; we will not ask for your password or full payment-card details.</p>
        <p>Where UK or European data protection law applies, we process information needed to provide requested features, manage subscriptions and answer contractual support requests to perform our contract with you. We rely on legitimate interests for proportionate security, fraud prevention, support administration and subscription performance reporting, taking your rights into account. We also process information where necessary to meet legal obligations. Where an optional activity requires consent, we ask for it and you can withdraw it without affecting earlier lawful processing.</p>
      </LegalSection>

      <LegalSection number="06" title="eBay research and optional connections">
        <p>Public browser searches are available without connecting an eBay account. Your item search text or barcode is sent to the eBay site you select when you tap a search button. eBay receives the technical information normally sent by your browser or the app handling the link, such as your IP address, and handles the visit under its <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-privacy-notice-privacy-policy?id=4260">User Privacy Notice</a> and your browser or eBay settings.</p>
        <p>In-app eBay lookup and account imports are not currently enabled. The following describes their handling if they become available in a supported app version and you choose to use them. The app shows availability before you can connect or search; installing Haulfolio or buying Pro does not itself connect an eBay account.</p>
        <p>For an in-app search, your chosen query or barcode and marketplace are sent through our connection service to eBay. Search results can display photos from eBay’s image servers, which receive your IP address and the image request. You do not need to connect a selling account for this search. Nothing is added to your local inventory until you review and save it.</p>
        <p>To connect a selling account, you sign in with eBay and grant permission there. We do not receive your eBay password. Our service uses eBay authorization tokens to read your seller identity, listings and sales for the import you request. It also processes your selected date range, workspace currency and reporting time zone. Raw eBay order responses may include buyer details while the service prepares a preview; buyer names, contact details, delivery addresses and payment details are excluded from the returned preview and saved Haulfolio records. We do not keep the raw order responses in a server inventory database.</p>
        <p>The authorization tokens and seller connection details are encrypted into a connection credential held in your device’s secure storage. That credential is sent to our service for connection requests and refreshed when needed. A separate random device key and the related subscription identifier let the service verify the request and check Pro with RevenueCat. Our service and hosting provider also receive technical request information, including an IP address. Imported inventory and sales are saved locally only after you confirm them; the app does not continuously synchronize or change your eBay listings.</p>
        <p>Disconnect eBay in the app to remove the saved connection credential and request revocation of eBay access. If eBay cannot confirm revocation, the app explains that you should also remove Haulfolio in your eBay account permissions. Disconnecting leaves imported local records and your subscription intact. Uninstalling the app is not a substitute for revoking eBay permission.</p>
      </LegalSection>

      <LegalSection number="07" title="Who receives information and where">
        <p>RevenueCat and its service providers process subscription information for us. Our email and hosting providers process communications and the technical information needed to deliver those services. Apple and Google process store transactions under their own terms. We may disclose information when required by law or when reasonably necessary to establish or defend legal rights.</p>
        <p>These providers may process information outside the United Kingdom, including in the United States. Where a transfer requires safeguards, we use the applicable contractual protections. RevenueCat’s <a href="https://www.revenuecat.com/dpa">Data Processing Addendum</a> includes standard contractual clauses and the UK transfer addendum for relevant transfers. Contact us for information about safeguards applicable to your data.</p>
      </LegalSection>

      <LegalSection number="08" title="Retention and deletion">
        <p>Local records remain on your device until you delete them or remove the app’s data. Archiving an item only changes its visibility. A subscription ending does not delete your records. Uninstalling the app can remove its local data, while copies in exports or device backups may remain until you delete them separately.</p>
        <p>Use the app’s delete-local-data control to erase its local workspace. Back up anything you want to keep first. We cannot retrieve or remotely erase inventory that exists only on your device. Deleting data or uninstalling the app does not cancel a subscription.</p>
        <p>We retain support and subscription information only for as long as needed for the purposes described here, including resolving requests, verifying entitlements, dealing with disputes and meeting applicable legal record-keeping requirements. Retention depends on the nature of the record and those requirements. Contact us to request deletion of information held by us or our processors; we will explain any information we must retain and why.</p>
      </LegalSection>

      <LegalSection number="09" title="Your choices and privacy rights">
        <p>You can review and correct local records, export your data, remove photos and delete local data in the app. Depending on the law that applies to you, you may also have rights to access, correct, erase or receive a portable copy of personal information we hold, restrict or object to processing, and withdraw consent. We do not use personal information to make solely automated decisions with legal or similarly significant effects.</p>
        <p>Email us to exercise these rights. We may ask for limited information to verify and locate the relevant record, such as a store transaction reference; you do not need to send your full inventory. You can complain to the <a href="https://ico.org.uk/make-a-complaint/">UK Information Commissioner’s Office</a> or your local data protection authority.</p>
      </LegalSection>

      <LegalSection number="10" title="Security and children">
        <p>We use reasonable safeguards appropriate to the information involved, including encrypted connections for subscription services. No storage or transmission method is completely secure. Protect access to your device, install updates and keep a usable backup of important records.</p>
        <p>Haulfolio is intended for people managing resale activity and is not directed to children under 13. If you believe a child has provided us with personal information, contact us so we can investigate and take appropriate action.</p>
      </LegalSection>

      <LegalSection number="11" title="Changes and contact">
        <p>We may update this policy as the app or legal requirements change. We will update the effective date and provide an appropriate notice of material changes. Where required, we will obtain consent before a new use of personal information.</p>
        <OperatorContact />
      </LegalSection>
    </HaulfolioLegalLayout>
  );
}

export function HaulfolioTermsOfService() {
  return (
    <HaulfolioLegalLayout
      kind="terms"
      title="Terms of Service"
      description="Use Haulfolio to manage your own resale records. Pro is an optional store subscription. Your records remain available when Pro ends."
    >
      <p className="legal-intro">These terms describe the Haulfolio service provided by DIGITALSPROUT LTD. Please read them before using the app or purchasing Pro. Nothing here removes rights that applicable law gives you.</p>

      <LegalSection number="01" title="The service and your use">
        <p>Haulfolio is an inventory and recorded-profit tool for clothing resellers. It helps you record purchases, quantities, sources, storage locations, sales, fees, shipping, returns, expenses and manual business mileage. You can scan or enter a barcode as an item reference, import supported CSV records and open public eBay searches for price research. It does not publish or edit marketplace listings, continuously synchronize marketplace records, process your customers’ payments, file taxes or value products automatically.</p>
        <p>In-app eBay lookup and account imports are not currently enabled. If made available, these optional Pro features require a supported installed app, an internet connection and the connection service. Importing listings or sales also requires your permission in eBay. Availability depends on eBay and the connection service; do not purchase Pro on the assumption that an unavailable feature will become available. Public browser searches remain available without Pro or an account connection.</p>
        <p>You must have the legal capacity to agree to these terms, or appropriate parent or guardian permission where the law allows it. Use the app lawfully and only with records and photos you are entitled to use. You remain responsible for your resale activity and any obligations to buyers, marketplaces and tax authorities.</p>
      </LegalSection>

      <LegalSection number="02" title="Free features and Haulfolio Pro">
        <p>The free plan allows 25 owned, unsold physical items. Archived unsold items still count toward that allowance. Historical sold records are not capped. Basic record entry, item profit, basic totals, access to your data, CSV export and full backup and restore are available without Pro.</p>
        <p>Pro adds unlimited active inventory, new bulk-lot creation, advanced reports and comparisons, inventory-aging views and saved filters. The app explains which features require Pro before you purchase. An internet connection and a valid store entitlement are needed to buy or restore a subscription; core local record keeping works offline.</p>
        <p>If Pro expires, every existing record remains available. You can continue viewing, editing, selling, recording returns, exporting and backing up your records. If you hold more than 25 unsold items, new acquisitions and new Pro-only operations are restricted until you are within the free allowance or have Pro again. Physical returns and backup restoration remain available even above the allowance.</p>
      </LegalSection>

      <LegalSection number="03" title="Subscriptions, billing and cancellation">
        <p>Pro is available through monthly or yearly subscriptions offered by the App Store or Google Play. The purchase screen and store confirmation show the current price, currency, billing period and any applicable offer before you agree. An annual subscription is billed for the full year, even if a monthly equivalent is shown for comparison.</p>
        <p>Payment is charged to your store account. Subscriptions renew automatically for the selected period unless you cancel under the store’s cancellation rules before renewal. Any price change is handled with the notice and consent required by the store and applicable law. We do not promise a free trial; any trial or promotion must be explicitly shown with its conditions at purchase.</p>
        <p>You can manage or cancel in your store subscription settings: <a href="https://support.apple.com/118428">Apple subscription help</a> or <a href="https://support.google.com/googleplay/answer/7018481">Google Play subscription help</a>. Cancelling normally preserves access through the already-paid period, subject to refunds or other store adjustments. Uninstalling Haulfolio, deleting local data or contacting support does not itself cancel automatic renewal.</p>
        <p>Use the store’s refund process or contact us for assistance with a purchase problem. Refund eligibility is subject to the store’s rules and applicable law. These terms do not exclude any statutory cancellation, refund or other consumer remedy.</p>
      </LegalSection>

      <LegalSection number="04" title="Restoring purchases and keeping your data">
        <p>Restore Purchases checks eligible purchases with the original store account. It restores subscription access, not your inventory, photos or records. A subscription purchased on one platform is not promised to transfer to another platform.</p>
        <p>Your workspace is stored locally. Keep regular backups in a location you control, especially before uninstalling the app, changing devices or restoring a workspace. A CSV export is not a full photo backup. A full restore replaces the selected local workspace after confirmation; review the app’s explanation before proceeding.</p>
        <p>For CSV imports, review the column mapping and preview before confirming. Check whether amounts apply to each unit or the whole row, and what any adjustment represents. A sold row with a quantity represents that number of sold units; split partially sold stock into separate rows. CSV imports do not include photos or recreate a complete workspace.</p>
        <p>For any available eBay import, review the selected listings or sales, match existing stock and enter or confirm purchase costs, fees and postage before saving. An import may not include every transaction, adjustment or cost and is not a replacement for your marketplace statements. Disconnecting does not remove imported records; delete those locally if you no longer want them.</p>
        <p>You retain ownership of your records and photos. We do not claim ownership of them. Our <Link to={PRIVACY_PATH}>Privacy Policy</Link> explains local storage, optional exports, device backups and the limited information used for subscriptions and support.</p>
      </LegalSection>

      <LegalSection number="05" title="Understanding the figures">
        <p>Haulfolio’s totals depend on the data you enter and the costs you record. They are not audited accounts, tax calculations, professional financial advice or a guarantee of earnings. Missing or incorrect costs, refunds, dates or fees can change the result. Check important figures against your marketplace statements, receipts and other records.</p>
        <p>Barcode scanning itself reads the printed number; it does not establish a product’s identity, condition, cost or value. If in-app lookup is available, any suggested listing details still require your review before saving. Mileage totals use the distances and units you enter, without GPS tracking or an automatic tax-deduction calculation.</p>
        <p>eBay research shows information controlled by eBay and its sellers. Current listings and any in-app comparison show asking prices, and sold browser results may not show an accepted offer or the seller’s fees. Check the item, condition, quantity, shipping and currency yourself. Research does not convert currencies, and results are not a guaranteed sale price. Searching alone does not change your Haulfolio records.</p>
        <p>An unsold item’s recorded cost, a sale’s profit and a period’s profit after recorded expenses are different measures. The app explains its calculations. You are responsible for determining what records and reporting your business or local law requires and for seeking professional advice when needed.</p>
      </LegalSection>

      <LegalSection number="06" title="App licence and responsible use">
        <p>We grant you a limited right to use Haulfolio on devices you own or control, subject to these terms, the applicable store rules and any open-source component licences. The app’s software, branding and design remain the property of their respective owners.</p>
        <p>Do not circumvent subscription checks, interfere with the service, distribute unauthorized copies or use the app to infringe another person’s rights. Restrictions do not prevent activities that applicable law or an open-source licence expressly permits.</p>
        <p>For the iOS app, Apple’s <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Standard End User Licence Agreement</a> also governs the software licence. These service terms do not replace that agreement or the store’s purchase terms. Apple and Google are not the providers of Haulfolio’s record-keeping service.</p>
      </LegalSection>

      <LegalSection number="07" title="Updates, availability and your legal rights">
        <p>We aim to provide a useful, reliable app and may release fixes or updates. Store services, device compatibility and network availability can affect some features. Install supported updates and keep your own backups. We do not guarantee uninterrupted availability or that the app will meet every business requirement.</p>
        <p>We remain responsible for obligations and remedies imposed by applicable law, including applicable rights relating to defective digital content or services. Nothing in these terms excludes liability for fraud, death or personal injury caused by negligence, or any other liability that cannot lawfully be excluded or limited.</p>
        <p>If we make a material adverse change to paid features or discontinue the service, we will provide reasonable notice where practicable and honor any applicable rights to cancel or receive a refund. A change to these terms does not retrospectively remove rights relating to a purchase you have already made.</p>
      </LegalSection>

      <LegalSection number="08" title="Ending use and changes to these terms">
        <p>You can stop using Haulfolio at any time. Cancel any subscription separately and export or back up records you want to retain before deleting the app. We may restrict access where reasonably necessary to address serious misuse or a legal requirement, with notice and an opportunity to resolve the issue where appropriate. Applicable consumer and refund rights continue to apply.</p>
        <p>We may update these terms to reflect changes to the service or law. The effective date identifies the current version. We will provide appropriate notice of material changes and seek agreement where required.</p>
      </LegalSection>

      <LegalSection number="09" title="Governing law and resolving concerns">
        <p>These service terms are governed by the laws of England and Wales. This choice does not deprive you of mandatory protections available under the law where you ordinarily live. The courts of England and Wales have non-exclusive jurisdiction, and you retain any right to bring a claim in your local courts that applicable law gives you.</p>
        <p>Please contact us if something is wrong so we can try to resolve it. These terms do not require arbitration or waive any right that the law does not allow you to waive.</p>
      </LegalSection>

      <LegalSection number="10" title="Contact us">
        <OperatorContact />
      </LegalSection>
    </HaulfolioLegalLayout>
  );
}
