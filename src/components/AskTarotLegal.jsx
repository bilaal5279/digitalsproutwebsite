import React from "react";
import {
  ArrowLeft,
  Bot,
  CreditCard,
  Database,
  FileText,
  Lock,
  Shield,
  Sparkles,
} from "lucide-react";

const effectiveDate = "July 18, 2026";
const contactEmail = "info@digitalsprout.org";

const BulletList = ({ children }) => (
  <ul className="space-y-3 text-gray-600">{children}</ul>
);

const Bullet = ({ children }) => (
  <li className="flex items-start">
    <span className="text-purple-600 mr-2 mt-1">&#8226;</span>
    <span>{children}</span>
  </li>
);

const Section = ({ icon: Icon, title, children }) => (
  <section className="mb-9">
    <div className="flex items-center mb-4">
      {Icon ? <Icon size={24} className="text-purple-700 mr-3" /> : null}
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
    <div className="space-y-4 text-gray-600 leading-relaxed">{children}</div>
  </section>
);

const LegalLayout = ({ title, subtitle, icon, children }) => (
  <div className="min-h-screen bg-gray-50">
    <nav className="bg-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="flex items-center text-gray-600 hover:text-purple-700 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </a>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-purple-800 to-amber-500" />
            <div>
              <span className="text-teal-700 font-bold text-xl">Digital</span>
              <span className="text-purple-600 font-bold text-xl">sprout</span>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <header className="bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 rounded-full bg-white/15 flex items-center justify-center">
            {React.createElement(icon, { size: 32, className: "text-amber-300" })}
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl text-purple-100 max-w-2xl mx-auto">ASK TAROT</p>
        <p className="text-purple-200 mt-2">{subtitle}</p>
        <p className="text-purple-300 mt-2">Effective Date: {effectiveDate}</p>
      </div>
    </header>

    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="bg-white rounded-xl shadow-lg p-8 md:p-12">{children}</article>
    </main>
  </div>
);

const ContactBlock = () => (
  <div className="bg-gray-50 rounded-lg p-5">
    <p className="text-gray-700">
      <strong>Digital Sprout</strong><br />
      Email: <a href={`mailto:${contactEmail}`} className="text-purple-700 hover:underline">{contactEmail}</a><br />
      Website: <a href="https://digitalsprout.org" className="text-purple-700 hover:underline">digitalsprout.org</a>
    </p>
  </div>
);

