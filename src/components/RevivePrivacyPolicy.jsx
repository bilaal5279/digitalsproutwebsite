import React from 'react';
import { Shield, ArrowLeft, Heart, Database, Lock, Eye, Camera, Image } from 'lucide-react';

const RevivePrivacyPolicy = () => {
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
                        REVIVE AI: PHOTO RESTORATION
                    </p>
                    <p className="text-teal-200 mt-2">
                        Effective Date: March 28, 2026
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
                            Welcome to Revive AI, an application developed by Digital Sprout ("we," "us," or "our"). We are committed to protecting your privacy while providing you with our AI-powered photo restoration services. This Privacy Policy explains how your information is collected, used, and protected when you use the Revive AI mobile application (the "App").
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
                                <Image size={20} className="text-teal-600 mr-2" />
                                <h3 className="text-lg font-semibold text-teal-800">Your Photos are Secure</h3>
                            </div>
                            <p className="text-teal-700">
                                User photos are temporarily uploaded to our secure servers (utilizing Firebase Storage and Functions) strictly to provide the AI photo restoration service. Your images are processed securely and are never used for any other purpose, such as training third-party models or marketing, without your explicit consent.
                            </p>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Categories:</h3>
                        <ul className="space-y-4 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2 mt-1">•</span>
                                <div>
                                    <strong>Personal Information:</strong> To provide you with a personalized experience, we collect certain personal information when you create an account. We use Firebase Authentication to manage user accounts, which collects data such as your email address and a unique User ID.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2 mt-1">•</span>
                                <div>
                                    <strong>User Content (Photos):</strong> When using the App, you may upload old, torn, faded, or damaged photos to be restored.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2 mt-1">•</span>
                                <div>
                                    <strong>Usage and Performance Data:</strong> We use Firebase Analytics and Crashlytics to gather minimal, anonymized app performance tracking data. This helps us understand how the App is used, identify crashes, and improve the overall user experience.
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* Device Permissions */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Camera size={24} className="text-teal-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">Device Permissions</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            To fully utilize Revive AI, the App requires specific device permissions:
                        </p>
                        <ul className="space-y-2 text-gray-600 mb-4">
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2">•</span>
                                <strong>Camera Access:</strong> We request access to your device's camera to allow you to take pictures of physical, old photos directly within the App.
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2">•</span>
                                <strong>Photo Library Access (Read & Write):</strong> We require "Read" access to allow you to select existing photos from your device's gallery for restoration. We require "Write" access to save the fully restored, high-quality photos directly back to your device's camera roll.
                            </li>
                        </ul>
                    </section>
                    
                    {/* Subscriptions and In-App Purchases */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscriptions & In-App Purchases</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Revive AI operates on a freemium model, offering a set number of "Free Tries" and an optional premium upgrade called <span className="font-semibold text-teal-600">Revive Pro</span>. When you purchase Revive Pro (via in-app purchases or subscriptions for unlimited use and priority processing), the transaction is processed securely through Apple (App Store) or Google (Google Play Store). 
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
                                Firebase Authentication (for login and account security)
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2">•</span>
                                Firebase Storage and Functions (for secure photo processing)
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2">•</span>
                                Firebase Analytics and Crashlytics (for app performance and troubleshooting)
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
                            We implement industry-standard security measures to protect your personal information and user content. Photos undergoing processing are transmitted over secure connections and temporarily stored only for the duration needed to deliver the restored outcome.
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
                            Revive AI respects your privacy. We require Camera and Photo Library permissions solely to access the images you wish to restore and save the results back to your device. Images are temporarily processed securely by our Firebase services and immediately discarded, and your payment info is securely handled strictly by Google and Apple.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RevivePrivacyPolicy;
