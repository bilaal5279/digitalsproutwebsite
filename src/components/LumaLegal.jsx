import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  Apple,
  ArrowLeft,
  Bell,
  CheckCircle2,
  CreditCard,
  Database,
  ExternalLink,
  FileDown,
  FileText,
  Gavel,
  HeartPulse,
  LockKeyhole,
  Mail,
  RefreshCw,
  Shield,
  Smartphone,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";

const appName = "Luma Migraine Tracker";
const effectiveDate = "August 9, 2026";
const contactEmail = "info@digitalsprout.org";

const privacySections = [
  ["overview", "At a glance"],
  ["local-data", "Your migraine data"],
  ["data-we-receive", "Data we receive"],
  ["sharing", "Reports and sharing"],
  ["notifications", "Notifications"],
  ["subscriptions", "Subscriptions"],
  ["privacy-choices", "Your privacy choices"],
  ["retention-security", "Retention and security"],
  ["children", "Age limits"],
  ["changes-contact", "Changes and contact"],
];

const termsSections = [
  ["agreement", "Agreement and eligibility"],
  ["medical", "Medical disclaimer"],
  ["service", "The service"],
  ["subscriptions", "Subscriptions and billing"],
  ["your-data", "Your data and reports"],
  ["licence", "Licence and acceptable use"],
  ["availability", "Availability and termination"],
  ["liability", "Warranty and liability"],
  ["apple", "Apple terms"],
  ["general", "General terms and contact"],
];

