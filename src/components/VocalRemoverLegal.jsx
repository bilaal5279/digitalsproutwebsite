import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Apple,
  ArrowLeft,
  AudioLines,
  CheckCircle2,
  CreditCard,
  Database,
  ExternalLink,
  FileAudio,
  FileDown,
  FileText,
  Gavel,
  HardDrive,
  Headphones,
  LockKeyhole,
  Mail,
  RefreshCw,
  Shield,
  Sparkles,
  Smartphone,
  UserRoundCheck,
  Volume2,
} from "lucide-react";

const appName = "Vocal Remover: Stem Splitter";
const effectiveDate = "11 August 2026";
const contactEmail = "info@digitalsprout.org";
const privacyPath = "/vocal-remover/privacy-policy";
const termsPath = "/vocal-remover/terms-of-service";

const privacySections = [
  ["overview", "At a glance"],
  ["files", "Files on your device"],
  ["processing", "On-device processing"],
  ["purchases", "Purchases"],
  ["legal-bases", "Why we process data"],
  ["sharing", "Sharing your stems"],
  ["support", "Support messages"],
  ["choices", "Your privacy choices"],
  ["retention", "Retention and security"],
  ["children", "Children"],
  ["changes-contact", "Changes and contact"],
];

const termsSections = [
  ["agreement", "Agreement and eligibility"],
  ["service", "The service"],
  ["subscriptions", "Subscriptions"],
  ["audio-rights", "Rights to your audio"],
  ["quality", "Separation quality"],
  ["storage-sharing", "Storage and sharing"],
  ["acceptable-use", "Acceptable use"],
  ["availability", "Availability"],
  ["liability", "Warranty and liability"],
  ["apple", "Apple terms"],
  ["general", "General terms"],
];

const usePageMetadata = (title, description, canonicalPath) => {
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

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    const createdCanonical = !canonicalTag;
    if (createdCanonical) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    const previousCanonical = canonicalTag.getAttribute("href");
    canonicalTag.setAttribute(
      "href",
      `https://digitalsprout.org${canonicalPath}`,
    );

    return () => {
      document.title = previousTitle;

      if (createdDescription) {
        descriptionTag.remove();
      } else if (previousDescription === null) {
        descriptionTag.removeAttribute("content");
      } else {
        descriptionTag.setAttribute("content", previousDescription);
      }

      if (createdCanonical) {
        canonicalTag.remove();
      } else if (previousCanonical === null) {
        canonicalTag.removeAttribute("href");
      } else {
        canonicalTag.setAttribute("href", previousCanonical);
      }
    };
  }, [title, description, canonicalPath]);
};

const Brand = ({ dark = false }) => (
  <span className="inline-flex items-center gap-2" aria-label="Digital Sprout">
    <span
      aria-hidden="true"
      className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-600 text-white shadow-sm"
    >
      <AudioLines size={19} strokeWidth={2.4} />
    </span>
    <span className="font-bold tracking-tight">
      <span className={dark ? "text-cyan-300" : "text-cyan-700"}>Digital</span>
      <span className={dark ? "text-violet-300" : "text-violet-700"}>
        sprout
      </span>
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
      className="mt-0.5 shrink-0 text-cyan-700"
    />
    <span>{children}</span>
  </li>
);

