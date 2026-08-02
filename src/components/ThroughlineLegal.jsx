import React, { useEffect } from "react";
import {
  Activity,
  ArrowLeft,
  Bell,
  CreditCard,
  Database,
  FileText,
  HeartPulse,
  Lock,
  Mail,
  Shield,
  Stethoscope,
} from "lucide-react";

const effectiveDate = "August 2, 2026";
const contactEmail = "info@digitalsprout.org";

const BulletList = ({ children }) => (
  <ul className="space-y-3 text-gray-600">{children}</ul>
);

const Bullet = ({ children }) => (
  <li className="flex items-start">
    <span className="text-teal-700 mr-2 mt-1">&#8226;</span>
    <span>{children}</span>
  </li>
);

const Section = ({ icon: Icon, title, children }) => (
  <section className="mb-9">
    <div className="flex items-center mb-4">
      {Icon ? <Icon size={24} className="text-teal-700 mr-3" /> : null}
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
    <div className="space-y-4 text-gray-600 leading-relaxed">{children}</div>
  </section>
);

const usePageMetadata = (title, subtitle) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `Throughline ${title} | Digital Sprout`;

    let meta = document.querySelector('meta[name="description"]');
    const createdMeta = !meta;
    if (createdMeta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    const previousDescription = meta.getAttribute("content");
    meta.setAttribute("content", subtitle);

    return () => {
      document.title = previousTitle;
      if (createdMeta) {
        meta.remove();
      } else if (previousDescription === null) {
        meta.removeAttribute("content");
      } else {
        meta.setAttribute("content", previousDescription);
      }
    };
  }, [title, subtitle]);
};

const LegalLayout = ({ title, subtitle, icon, children }) => {
  usePageMetadata(title, subtitle);

  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a
              href="/"
              className="flex items-center text-gray-600 hover:text-teal-700 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </a>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-teal-700 to-amber-500" />
              <div>
                <span className="text-teal-700 font-bold text-xl">Digital</span>
                <span className="text-purple-600 font-bold text-xl">sprout</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-white/15 flex items-center justify-center">
              {React.createElement(icon, {
                size: 32,
                className: "text-amber-300",
              })}
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">THROUGHLINE</p>
          <p className="text-teal-100/80 mt-2">{subtitle}</p>
          <p className="text-teal-200/70 mt-2">
            Effective Date: {effectiveDate}
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          {children}
        </article>
      </main>
    </div>
  );
};

const ContactBlock = () => (
  <div className="bg-stone-50 rounded-lg p-5">
    <p className="text-gray-700">
      <strong>Digital Sprout</strong>
      <br />
      Email:{" "}
      <a
        href={`mailto:${contactEmail}`}
        className="text-teal-700 hover:underline"
      >
        {contactEmail}
      </a>
      <br />
      Website:{" "}
      <a
        href="https://digitalsprout.org"
        className="text-teal-700 hover:underline"
      >
        digitalsprout.org
      </a>
    </p>
  </div>
);

/**
 * Throughline stores everything in a local SQLite database on the device and
 * has no account system, no server and no analytics. This policy is written to
 * describe that accurately rather than reaching for boilerplate that would
 * overstate what is collected.
 */