export const AskTarotPrivacyPolicy = () => (
  <LegalLayout
    title="Privacy Policy"
    subtitle="How Ask Tarot handles your journal, AI requests, and purchases"
    icon={Shield}
  >
    <Section icon={Sparkles} title="1. Introduction">
      <p>
        Ask Tarot (the "App") is provided by Digital Sprout ("we," "us," or "our").
        This policy explains what information is handled when you use the App, why it is
        handled, which service providers are involved, and the choices available to you.
      </p>
      <p>
        Ask Tarot is a private reflection journal. It does not require an account and is
        designed to keep your journal content on your device unless you choose to use an
        online feature described below.
      </p>
    </Section>

    <Section icon={Database} title="2. Information handled by the App">
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-purple-900 mb-2">Journal data stays on your device</h3>
        <p className="text-purple-800">
          Questions, card draws, interpretations, notes, moods, favourites, daily-card
          reflections, reminder preferences, and an optional birth date are stored locally
          on your device. We do not operate an account database containing this journal.
        </p>
      </div>
      <p>Information may be processed online only when you use the following features:</p>
      <BulletList>
        <Bullet>
          <strong>AI-enhanced readings and follow-ups:</strong> the current question,
          selected cards, spread, reading style, and follow-up text are sent to our secure
          processing endpoint. A follow-up may include up to the last eight messages from
          that reading. If Reading Memory is enabled, up to four relevant saved entries may
          also be included. You can disable AI enhancement or Reading Memory in Settings.
        </Bullet>
        <Bullet>
          <strong>AI response reports:</strong> if you flag a response, we receive a limited
          report containing the response, the associated reading context needed to
          investigate it, a reason you select, and technical timestamps. Private notes are
          excluded.
        </Bullet>
        <Bullet>
          <strong>Subscriptions:</strong> Google Play, Apple, and RevenueCat process purchase
          status, store transaction identifiers, country/store information, and an anonymous
          app user identifier. We do not receive your full payment-card details.
        </Bullet>
        <Bullet>
          <strong>Technical request data:</strong> our hosting provider may process IP address,
          device/network metadata, request time, and error information for security, abuse
          prevention, and service reliability.
        </Bullet>
      </BulletList>
    </Section>

    <Section icon={Bot} title="3. AI processing and OpenAI">
      <p>
        AI-enhanced text is processed through the OpenAI API. We instruct the service to
        frame tarot as reflection rather than prediction and set API responses not to be
        stored as application state. OpenAI states that API data is not used to train its
        models unless the API customer explicitly opts in. OpenAI may retain abuse-monitoring
        logs containing prompts and responses for up to 30 days, unless a longer period is
        legally required or different approved data controls apply.
      </p>
      <p>
        Learn more in OpenAI's <a href="https://platform.openai.com/docs/models/default-usage-policies-by-endpoint" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">API data controls documentation</a>.
        Please do not enter payment details, government identifiers, passwords, or other
        information you would not want processed by an AI service.
      </p>
    </Section>

    <Section icon={CreditCard} title="4. Service providers">
      <p>We use the following providers only for the purposes described in this policy:</p>
      <BulletList>
        <Bullet><strong>OpenAI:</strong> generates optional AI-enhanced interpretations and follow-ups.</Bullet>
        <Bullet><strong>Expo Application Services:</strong> hosts the secure processing endpoint and supports app delivery.</Bullet>
        <Bullet><strong>RevenueCat:</strong> manages subscription status and entitlement verification.</Bullet>
        <Bullet><strong>Google Play and Apple App Store:</strong> distribute the App and process purchases.</Bullet>
      </BulletList>
      <p>These providers may process data in countries other than your own under their respective privacy and security terms.</p>
    </Section>

    <Section icon={Lock} title="5. Retention, security, and deletion">
      <BulletList>
        <Bullet><strong>On-device data:</strong> remains until you delete individual entries, use Erase Journal in Settings, or uninstall the App. Device backups may retain copies according to your device provider's settings.</Bullet>
        <Bullet><strong>AI requests:</strong> are not intentionally stored by Digital Sprout after processing. OpenAI's abuse-monitoring retention is described above.</Bullet>
        <Bullet><strong>Response reports:</strong> are retained only as long as reasonably necessary to investigate safety or quality concerns, normally no longer than 90 days unless law or an active investigation requires longer.</Bullet>
        <Bullet><strong>Purchase records:</strong> are retained by the applicable store and RevenueCat according to their legal, accounting, fraud-prevention, and service requirements.</Bullet>
      </BulletList>
      <p>
        Data is transmitted using encrypted HTTPS connections. No method of electronic
        storage or transmission is completely secure, but we minimise the data sent and keep
        the journal local by default.
      </p>
      <p>
        Because no Ask Tarot account is required, the quickest way to delete your journal is
        Settings &gt; Erase journal. For a privacy request concerning a submitted response
        report, email us using the address below with the approximate submission date.
      </p>
    </Section>

    <Section icon={Shield} title="6. Children and sensitive use">
      <p>
        Ask Tarot is not directed to children under 13, and we do not knowingly collect
        personal information from children under 13. Tarot content is offered for
        entertainment and personal reflection and is not medical, legal, financial, or
        mental-health advice.
      </p>
    </Section>

    <Section icon={FileText} title="7. Your choices and policy updates">
      <p>
        You can turn off AI-enhanced wording, disable Reading Memory, decline notifications,
        delete readings, or erase the local journal at any time. Depending on where you live,
        you may also have rights to ask about, correct, or delete personal data we control.
      </p>
      <p>
        We may update this policy when the App or legal requirements change. The current
        version will remain published at this URL with a revised effective date.
      </p>
    </Section>

    <Section title="8. Contact us">
      <ContactBlock />
    </Section>
  </LegalLayout>
);

