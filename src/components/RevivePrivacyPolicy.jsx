import React from 'react';
import { ArrowLeft, Camera, Heart, Lock, Shield } from 'lucide-react';

const BulletList = ({ children }) => (
    <ul className="space-y-3 text-gray-600 list-disc pl-6">{children}</ul>
);

const ExternalLink = ({ href, children }) => (
    <a href={href} className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
    </a>
);

const RevivePrivacyPolicy = () => (
    <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-md">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <a href="/" className="flex items-center text-gray-600 hover:text-teal-600 transition-colors">
                        <ArrowLeft size={20} className="mr-2" />
                        Back to Home
                    </a>
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-teal-600 to-purple-600" />
                        <div>
                            <span className="text-teal-700 font-bold text-xl">Digital</span>
                            <span className="text-purple-600 font-bold text-xl">sprout</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <header className="bg-gradient-to-r from-teal-600 to-teal-700 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                        <Shield size={32} className="text-white" />
                    </div>
                </div>
                <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
                <p className="text-xl text-teal-100">REVIVE AI: PHOTO RESTORATION</p>
                <p className="text-teal-200 mt-2">Effective Date: 27 August 2026</p>
            </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                <section className="mb-8">
                    <div className="flex items-center mb-4">
                        <Heart size={24} className="text-teal-600 mr-3" />
                        <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                        Digital Sprout ("Digital Sprout", "we", "us", or "our") provides the Revive AI mobile application (the "App"). This Privacy Policy explains how we collect, use, disclose, and protect information when you use the App.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information we process</h2>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Account and service identifiers</h3>
                    <p className="text-gray-600 leading-relaxed mb-5">
                        The App uses Firebase Authentication to create an anonymous account identifier. The current version does not ask you to create an account with an email address. We use the anonymous identifier to operate the service, apply usage limits, prevent abuse, and associate purchases with the correct customer record.
                    </p>

                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-5">
                        <div className="flex items-center mb-2">
                            <Camera size={20} className="text-teal-600 mr-2" />
                            <h3 className="text-lg font-semibold text-teal-800">Photos and restoration requests</h3>
                        </div>
                        <p className="text-teal-700 mb-3">
                            When you choose or capture a photo, the App sends the image and your selected restoration options to a Firebase Cloud Function. The function passes the image to Google Gemini to produce the restored result and returns it to the App. The current service sends the image inline for processing and does not intentionally save the uploaded image in Firebase Storage.
                        </p>
                        <p className="text-teal-700">
                            Photos may contain personal information about you or other people. We use them only to provide the requested restoration, maintain security, and troubleshoot a specific service failure. We do not send photo content to Meta, Google AdMob, RevenueCat, or Firebase Analytics, and we do not use your photos for advertising or to train our own models. A restored photo you save remains in your device photo library until you delete it.
                        </p>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">App usage, device, and diagnostics information</h3>
                    <BulletList>
                        <li>App version, operating system, device type, language, and general region derived from IP address.</li>
                        <li>Anonymous app, installation, session, and device identifiers.</li>
                        <li>Screens viewed and actions taken, such as completing onboarding, viewing a subscription offer, beginning checkout, completing a restoration, or saving a result.</li>
                        <li>Request timing, error codes, crash or diagnostic information, and security signals.</li>
                        <li>Google Play install-referrer information, where available.</li>
                    </BulletList>
                    <p className="text-gray-600 leading-relaxed mt-3 mb-5">We do not include photo content in analytics or advertising events.</p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Advertising and attribution information</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                        The free version of the App may display ads through Google AdMob. We also use the Meta SDK and Meta App Events to measure whether ads on Facebook, Instagram, or other Meta services lead to installs and meaningful in-app actions, and to improve advertising campaigns.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3">
                        Depending on your device settings, consent choices, and applicable law, this may include an advertising identifier (IDFA on iOS or Google Advertising ID on Android), an app- or vendor-scoped identifier, IP address, app and device information, and events such as app activation, onboarding completion, subscription-offer views, checkout starts, and restoration milestones. RevenueCat may send subscription lifecycle and revenue events—including trial starts, initial subscriptions, trial conversions, and renewals—to Meta on our behalf.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-5">
                        On iOS, we request permission through Apple&apos;s App Tracking Transparency framework before enabling access to the advertising identifier or telling Meta that advertiser tracking is enabled. If you decline, those features remain disabled. Meta may still receive limited or aggregated App Events where permitted, without access to your IDFA. The App requests non-personalised Google AdMob inventory in its current ad flow.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Purchases and subscriptions</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Apple or Google processes your payment. We do not receive or store your full card or bank details. We use RevenueCat to manage entitlements, subscription status, product identifiers, transaction status, trial status, purchase dates, and related subscription lifecycle information.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How we use information</h2>
                    <BulletList>
                        <li>Provide, maintain, and secure photo restoration and related App features.</li>
                        <li>Authenticate users anonymously, enforce usage limits, and prevent fraud or abuse.</li>
                        <li>Process subscriptions and restore purchases.</li>
                        <li>Measure reliability, diagnose errors, and improve the App.</li>
                        <li>Display ads and measure, attribute, and optimise our advertising campaigns.</li>
                        <li>Comply with law, enforce our terms, and protect users, Digital Sprout, and our service providers.</li>
                    </BulletList>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        Where applicable, our legal bases include performing our contract with you, our legitimate interests in operating, securing, and improving the service, compliance with legal obligations, and your consent for tracking, personalised advertising, or access to device features where consent is required. You may withdraw consent at any time for future processing.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Services that receive information</h2>
                    <BulletList>
                        <li><strong>Google Firebase</strong> — anonymous authentication, Cloud Functions, database records, analytics, and service infrastructure. <ExternalLink href="https://policies.google.com/privacy">Google Privacy Policy</ExternalLink></li>
                        <li><strong>Google Gemini</strong> — processing photos to generate restored results. <ExternalLink href="https://policies.google.com/privacy">Google Privacy Policy</ExternalLink></li>
                        <li><strong>Google AdMob</strong> — serving and measuring ads in the free App experience. <ExternalLink href="https://policies.google.com/technologies/partner-sites">How Google uses information from sites or apps</ExternalLink></li>
                        <li><strong>Meta Platforms</strong> — app-event measurement, ad attribution, audience measurement, and campaign optimisation for Facebook and Instagram advertising. <ExternalLink href="https://www.facebook.com/privacy/policy/">Meta Privacy Policy</ExternalLink></li>
                        <li><strong>RevenueCat</strong> — subscription management and server-side subscription attribution. <ExternalLink href="https://www.revenuecat.com/privacy/">RevenueCat Privacy Policy</ExternalLink></li>
                        <li><strong>Apple App Store and Google Play</strong> — app distribution, purchases, refunds, and subscription management.</li>
                    </BulletList>
                    <p className="text-gray-600 leading-relaxed mt-4 mb-3">
                        These providers process information under their own terms and privacy notices. We may also disclose information to professional advisers, authorities, or other parties when reasonably necessary to comply with law, respond to valid legal requests, investigate misuse, protect rights or safety, or complete a business transfer.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        We do not sell your photo content. Depending on where you live, sharing advertising identifiers and activity with an advertising provider may be treated by law as "sharing", "targeted advertising", or a "sale" even when no money is exchanged. You can exercise the choices described below.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Retention</h2>
                    <p className="text-gray-600 leading-relaxed">
                        The current backend processes uploaded photos in memory and does not intentionally retain them in Firebase Storage after responding to a restoration request. The restored copy saved on your device remains until you delete it. Service counters, anonymous identifiers, purchase records, security logs, and analytics or advertising events are retained only for as long as reasonably necessary for the purposes described above, subject to provider retention settings, legal obligations, fraud prevention, dispute resolution, and backup cycles.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your choices and rights</h2>
                    <BulletList>
                        <li><strong>iOS tracking:</strong> Choose "Ask App Not to Track" in the App Tracking Transparency prompt, or change the choice later under <strong>Settings &gt; Privacy &amp; Security &gt; Tracking</strong>.</li>
                        <li><strong>Android advertising:</strong> Use your device&apos;s privacy or ads controls to reset or delete the advertising ID and manage ad personalisation.</li>
                        <li><strong>Camera and photos:</strong> Deny or revoke camera or photo-library access in device settings. Features that require the denied permission will no longer work.</li>
                        <li><strong>Subscriptions:</strong> Manage or cancel subscriptions in your Apple App Store or Google Play account settings.</li>
                        <li><strong>Privacy requests:</strong> Depending on your location, you may request access, correction, deletion, restriction, portability, or objection, and may opt out of targeted advertising or certain data sharing. Contact us below. We may need enough information to verify and complete the request.</li>
                    </BulletList>
                    <p className="text-gray-600 leading-relaxed mt-4">You may also have the right to complain to your local data-protection authority. If you are in the United Kingdom, this is the Information Commissioner&apos;s Office.</p>
                </section>

                <section className="mb-8">
                    <div className="flex items-center mb-4">
                        <Lock size={24} className="text-teal-600 mr-3" />
                        <h2 className="text-2xl font-bold text-gray-900">6. International transfers and security</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed">Our providers may process information in countries other than your own. Where required, we and our providers use recognised safeguards for international transfers. We use reasonable administrative, technical, and organisational safeguards, including encrypted network connections, but no system can guarantee absolute security.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children</h2>
                    <p className="text-gray-600 leading-relaxed">The App is not directed to children under 13 or any higher minimum age required by local law. We do not knowingly collect personal information from a child who may not lawfully use the App. A parent or guardian who believes a child has provided information may contact us to request deletion.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to this policy</h2>
                    <p className="text-gray-600 leading-relaxed">We may update this policy as the App or law changes. We will publish the updated version and change the effective date. If a change materially affects your rights, we will provide additional notice where required.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact us</h2>
                    <div className="bg-gray-50 rounded-lg p-4 text-gray-700">
                        <strong>Digital Sprout</strong><br />
                        <ExternalLink href="https://digitalsprout.org">digitalsprout.org</ExternalLink><br />
                        <a href="mailto:info@digitalsprout.org" className="text-teal-600 hover:underline">info@digitalsprout.org</a>
                    </div>
                </section>

                <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mt-8">
                    <div className="flex items-center mb-3">
                        <Shield size={24} className="text-teal-600 mr-3" />
                        <h3 className="text-lg font-semibold text-teal-800">Privacy summary</h3>
                    </div>
                    <p className="text-teal-700 font-medium">Revive AI processes only the photos you choose for restoration, does not send photo content to analytics or advertising providers, and asks for iOS tracking permission before enabling advertising identifiers. Subscription management is handled by the app stores and RevenueCat.</p>
                </div>
            </div>
        </main>
    </div>
);

export default RevivePrivacyPolicy;
