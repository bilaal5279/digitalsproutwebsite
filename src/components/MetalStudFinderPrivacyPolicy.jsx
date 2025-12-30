import React from 'react';
import { Shield, ArrowLeft, Smartphone, Database, Lock, Eye, FileText, Hammer } from 'lucide-react';

const MetalStudFinderPrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-md">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <a href="/" className="flex items-center text-gray-600 hover:text-slate-600 transition-colors">
                                <ArrowLeft size={20} className="mr-2" />
                                Back to Home
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-slate-600 to-gray-600"></div>
                            <div>
                                <span className="text-slate-700 font-bold text-xl">Digital</span>
                                <span className="text-gray-600 font-bold text-xl">sprout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <div className="bg-gradient-to-r from-slate-600 to-gray-700 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                            <Shield size={32} className="text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-xl text-slate-100 max-w-2xl mx-auto">
                        Metal Stud Finder
                    </p>
                    <p className="text-slate-200 mt-2">
                        Effective Date: December 30, 2025
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">

                    {/* Introduction */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Hammer size={24} className="text-slate-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Metal Stud Finder is a utility application designed to help you locate metal studs using your device's magnetometer.
                            We are committed to protecting your privacy and ensuring your usage data remains yours alone.
                            This privacy policy explains how we handle information in our app.
                        </p>
                    </section>

                    {/* Data Collection */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Database size={24} className="text-slate-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">Data Collection</h2>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-4">
                            <div className="flex items-center mb-2">
                                <Eye size={20} className="text-slate-600 mr-2" />
                                <h3 className="text-lg font-semibold text-slate-800">We Collect No Personal Data</h3>
                            </div>
                            <p className="text-slate-700">
                                Metal Stud Finder does not collect, store, or transmit any personal information, usage data, or sensor readings
                                to external servers or third parties.
                            </p>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 mb-3">What We Don't Collect:</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Your location or GPS data
                            </li>
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Sensor recordings or history
                            </li>
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Device identifiers or usage statistics
                            </li>
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Personal contact information
                            </li>
                        </ul>
                    </section>

                    {/* Local Storage */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Lock size={24} className="text-slate-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">Data Processing and Storage</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            All sensor data processing happens in real-time on your device:
                        </p>
                        <ul className="space-y-2 text-gray-600 mb-4">
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Magnetometer readings are processed locally to detect metal
                            </li>
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                No data is saved to permanent storage
                            </li>
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                No data is transmitted over the internet
                            </li>
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Completely under your control
                            </li>
                        </ul>
                    </section>

                    {/* Third Party Services */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Metal Stud Finder does not integrate with any third-party analytics platforms, advertising networks,
                            or external APIs that access your data.
                        </p>
                    </section>

                    {/* Data Security */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Since we don't collect or store any personal data remotely, there is no risk of a data breach on our servers impacting your information.
                            Your privacy relies on the security of your physical device.
                        </p>
                    </section>

                    {/* Children's Privacy */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our app is safe for users of all ages as we do not collect any personal information.
                        </p>
                    </section>

                    {/* Changes to Policy */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We may update this privacy policy from time to time. Any changes will be posted on this page with
                            an updated effective date.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            If you have any questions about this privacy policy or our app, please contact us:
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
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mt-8">
                        <div className="flex items-center mb-3">
                            <Shield size={24} className="text-slate-600 mr-3" />
                            <h3 className="text-lg font-semibold text-slate-800">Privacy Summary</h3>
                        </div>
                        <p className="text-slate-700 font-medium">
                            Metal Stud Finder is a standalone tool. We don't collect, store, or share any of your data.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MetalStudFinderPrivacyPolicy;
