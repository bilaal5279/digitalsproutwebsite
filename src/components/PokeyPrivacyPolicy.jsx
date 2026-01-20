import React from 'react';
import { Shield, ArrowLeft, Heart, Database, Lock, Eye } from 'lucide-react';

const PokeyPrivacyPolicy = () => {
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
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                            <Shield size={32} className="text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Pokey: TCG Portfolio
                    </p>
                    <p className="text-blue-200 mt-2">
                        Effective Date: January 20, 2026
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">

                    {/* Introduction */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Heart size={24} className="text-blue-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Pokey is a Pokemon TCG card portfolio application designed with your privacy as a top priority.
                            We use a server to provide card data, but we are committed to ensuring that your personal usage remains private.
                            This privacy policy explains our data practices.
                        </p>
                    </section>

                    {/* Data Collection */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Database size={24} className="text-blue-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">Data Collection</h2>
                        </div>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
                            <div className="flex items-center mb-2">
                                <Eye size={20} className="text-green-600 mr-2" />
                                <h3 className="text-lg font-semibold text-green-800">No Account Required</h3>
                            </div>
                            <p className="text-green-700">
                                Pokey does not require you to sign in or create an account. You can use all features of the app without providing any personal information.
                            </p>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 mb-3">What We Don't Collect:</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                Personal identification information (name, email, phone number)
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                Your card collection data (stored locally on your device)
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                Location data
                            </li>
                        </ul>
                    </section>

                    {/* Server Usage */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Database size={24} className="text-blue-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">Server Usage</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Our app communicates with a server solely to fetch card data (images, prices, details).
                        </p>
                        <ul className="space-y-2 text-gray-600 mb-4">
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                We do not send any user-specific data to the server.
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                Server logs may temporarily record IP addresses for security and performance monitoring, but these are not linked to user identities or collection data.
                            </li>
                        </ul>
                    </section>

                    {/* Third Party Services */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Pokey does not share your data with third-party advertisers or data brokers.
                        </p>
                    </section>

                    {/* Children's Privacy */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our app is safe for all ages. We do not knowingly collect personal information from children under 13.
                        </p>
                    </section>

                    {/* Changes to Policy */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We may update this privacy policy from time to time. Any changes will be posted on this page.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            If you have any questions about this privacy policy, please contact us:
                        </p>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-gray-700">
                                <strong>Digitalsprout</strong><br />
                                Email: info@digitalsprout.org<br />
                                Website: digitalsprout.org
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PokeyPrivacyPolicy;
