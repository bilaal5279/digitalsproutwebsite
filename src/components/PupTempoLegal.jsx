import React, { useEffect } from "react";
import {
  ArrowLeft,
  Bell,
  CreditCard,
  Database,
  FileText,
  Lock,
  Mail,
  PawPrint,
  Shield,
  Star,
} from "lucide-react";

const effectiveDate = "July 25, 2026";
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
    document.title = `PupTempo ${title} | Digital Sprout`;

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
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">PUPTEMPO</p>
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

export const PupTempoPrivacyPolicy = () => (
  <LegalLayout
    title="Privacy Policy"
    subtitle="How PupTempo handles puppy routines, reminders, reviews, and purchases"
    icon={Shield}
  >
    <Section icon={PawPrint} title="1. Introduction">
      <p>
        PupTempo (the "App") is provided by Digital Sprout ("we," "us," or
        "our"). This policy explains what information is handled when you use
        the App, where it is stored, which service providers are involved, and
        the choices available to you.
      </p>
      <p>
        PupTempo is designed as a local-first puppy routine tracker. It does not
        require an account, and we do not operate a custom server containing
        your puppy profiles or logs. Household sharing and cloud sync are not
        currently provided.
      </p>
    </Section>

    <Section icon={Database} title="2. Information stored on your device">
      <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-teal-950 mb-2">
          Your puppy history stays local
        </h3>
        <p className="text-teal-900">
          Puppy names, optional breed and birth date, selected coat, potty and
          routine logs, sleep sessions, timestamps, notes, reminder settings,
          and the active profile are stored on your device.
        </p>
      </div>
      <p>
        The App also stores small pieces of local operational data, such as
        whether onboarding is complete and the timing used to limit how often
        the official store review prompt may be requested.
      </p>
      <p>
        This local data may be included in normal device backups when your
        operating-system and backup settings allow it. A restored device backup
        may therefore restore App data after deletion or reinstallation.
      </p>
    </Section>

    <Section icon={Bell} title="3. Notifications and device permissions">
      <p>
        If you enable potty reminders, the App asks for notification
        permission and schedules reminders locally on your device. The App does
        not register for remote push notifications, upload a push token, or
        send reminder details to a Digital Sprout server.
      </p>
      <p>
        PupTempo does not request location, contacts, camera, microphone, photo
        library, or file-storage access for its current features.
      </p>
    </Section>

    <Section icon={CreditCard} title="4. Subscriptions and RevenueCat">
      <p>
        When subscription features are available, PupTempo uses RevenueCat to
        load store products, process purchase results, restore purchases, and
        verify whether PupTempo Pro is active. RevenueCat may process an
        anonymous app user identifier, subscription and entitlement status,
        product and transaction information, store country, app and device
        information, operating-system information, network metadata, and IP
        address as needed to provide and secure its service.
      </p>
      <p>
        PupTempo disables RevenueCat&apos;s automatic device-identifier
        collection. Apple App Store or Google Play processes payment and
        billing information under its own terms. We do not receive your full
        payment-card details.
      </p>
      <p>
        Purchase and billing records may be retained by RevenueCat and the
        applicable store for entitlement verification, accounting, fraud
        prevention, legal obligations, and customer support.
      </p>
    </Section>

    <Section icon={Star} title="5. Ratings, reviews, and support">
      <p>
        After meaningful use, the App may ask the operating system to show its
        official in-app review card. Apple or Google decides whether the card is
        shown. If you choose to submit a rating or written review, the
        applicable store processes it under its own privacy terms and may
        publish it. PupTempo does not receive review text through a custom
        backend.
      </p>
      <p>
        If you choose Email support, your email address, message, and any
        information you include are handled by your email provider and received
        by Digital Sprout. Please avoid sending sensitive information that is
        not needed to answer your request.
      </p>
    </Section>

    <Section icon={Lock} title="6. Analytics, advertising, and crash reports">
      <p>
        The current App does not include an advertising SDK, a third-party
        analytics SDK, or a third-party crash-reporting SDK. We do not use your
        puppy logs for advertising or sell them.
      </p>
      <p>
        Apple and Google may provide normal store-distribution, purchase, or
        diagnostic services according to your platform settings and their own
        policies. That platform processing is separate from a Digital Sprout
        puppy-log database, which we do not operate.
      </p>
    </Section>

    <Section icon={Database} title="7. Retention, deletion, and your choices">
      <BulletList>
        <Bullet>
          <strong>On-device puppy data:</strong> remains until you delete a
          profile, use Erase all data in Settings, clear the App&apos;s storage,
          or uninstall the App. Device backups may retain a copy under your
          platform settings.
        </Bullet>
        <Bullet>
          <strong>Review-prompt timing:</strong> is stored locally and is
          removed by Erase all data or by clearing or uninstalling the App.
        </Bullet>
        <Bullet>
          <strong>Notifications:</strong> can be disabled in PupTempo or in
          device settings. Erasing all puppy data removes the App&apos;s saved
          reminder configuration.
        </Bullet>
        <Bullet>
          <strong>Subscriptions:</strong> deleting local data or uninstalling
          PupTempo does not cancel a subscription. Manage or cancel it through
          the applicable store.
        </Bullet>
        <Bullet>
          <strong>Support email:</strong> is retained only as long as reasonably
          needed to answer the request, maintain support records, prevent abuse,
          or meet legal obligations.
        </Bullet>
      </BulletList>
      <p>
        Because there is no PupTempo account or cloud puppy-log database, we
        normally cannot identify or remotely delete data held only on your
        device. For a privacy or deletion request concerning support
        correspondence or other data we control, email {contactEmail} with
        enough detail for us to locate the request.
      </p>
      <p>
        Depending on where you live, you may have rights to access, correct,
        delete, restrict, or object to processing of personal data we control,
        or to complain to a data-protection authority.
      </p>
    </Section>

    <Section icon={Shield} title="8. Security and international processing">
      <p>
        We minimise network processing by keeping puppy history on-device.
        Subscription connections use the secure transport provided by the
        platform and RevenueCat. No method of storage or transmission is
        completely secure.
      </p>
      <p>
        RevenueCat, Apple, Google, and email providers may process data in
        countries other than your own under their respective legal and security
        arrangements.
      </p>
    </Section>

    <Section title="9. Children and policy updates">
      <p>
        PupTempo is not directed to children under 13, and we do not knowingly
        collect personal information from children under 13. A parent or
        guardian should supervise use by a minor where required.
      </p>
      <p>
        We may update this policy when the App, its providers, or legal
        requirements change. The current version will remain published at this
        URL with a revised effective date.
      </p>
    </Section>

    <Section icon={Mail} title="10. Contact us">
      <ContactBlock />
    </Section>
  </LegalLayout>
);

