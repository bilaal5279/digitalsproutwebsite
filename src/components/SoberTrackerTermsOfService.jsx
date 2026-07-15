import React from 'react';
import { Shield, ArrowLeft, Heart, Database, Lock, Zap } from 'lucide-react';

const SoberTrackerTermsOfService = () => {
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
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                            <Shield size={32} className="text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
                    <p className="text-xl text-teal-100 max-w-2xl mx-auto">
                        SOBERTRACKER
                    </p>
                    <p className="text-teal-200 mt-2">
                        Effective Date: July 15, 2026
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">

                    {/* Description of Service */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Heart size={24} className="text-teal-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">1. Description of Service</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Welcome to SoberTracker ("the App"), developed by Digital Sprout ("we," "us," or "our"). By downloading, accessing, or using SoberTracker, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            SoberTracker is a sobriety tracking tool designed to help you track your progress in quitting drinking. The App allows you to log your sober days, keep notes, and view your milestones.
                        </p>
                    </section>

                    {/* Data Storage and Privacy */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Lock size={24} className="text-teal-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">2. Data Storage and Privacy</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We respect your privacy, especially regarding sensitive health and habit-tracking data. 
                        </p>
                        <ul className="space-y-2 text-gray-600 mb-4">
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2 mt-1">•</span>
                                <strong>Local Storage:</strong> All of your tracking data, notes, and milestones are stored exclusively on your device's local storage. We do not transmit, sync, or store this data on our servers.
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2 mt-1">•</span>
                                <strong>Data Loss:</strong> Because data is stored locally, if you delete the App, lose your device, or perform a factory reset without first backing up your device, your tracking data will be permanently lost. We cannot restore lost data.
                            </li>
                        </ul>
                    </section>

                    {/* Subscriptions and Purchases */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Database size={24} className="text-teal-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">3. Subscriptions and Purchases</h2>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed mb-4">
                            SoberTracker may offer premium features, such as advanced analytics or additional customization, through a "Pro" version via in-app purchases or subscriptions. We use RevenueCat to manage and verify these purchases.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Billing and Cancellations</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            All in-app purchases and subscriptions are processed and managed entirely by the <strong>Apple App Store</strong> or <strong>Google Play Store</strong>. You must manage your payment methods, subscription renewals, and cancellations directly through your Apple ID or Google account settings. We do not handle refunds directly; please refer to the respective app store's refund policies.
                        </p>
                    </section>

                    {/* Disclaimer of Warranties */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Disclaimer of Warranties</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            SoberTracker is a self-help tool and is not a substitute for professional medical advice, diagnosis, or treatment for substance use disorders. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. The App and its services are provided on an "AS IS" and "AS AVAILABLE" basis, without any warranties of any kind.
                        </p>
                    </section>

                    {/* Limitation of Liability */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            To the maximum extent permitted by law, Digital Sprout shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues resulting from your use of the App, including but not limited to any loss of data due to device failure or app deletion. Our total, aggregated liability regarding the App is limited to the amount you paid us for the Service, if any.
                        </p>
                    </section>

                    {/* Changes to Policy */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to the Terms</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We reserve the right to modify or replace these Terms at any time. By continuing to access or use our App after those revisions become effective, you agree to be bound by the revised terms.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Information</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            If you have questions or concerns regarding these Terms, please contact Digital Sprout via our main portal:
                        </p>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-gray-700">
                                <strong>Digitalsprout</strong><br />
                                Website: <a href="https://digitalsprout.org" className="text-teal-600 hover:underline">digitalsprout.org</a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default SoberTrackerTermsOfService;
