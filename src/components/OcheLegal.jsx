import React, { useEffect } from "react";
import {
  ArrowLeft,
  Ban,
  CreditCard,
  Database,
  FileText,
  Gavel,
  Lock,
  Mail,
  RefreshCw,
  Shield,
  Smartphone,
  Target,
  Users,
} from "lucide-react";

const effectiveDate = "August 4, 2026";
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
    document.title = `Oche ${title} | Digital Sprout`;

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
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">OCHE</p>
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

export const OchePrivacyPolicy = () => (
  <LegalLayout
    title="Privacy Policy"
    subtitle="Oche is a darts scoreboard that keeps your data on your phone."
    icon={Shield}
  >
    <Section icon={Lock} title="The short version">
      <p>
        Oche does not have accounts, does not run ads, and does not include any
        analytics or tracking software. Your players, matches, statistics and
        settings are stored on your device and are not uploaded to us. We do not
        operate servers that receive your scoring data, and we cannot see it.
      </p>
    </Section>

    <Section icon={Database} title="Information stored on your device">
      <p>
        Everything you create in Oche is written to your iPhone's local storage
        and stays there:
      </p>
      <BulletList>
        <Bullet>Player names you type in</Bullet>
        <Bullet>
          Match results, including scores, per-visit history, averages, checkout
          statistics and any darts you record individually
        </Bullet>
        <Bullet>Tournaments, fixtures and standings</Bullet>
        <Bullet>
          Your preferences, such as theme, preferred double, entry mode and
          whether the voice caller is switched on
        </Bullet>
      </BulletList>
      <p>
        Deleting the app removes this data from your device. Because it is only
        stored locally, we cannot restore it for you — use the built-in backup
        export if you want a copy you control.
      </p>
    </Section>

    <Section icon={CreditCard} title="Purchases">
      <p>
        Oche Pro is sold as an in-app purchase. Payment is handled entirely by
        Apple; we never see or receive your card details, billing address or
        Apple ID password.
      </p>
      <p>
        To check whether a subscription is active, the app uses RevenueCat, Inc.
        as its subscription infrastructure provider. RevenueCat receives a
        randomly generated anonymous identifier for your installation, the
        purchase receipt issued by Apple, and basic technical details such as
        the app version, platform and country associated with the store account.
        This is used solely to validate the purchase and restore it on your
        devices. It is not linked to your name and is not used for advertising.
      </p>
      <BulletList>
        <Bullet>
          RevenueCat's privacy policy:{" "}
          <a
            href="https://www.revenuecat.com/privacy"
            className="text-teal-700 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            revenuecat.com/privacy
          </a>
        </Bullet>
        <Bullet>
          Apple's privacy policy:{" "}
          <a
            href="https://www.apple.com/legal/privacy/"
            className="text-teal-700 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            apple.com/legal/privacy
          </a>
        </Bullet>
      </BulletList>
    </Section>

    <Section icon={Smartphone} title="Device features we use">
      <BulletList>
        <Bullet>
          <strong>Speech synthesis.</strong> If you switch on the voice caller,
          Oche uses your device's built-in speech engine to read scores aloud.
          This happens on the device. No audio is recorded and no microphone
          access is requested.
        </Bullet>
        <Bullet>
          <strong>Haptics.</strong> Used for feedback while scoring.
        </Bullet>
        <Bullet>
          <strong>Files.</strong> When you export a CSV or a backup, or restore
          from one, the app opens the system share or file picker. Only the file
          you choose is read, and only when you choose it.
        </Bullet>
      </BulletList>
      <p>
        Oche does not request access to your location, contacts, photos,
        microphone, camera, health data or calendar.
      </p>
    </Section>

    <Section icon={Ban} title="What we do not do">
      <BulletList>
        <Bullet>We do not sell or share your personal information</Bullet>
        <Bullet>We do not show advertising or use advertising identifiers</Bullet>
        <Bullet>We do not track you across other apps or websites</Bullet>
        <Bullet>We do not build profiles about you</Bullet>
        <Bullet>We do not require an account or an email address</Bullet>
      </BulletList>
    </Section>

    <Section icon={Users} title="Children">
      <p>
        Oche is a general-audience scoring tool and is not directed at children
        under 13. We do not knowingly collect personal information from
        children. Because the app does not collect personal information from
        anyone, there is nothing for us to delete on request — removing the app
        removes the data.
      </p>
    </Section>

    <Section icon={Gavel} title="Your rights">
      <p>
        Depending on where you live, you may have rights to access, correct,
        export or delete personal information held about you. In Oche's case
        that data lives on your device: you can view it in the app, export it
        with the backup and CSV tools, and delete it by clearing your history or
        removing the app. If you have a question about purchase records held by
        RevenueCat or Apple, contact us and we will help you direct the request.
      </p>
    </Section>

    <Section icon={RefreshCw} title="Changes to this policy">
      <p>
        If this policy changes, the revised version will be posted on this page
        with a new effective date. Material changes will also be noted in the
        app's release notes.
      </p>
    </Section>

    <Section icon={Mail} title="Contact">
      <p>Questions about this policy or the app:</p>
      <ContactBlock />
    </Section>
  </LegalLayout>
);

