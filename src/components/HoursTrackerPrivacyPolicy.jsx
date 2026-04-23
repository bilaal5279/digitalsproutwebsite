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
                        Hours Tracker: Clock In
                    </h2>
                    <p className="text-teal-400 mt-2">
                        Effective Date: April 23, 2026
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
                            Hours Tracker: Clock In ("the App") is a productivity tool designed to help you log work hours, manage freelance projects, and export time logs. 
                            We believe your data belongs to you. This Privacy Policy explains our commitment to your privacy and how we handle information.
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
                                <strong>Your work logs are private.</strong> All time logs, job details, and notes you enter into the App are stored exclusively on your device. We do not have servers that store your work history.
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
                                    <strong>No Account Required:</strong> You do not need to provide an email address or name to use the App.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2">•</span>
                                <div>
                                    <strong>Local Storage:</strong> Your tracking data stays on your phone. If you delete the app, your tracking data is removed.
                                </div>
                            </li>
                        </ul>
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
                            Since your data is stored locally, its security depends on the security of your device. We recommend using your device's built-in security features (Passcode, FaceID, TouchID) to protect your information.
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
                            Hours Tracker: Clock In is a "no-data-collection" app. Everything you log stays on your device. We don't see it, we don't store it, and we don't sell it.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HoursTrackerPrivacyPolicy;