export const AskTarotTermsOfService = () => (
  <LegalLayout
    title="Terms of Service"
    subtitle="The terms that apply when you use Ask Tarot"
    icon={FileText}
  >
    <Section icon={Sparkles} title="1. Agreement and service description">
      <p>
        These Terms govern your use of Ask Tarot, an entertainment and personal-reflection
        app provided by Digital Sprout. By downloading or using the App, you agree to these
        Terms. If you do not agree, do not use the App.
      </p>
      <p>
        The App provides tarot card draws, card meanings, journaling, pattern summaries,
        optional reminders, and optional AI-enhanced wording. Features may change as we
        improve the App.
      </p>
    </Section>

    <Section icon={Shield} title="2. Reflection only — not professional advice">
      <p>
        Ask Tarot does not predict facts or future events and is not a substitute for
        medical, mental-health, legal, financial, relationship, or other professional advice.
        Do not use it to make emergency, safety-critical, health, legal, or financial
        decisions. You remain responsible for your choices and should consult a qualified
        professional when appropriate.
      </p>
    </Section>

    <Section icon={Bot} title="3. AI limitations and acceptable use">
      <p>
        AI-generated content can be incomplete, inaccurate, unexpected, or inappropriate.
        You must evaluate it independently. Do not submit illegal content, attempt to abuse
        or disrupt the service, probe security controls, or use the App to harm another person.
      </p>
      <p>
        Use the in-app Report response action if an AI response appears offensive, unsafe, or
        seriously inaccurate. We may review reports and adjust or suspend online features to
        protect users and the service.
      </p>
    </Section>

    <Section icon={CreditCard} title="4. Ask Tarot Plus subscriptions">
      <p>
        Ask Tarot may offer monthly and annual auto-renewing subscriptions. The price,
        billing period, trial (if offered), and any introductory terms are shown by the store
        before purchase. Payment is charged to your Google Play or Apple account when you
        confirm the purchase.
      </p>
      <BulletList>
        <Bullet>Subscriptions renew automatically unless cancelled before the end of the current billing period under the store's rules.</Bullet>
        <Bullet>You can manage or cancel through your store subscription settings; deleting the App does not cancel a subscription.</Bullet>
        <Bullet>Trials convert to the displayed paid plan unless cancelled before the trial ends.</Bullet>
        <Bullet>Refunds and billing disputes are handled under the applicable store's policies and mandatory consumer law.</Bullet>
        <Bullet>The Restore purchases action can recover an eligible entitlement on the same store account.</Bullet>
      </BulletList>
    </Section>

    <Section icon={Database} title="5. Your content and local storage">
      <p>
        You retain ownership of the questions, notes, and reflections you create. You grant us
        a limited right to process content you intentionally send to online features solely to
        provide, secure, and improve those features as described in the Privacy Policy.
      </p>
      <p>
        Most journal data is stored on your device. You are responsible for your device and
        backups. If you erase the journal, uninstall the App, lose the device, or lose a device
        backup, we may be unable to recover that content.
      </p>
    </Section>

    <Section icon={Lock} title="6. Intellectual property and licence">
      <p>
        We grant you a personal, limited, non-exclusive, non-transferable, revocable licence
        to use the App for lawful personal purposes. The App's software, interface, original
        writing, brand, and generated assets are owned by or licensed to Digital Sprout.
        Classic Rider–Waite–Smith card images included in the App are sourced from
        public-domain artwork; this does not grant rights in our app design or original content.
      </p>
      <p>
        You may not copy, sell, reverse engineer, distribute, or commercially exploit the App
        except where applicable law expressly permits it.
      </p>
    </Section>

    <Section title="7. Availability, warranties, and liability">
      <p>
        The App is provided on an "as is" and "as available" basis. We do not promise that it
        will always be available, error-free, or suitable for a particular purpose. To the
        fullest extent permitted by law, Digital Sprout is not liable for indirect, incidental,
        special, consequential, or punitive loss arising from use of the App or reliance on a
        reading. Nothing in these Terms excludes rights or liability that cannot lawfully be
        excluded, including mandatory consumer protections.
      </p>
    </Section>

    <Section title="8. Suspension, changes, and governing terms">
      <p>
        We may suspend online features for maintenance, security, abuse prevention, or legal
        compliance. We may update these Terms and will post the current version at this URL.
        Continued use after an update means you accept the revised Terms where permitted by law.
      </p>
      <p>
        These Terms are governed by the laws applicable to Digital Sprout, while preserving
        any mandatory consumer rights that apply in your country. If any provision is
        unenforceable, the remaining provisions continue in effect.
      </p>
    </Section>

    <Section title="9. Contact us">
      <ContactBlock />
      <p>
        See our <a href="/ask-tarot/privacy-policy" className="text-purple-700 hover:underline">Privacy Policy</a> for details about data handling.
      </p>
    </Section>
  </LegalLayout>
);