export const ThroughlinePrivacyPolicy = () => (
  <LegalLayout
    title="Privacy Policy"
    subtitle="How Throughline handles your symptom records, notes, and purchases"
    icon={Shield}
  >
    <Section icon={HeartPulse} title="The short version">
      <p>
        Throughline is a symptom diary that runs entirely on your device. There
        is no account, no sign-up and no Digital Sprout server. Your symptom
        entries, notes, medications and questions are stored in a private
        database inside the app on your phone.
      </p>
      <p>
        <strong>
          We never receive, store, transmit or have access to your health
          information.
        </strong>{" "}
        We could not read your symptom history even if we were asked to, because
        it never leaves your device unless you choose to share it yourself.
      </p>
    </Section>

    <Section icon={Database} title="What stays on your device">
      <p>Everything you record in the app is held locally, including:</p>
      <BulletList>
        <Bullet>
          The symptoms, medications and daily context factors you choose to
          track, and the severity or yes/no values you log for them.
        </Bullet>
        <Bullet>
          The date and time of each entry, including when an entry was later
          edited.
        </Bullet>
        <Bullet>Free-text notes you write about a particular day.</Bullet>
        <Bullet>
          Questions you save for an appointment, and any appointments you record.
        </Bullet>
        <Bullet>Your reminder time and app settings.</Bullet>
      </BulletList>
      <p>
        This data is deleted when you delete the app. It is not backed up to us,
        and we cannot restore it for you.
      </p>
    </Section>

    <Section icon={FileText} title="Files you create and share">
      <p>
        Throughline can produce an Appointment Brief as a PDF, a full backup
        file, and a CSV export of your entries. These are generated on your
        device.
      </p>
      <BulletList>
        <Bullet>
          Nothing is uploaded when a file is created. Generation happens offline.
        </Bullet>
        <Bullet>
          A file only leaves your device if you explicitly send it somewhere
          using your phone&rsquo;s share sheet, for example by emailing it to
          your doctor or saving it to Files or iCloud Drive.
        </Bullet>
        <Bullet>
          Once you share a file, it is handled by whichever app or service you
          sent it to, under that provider&rsquo;s terms and privacy policy. We
          have no visibility of, or control over, what happens to it after that
          point.
        </Bullet>
      </BulletList>
      <p>
        Because a brief or export contains personal health information, please
        take care where you send it.
      </p>
    </Section>

    <Section icon={CreditCard} title="Purchases and subscriptions">
      <p>
        Throughline Pro is an optional subscription. Purchases are processed by
        Apple or Google, and subscription status is managed on our behalf by
        RevenueCat, Inc.
      </p>
      <BulletList>
        <Bullet>
          We never see or receive your card details, billing address or payment
          credentials. Those are handled entirely by the app store.
        </Bullet>
        <Bullet>
          RevenueCat receives an anonymous app user identifier and your
          purchase receipt so it can tell the app whether a subscription is
          active. It does not receive any of your health data.
        </Bullet>
        <Bullet>
          Apple and Google may provide us with aggregate, anonymised sales and
          download reports. These cannot be linked to your symptom records.
        </Bullet>
      </BulletList>
      <p>
        RevenueCat&rsquo;s handling of that purchase data is governed by its own
        privacy policy at{" "}
        <a
          href="https://www.revenuecat.com/privacy"
          className="text-teal-700 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          revenuecat.com/privacy
        </a>
        .
      </p>
    </Section>

    <Section icon={Bell} title="Notifications">
      <p>
        Throughline can send one optional daily reminder at a time you choose.
        This is scheduled locally by your device. There is no push server, we do
        not hold a push token, and no notification data is transmitted anywhere.
        You can turn reminders off at any time in Settings.
      </p>
    </Section>

    <Section icon={Activity} title="What we do not do">
      <BulletList>
        <Bullet>We do not use analytics or crash-reporting SDKs.</Bullet>
        <Bullet>We do not use advertising, and we show no ads.</Bullet>
        <Bullet>
          We do not track you across apps or websites, and we do not access the
          advertising identifier.
        </Bullet>
        <Bullet>
          We do not sell, rent or share personal information with third parties.
        </Bullet>
        <Bullet>
          We do not build profiles, and we do not use your data to train machine
          learning models.
        </Bullet>
      </BulletList>
    </Section>

    <Section icon={Lock} title="Your control over your data">
      <BulletList>
        <Bullet>
          <strong>Access and portability.</strong> You can export everything you
          have recorded at any time as a CSV file or a complete backup file.
          Both are free and are not restricted by a subscription.
        </Bullet>
        <Bullet>
          <strong>Correction.</strong> You can edit or clear any past entry from
          the History screen. Editing is free and always available.
        </Bullet>
        <Bullet>
          <strong>Deletion.</strong> Deleting the app removes the database and
          everything in it. You may also replace all data at any time by
          restoring a backup.
        </Bullet>
      </BulletList>
      <p>
        Because we hold no copy of your information, these controls are
        exercised directly in the app rather than by contacting us. If you are in
        the UK, EEA, or a US state with applicable privacy legislation, this is
        how your access, rectification, portability and erasure rights are
        satisfied.
      </p>
    </Section>

    <Section icon={Shield} title="Children">
      <p>
        Throughline is not directed at children under 13, and we do not knowingly
        collect information from them. As no information is collected by us at
        all, there is nothing for us to delete; a parent or guardian can remove
        all data by deleting the app.
      </p>
    </Section>

    <Section icon={FileText} title="Changes to this policy">
      <p>
        If this policy changes, the updated version will be posted here with a
        new effective date. Material changes affecting how data is handled will
        also be surfaced in the app.
      </p>
    </Section>

    <Section icon={Mail} title="Contact">
      <p>
        If you have a question about this policy or about how Throughline handles
        information, please get in touch.
      </p>
      <ContactBlock />
    </Section>
  </LegalLayout>
);

