import { ArrowLeft, Leaf, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { PageMeta, SitePage } from "./SiteChrome";

const UPDATED = "8 October 2026";
const PRIVACY = "/hrtree/privacy-policy";
const TERMS = "/hrtree/terms-of-service";
const SUPPORT = "/hrtree/support";
const EMAIL = "mailto:info@digitalsprout.org?subject=HRTree%20Support";

function Section({ number, title, children }) {
  return <section className="legal-section"><span className="legal-section__number">{number}</span><div><h2>{title}</h2>{children}</div></section>;
}

function Contact() {
  return <address><strong>DIGITALSPROUT LTD</strong><br />Company number 16297589<br />Registered office: 1 Paxton Road, Stourbridge, England, DY9 8YD<br /><a href={EMAIL}>info@digitalsprout.org</a></address>;
}

function HRTreePage({ title, description, path, children }) {
  return (
    <SitePage>
      <PageMeta title={`${title} — HRTree`} description={description} path={path} />
      <header className="legal-hero">
        <div className="ds-shell legal-hero__inner">
          <Link to="/support"><ArrowLeft size={16} aria-hidden="true" /> Back to studio support</Link>
          <div className="legal-hero__identity"><Leaf size={25} aria-hidden="true" /><span>HRTREE · YOUR EVERYDAY STORY</span></div>
          <h1>{title}</h1>
          <p>{path === SUPPORT ? "A little help for your everyday routine" : `Effective ${UPDATED} · Written to be read by humans`}</p>
        </div>
      </header>
      <div className="ds-shell legal-layout">
        <aside aria-label="HRTree information">
          <strong>{path === SUPPORT ? "Here to help" : "At a glance"}</strong>
          <p>{description}</p>
          {path !== PRIVACY && <p><Link to={PRIVACY}>Read the Privacy Policy</Link></p>}
          {path !== TERMS && <p><Link to={TERMS}>Read the Terms of Service</Link></p>}
          {path !== SUPPORT && <p><Link to={SUPPORT}>HRTree support</Link></p>}
          <a href={EMAIL}>Email the studio <Mail size={14} aria-hidden="true" /></a>
        </aside>
        <article className="legal-document">{children}</article>
      </div>
    </SitePage>
  );
}

export function HRTreePrivacyPolicy() {
  return (
    <HRTreePage title="Privacy Policy" path={PRIVACY} description="Your HRTree journal stays in the app’s storage on your device. There is no HRTree account, cloud sync, advertising or app analytics. You decide when to share a report.">
      <p className="legal-intro">HRTree is a personal menopause and HRT journal. This policy explains the information you choose to record, optional iPhone features, and what happens if you contact the studio.</p>
      <Section number="01" title="Who is responsible">
        <p>HRTree is provided by DIGITALSPROUT LTD, registered in England and Wales. We are responsible for personal information we process when providing the app and answering support requests. Our contact details appear below.</p>
      </Section>
      <Section number="02" title="Your journal, on your device">
        <p>Information you enter is stored locally in HRTree’s app storage on your device. It may include:</p>
        <ul>
          <li>Your chosen name, menopause stage, goals, symptoms of interest, treatment status and preferred check-in rhythm.</li>
          <li>Medication names, recorded doses, schedules, start dates, treatment notes, dose logs and patch application sites.</li>
          <li>Check-in dates, mood, energy, clarity, sleep hours, symptom severity, bleeding or flow entries, and journal notes.</li>
          <li>Appointment titles, dates and questions, plus app and reminder preferences.</li>
        </ul>
        <p>These entries can contain sensitive health information. HRTree uses them on your device to show your journal, organise your routine, calculate summaries, schedule optional reminders and prepare reports you request. You choose what to enter, and the app does not require an account.</p>
        <p>We do not operate a backend or cloud journal database for HRTree, and the app does not automatically upload your journal to us. HRTree has no app analytics SDK, advertising SDK, advertising-identifier tracking or automatic cloud sync. We do not sell personal information or share it for targeted advertising.</p>
        <p>HRTree does not access Apple Health, your contacts, location, microphone or camera. Fictional sample records, when available, are labelled as a sample journey and are separate from a recommendation for your care.</p>
      </Section>
      <Section number="03" title="Optional reminders and Apple features">
        <p>If you enable gentle reminders, HRTree asks iOS for notification permission and schedules notifications on your device. No remote push service receives your health entries. Depending on your notification settings, reminder text can appear on your lock screen or other Apple devices receiving your notifications. You can turn reminders off in HRTree and control permission and previews in iOS Settings.</p>
        <p>HRTree may ask for a rating using Apple’s native StoreKit review prompt. Apple handles any rating or review you choose to submit. The app keeps basic first-use and review-request dates and the last requested app version locally to limit repeated prompts; the prompt does not give HRTree access to what you submit. Public App Store reviews and feedback Apple makes available to developers may be visible to us. Do not put private health information in a public review.</p>
        <p>To remember which release you first used, HRTree keeps the first app version, build number and date observed on this device in the device’s Keychain. When Apple supplies verified app transaction information, HRTree also keeps the original app build and acquisition date locally. This can help recognise early users in future versions. These records contain no journal entries and are not sent to us or used for app analytics.</p>
        <p>Apple may handle App Store account, download and diagnostic information under your Apple settings and <a href="https://www.apple.com/legal/privacy/">Apple’s Privacy Policy</a>. This is separate from HRTree automatically sending us your journal.</p>
      </Section>
      <Section number="04" title="Reports, sharing and device backups">
        <p>When you create a care report, HRTree generates a PDF on your device. It can include your chosen name, current treatment plan, dose history, check-ins, symptoms, journal notes and appointment questions. Review it before using the system share sheet to save or send it. Creating a report does not automatically send it to us or to a clinician.</p>
        <p>Exported PDFs are not password-protected by HRTree. A file you send to another person, email service, cloud drive or app is then handled by that recipient or service. You control those copies separately; deleting records in HRTree does not recall a shared report.</p>
        <p>Depending on your device settings, iCloud or computer backups can include HRTree’s local app data. These operating-system backups are different from in-app cloud sync and are controlled through Apple and your device settings. See <a href="https://support.apple.com/en-us/108770">Apple’s explanation of iCloud Backup</a>.</p>
      </Section>
      <Section number="05" title="Support and website visits">
        <p>If you email us, we receive your email address, your message and any attachments you choose to send. We use them to answer your request, investigate problems and manage the support conversation. Please describe technical problems without sending health records or a care report unless the information is essential and you choose to share it.</p>
        <p>Our email provider processes those communications for us. When you open our website or another external link, the receiving website and its hosting provider receive normal connection information such as your IP address and browser details. The local-storage statements above describe the HRTree app, not every website or service you choose to visit.</p>
        <p>Where UK or European data protection law applies, we rely on performing our contract for support necessary to provide the app, legitimate interests for proportionate support administration, troubleshooting and security, and legal obligations where applicable. We do not need you to email sensitive health data to use the app or request ordinary technical support. If you choose to send it, we will limit its use to your request, explain any additional permission needed and delete unnecessary material where practicable.</p>
      </Section>
      <Section number="06" title="Retention, deletion and your choices">
        <p>Your journal remains in local app storage until you change or remove it. In HRTree’s settings, use Reset local data and confirm Delete all records to clear your personal journal. If you are exploring the sample journey, Start my own journey clears the fictional examples. Deleting the app can also remove its local data; offloading an app may keep it. We cannot recover records that exist only on your device.</p>
        <p>Copies in reports, other apps, email or device backups must be managed separately. Resetting the journal does not erase an App Store review or a support email. Basic preferences and review-request history may remain outside the journal reset until the app’s local data is removed.</p>
        <p>Reset local data clears your care records but retains the local install and acquisition information described above, so resetting your journal does not change the app’s record of your first release. Keychain information may remain after removing and reinstalling the app; Apple’s original acquisition information is managed by Apple separately from your journal.</p>
        <p>We retain support correspondence only as long as reasonably needed to resolve your request, maintain relevant support records, deal with disputes and meet legal obligations. Contact us to request deletion of information we hold; we will explain any information we need to retain and why.</p>
        <p>Depending on the law that applies, you may have rights to access, correct, erase or obtain a copy of personal information we hold, restrict or object to processing, or withdraw consent where consent applies. We may ask for limited information to verify a request. You can contact the <a href="https://ico.org.uk/make-a-complaint/">UK Information Commissioner’s Office</a> or your local data protection authority. We do not use your data for automated decisions with legal or similarly significant effects.</p>
      </Section>
      <Section number="07" title="Security, service providers and age">
        <p>HRTree uses the iOS app sandbox and device file-protection facilities for its saved journal. No storage system is completely secure. Protect your device with a passcode, keep iOS current and share reports only with recipients you choose.</p>
        <p>We may disclose support information when required by law or reasonably necessary to protect legal rights. Email and website providers may process information outside your country, including outside the United Kingdom. Where applicable law requires transfer safeguards, we use the required protections. Contact us for information about the handling of a specific support request.</p>
        <p>HRTree is intended for adults managing their own menopause experience and prescribed routine. It is not directed to children. If you believe a child has sent us personal information, contact us so we can investigate and respond appropriately.</p>
      </Section>
      <Section number="08" title="Changes and contact">
        <p>We may update this policy when the app or its data handling changes. The effective date identifies the current version. We will provide appropriate notice of material changes and seek permission where required.</p>
        <Contact />
      </Section>
    </HRTreePage>
  );
}

export function HRTreeTermsOfService() {
  return (
    <HRTreePage title="Terms of Service" path={TERMS} description="HRTree helps you record your experience and prescribed routine. It is a personal wellness journal and reminder tool, not a diagnosis or treatment service.">
      <p className="legal-intro">These terms explain how to use HRTree and what you can expect from us. HRTree is provided by DIGITALSPROUT LTD for adults keeping a personal menopause and HRT journal.</p>
      <Section number="01" title="Your journal and your care">
        <p>HRTree lets you record a treatment routine, log doses and symptoms, keep notes, view summaries and create a report. It does not diagnose a condition, recommend or prescribe medication, determine a safe dose, monitor emergencies or replace a qualified healthcare professional.</p>
        <p>Follow your prescriber’s instructions and the information supplied with your medicine. Do not start, stop or change treatment based on a chart, reminder, sample record or percentage in the app. Speak with your clinician or pharmacist about treatment questions. If you need urgent help, contact the appropriate local medical or emergency service.</p>
        <p>Recorded patterns do not establish a cause or show whether a treatment is suitable or effective. HRTree makes no claim of medical-device approval or certification. General information about HRT is available from the <a href="https://www.nhs.uk/medicines/hormone-replacement-therapy-hrt/">NHS</a>.</p>
      </Section>
      <Section number="02" title="Records, schedules and reminders">
        <p>You are responsible for checking that the treatment name, dose, schedule, start date and other information you enter match your prescribed routine. A logged dose records what you entered; it does not verify that medicine was taken. Fictional demonstration records are examples and must not be used as a treatment plan.</p>
        <p>Summaries use the entries available. Days without check-ins may be omitted, and dose coverage is estimated against the current plan and doses already due. Editing a plan can change that estimate. Check your entries and report before relying on them in a conversation.</p>
        <p>Reminders are optional and depend on notification permission, iOS settings, device operation and the app’s scheduling limits. Focus modes, disabled notifications and other system behaviour can delay or suppress them. Open the app regularly to refresh upcoming reminders. Delivery is not guaranteed; keep another suitable way to follow your prescribed routine.</p>
      </Section>
      <Section number="03" title="Your data and exported reports">
        <p>You retain ownership of the information and notes you enter. You give HRTree permission to process that information on your device as needed to provide the features you choose. Our <Link to={PRIVACY}>Privacy Policy</Link> explains local storage, optional Apple features, support communications, exports and device backups.</p>
        <p>We do not provide an account-based recovery service or cloud journal sync. Keep copies of records you need before deleting local data, uninstalling the app or changing devices. A PDF report is a readable summary, not a full restorable app backup. We cannot retrieve data that was stored only on your device.</p>
        <p>You decide whether to share a report and with whom. Check its contents and the destination before sending it. Copies held by other people or services are outside the app’s deletion controls.</p>
      </Section>
      <Section number="04" title="App licence and responsible use">
        <p>Subject to these terms and the applicable App Store rules, you may use HRTree for your personal use on devices you own or control. The software, design and branding belong to their respective owners. Your journal content remains yours.</p>
        <p>Do not distribute unauthorised copies, interfere with the app’s operation, misuse support services or use HRTree to infringe another person’s rights. These restrictions do not prevent anything that applicable law or an open-source licence expressly permits.</p>
        <p>Apple’s <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Standard End User Licence Agreement</a> governs the iOS software licence. These service terms supplement it and do not replace the App Store’s terms. Apple is not the provider of HRTree’s journal or support service. Any App Store download charge is displayed by Apple before you agree; applicable consumer and store refund rights remain available.</p>
      </Section>
      <Section number="05" title="Updates, availability and legal rights">
        <p>We aim to keep HRTree useful and reliable and may release fixes or feature changes. Device compatibility and Apple services can affect availability. We do not promise uninterrupted operation, that every reminder will arrive, or that the app will suit every personal or clinical need.</p>
        <p>We remain responsible for obligations and remedies imposed by applicable law, including rights relating to defective digital content or services. Nothing in these terms excludes or limits liability for fraud, death or personal injury caused by negligence, or anything else that cannot lawfully be excluded or limited.</p>
        <p>If we discontinue the app or make a material adverse change to paid functionality, we will provide reasonable notice where practicable and respect applicable cancellation or refund rights. Changes do not retrospectively remove rights relating to a purchase you have already made.</p>
      </Section>
      <Section number="06" title="Ending use and changes to these terms">
        <p>You may stop using HRTree at any time. Export any records you want to keep before resetting local data or deleting the app. Ending use does not automatically remove copies you have shared or information in device backups.</p>
        <p>We may update these terms when the app or the law changes. The effective date shows the current version. We will give appropriate notice of material changes and seek agreement where required.</p>
      </Section>
      <Section number="07" title="Governing law and resolving concerns">
        <p>These terms are governed by the laws of England and Wales. This does not remove mandatory consumer protections available under the law where you ordinarily live. The courts of England and Wales have non-exclusive jurisdiction, and you retain any right to bring a claim in your local courts that applicable law gives you.</p>
        <p>Please contact us so we can try to resolve a concern. These terms do not require arbitration or waive rights that the law does not allow you to waive.</p>
        <Contact />
      </Section>
    </HRTreePage>
  );
}

export function HRTreeSupport() {
  return (
    <HRTreePage title="A little help, when you need it." path={SUPPORT} description="Help with your journal, reminders and reports. For a technical question, email the studio with your app version and iPhone model.">
      <p className="legal-intro">Your everyday story should be easy to keep. Start with these practical answers, or <a href={EMAIL}>email HRTree support</a>.</p>
      <Section number="01" title="Contact the studio">
        <p>Tell us your iPhone model, iOS version, HRTree version, what you expected and what happened. We do not need a care report or sensitive health details for ordinary technical support. Support is for app questions; ask your clinician or pharmacist about treatment.</p>
        <Contact />
      </Section>
      <Section number="02" title="Make the journal your own">
        <p>If the app shows a sample journey, open HRTree’s settings and choose Start my own journey. Confirm that you want to clear the fictional examples, then enter your own prescribed routine. Sample medicines and schedules are not recommendations.</p>
        <p>Add or edit treatments in Treatment. Use Journal to revisit a date or edit a check-in. Insights shows summaries based on the entries you have recorded.</p>
      </Section>
      <Section number="03" title="Check your reminders">
        <p>Enable Gentle reminders in HRTree’s settings and allow notifications when iOS asks. In iOS Settings, check that HRTree notifications are enabled and review Focus and notification-preview settings. Open HRTree regularly so upcoming reminders can be refreshed.</p>
        <p>Reminders are a convenience and may be delayed or suppressed by your device. Do not rely on a notification as your only way to follow a prescribed schedule.</p>
      </Section>
      <Section number="04" title="Create and share a report">
        <p>In Insights, choose a date range, then Create report. Review the summary and use Share or save PDF to choose a destination. The report may contain private health information and is not password-protected. Creating it does not automatically send it anywhere.</p>
        <p>HRTree does not offer an account-based cloud restore. A PDF preserves a readable summary; it cannot be imported to rebuild the app’s database.</p>
      </Section>
      <Section number="05" title="Delete your HRTree data">
        <p>Open HRTree’s settings, choose Reset local data and confirm Delete all records. Keep a report first if you want a copy. This clears your local journal; you must manage previously shared reports and device backups separately.</p>
        <p>The reset retains a separate local record of the app version you first used and any verified original acquisition information from Apple. It contains no care records. See the <Link to={PRIVACY}>Privacy Policy</Link> for details.</p>
        <p>We cannot remotely access or restore a journal that exists only on your device. To ask about a support email or other personal information you have sent us, <a href="mailto:info@digitalsprout.org?subject=HRTree%20Privacy%20Request">send a privacy request</a>.</p>
      </Section>
    </HRTreePage>
  );
}
