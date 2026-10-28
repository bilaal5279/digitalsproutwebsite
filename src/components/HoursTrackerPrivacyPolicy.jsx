import React from 'react';
import { Shield, ArrowLeft, Clock, Database, Lock, Eye, HardDrive } from 'lucide-react';

const HoursTrackerPrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-md">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <a href="/" className="flex items-center text-gray-600 hover:text-teal-600 transition-colors">
                                <ArrowLeft size={20} className="mr-2" />
                                Back to Home
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-teal-600 to-purple-600"></div>
                            <div>
                                <span className="text-teal-700 font-bold text-xl">Digital</span>
                                <span className="text-purple-600 font-bold text-xl">sprout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <div className="bg-gradient-to-r from-teal-800 to-teal-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center">
                            <Shield size={32} className="text-teal-400" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
                    <h2 className="text-xl text-teal-300 max-w-2xl mx-auto uppercase tracking-wide">
                        Hours Tracker
                    </h2>
                    <p className="text-teal-400 mt-2">
                        Last Updated: October 28, 2026
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">

                    {/* Introduction */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Clock size={24} className="text-teal-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Hours Tracker ("the App") is a productivity tool designed to help you log work hours, manage freelance projects, and export time logs.
                            We believe your data belongs to you. This Privacy Policy explains how DigitalSprout Ltd handles your work data, purchases, and optional advertising measurement.
                        </p>
                    </section>

                    {/* Data Collection & Storage */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <HardDrive size={24} className="text-teal-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">Data Collection & Storage</h2>
                        </div>
                        <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-4">
                            <div className="flex items-center mb-2">
                                <Eye size={20} className="text-teal-700 mr-2" />
                                <h3 className="text-lg font-semibold text-teal-900">Local-First Privacy</h3>
                            </div>
                            <p className="text-teal-800">
                                <strong>Your work logs are private.</strong> Your time logs, job details, hourly rates, earnings, and notes are stored on your device. We do not upload this work data to our servers or send it to Meta. If you export or share a file, you choose where it goes.
                            </p>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 mb-3">What We Collect:</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2">•</span>
                                <div>
                                    <strong>Purchase History:</strong> We use <strong>RevenueCat</strong> to manage in-app purchases and subscriptions. RevenueCat may collect your transaction history and an anonymous App User ID to verify your premium status. This is used solely for app functionality and analytics.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2">•</span>
                                <div>
                                    <strong>Optional Advertising Measurement:</strong> Versions that include Meta advertising measurement share app activation, installation and session information, together with advertising, device and technical information, only after you allow tracking through Apple's permission prompt. The section below explains this choice.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2">•</span>
                                <div>
                                    <strong>No Account Required:</strong> You do not need to provide an email address or name to use the App.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2">•</span>
                                <div>
                                    <strong>Local Storage:</strong> Your work data stays on your phone unless you choose to export or share it. Copies in device backups or exported files are controlled by the storage service or recipient you choose.
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* Optional Advertising Measurement */}
                    <section className="mb-8" id="advertising-measurement">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Optional Advertising Measurement with Meta</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            In versions that include this feature, we use the Meta SDK to understand whether our Facebook and Instagram advertisements lead people to install and open Hours Tracker, and to measure and improve our advertising. Versions without this feature do not send these app events to Meta.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We initialize Meta advertising measurement and send app events only after you choose Allow in Apple's App Tracking Transparency prompt. If you decline, are not eligible to grant permission, or have not made a choice, this Meta measurement remains off. You can use the App without allowing tracking.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            When enabled, Meta may receive your device's advertising identifier (IDFA), an app installation identifier, app activation and first-launch information, session timing, and technical context such as app and SDK versions, device and operating-system information, language and time zone. Network requests also disclose information such as your IP address. Meta may link this information with information from its services and other companies' apps and websites for advertising measurement and to improve advertising.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We do not send your time entries, work schedules, job or client names, hourly rates, calculated earnings, notes, or exported timesheets to Meta. We do not provide Meta with your name, email address, or other contact details for matching. Automatic event collection, automatic advanced matching, codeless event collection, screen-title and link collection, and screen-content collection for product improvement are disabled for this integration.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            You can withdraw tracking permission at any time in iOS Settings → Privacy &amp; Security → Tracking → Hours Tracker. The App checks this permission when it becomes active and before recording new advertising events. After permission is withdrawn, the App stops requesting new Meta app events and disables advertising identifier collection. This does not automatically delete information already received by Meta.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Learn how Meta uses and retains information and how to manage your choices in the <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline">Meta Privacy Policy</a>.
                        </p>
                    </section>

                    {/* Data Export */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Database size={24} className="text-teal-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">Data Export</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            The App provides features to export your data (e.g., CSV or PDF). When you use these features, the file is generated locally on your device. You are responsible for where you share or send these exported files.
                        </p>
                    </section>

                    {/* Permissions */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">App Permissions</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            The App may request certain permissions to function correctly:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2">•</span>
                                <div><strong>Tracking (optional):</strong> In supported versions, to measure and improve our advertising through Meta after you allow tracking. Declining does not restrict app features.</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2">•</span>
                                <strong>Notifications:</strong> To remind you to clock out or notify you of active timers.
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2">•</span>
                                <strong>Storage/Files:</strong> To save exported time logs to your device.
                            </li>
                        </ul>
                    </section>

                    {/* Security */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Lock size={24} className="text-teal-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">Security</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Your on-device work data is protected by your device’s security. Purchases and optional advertising information are processed by the service providers described above. We recommend using your device's built-in security features (Passcode, FaceID, TouchID) to protect your information.
                        </p>
                    </section>

                    {/* Deletion and Privacy Requests */}
                    <section className="mb-8" id="deletion-requests">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Deleting Data and Privacy Requests</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            You can remove your work entries within the App or remove the App's local data by deleting the App. Separately delete any exported files or backups you no longer want to retain. Deleting the App does not cancel an App Store subscription; manage subscriptions in your Apple account settings.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            For access, deletion, or other privacy requests relating to information processed by DigitalSprout or its service providers, email <a href="mailto:info@digitalsprout.org" className="text-teal-700 underline">info@digitalsprout.org</a>. We will explain what information we can identify and help direct requests to the relevant provider. We do not have a server copy of your work logs to retrieve or delete. Information already processed by Meta is also subject to the choices and retention practices in its linked privacy policy.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            If you have any questions about our privacy practices, please contact us:
                        </p>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-gray-700">
                                <strong>Digitalsprout</strong><br />
                                Email: info@digitalsprout.org<br />
                                Website: digitalsprout.org
                            </p>
                        </div>
                    </section>

                    {/* Summary Box */}
                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mt-8">
                        <div className="flex items-center mb-3">
                            <Shield size={24} className="text-teal-800 mr-3" />
                            <h3 className="text-lg font-semibold text-teal-800">Privacy Commitment</h3>
                        </div>
                        <p className="text-teal-700 font-medium">
                            Your work logs, job details, rates, earnings, and notes stay on your device unless you choose to export or share them. RevenueCat handles subscription information. Optional Meta advertising measurement is separate from your work data and requires your tracking permission.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HoursTrackerPrivacyPolicy;