export const ThroughlineTermsOfService = () => (
  <LegalLayout
    title="Terms of Service"
    subtitle="The agreement covering your use of the Throughline app"
    icon={FileText}
  >
    <Section icon={FileText} title="Agreement">
      <p>
        These terms are between you and Digital Sprout Ltd (&ldquo;Digital
        Sprout&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By downloading or
        using Throughline (the &ldquo;App&rdquo;) you agree to them. If you do
        not agree, please do not use the App.
      </p>
    </Section>

    <Section icon={Stethoscope} title="Throughline is not medical advice">
      <p>
        This is the most important term in this agreement, so please read it
        carefully.
      </p>
      <BulletList>
        <Bullet>
          Throughline is a personal record-keeping tool. It is{" "}
          <strong>not a medical device</strong> and does not diagnose, treat,
          cure or prevent any condition.
        </Bullet>
        <Bullet>
          Nothing the App shows you is medical advice. The patterns it reports
          describe <strong>associations in your own logged data only</strong>.
          An association is not evidence of cause, and the App tells you so
          wherever a pattern is shown.
        </Bullet>
        <Bullet>
          <strong>
            Never start, stop or change any medication or treatment because of
            something the App displayed.
          </strong>{" "}
          Always speak to a qualified healthcare professional.
        </Bullet>
        <Bullet>
          The Appointment Brief is a summary of what you recorded. It is not a
          clinical assessment and is not a substitute for examination,
          investigation or professional judgement.
        </Bullet>
        <Bullet>
          If you think you are experiencing a medical emergency, contact your
          local emergency services immediately. Do not rely on this App.
        </Bullet>
      </BulletList>
    </Section>

    <Section icon={Database} title="Your data is your responsibility">
      <p>
        Throughline stores your records on your device and nowhere else. We hold
        no copy.
      </p>
      <BulletList>
        <Bullet>
          If you lose, reset, or damage your device, or delete the App, your
          records are gone. We cannot recover them.
        </Bullet>
        <Bullet>
          The App provides a free backup and restore feature. We strongly
          recommend taking a backup periodically and keeping it somewhere safe.
        </Bullet>
        <Bullet>
          You are responsible for the accuracy of what you enter, and for
          deciding who to share an exported brief or backup with.
        </Bullet>
      </BulletList>
    </Section>

    <Section icon={CreditCard} title="Subscriptions and billing">
      <p>
        Throughline offers an optional auto-renewing subscription, Throughline
        Pro, which unlocks the Appointment Brief PDF, pattern analysis,
        unlimited tracking and full history.
      </p>
      <BulletList>
        <Bullet>
          Payment is charged to your Apple ID or Google account at confirmation
          of purchase.
        </Bullet>
        <Bullet>
          The subscription renews automatically unless it is cancelled at least
          24 hours before the end of the current period. Your account is charged
          for renewal within 24 hours of the end of that period.
        </Bullet>
        <Bullet>
          You can manage or cancel your subscription in your Apple ID or Google
          Play account settings at any time. Uninstalling the App does not
          cancel a subscription.
        </Bullet>
        <Bullet>
          Where a free trial is offered, any unused portion is forfeited if you
          purchase a subscription during the trial period.
        </Bullet>
        <Bullet>
          Prices are shown in the App before purchase and may vary by region.
          Prices may change, but a change will never affect a period you have
          already paid for.
        </Bullet>
      </BulletList>
      <p>
        Refunds are handled by Apple or Google under their own policies, not by
        us, as they are the merchant of record.
      </p>
    </Section>

    <Section icon={Lock} title="What stays free">
      <p>
        Cancelling or never subscribing will not lock you out of your own
        records. The following are free permanently, including after a
        subscription ends:
      </p>
      <BulletList>
        <Bullet>Logging entries, without limit.</Bullet>
        <Bullet>Viewing and editing any entry you have already made.</Bullet>
        <Bullet>Backing up and restoring everything you have recorded.</Bullet>
        <Bullet>Exporting your full history as a CSV file.</Bullet>
      </BulletList>
    </Section>

    <Section icon={Activity} title="Acceptable use">
      <p>You agree not to:</p>
      <BulletList>
        <Bullet>
          Reverse engineer, decompile or attempt to extract the source code of
          the App, except where that restriction is prohibited by law.
        </Bullet>
        <Bullet>
          Use the App to provide clinical services to another person, or present
          its output as a professional medical opinion.
        </Bullet>
        <Bullet>
          Interfere with the App&rsquo;s operation or attempt to circumvent
          subscription controls.
        </Bullet>
      </BulletList>
    </Section>

    <Section icon={Shield} title="Warranties and liability">
      <p>
        The App is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;,
        without warranties of any kind to the fullest extent permitted by law,
        including any implied warranty of merchantability, fitness for a
        particular purpose, or accuracy of results.
      </p>
      <p>
        To the fullest extent permitted by law, Digital Sprout is not liable for
        any indirect, incidental, special or consequential loss, or for any loss
        of data, arising from your use of the App. Our total liability in
        connection with the App is limited to the amount you paid for it in the
        twelve months before the claim arose.
      </p>
      <p>
        Nothing in these terms excludes or limits liability for death or
        personal injury caused by negligence, for fraud, or for any other
        liability that cannot lawfully be excluded. If you are a consumer, you
        retain all statutory rights available to you, and these terms do not
        affect them.
      </p>
    </Section>

    <Section icon={FileText} title="Changes and termination">
      <p>
        We may update these terms; the current version will always be posted
        here with its effective date. Continuing to use the App after a change
        means you accept the updated terms. You may stop using the App at any
        time by deleting it.
      </p>
    </Section>

    <Section icon={FileText} title="Governing law">
      <p>
        These terms are governed by the laws of England and Wales. If you are a
        consumer resident elsewhere, you may also benefit from mandatory
        protections under the law of your country of residence.
      </p>
    </Section>

    <Section icon={Mail} title="Contact">
      <p>If you have a question about these terms, please contact us.</p>
      <ContactBlock />
    </Section>
  </LegalLayout>
);