const Section = ({ id, icon, title, children }) => (
  <section
    id={id}
    className="scroll-mt-28 border-b border-slate-100 py-9 first:pt-0 last:border-0 last:pb-0"
  >
    <div className="mb-5 flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-800 ring-1 ring-cyan-100">
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

const SummaryCard = ({ icon, title, children }) => (
  <div className="rounded-2xl border border-cyan-100 bg-white/80 p-5 shadow-sm">
    {React.createElement(icon, {
      "aria-hidden": true,
      size: 22,
      className: "mb-3 text-cyan-800",
    })}
    <h3 className="font-semibold text-slate-950">{title}</h3>
    <p className="mt-1 text-sm leading-6 text-slate-600">{children}</p>
  </div>
);

const ProviderCard = ({ name, role, href, children }) => (
  <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
      <h3 className="font-semibold text-slate-950">{name}</h3>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-800 hover:text-cyan-950 hover:underline"
      >
        Privacy policy <ExternalLink aria-hidden="true" size={14} />
      </a>
    </div>
    <p className="mb-2 text-sm font-medium text-cyan-800">{role}</p>
    <p>{children}</p>
  </div>
);

const ContactCard = () => (
  <div className="rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-violet-50 p-5 sm:p-6">
    <p className="font-semibold text-slate-950">Digital Sprout</p>
    <p className="mt-1 text-sm text-slate-600">
      App provider and data controller
    </p>
    <p className="mt-2">
      Email:{" "}
      <a
        href={`mailto:${contactEmail}`}
        className="font-semibold text-cyan-800 hover:text-cyan-950 hover:underline"
      >
        {contactEmail}
      </a>
      <br />
      Website:{" "}
      <a
        href="https://digitalsprout.org"
        className="font-semibold text-cyan-800 hover:text-cyan-950 hover:underline"
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
  const canonicalPath = activePage === "privacy" ? privacyPath : termsPath;
  const isPrivacy = activePage === "privacy";
  usePageMetadata(title, description, canonicalPath);

  return (
    <div className="min-h-screen bg-[#f6f9fc] text-slate-900">
      <nav className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            to="/"
            aria-label="Back to Digital Sprout home"
            className="inline-flex min-h-11 min-w-11 items-center gap-2 rounded-lg pr-2 text-sm font-semibold text-slate-600 transition-colors hover:text-cyan-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            <ArrowLeft aria-hidden="true" size={18} />
            <span className="hidden sm:inline">Back to home</span>
          </Link>
          <Brand />
          <Link
            to="/support"
            className="inline-flex min-h-11 items-center rounded-lg px-2 text-sm font-semibold text-slate-600 transition-colors hover:text-cyan-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            Support
          </Link>
        </div>
      </nav>

      <header className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-violet-950">
        <div
          aria-hidden="true"
          className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-cyan-200 ring-1 ring-white/15 shadow-2xl shadow-blue-950/40">
            {React.createElement(heroIcon, { "aria-hidden": true, size: 31 })}
          </div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
            {appName}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100/85">
            {eyebrow}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs font-semibold text-blue-100/80">
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5">
              On-device audio processing
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5">
              No accounts or tracking
            </span>
          </div>
          <p className="mt-5 text-sm font-medium text-blue-200/70">
            Effective {effectiveDate}
          </p>
          <div className="mx-auto mt-8 inline-flex rounded-xl bg-white/10 p-1 ring-1 ring-white/15">
            <Link
              to={privacyPath}
              aria-current={isPrivacy ? "page" : undefined}
              className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                isPrivacy
                  ? "bg-white text-blue-950 shadow-sm"
                  : "text-blue-100 hover:bg-white/10"
              }`}
            >
              Privacy
            </Link>
            <Link
              to={termsPath}
              aria-current={!isPrivacy ? "page" : undefined}
              className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                !isPrivacy
                  ? "bg-white text-blue-950 shadow-sm"
                  : "text-blue-100 hover:bg-white/10"
              }`}
            >
              Terms
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <details className="group mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:hidden">
          <summary className="cursor-pointer list-none font-semibold text-slate-900 marker:hidden">
            <span className="flex items-center justify-between gap-3">
              On this page
              <span
                aria-hidden="true"
                className="text-cyan-800 transition-transform group-open:rotate-45"
              >
                +
              </span>
            </span>
          </summary>
          <nav aria-label={`${title} sections`} className="mt-4">
            <ul className="grid gap-2 sm:grid-cols-2">
              {sections.map(([id, label]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="block rounded-lg bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-cyan-50 hover:text-cyan-900"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </details>

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
                      className="block border-l-2 border-transparent py-1.5 pl-4 text-sm font-medium leading-5 text-slate-500 transition-colors hover:border-cyan-600 hover:text-cyan-900"
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
          <nav
            aria-label="Vocal Remover legal links"
            className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium"
          >
            <Link to={privacyPath} className="text-slate-300 hover:text-white">
              Privacy
            </Link>
            <Link to={termsPath} className="text-slate-300 hover:text-white">
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

export const VocalRemoverPrivacyPolicy = () => (
  <LegalLayout
    activePage="privacy"
    title="Privacy Policy"
    description="Learn how Vocal Remover: Stem Splitter keeps imported audio and separated stems on your device and handles subscriptions through Apple and RevenueCat."
    eyebrow="A clear account of what stays on your device, how purchases work, and what happens only when you choose to share a file."
    heroIcon={Shield}
    sections={privacySections}
  >
    <Section id="overview" icon={Sparkles} title="Privacy at a glance">
      <div className="rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-violet-50 p-5 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <SummaryCard icon={HardDrive} title="Your audio stays local">
            Imported tracks and output stems remain on your device unless you
            deliberately share or export them.
          </SummaryCard>
          <SummaryCard icon={AudioLines} title="Processing is on-device">
            Neural source separation runs locally on your device. We do not
            upload audio to Digital Sprout or a cloud-processing provider.
          </SummaryCard>
          <SummaryCard icon={UserRoundCheck} title="No account required">
            You can use the App without giving Digital Sprout your name, email
            address, or a profile.
          </SummaryCard>
          <SummaryCard icon={LockKeyhole} title="No tracking business model">
            The App has no ads, behavioural analytics, cross-app tracking, or
            third-party advertising SDKs.
          </SummaryCard>
        </div>
      </div>
      <p>
        This policy applies to the {appName} iOS application (the “App”),
        provided by Digital Sprout (“we”, “us”, or “our”). Digital Sprout is the
        controller for the limited personal information described below;
        RevenueCat acts as our processor for subscription infrastructure. This
        policy explains how the App handles audio files, purchase information,
        and messages you choose to send to support.
      </p>
    </Section>

    <Section id="files" icon={FileAudio} title="Files and information on your device">
      <p>
        When you choose a track through the system file picker, the App receives
        access to that selected file so it can perform the separation you
        requested. The App does not need a Digital Sprout account and does not
        send your audio library to us.
      </p>
      <p>Information kept locally may include:</p>
      <BulletList>
        <Bullet>
          The audio track you import and basic file information needed to open
          and process it, such as its filename, format, and duration.
        </Bullet>
        <Bullet>
          Temporary working files and the estimated vocal and instrumental
          stems produced by the App.
        </Bullet>
        <Bullet>
          App preferences and the information needed to apply the free monthly
          separation limit on that installation.
        </Bullet>
      </BulletList>
      <p>
        The system file picker places a temporary copy of the selected track in
        the App’s cache. The App attempts to remove that copy when separation
        succeeds, fails, or is cancelled. If the App or device stops
        unexpectedly, a cache copy may remain until iOS purges it or you remove
        the App. Generated stems remain in the App’s local storage until you
        delete them or remove the App.
      </p>
      <p>
        Generated audio is marked as excluded from Apple device backups. Keep a
        separate recoverable copy by deliberately exporting a stem. Small items
        such as preferences and usage-limit information may be handled by Apple
        device backup settings, but Digital Sprout does not operate a sync or
        backup service.
      </p>
    </Section>

    <Section id="processing" icon={AudioLines} title="How on-device separation works">
      <p>
        The App runs an HTDemucs neural source-separation model locally through
        Apple’s Core ML framework. It analyses the selected track to estimate
        vocal and instrumental components. The model’s computation occurs on
        your device; the App does not send audio to a remote AI or cloud-processing
        service or upload your track for processing.
      </p>
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5 text-emerald-950">
        <p className="font-semibold">Audio never goes to our servers.</p>
        <p className="mt-1 text-sm leading-6 text-emerald-900/80">
          Digital Sprout does not operate a cloud audio-processing service for
          the App, so we cannot listen to, retrieve, or use your imported tracks
          or generated stems.
        </p>
      </div>
      <p>
        If the file you select is stored with iCloud Drive or another storage
        provider, that provider may download a copy to your device before the
        App can open it. That transfer is handled by the provider and iOS under
        their own privacy terms; the App still performs the separation locally.
      </p>
    </Section>

    <Section id="purchases" icon={CreditCard} title="Subscriptions and purchase information">
      <p>
        The App offers a free tier with a limited number of separations during
        each monthly usage period and optional monthly or yearly Pro
        subscriptions. Audio files are never shared with the purchase providers.
      </p>
      <div className="grid gap-4">
        <ProviderCard
          name="RevenueCat"
          role="Subscription status and entitlement infrastructure"
          href="https://www.revenuecat.com/privacy"
        >
          RevenueCat processes an automatically generated anonymous App User ID,
          Apple receipt and purchase-history information, subscription product
          and entitlement status, last-seen time, device type, and operating
          system. We do not set a named account ID, advertising identifier, or
          optional customer attributes. We use this information to validate
          purchases, prevent entitlement fraud, restore eligible purchases, and
          view aggregate subscription performance in RevenueCat’s dashboard. We
          do not send RevenueCat imported audio, output stems, filenames, or
          sharing activity.
        </ProviderCard>
        <ProviderCard
          name="Apple"
          role="App distribution, subscription billing, and refunds"
          href="https://www.apple.com/legal/privacy/"
        >
          Apple processes App Store downloads and subscription payments under
          your Apple Account. Digital Sprout does not receive your card number,
          Apple Account password, or full billing details. Apple handles this
          information under its own privacy terms.
        </ProviderCard>
      </div>
      <p>
        We do not sell personal information or use purchase information for
        advertising, behavioural profiling, or cross-app tracking. RevenueCat
        purchase information is used only to operate and understand subscription
        access.
      </p>
    </Section>

    <Section id="legal-bases" icon={Gavel} title="Why we process limited personal information">
      <BulletList>
        <Bullet>
          <strong className="text-slate-950">Contract:</strong> purchase and
          entitlement information is needed to provide, validate, and restore
          the Pro subscription you request.
        </Bullet>
        <Bullet>
          <strong className="text-slate-950">Legitimate interests:</strong> we
          use limited purchase records and support correspondence to prevent
          entitlement abuse, understand aggregate subscription performance,
          diagnose problems, and operate a reliable support service. We do not
          use these interests for advertising or cross-app tracking.
        </Bullet>
        <Bullet>
          <strong className="text-slate-950">Legal obligations:</strong> we may
          retain or disclose limited records where necessary to meet tax,
          accounting, consumer-protection, legal-request, or data-protection
          duties.
        </Bullet>
      </BulletList>
      <p>
        When you choose to send a support message or attachment, we process it
        to respond to your request. You can stop that optional processing by not
        contacting support, although we may retain an existing conversation
        where a legal obligation or legitimate record-keeping need applies.
      </p>
    </Section>

    <Section id="sharing" icon={FileDown} title="Files you export or share">
      <p>
        A generated stem leaves the App only when you deliberately choose to
        export or share it using an iOS destination, such as Files, AirDrop,
        Messages, Mail, or another installed app. Check the selected file,
        recipient, and destination before confirming.
      </p>
      <p>
        Once a file has been shared, the recipient and selected service control
        their copy under their own privacy and security practices. Digital
        Sprout does not receive the file through the iOS share sheet and cannot
        retrieve or delete copies held by a recipient or third-party service.
      </p>
    </Section>

    <Section id="support" icon={Mail} title="When you contact support">
      <p>
        If you email support, we receive the email address, message, and any
        attachment you decide to include. Please do not attach an audio file
        unless it is genuinely necessary for your request and you have the right
        to share it with us.
      </p>
      <p>
        We use support messages to reply, investigate problems, protect the App,
        and keep an appropriate record of the conversation. Sending support
        email is optional and is the only ordinary way the App invites you to
        provide contact information directly to Digital Sprout.
      </p>
    </Section>

    <Section id="choices" icon={Gavel} title="Your choices and privacy rights">
      <BulletList>
        <Bullet>
          You control which audio file to import and whether any output is
          exported or shared.
        </Bullet>
        <Bullet>
          You can delete a saved separation using the controls available in the
          App. This removes its generated stems and any retained import copy. You
          can remove the App to delete its local sandbox, subject to copies you
          previously exported or shared.
        </Bullet>
        <Bullet>
          You can manage or cancel a subscription through your Apple Account and
          use Restore Purchases in the App for eligible purchases.
        </Bullet>
        <Bullet>
          You can contact us about support information or limited purchase
          information associated with RevenueCat. We may need enough information
          to verify and respond to a request.
        </Bullet>
      </BulletList>
      <p>
        Depending on where you live and subject to legal exceptions, you may
        have rights to access, correct, delete, restrict, object to, or receive a
        portable copy of personal information held by us. You may also complain
        to your local data-protection authority. In the United Kingdom, you can
        complain to the{` `}
        <a
          href="https://ico.org.uk/make-a-complaint/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-cyan-800 hover:underline"
        >
          Information Commissioner’s Office
        </a>
        . Because we never receive your audio, we cannot access, recover, or
        delete it for you.
      </p>
    </Section>

    <Section id="retention" icon={Database} title="Retention, security, and international processing">
      <p>
        Imported cache copies are removed after a completed, failed, or cancelled
        processing attempt where possible. Generated stems remain on your device
        until you delete the separation or remove the App. They are excluded from
        Apple device backups, so export any stem you need to preserve. Protect
        your device with a passcode, keep iOS updated, and review files before
        sharing them.
      </p>
      <p>
        Support messages are retained only as long as reasonably needed to
        answer the request, maintain suitable business records, prevent abuse,
        and meet legal obligations. RevenueCat and Apple retain and secure
        purchase information according to their own policies and may process it
        in countries other than yours using the safeguards described in those
        policies and our provider arrangements.
      </p>
      <p>
        No method of electronic storage or transmission is completely secure.
        We use reasonable safeguards for the limited information we receive, but
        cannot guarantee absolute security or control the security of your
        device, Apple, RevenueCat, or a destination you choose for sharing.
      </p>
    </Section>

    <Section id="children" icon={UserRoundCheck} title="Children’s privacy">
      <p>
        The App does not require an account, display advertising, or upload audio
        to us, and it is not designed to collect personal information from
        children. A parent or guardian who believes a child has sent personal
        information to support can contact us so we can review and, where
        appropriate, delete it.
      </p>
    </Section>

    <Section id="changes-contact" icon={RefreshCw} title="Policy changes and contact">
      <p>
        We may update this policy when the App, its providers, or applicable law
        changes. The current version will remain at this URL with a revised
        effective date. For a material change, we will provide additional notice
        in the App where reasonably practical.
      </p>
      <p>
        Questions or privacy requests can be sent to Digital Sprout using the
        details below.
      </p>
      <ContactCard />
    </Section>
  </LegalLayout>
);

export const VocalRemoverTermsOfService = () => (
  <LegalLayout
    activePage="terms"
    title="Terms of Service"
    description="Terms for using Vocal Remover: Stem Splitter, including audio rights, on-device neural source separation, free limits, and monthly or yearly Pro subscriptions."
    eyebrow="The agreement covering local stem separation, your responsibility for imported audio, and the optional monthly or yearly Pro subscription."
    heroIcon={FileText}
    sections={termsSections}
  >
    <Section id="agreement" icon={FileText} title="Agreement and eligibility">
      <p>
        These Terms of Service (“Terms”) are an agreement between you and
        Digital Sprout (“Digital Sprout”, “we”, “us”, or “our”) and govern your
        use of the {appName} iOS application (the “App”). By downloading,
        accessing, or using the App, you agree to these Terms and the{` `}
        <Link
          to={privacyPath}
          className="font-semibold text-cyan-800 hover:underline"
        >
          Privacy Policy
        </Link>
        . If you do not agree, do not use the App.
      </p>
      <p>
        You must be legally capable of entering this agreement. If you are under
        the age of legal majority where you live, a parent or guardian must
        approve your use and any purchase. You may use the App only where it is
        lawful and in accordance with Apple’s applicable rules.
      </p>
    </Section>

    <Section id="service" icon={AudioLines} title="What the App provides">
      <p>
        The App lets you select a compatible audio file and runs a neural
        source-separation model locally on your device through Apple’s Core ML
        framework. It estimates vocal and instrumental stems from the source
        audio; the outputs are estimates, not the original multitrack recording.
        The App does not provide cloud processing, an online storage account,
        or a hosted backup service.
      </p>
      <p>
        The on-device model is an HTDemucs Core ML conversion distributed
        through the{` `}
        <a
          href="https://github.com/john-rocky/CoreML-Models"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-cyan-800 hover:underline"
        >
          john-rocky/CoreML-Models project
        </a>
        , based on the open-source{` `}
        <a
          href="https://github.com/facebookresearch/demucs"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-cyan-800 hover:underline"
        >
          Demucs project
        </a>
        . These third-party materials remain subject to their applicable
        open-source notices and licences; their contributors are not responsible
        for the App.
      </p>
      <div className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-5">
        <p className="font-semibold text-slate-950">Free and Pro access</p>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          The free tier includes a limited number of separations during each
          monthly usage period. Optional Pro access is offered through monthly
          or yearly subscriptions. The current features and limits for each tier
          are shown in the App.
        </p>
      </div>
      <p>
        Free usage limits have no cash value, are not transferable, and do not
        roll over unless the App expressly says otherwise. We may adjust free
        limits or features prospectively as the App evolves, while continuing to
        honour paid access required by applicable law and the terms shown when
        you purchased.
      </p>
    </Section>

    <Section id="subscriptions" icon={CreditCard} title="Pro subscriptions and billing">
      <p>
        Pro is available as a monthly or yearly auto-renewing subscription. The
        features, current price, billing period, and any trial or introductory
        offer are shown on the App’s purchase screen before you confirm. Prices
        may vary by country and currency and may include applicable taxes.
      </p>
      <BulletList>
        <Bullet>
          Payment is charged to your Apple Account when you confirm the purchase.
        </Bullet>
        <Bullet>
          The subscription renews automatically for the same period unless you
          cancel it at least 24 hours before the end of the current period. Apple
          may charge your account for renewal during the 24 hours before that
          period ends.
        </Bullet>
        <Bullet>
          Manage or cancel in iPhone Settings → your name → Subscriptions, or on{` `}
          <a
            href="https://apps.apple.com/account/subscriptions"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-cyan-800 hover:underline"
          >
            Apple’s subscription management page
          </a>
          . Deleting the App does not cancel a subscription. Cancellation
          normally takes effect at the end of the already-paid period.
        </Bullet>
        <Bullet>
          If a free or discounted trial is offered, its duration and conversion
          price will be shown before purchase. Cancel at least 24 hours before it
          ends to avoid renewal. Any unused trial portion may end when you buy a
          subscription.
        </Bullet>
        <Bullet>
          Use Restore Purchases in the App for an eligible purchase made with the
          same Apple Account. RevenueCat processes the receipt and entitlement
          status on our behalf.
        </Bullet>
      </BulletList>
      <p>
        Apple handles payment, billing disputes, price-change notices, and
        refunds under its rules and applicable law. Refund eligibility varies.
        You may request a refund at{` `}
        <a
          href="https://reportaproblem.apple.com/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-cyan-800 hover:underline"
        >
          reportaproblem.apple.com
        </a>
        . Digital Sprout does not hold your payment method and cannot promise or
        directly issue an App Store refund.
      </p>
    </Section>

    <Section id="audio-rights" icon={Shield} title="Your audio and the rights to use it">
      <p>
        You retain any rights you already have in audio you import and in the
        files produced on your device. Because the App processes audio locally
        and does not receive it, you do not grant Digital Sprout a licence to
        store, listen to, train on, publish, sell, or distribute your audio merely
        by using the App.
      </p>
      <p>
        You are responsible for every file you choose to process or share. You
        represent that you own the audio or have all permissions, licences, and
        other rights needed to copy, separate, adapt, export, and share it in the
        way you intend. Using the App does not give you new rights in a song,
        recording, performance, or other protected material, and a generated
        stem may remain subject to the rights in its source recording.
      </p>
      <p>
        Do not use the App to infringe copyright, privacy, publicity, contractual,
        or other rights. Digital Sprout cannot review locally processed audio and
        is not responsible for deciding whether your intended use is licensed or
        permitted by an exception to copyright law.
      </p>
    </Section>

    <Section id="quality" icon={Headphones} title="Separation quality and file compatibility">
      <p>
        Neural source separation estimates source components; it is not perfect
        isolation or a reconstruction of the original multitrack recording.
        Results depend on the mix, arrangement, encoding, recording quality,
        and model limitations. Vocals may remain in the instrumental output,
        instruments or other sounds may remain in the vocal output, and either
        output may contain missing detail or artificial-sounding artefacts.
        Dense, live, heavily processed, noisy, or low-quality recordings may
        produce limited or unsuitable results.
      </p>
      <BulletList>
        <Bullet>
          We do not guarantee that a vocal, instrument, dialogue, or background
          sound will be completely isolated or removed.
        </Bullet>
        <Bullet>
          We do not guarantee compatibility with every file, codec, duration,
          sample rate, damaged recording, or device.
        </Bullet>
        <Bullet>
          Listen to and check an output before relying on it in a performance,
          publication, archive, professional workflow, or destructive edit.
        </Bullet>
      </BulletList>
    </Section>

    <Section id="storage-sharing" icon={HardDrive} title="Local storage, deletion, and sharing">
      <p>
        Imported audio, temporary working files, and output stems are stored on
        your device. Digital Sprout does not operate a backup or recovery service
        for those files. You are responsible for available device storage,
        protecting your device, keeping any backup you need, and deleting files
        you no longer want.
      </p>
      <p>
        Losing, resetting, or damaging a device, removing the App, or deleting a
        file may permanently remove your work. Generated stems are excluded from
        Apple device backups, so recovery requires a manual export or another
        copy you control. Once you share an output, the recipient and chosen
        destination control their copy, and Digital Sprout cannot recover or
        delete it for you.
      </p>
    </Section>

    <Section id="acceptable-use" icon={Gavel} title="Licence and acceptable use">
      <p>
        Subject to these Terms and Apple’s applicable Usage Rules, Digital Sprout
        gives you a personal, limited, revocable, non-exclusive,
        non-transferable licence to install and use the App on Apple-branded
        devices you own or control. The App, its code, design, and branding remain
        owned by Digital Sprout and its licensors.
      </p>
      <p>You must not:</p>
      <BulletList>
        <Bullet>
          Use the App or an output to violate law, infringe another person’s
          rights, impersonate someone, harass, defame, or distribute unlawful
          material.
        </Bullet>
        <Bullet>
          Use the App to bypass digital-rights management, access controls,
          licensing restrictions, or other technical protections.
        </Bullet>
        <Bullet>
          Reverse engineer, decompile, modify, redistribute, rent, sell, or
          sublicense the App except where applicable law expressly permits it.
        </Bullet>
        <Bullet>
          Circumvent free-tier limits, falsify purchase status, interfere with
          RevenueCat or Apple purchase verification, or misuse restore-purchase
          functionality.
        </Bullet>
      </BulletList>
    </Section>

    <Section id="availability" icon={RefreshCw} title="Updates, availability, and termination">
      <p>
        We may update the App to improve processing, compatibility, security,
        design, or legal compliance. Some updates may require a supported iOS
        version or device. We do not promise that every feature, format, or
        version will remain available indefinitely or work on every device.
      </p>
      <p>
        Features that depend on Apple or RevenueCat may be interrupted by those
        providers. We may suspend access where reasonably necessary to address
        fraud, abuse, security, legal requirements, or a material breach of these
        Terms. You may stop using the App at any time by deleting it, but must
        separately cancel a subscription to prevent future renewal.
      </p>
    </Section>

    <Section id="liability" icon={Volume2} title="Warranties and limitation of liability">
      <p>
        To the fullest extent permitted by law, the App is provided “as is” and
        “as available”. We do not promise uninterrupted or error-free operation,
        exact separation results, compatibility with every file or device, or
        that locally stored files will never be lost or corrupted. You remain
        responsible for checking outputs and maintaining any backup you need.
      </p>
      <p>
        To the fullest extent permitted by law, Digital Sprout is not liable for
        indirect, incidental, special, consequential, or punitive loss; loss of
        data, files, profits, business, opportunity, or reputation; infringement
        arising from audio you process or share; or loss caused by your device,
        storage provider, recipient, Apple, RevenueCat, or other service outside
        our reasonable control.
      </p>
      <p>
        Where liability cannot lawfully be excluded, Digital Sprout’s total
        liability arising from the App or these Terms is limited to the amount
        you paid for the App during the 12 months before the event giving rise to
        the claim. Nothing in these Terms excludes or limits liability for death
        or personal injury caused by negligence, fraud or fraudulent
        misrepresentation, or any consumer right or liability that cannot
        lawfully be excluded or limited.
      </p>
    </Section>

    <Section id="apple" icon={Apple} title="Terms required for Apple users">
      <BulletList>
        <Bullet>
          These Terms are between you and Digital Sprout, not Apple. Digital
          Sprout, not Apple, is responsible for the App and its content.
        </Bullet>
        <Bullet>
          Apple has no obligation to provide maintenance or support for the App.
          Contact Digital Sprout using the details below for App support.
        </Bullet>
        <Bullet>
          If the App fails to conform to an applicable warranty, you may notify
          Apple and Apple may refund any purchase price for the App itself as
          required by its terms. To the maximum extent permitted by law, Apple
          has no other warranty obligation for the App.
        </Bullet>
        <Bullet>
          Digital Sprout, not Apple, is responsible for addressing claims about
          the App, including product-liability, legal or regulatory compliance,
          consumer-protection, and intellectual-property claims.
        </Bullet>
        <Bullet>
          You represent that you are not located in a country subject to a United
          States government embargo or designated as supporting terrorism, and
          are not listed on a United States government prohibited or
          restricted-party list.
        </Bullet>
        <Bullet>
          Apple and its subsidiaries are third-party beneficiaries of these
          Terms and may enforce them against you after you accept them.
        </Bullet>
      </BulletList>
    </Section>

    <Section id="general" icon={Smartphone} title="General terms, changes, and contact">
      <p>
        These Terms and the Privacy Policy are the entire agreement about the
        App, except for purchase terms shown and accepted through Apple. If a
        provision is unenforceable, it will be limited or removed only as needed
        and the rest will remain effective. Our failure to enforce a provision is
        not a waiver. You may not transfer this agreement; we may transfer it as
        part of a merger, reorganisation, financing, or sale, subject to
        applicable law.
      </p>
      <p>
        We may update these Terms when the App, its providers, or applicable law
        changes. The current version will remain at this URL with a revised
        effective date. For a material change, we will provide additional notice
        in the App where reasonably practical. If you do not agree to an update,
        stop using the App and cancel any future subscription renewal.
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
