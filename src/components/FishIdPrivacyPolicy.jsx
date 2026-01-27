import React from 'react';
import { Shield, ArrowLeft, Fish, Database, Lock, Eye, CloudLightning } from 'lucide-react';

const FishIdPrivacyPolicy = () => {
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
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center">
                            <Shield size={32} className="text-amber-400" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        FISHID: FISH IDENTIFIER
                    </p>
                    <p className="text-slate-400 mt-2">
                        Effective Date: January 27, 2026
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">

                    {/* Introduction */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Fish size={24} className="text-slate-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            FISHID: FISH IDENTIFIER ("FishID") is a utility app powered by artificial intelligence to help users identify fish.
                            We value your privacy and are committed to transparency regarding how your data, specifically images, are handled.
                        </p>
                    </section>

                    {/* Data Collection & Image Processing */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <CloudLightning size={24} className="text-slate-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">Image Processing & AI</h2>
                        </div>
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-4">
                            <div className="flex items-center mb-2">
                                <Eye size={20} className="text-amber-700 mr-2" />
                                <h3 className="text-lg font-semibold text-amber-900">How We Use Your Images</h3>
                            </div>
                            <p className="text-amber-800">
                                To provide identification services, the images you capture or upload are transmitted to our third-party AI provider,
                                <strong> Google Gemini AI</strong>. This is necessary for the AI to analyze the visual data and provide a result.
                            </p>
                            <p className="text-amber-800 mt-2">
                                Digitalsprout does not permanently store your images on our own servers. Images are used solely for the purpose of identification during your session.
                            </p>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Data We Collect:</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <strong>Images:</strong> Photos of fish you upload or capture are transmitted to Google Gemini for analysis.
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <strong>Usage Data:</strong> Anonymous usage data (such as successful identification counts) may be collected to improve app performance.
                            </li>
                        </ul>
                    </section>

                    {/* What We Don't Collect */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Database size={24} className="text-slate-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">What We Don't Collect</h2>
                        </div>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Personal identification information (name, email, phone number)
                            </li>
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Location data or GPS coordinates (unless you explicitly grant permission to tag your findings locally)
                            </li>
                        </ul>
                    </section>

                    {/* Third Party Services */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We use the following third-party services to operate the App:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <strong>Google Gemini AI:</strong> Used for image analysis and identification. By using this app, you acknowledge that your images are processed by Google's AI services in accordance with their privacy policies.
                            </li>
                        </ul>
                    </section>

                    {/* Security */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Lock size={24} className="text-slate-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            We implement reasonable security measures to protect your data during transmission. Images sent to the AI service are transmitted via secure protocols (HTTPS).
                        </p>
                    </section>

                    {/* Children's Privacy */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our app does not knowingly collect personal information from children under 13.
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

                    {/* Summary Box */}
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mt-8">
                        <div className="flex items-center mb-3">
                            <Shield size={24} className="text-slate-800 mr-3" />
                            <h3 className="text-lg font-semibold text-slate-800">Privacy Summary</h3>
                        </div>
                        <p className="text-slate-700 font-medium">
                            FishID uses Google Gemini AI to identify fish. Your images are sent to the AI for analysis but are not permanently stored by Digitalsprout.
                            We do not collect your personal contact info.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FishIdPrivacyPolicy;