export const OcheTermsOfService = () => (
  <LegalLayout
    title="Terms of Service"
    subtitle="The agreement covering your use of Oche and Oche Pro."
    icon={FileText}
  >
    <Section icon={FileText} title="Agreement">
      <p>
        These terms are between you and Digital Sprout and govern your use of
        Oche, a darts scoreboard application for iPhone. By downloading or using
        the app you agree to them. If you do not agree, please do not use the
        app.
      </p>
    </Section>

    <Section icon={Target} title="What Oche is">
      <p>
        Oche is a scorekeeping and practice tool. It records the scores you
        enter, applies the rules of the games it supports, and shows statistics
        and checkout suggestions based on what you have entered.
      </p>
      <p>
        You are responsible for the scores you enter and for the outcome of any
        match. Checkout routes, coaching hints and computer opponents are
        provided for convenience and practice. They are not a substitute for the
        rules in force at your venue, league or competition, and we do not
        guarantee that a suggestion is optimal for a given situation.
      </p>
    </Section>

    <Section icon={CreditCard} title="Oche Pro subscriptions">
      <p>
        Oche is free to use. Oche Pro unlocks additional features and is offered
        as an auto-renewing subscription or as a one-time purchase:
      </p>
      <BulletList>
        <Bullet>
          <strong>Monthly</strong> — auto-renewing, billed every month
        </Bullet>
        <Bullet>
          <strong>Annual</strong> — auto-renewing, billed every year, offered
          with a 7-day free trial for new subscribers
        </Bullet>
        <Bullet>
          <strong>Lifetime</strong> — a single purchase, not a subscription and
          it does not renew
        </Bullet>
      </BulletList>
      <p>
        Prices are shown in the app in your local currency before you confirm,
        and are the prices that apply.
      </p>
      <p className="font-semibold text-gray-800">
        Terms that apply to the auto-renewing options:
      </p>
      <BulletList>
        <Bullet>
          Payment is charged to your Apple ID account when you confirm the
          purchase.
        </Bullet>
        <Bullet>
          The subscription renews automatically unless auto-renew is turned off
          at least 24 hours before the end of the current period.
        </Bullet>
        <Bullet>
          Your account is charged for renewal within 24 hours before the end of
          the current period, at the price of the plan you selected.
        </Bullet>
        <Bullet>
          You can manage or cancel a subscription in your Apple ID account
          settings after purchase. Cancelling stops the next renewal; it does
          not end the period you have already paid for.
        </Bullet>
        <Bullet>
          If a free trial is offered, any unused portion is forfeited when you
          buy a subscription covering the same period.
        </Bullet>
      </BulletList>
    </Section>

    <Section icon={RefreshCw} title="Refunds">
      <p>
        Purchases are processed by Apple, so refunds are handled under Apple's
        policy and are requested through Apple rather than from us. We cannot
        issue refunds directly. If something in the app is not working as
        described, contact us — we would rather fix it.
      </p>
    </Section>

    <Section icon={Ban} title="Acceptable use">
      <BulletList>
        <Bullet>
          Do not copy, resell, reverse engineer or attempt to extract the source
          of the app, except where that restriction is prohibited by law.
        </Bullet>
        <Bullet>
          Do not attempt to circumvent purchase verification or obtain Pro
          features without paying for them.
        </Bullet>
        <Bullet>
          Do not use the app in a way that breaks the law or infringes someone
          else's rights.
        </Bullet>
      </BulletList>
    </Section>

    <Section icon={Database} title="Your data and backups">
      <p>
        Your matches and settings are stored on your device. We do not hold a
        copy, which means we cannot recover your history if you delete the app,
        lose your device or reset it. The app includes backup and CSV export so
        you can keep your own copy, and we recommend using it if your records
        matter to you.
      </p>
    </Section>

    <Section icon={Shield} title="Availability and changes">
      <p>
        We may update the app to add, change or remove features, and we may stop
        supporting older versions of iOS. If we ever discontinue a paid feature
        you are actively subscribed to, we will say so in advance in the app or
        by email where we have one.
      </p>
    </Section>

    <Section icon={Gavel} title="Disclaimer and liability">
      <p>
        The app is provided "as is" and "as available", without warranties of
        any kind, whether express or implied, to the fullest extent permitted by
        law. We do not warrant that it will be uninterrupted, error free, or fit
        for a particular purpose.
      </p>
      <p>
        To the fullest extent permitted by law, Digital Sprout is not liable for
        indirect, incidental, special or consequential losses, or for lost data,
        arising out of your use of the app. Nothing in these terms limits
        liability that cannot be limited by law, including liability for death
        or personal injury caused by negligence, or for fraud. Where liability
        cannot be excluded, it is limited to the amount you paid for the app in
        the twelve months before the claim.
      </p>
      <p>
        Some jurisdictions do not allow certain exclusions, so parts of this
        section may not apply to you.
      </p>
    </Section>

    <Section icon={Smartphone} title="Apple">
      <p>
        Apple is not a party to these terms and is not responsible for the app
        or its content. Apple has no obligation to provide support for the app.
        Apple and its subsidiaries are third-party beneficiaries of these terms
        and may enforce them against you.
      </p>
    </Section>

    <Section icon={Gavel} title="Governing law">
      <p>
        These terms are governed by the laws of England and Wales, and the
        courts of England and Wales have jurisdiction. If you are a consumer,
        this does not deprive you of the protection of the mandatory laws of the
        country where you live.
      </p>
    </Section>

    <Section icon={Mail} title="Contact">
      <p>Questions about these terms:</p>
      <ContactBlock />
    </Section>
  </LegalLayout>
);