export const PupTempoTermsOfService = () => (
  <LegalLayout
    title="Terms of Service"
    subtitle="The terms that apply when you use PupTempo"
    icon={FileText}
  >
    <Section icon={PawPrint} title="1. Agreement and service description">
      <p>
        These Terms govern your use of PupTempo, a puppy potty, routine, and
        sleep tracking app provided by Digital Sprout. By downloading or using
        the App, you agree to these Terms. If you do not agree, do not use the
        App.
      </p>
      <p>
        PupTempo provides local puppy profiles, one-tap and past activity logs,
        routine estimates, optional local reminders, sleep tracking, history,
        and pattern summaries. Features may change as the App improves.
      </p>
    </Section>

    <Section icon={Shield} title="2. Training aid, not veterinary advice">
      <p>
        PupTempo&apos;s timing estimates are based on the routine settings and
        events you enter. They are general training aids, not guarantees and not
        veterinary, medical, behavioural, or emergency advice. Your
        puppy&apos;s cues and welfare come first.
      </p>
      <p>
        Contact a qualified veterinarian if you notice pain, straining, sudden
        changes, unusual frequency, illness, or another health concern. Use
        appropriate emergency services for urgent situations.
      </p>
    </Section>

    <Section icon={Database} title="3. Your data and device">
      <p>
        You are responsible for the puppy details, notes, and routine records
        you enter. Puppy history is stored locally, and you are responsible for
        your device, access controls, and backups. Digital Sprout cannot recover
        local records that are erased or lost and are not available in a device
        backup.
      </p>
      <p>
        Do not rely on PupTempo as the only record for veterinary treatment,
        medication, legal obligations, or other safety-critical information.
      </p>
    </Section>

    <Section icon={CreditCard} title="4. PupTempo Pro subscriptions">
      <p>
        PupTempo may offer monthly and annual auto-renewing subscriptions. The
        exact price, billing period, any trial or introductory offer, and renewal
        terms are shown by Apple App Store or Google Play before you confirm a
        purchase. We do not promise a trial unless the store shows that you are
        eligible.
      </p>
      <BulletList>
        <Bullet>
          Payment is charged to your store account when you confirm the
          purchase.
        </Bullet>
        <Bullet>
          Subscriptions renew automatically unless cancelled before renewal
          under the applicable store&apos;s rules.
        </Bullet>
        <Bullet>
          Manage or cancel through your store subscription settings. Deleting
          PupTempo, erasing local data, or removing a puppy profile does not
          cancel a subscription.
        </Bullet>
        <Bullet>
          Restore purchases can recover an eligible entitlement for the same
          store account. RevenueCat is used to verify PupTempo Pro access.
        </Bullet>
        <Bullet>
          Refunds and billing disputes are handled under the applicable
          store&apos;s policies and any mandatory consumer law.
        </Bullet>
      </BulletList>
    </Section>

    <Section icon={Lock} title="5. Acceptable use and licence">
      <p>
        We grant you a personal, limited, non-exclusive, non-transferable,
        revocable licence to use the App for lawful personal purposes. The
        App&apos;s software, interface, brand, original writing, and visual
        assets are owned by or licensed to Digital Sprout.
      </p>
      <p>
        You may not misuse the App, interfere with its operation, attempt to
        bypass purchase controls, distribute unauthorised copies, or reverse
        engineer it except where applicable law expressly permits.
      </p>
    </Section>

    <Section title="6. Availability and changes">
      <p>
        The App is provided on an "as is" and "as available" basis. We do not
        promise uninterrupted operation, perfect predictions, permanent
        availability of a feature, or compatibility with every device. We may
        change, suspend, or discontinue features for maintenance, security,
        store requirements, legal compliance, or product improvement.
      </p>
      <p>
        We will not intentionally remove an active paid entitlement without a
        valid reason, but access can depend on the applicable store and
        RevenueCat being able to confirm the purchase.
      </p>
    </Section>

    <Section title="7. Warranties and liability">
      <p>
        To the fullest extent permitted by law, Digital Sprout disclaims
        implied warranties and is not liable for indirect, incidental, special,
        consequential, or punitive loss arising from use of the App, missed
        reminders, lost local data, or reliance on an estimate. Nothing in these
        Terms excludes rights or liability that cannot legally be excluded,
        including mandatory consumer protections.
      </p>
    </Section>

    <Section title="8. Suspension, termination, and governing terms">
      <p>
        We may restrict access where reasonably necessary to address unlawful
        use, fraud, security risks, or store requirements. You may stop using
        the App at any time. Subscription cancellation remains subject to the
        store process described above.
      </p>
      <p>
        These Terms are governed by the laws applicable to Digital Sprout while
        preserving any mandatory consumer rights that apply in your country. If
        a provision is unenforceable, the remaining provisions continue in
        effect.
      </p>
    </Section>

    <Section title="9. Changes to these Terms">
      <p>
        We may update these Terms when the App or legal requirements change.
        The current version will be posted at this URL with a revised effective
        date. Continued use after an update means you accept the revised Terms
        where permitted by law.
      </p>
    </Section>

    <Section icon={Mail} title="10. Contact us">
      <ContactBlock />
      <p>
        See our{" "}
        <a
          href="/puptempo/privacy-policy"
          className="text-teal-700 hover:underline"
        >
          Privacy Policy
        </a>{" "}
        for details about data handling.
      </p>
    </Section>
  </LegalLayout>
);