const usePageMetadata = (title, description) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${appName} ${title} | Digital Sprout`;

    let descriptionTag = document.querySelector('meta[name="description"]');
    const createdDescription = !descriptionTag;
    if (createdDescription) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    const previousDescription = descriptionTag.getAttribute("content");
    descriptionTag.setAttribute("content", description);

    return () => {
      document.title = previousTitle;
      if (createdDescription) {
        descriptionTag.remove();
      } else if (previousDescription === null) {
        descriptionTag.removeAttribute("content");
      } else {
        descriptionTag.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);
};

const Brand = ({ dark = false }) => (
  <span className="inline-flex items-center gap-2" aria-label="Digital Sprout">
    <span
      aria-hidden="true"
      className="h-8 w-8 rounded-xl bg-gradient-to-br from-teal-500 via-cyan-500 to-violet-600 shadow-sm"
    />
    <span className="font-bold tracking-tight">
      <span className={dark ? "text-teal-300" : "text-teal-700"}>Digital</span>
      <span className={dark ? "text-violet-300" : "text-violet-700"}>sprout</span>
    </span>
  </span>
);

const BulletList = ({ children }) => (
  <ul className="space-y-3 text-slate-600">{children}</ul>
);

const Bullet = ({ children }) => (
  <li className="flex items-start gap-3">
    <CheckCircle2
      aria-hidden="true"
      size={18}
      className="mt-0.5 shrink-0 text-violet-600"
    />
    <span>{children}</span>
  </li>
);

const Section = ({ id, icon, title, children }) => (
  <section id={id} className="scroll-mt-28 border-b border-slate-100 py-9 first:pt-0 last:border-0 last:pb-0">
    <div className="mb-5 flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-700 ring-1 ring-violet-100">
        {React.createElement(icon, { "aria-hidden": true, size: 21 })}
      </span>
      <h2 className="pt-1 text-2xl font-bold tracking-tight text-slate-950">
        {title}
      </h2>
    </div>
    <div className="space-y-4 text-[1.02rem] leading-7 text-slate-600">
      {children}
    </div>
  </section>
);

const ProviderCard = ({ name, role, href, children }) => (
  <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
      <h3 className="font-semibold text-slate-900">{name}</h3>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 text-sm font-semibold text-violet-700 hover:text-violet-900 hover:underline"
      >
        Privacy policy <ExternalLink aria-hidden="true" size={14} />
      </a>
    </div>
    <p className="mb-2 text-sm font-medium text-violet-700">{role}</p>
    <p>{children}</p>
  </div>
);

const ContactCard = () => (
  <div className="rounded-2xl border border-violet-100 bg-violet-50/70 p-5 sm:p-6">
    <p className="font-semibold text-slate-950">Digital Sprout</p>
    <p className="mt-2">
      Email: {" "}
      <a
        href={`mailto:${contactEmail}`}
        className="font-semibold text-violet-700 hover:text-violet-900 hover:underline"
      >
        {contactEmail}
      </a>
      <br />
      Website: {" "}
      <a
        href="https://digitalsprout.org"
        className="font-semibold text-violet-700 hover:text-violet-900 hover:underline"
      >
        digitalsprout.org
      </a>
    </p>
  </div>
);

const LegalLayout = ({
  activePage,
  title,
  description,
  eyebrow,
  heroIcon,
  sections,
  children,
}) => {
  usePageMetadata(title, description);
  const isPrivacy = activePage === "privacy";

  return (
    <div className="min-h-screen bg-[#f7f7fc] text-slate-900">
      <nav className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg pr-2 text-sm font-semibold text-slate-600 transition-colors hover:text-violet-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            <ArrowLeft aria-hidden="true" size={18} />
            <span className="hidden sm:inline">Back to home</span>
          </Link>
          <Brand />
          <Link
            to="/support"
            className="inline-flex min-h-11 items-center rounded-lg px-2 text-sm font-semibold text-slate-600 transition-colors hover:text-violet-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            Support
          </Link>
        </div>
      </nav>

      <header className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-violet-950 to-indigo-950">
        <div
          aria-hidden="true"
          className="absolute -left-20 top-12 h-64 w-64 rounded-full bg-fuchsia-500/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-cyan-200 ring-1 ring-white/15 shadow-2xl shadow-violet-950/40">
            {React.createElement(heroIcon, { "aria-hidden": true, size: 31 })}
          </div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
            {appName}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-violet-100/85">
            {eyebrow}
          </p>
          <p className="mt-4 text-sm font-medium text-violet-200/70">
            Effective {effectiveDate}
          </p>
          <div className="mx-auto mt-8 inline-flex rounded-xl bg-white/10 p-1 ring-1 ring-white/15">
            <Link
              to="/luma/privacy"
              aria-current={isPrivacy ? "page" : undefined}
              className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                isPrivacy
                  ? "bg-white text-violet-950 shadow-sm"
                  : "text-violet-100 hover:bg-white/10"
              }`}
            >
              Privacy
            </Link>
            <Link
              to="/luma/terms"
              aria-current={!isPrivacy ? "page" : undefined}
              className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                !isPrivacy
                  ? "bg-white text-violet-950 shadow-sm"
                  : "text-violet-100 hover:bg-white/10"
              }`}
            >
              Terms
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[15rem_minmax(0,1fr)]">
          <aside className="hidden lg:sticky lg:top-24 lg:block">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              On this page
            </p>
            <nav aria-label={`${title} sections`}>
              <ul className="space-y-1 border-l border-slate-200">
                {sections.map(([id, label]) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="block border-l-2 border-transparent py-1.5 pl-4 text-sm font-medium leading-5 text-slate-500 transition-colors hover:border-violet-500 hover:text-violet-800"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="min-w-0 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-9 lg:p-12">
            {children}
          </article>
        </div>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <Brand dark />
            <p className="mt-2 text-sm text-slate-400">
              © {new Date().getFullYear()} Digital Sprout, UK
            </p>
          </div>
          <nav aria-label="Luma legal links" className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium">
            <Link to="/luma/privacy" className="text-slate-300 hover:text-white">
              Privacy
            </Link>
            <Link to="/luma/terms" className="text-slate-300 hover:text-white">
              Terms
            </Link>
            <Link to="/support" className="text-slate-300 hover:text-white">
              Support
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export const LumaPrivacyPolicy = () => (
  <LegalLayout
    activePage="privacy"
    title="Privacy Policy"
    description="Learn how Luma Migraine Tracker protects migraine logs stored on your device and handles subscription data through Apple and RevenueCat."
    eyebrow="A plain-language explanation of what stays on your iPhone, what limited information our service providers handle, and the choices you have."
    heroIcon={Shield}
    sections={privacySections}
  >
    <Section id="overview" icon={Sparkles} title="Privacy at a glance">
      <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-cyan-50 p-5 sm:p-6">
        <BulletList>
          <Bullet>
            <strong className="text-slate-900">No account is required.</strong>{" "}
            You do not give us a name, email address, or profile to use the App.
          </Bullet>
          <Bullet>
            <strong className="text-slate-900">Migraine entries stay on your device.</strong>{" "}
            We do not operate a cloud database that receives your migraine history.
          </Bullet>
          <Bullet>
            <strong className="text-slate-900">No ads or behavioural tracking.</strong>{" "}
            Version 1 has no advertising, cross-app tracking, general behavioural analytics, or third-party crash-reporting SDK.
          </Bullet>
          <Bullet>
            <strong className="text-slate-900">Sharing is your choice.</strong>{" "}
            A health report leaves the App only when you deliberately export or share it.
          </Bullet>
        </BulletList>
      </div>
      <p>
        This policy applies to the {appName} iOS app (the “App”), provided by
        Digital Sprout (“we”, “us”, or “our”). Migraine and medication details
        are health information and can be sensitive. The App is designed so we
        do not receive that information during ordinary use.
      </p>
    </Section>

    <Section id="local-data" icon={Database} title="Information stored on your device">
      <p>
        The information you choose to record is saved in an on-device database
        within the App. Depending on what you enter, this may include:
      </p>
      <BulletList>
        <Bullet>
          Migraine dates, start and end times, duration, intensity, symptoms,
          aura information, possible triggers, and relief factors.
        </Bullet>
        <Bullet>
          Medications or other treatments you choose to log, and notes about
          their timing or perceived effect.
        </Bullet>
        <Bullet>
          Free-text notes and manually entered context, such as sleep, food,
          stress, menstrual cycle, place, or weather observations.
        </Bullet>
        <Bullet>
          App preferences, reminder settings, and the history needed to create
          your charts and reports.
        </Bullet>
      </BulletList>
      <p>
        The App does not require a Digital Sprout account and does not sync this
        database to a Digital Sprout server. It does not request your device’s
        precise or approximate location, contacts, photos, camera, microphone,
        or Apple Health data in version 1. If you type location or other context
        into a note, it is treated like the rest of that locally stored entry.
      </p>
      <p>
        Your iPhone’s own backup settings may allow Apple to include app data in
        a device backup. That is an Apple device-backup service, not a Luma cloud
        sync feature, and is governed by Apple’s settings and privacy terms.
      </p>
    </Section>

    <Section id="data-we-receive" icon={Activity} title="Limited information handled outside your device">
      <p>
        We do not receive your migraine log in normal use. The following limited
        information may be processed to run subscriptions, provide support, and
        maintain the App:
      </p>
      <div className="grid gap-4">
        <ProviderCard
          name="RevenueCat"
          role="Subscription status and purchase infrastructure"
          href="https://www.revenuecat.com/privacy"
        >
          RevenueCat processes an App User ID (anonymous by default), Apple
          receipt and transaction information, subscription product and status,
          and basic technical details such as device type, operating system, app
          version, and last-seen time. We use this to validate purchases, unlock
          Pro access, restore purchases, prevent purchase fraud, troubleshoot
          entitlements, and understand subscription performance. We do not send
          RevenueCat your migraine entries, notes, medications, reports, or
          notification content.
        </ProviderCard>
        <ProviderCard
          name="Apple"
          role="App distribution, billing, refunds, and optional diagnostics"
          href="https://www.apple.com/legal/privacy/"
        >
          Apple processes App Store downloads and payments under your Apple
          Account. We do not receive your card number, Apple Account password, or
          full billing details. If you enable Apple’s option to share analytics
          with app developers, Apple may make diagnostic or crash information
          available to us under its own privacy controls. Luma does not include a
          separate third-party crash-reporting SDK.
        </ProviderCard>
      </div>
      <p>
        If you email support, we receive the email address, message, and any file
        you choose to attach. Please avoid including health details unless they
        are genuinely needed to answer your request. We use support messages to
        respond, investigate the issue, protect the service, and keep an
        appropriate record of the conversation.
      </p>
      <p>
        We do not sell personal information, use it for targeted advertising, or
        share it for cross-context behavioural advertising. RevenueCat purchase
        metrics are used only for App functionality and subscription analytics;
        they are not linked to your on-device migraine log.
      </p>
    </Section>

    <Section id="sharing" icon={FileDown} title="Reports you export or share">
      <p>
        The App can generate a report from your entries on your device. Nothing
        is uploaded merely because you create a report. It leaves the App only
        when you choose a destination using the iOS share sheet, such as Mail,
        Messages, Files, a healthcare provider’s system, or another app.
      </p>
      <p>
        A report may reveal sensitive health information. Check the recipient
        and destination before sending it. Once shared, the recipient and the
        service you selected handle the copy under their own privacy and
        security practices; Digital Sprout cannot control or delete it for you.
      </p>
    </Section>

    <Section id="notifications" icon={Bell} title="Optional local notifications">
      <p>
        If you enable reminders, iOS asks for permission and schedules them on
        your device. We do not operate a push-notification server, receive a push
        token, or receive a record of when you respond. You can change or revoke
        permission at any time in the App or in iOS Settings.
      </p>
    </Section>

    <Section id="subscriptions" icon={CreditCard} title="Subscriptions and service providers">
      <p>
        Luma Pro is offered as an optional monthly or annual auto-renewing
        subscription. Apple processes the payment and RevenueCat helps the App
        determine whether Pro access is active. These providers may process
        information in countries other than yours and use safeguards described
        in their own policies and agreements.
      </p>
      <p>
        We process subscription information because it is necessary to provide
        the paid service you request, prevent fraud, and meet legal and
        accounting obligations. Support information is processed to respond to
        you and for our legitimate interests in operating and securing the App.
        Where consent is required, you may withdraw it for future processing.
      </p>
    </Section>

    <Section id="privacy-choices" icon={Gavel} title="Your choices and privacy rights">
      <p>
        You can view and edit entries directly in the App. You can delete
        entries using the controls provided and remove the App to delete its
        local database from the device. We cannot retrieve or erase a migraine
        history we never receive. Copies in an Apple device backup or in a
        report you shared must be managed through Apple or the chosen recipient.
      </p>
      <p>
        Depending on where you live and subject to legal exceptions, you may
        have rights over personal information we or our processors hold,
        including access, correction, deletion, portability, restriction,
        objection, or withdrawal of consent. UK and EEA residents may also
        complain to the UK Information Commissioner’s Office or their local data
        protection authority. Contact us to make a request; we may need limited
        information to verify it.
      </p>
      <p>
        California residents may, where the California Consumer Privacy Act
        applies, request to know, access, correct, or delete personal
        information and receive equal service for exercising those rights. They
        may also opt out of sale or sharing and limit certain uses of sensitive
        personal information. We do not sell or share personal information for
        cross-context behavioural advertising and do not use sensitive personal
        information for purposes that require a “Limit” link, so those opt-outs
        are not currently necessary for Luma. An authorised agent may submit a
        request on your behalf, subject to verification.
      </p>
      <p>
        Privacy laws differ by location and may not apply to every request. We
        will explain our response and any available appeal or complaint route.
      </p>
    </Section>

    <Section id="retention-security" icon={LockKeyhole} title="Retention and security">
      <p>
        On-device entries remain until you delete them, clear the App’s data, or
        remove the App. We retain support correspondence only for as long as
        reasonably needed to answer the request, maintain appropriate business
        records, resolve disputes, and meet legal obligations. Apple and
        RevenueCat retain information according to their own policies and our
        arrangements with them.
      </p>
      <p>
        Local data benefits from iOS app sandboxing and your device’s security
        controls. Use a device passcode, keep iOS current, and take care with
        exported reports. No storage method is completely secure, and we cannot
        protect an unlocked device or a report after you share it.
      </p>
    </Section>

    <Section id="children" icon={UserRoundCheck} title="Age limits and children">
      <p>
        Luma is not directed to children under 13, and they should not use the
        App. If you are under the age at which you can agree to data processing
        or contracts where you live, a parent or legal guardian must review and
        accept the applicable terms and supervise your use. We do not knowingly
        collect personal information from children through the App. A parent or
        guardian who believes a child sent us information can contact us.
      </p>
    </Section>

    <Section id="changes-contact" icon={Mail} title="Changes and contact">
      <p>
        We may update this policy to reflect App, provider, or legal changes.
        The current version will remain at this URL with a revised effective
        date. We will provide additional notice in the App when a change is
        material and it is reasonably practical to do so.
      </p>
      <p>
        Questions, privacy requests, or concerns can be sent to:
      </p>
      <ContactCard />
    </Section>
  </LegalLayout>
);

export const LumaTermsOfService = () => (
  <LegalLayout
    activePage="terms"
    title="Terms of Service"
    description="Terms governing Luma Migraine Tracker, including its medical disclaimer, monthly and annual subscriptions, Apple billing, and user responsibilities."
    eyebrow="The agreement covering your use of Luma, its health-tracking features, and optional monthly or annual Pro subscription."
    heroIcon={FileText}
    sections={termsSections}
  >
    <Section id="agreement" icon={FileText} title="Agreement and eligibility">
      <p>
        These Terms of Service (“Terms”) are an agreement between you and
        Digital Sprout (“Digital Sprout”, “we”, “us”, or “our”) and govern your
        use of {appName} (the “App”). By downloading, accessing, purchasing, or
        using the App, you agree to these Terms and our {" "}
        <Link to="/luma/privacy" className="font-semibold text-violet-700 hover:underline">
          Privacy Policy
        </Link>
        . If you do not agree, do not use the App.
      </p>
      <p>
        You must be at least 13 to use Luma. You must also be legally able to
        enter this agreement where you live. If you are old enough to use the
        App but not old enough to contract on your own, your parent or legal
        guardian must review and accept these Terms for you and supervise your
        use.
      </p>
    </Section>

    <Section id="medical" icon={HeartPulse} title="Luma is not medical advice">
      <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5 text-rose-950 sm:p-6">
        <p className="font-semibold">
          Luma is a personal wellness and record-keeping tool. It is not a
          medical device, emergency service, diagnosis, treatment, or substitute
          for a qualified healthcare professional.
        </p>
      </div>
      <BulletList>
        <Bullet>
          Charts, summaries, patterns, and possible trigger associations reflect
          information you entered. They may be incomplete or inaccurate, and an
          association does not show that one thing caused another.
        </Bullet>
        <Bullet>
          Do not start, stop, delay, or change medication, treatment, or medical
          care because of anything shown by the App. Luma does not check doses,
          interactions, contraindications, or whether a treatment is suitable
          for you.
        </Bullet>
        <Bullet>
          Reminders are a convenience only and can be delayed, suppressed, or
          missed. Do not rely on them for time-critical treatment or safety.
        </Bullet>
        <Bullet>
          Seek advice from a qualified healthcare professional about symptoms,
          diagnosis, and treatment. If you may be experiencing an emergency or
          a sudden, severe, or concerning change in symptoms, contact your local
          emergency services promptly and do not wait for or rely on the App.
        </Bullet>
      </BulletList>
    </Section>

    <Section id="service" icon={Activity} title="What the App provides">
      <p>
        Luma lets you record migraine-related information, review your history,
        view summaries or patterns based on your entries, set optional local
        reminders, and generate a report you can choose to share. Some features
        require Luma Pro and are identified before purchase.
      </p>
      <p>
        You are responsible for the accuracy and completeness of what you enter
        and for how you interpret or use the output. The App is intended for
        personal tracking, not clinical recordkeeping, professional medical
        services, or monitoring another person without their permission.
      </p>
    </Section>

    <Section id="subscriptions" icon={CreditCard} title="Luma Pro subscriptions and billing">
      <p>
        Luma Pro is available as a monthly or annual auto-renewing subscription.
        The features, current price, billing period, and any trial or
        introductory offer are shown on the App’s purchase screen before you
        confirm. Prices may vary by country and currency and may include
        applicable taxes.
      </p>
      <BulletList>
        <Bullet>
          Payment is charged to your Apple Account when you confirm the purchase.
        </Bullet>
        <Bullet>
          The subscription automatically renews for the same period unless you
          cancel it at least 24 hours before the end of the current period. Apple
          may charge your account for renewal during the 24 hours before that
          period ends.
        </Bullet>
        <Bullet>
          You can manage or cancel in iPhone Settings → your name →
          Subscriptions, or at {" "}
          <a
            href="https://apps.apple.com/account/subscriptions"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-violet-700 hover:underline"
          >
            Apple’s subscription management page
          </a>
          . Deleting Luma does not cancel a subscription. Cancellation normally
          takes effect at the end of the already-paid period.
        </Bullet>
        <Bullet>
          If a free or discounted trial is offered, its length and conversion
          price are shown before purchase. Cancel at least 24 hours before it
          ends to avoid renewal; any unused trial portion may end when you buy a
          subscription.
        </Bullet>
        <Bullet>
          You can use Restore Purchases in the App for an eligible purchase made
          with the same Apple Account. RevenueCat processes the receipt and
          entitlement status on our behalf.
        </Bullet>
      </BulletList>
      <p>
        Apple handles payment, billing disputes, price-change notices and
        refunds under its rules and applicable law. Refund eligibility varies.
        Request one at {" "}
        <a
          href="https://reportaproblem.apple.com/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-violet-700 hover:underline"
        >
          reportaproblem.apple.com
        </a>
        . Digital Sprout does not hold your payment method and cannot promise or
        directly issue an App Store refund.
      </p>
    </Section>

    <Section id="your-data" icon={Database} title="Your entries, local storage, and reports">
      <p>
        You retain ownership of the information you enter. Your migraine log is
        stored on your device and is not uploaded to a Digital Sprout backend.
        We receive no licence to use that content merely because you enter it.
      </p>
      <BulletList>
        <Bullet>
          You are responsible for protecting your device and for deciding who
          may see an exported report.
        </Bullet>
        <Bullet>
          A generated report is a summary of your entries, not a verified
          medical record or a guaranteed restorable backup.
        </Bullet>
        <Bullet>
          Deleting the App or losing, resetting, or damaging your device may
          permanently remove your history. Digital Sprout cannot recover it.
          Recovery may be possible only through an Apple device backup that you
          control.
        </Bullet>
        <Bullet>
          Once you share a report, the recipient and selected service control
          their copy. Make sure you trust them before sending sensitive health
          information.
        </Bullet>
      </BulletList>
    </Section>

    <Section id="licence" icon={Smartphone} title="Licence and acceptable use">
      <p>
        Subject to these Terms and the applicable Apple Media Services terms,
        Digital Sprout grants you a personal, limited, revocable,
        non-exclusive, non-transferable licence to use the App on Apple-branded
        devices you own or control, as permitted by Apple’s Usage Rules. The App,
        design, software, and branding remain owned by Digital Sprout and its
        licensors.
      </p>
      <p>You must not:</p>
      <BulletList>
        <Bullet>
          copy, sell, sublicense, distribute, reverse engineer, decompile, or
          attempt to extract the App’s source code, except to the extent the law
          expressly permits;
        </Bullet>
        <Bullet>
          bypass or interfere with purchase verification, security, or normal
          operation of the App;
        </Bullet>
        <Bullet>
          use the App unlawfully, to infringe another person’s rights, or to
          record or disclose another person’s health information without a
          lawful basis and appropriate permission; or
        </Bullet>
        <Bullet>
          present App output as a professional diagnosis, medical opinion, or
          guaranteed prediction.
        </Bullet>
      </BulletList>
    </Section>

    <Section id="availability" icon={RefreshCw} title="Updates, availability, and termination">
      <p>
        We may update, improve, change, suspend, or discontinue features, and we
        may require a supported version of iOS. We do not guarantee that the App
        will always be available, uninterrupted, error-free, or compatible with
        every device. Features that depend on Apple or RevenueCat may also be
        affected by those services.
      </p>
      <p>
        You may stop using the App at any time. Remember that deleting it does
        not cancel Luma Pro. We may terminate the licence if you materially
        breach these Terms, subject to any rights you have under applicable law.
        Provisions intended to survive termination, including ownership,
        disclaimers, liability limits, and governing law, will continue.
      </p>
    </Section>

    <Section id="liability" icon={Shield} title="Warranties and limits of liability">
      <p>
        To the fullest extent permitted by law, the App is provided “as is” and
        “as available”. We disclaim implied warranties of merchantability,
        satisfactory quality, fitness for a particular purpose, accuracy, and
        non-infringement. We do not warrant that entries, summaries, insights,
        reminders, or reports will be complete, accurate, or suitable for a
        medical decision.
      </p>
      <p>
        To the fullest extent permitted by law, Digital Sprout is not liable for
        indirect, incidental, special, or consequential loss; loss of data,
        opportunity, profit, or goodwill; or loss arising from reliance on App
        output, a missed reminder, or disclosure of a report after you share it.
        Where our liability cannot be excluded, our total liability connected
        with the App will not exceed the amount you paid for Luma in the twelve
        months before the event giving rise to the claim.
      </p>
      <p>
        Nothing in these Terms excludes or limits liability for death or
        personal injury caused by negligence, fraud or fraudulent
        misrepresentation, or any liability or consumer right that cannot
        lawfully be excluded or limited. Some jurisdictions do not allow certain
        exclusions, so some of this section may not apply to you.
      </p>
    </Section>

    <Section id="apple" icon={Apple} title="Terms required for Apple users">
      <BulletList>
        <Bullet>
          These Terms are between you and Digital Sprout, not Apple. Digital
          Sprout, not Apple, is responsible for the App and its content.
        </Bullet>
        <Bullet>
          Apple has no obligation to provide maintenance or support. Contact
          Digital Sprout using the details below for App support.
        </Bullet>
        <Bullet>
          If the App fails to conform to an applicable warranty, you may notify
          Apple and Apple may refund any purchase price for the App itself as
          required by its terms. To the maximum extent permitted by law, Apple
          has no other warranty obligation for the App.
        </Bullet>
        <Bullet>
          Digital Sprout, not Apple, is responsible for addressing claims about
          the App, including product liability, legal or regulatory compliance,
          consumer protection, and intellectual-property claims.
        </Bullet>
        <Bullet>
          You represent that you are not located in a country subject to a US
          government embargo or designated as supporting terrorism, and are not
          listed on a US government prohibited or restricted-party list.
        </Bullet>
        <Bullet>
          Apple and its subsidiaries are third-party beneficiaries of these
          Terms and may enforce them against you after you accept them.
        </Bullet>
      </BulletList>
    </Section>

    <Section id="general" icon={Gavel} title="General terms, changes, and contact">
      <p>
        These Terms and the Privacy Policy are the entire agreement about the
        App, except for terms shown and accepted during an Apple purchase. If a
        provision is unenforceable, it will be limited or removed only as needed
        and the rest will remain effective. Our failure to enforce a provision
        is not a waiver. You may not transfer this agreement; we may transfer it
        as part of a merger, reorganisation, or sale, subject to applicable law.
      </p>
      <p>
        We may update these Terms for App, provider, or legal changes. The
        current version will remain at this URL with a revised effective date.
        For material changes, we will provide additional notice in the App where
        reasonably practical. If you do not agree to an update, stop using the
        App and cancel any future subscription renewal.
      </p>
      <p>
        These Terms are governed by the laws of England and Wales and its courts
        have jurisdiction. If you are a consumer elsewhere, this does not remove
        mandatory rights or protections you have under the laws of your place of
        residence.
      </p>
      <ContactCard />
    </Section>
  </LegalLayout>
);
