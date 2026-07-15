import React from 'react';
import { Shield, ArrowLeft, Heart, Database, Lock, Eye, Smartphone } from 'lucide-react';

const SoberTrackerPrivacyPolicy = () => {
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
                    <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
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

                    {/* Introduction */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Heart size={24} className="text-teal-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Welcome to SoberTracker, an application developed by Digital Sprout ("we," "us," or "our"). We are committed to protecting your privacy while providing you with our sobriety tracking services. This Privacy Policy explains how your information is collected, used, and protected when you use the SoberTracker mobile application (the "App").
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Database size={24} className="text-teal-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                        </div>
                        <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-4">
                            <div className="flex items-center mb-2">
                                <Smartphone size={20} className="text-teal-600 mr-2" />
                                <h3 className="text-lg font-semibold text-teal-800">Your Data Stays on Your Device</h3>
                            </div>
                            <p className="text-teal-700">
                                SoberTracker is designed with privacy in mind. All your sobriety tracking data, personal notes, and progress information are stored locally on your device. We do not upload, sync, or store this data on our servers.
                            </p>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Categories:</h3>
                        <ul className="space-y-4 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2 mt-1">•</span>
                                <div>
                                    <strong>Tracking Data:</strong> The dates, milestones, and notes you enter are saved directly to your phone's local storage. We do not have access to this data.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2 mt-1">•</span>
                                <div>
                                    <strong>Usage and Performance Data:</strong> We may gather minimal, anonymized app performance tracking data to identify crashes and improve the overall user experience.
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* Subscriptions and In-App Purchases */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscriptions & In-App Purchases</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            SoberTracker may offer premium features through in-app purchases or subscriptions. We use RevenueCat to manage these transactions. When you make a purchase, the transaction is processed securely through Apple (App Store) or Google (Google Play Store), and RevenueCat helps us verify the purchase status.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            <strong>We do not collect, process, or store your credit card or financial payment details on our servers.</strong>
                        </p>
                    </section>

                    {/* Third Party Services */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We utilize the following third-party services that may collect information used to identify you or secure the application:
                        </p>
                        <ul className="space-y-2 text-gray-600 mb-4">
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2">•</span>
                                Google Play Services / Apple App Store (for App distribution and payments)
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2">•</span>
                                RevenueCat (for managing and verifying subscriptions and in-app purchases)
                            </li>
                        </ul>
                    </section>

                    {/* Security */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Lock size={24} className="text-teal-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Because your tracking data is stored locally on your device, the security of this data relies on your device's security measures (such as your screen lock, passcode, or biometric authentication). We recommend keeping your device secure to protect your personal information.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            If you have any questions or suggestions about our Privacy Policy, please contact us:
                        </p>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-gray-700">
                                <strong>Digitalsprout</strong><br />
                                Website: <a href="https://digitalsprout.org" className="text-teal-600 hover:underline">digitalsprout.org</a>
                            </p>
                        </div>
                    </section>

                    {/* Summary Box */}
                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mt-8">
                        <div className="flex items-center mb-3">
                            <Shield size={24} className="text-teal-600 mr-3" />
                            <h3 className="text-lg font-semibold text-teal-800">Privacy Summary</h3>
                        </div>
                        <p className="text-teal-700 font-medium">
                            SoberTracker respects your privacy. All your tracking data stays exclusively on your device. We use RevenueCat to manage premium purchases, and your payment info is securely handled strictly by Google and Apple. We do not require you to create an account on our servers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SoberTrackerPrivacyPolicy;
