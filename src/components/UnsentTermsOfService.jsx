import React from "react";
import {
    FileText,
    ArrowLeft,
    AlertTriangle,
    Scale,
    Shield,
    Activity,
} from "lucide-react";

const UnsentTermsOfService = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-md">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <a
                                href="/"
                                className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
                            >
                                <ArrowLeft size={20} className="mr-2" />
                                Back to Home
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-teal-600 to-purple-600"></div>
                            <div>
                                <span className="text-teal-700 font-bold text-xl">Digital</span>
                                <span className="text-purple-600 font-bold text-xl">
                                    sprout
                                </span>
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
                            <FileText size={32} className="text-amber-400" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        UNSENT: NO CONTACT TRACKER
                    </p>
                    <p className="text-slate-400 mt-2">
                        Effective Date: February 04, 2026
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">

                    {/* Disclaimer */}
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
                        <div className="flex items-center mb-3">
                            <Activity size={24} className="text-amber-600 mr-3" />
                            <h3 className="text-lg font-bold text-amber-800">
                                FOR ENTERTAINMENT AND SELF-HELP PURPOSES
                            </h3>
                        </div>
                        <p className="text-amber-700 text-sm leading-relaxed">
                            This app and its contents are for <strong>entertainment and self-help purposes only</strong>. It does not constitute professional psychological or medical advice.
                        </p>
                        <p className="text-amber-700 text-sm leading-relaxed mt-2">
                            <strong>IF YOU ARE IN CRISIS:</strong> Do not rely on this app. Seek immediate professional help or contact emergency services.
                        </p>
                    </div>

                    {/* Introduction */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Scale size={24} className="text-slate-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Agreement to Terms
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            By downloading or using UNSENT ("the App"), you agree to be bound by these Terms.
                            If you do not agree, strictly do not use the App.
                        </p>
                    </section>

                    {/* User Responsibility */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <AlertTriangle size={24} className="text-slate-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                User Responsibility
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            You are solely responsible for your use of the app and any actions you take based on it.
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">⚠</span>
                                You acknowledge that the "unsent" messages are stored locally and are not securely encrypted beyond standard device protections.
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">⚠</span>
                                You agree to use the app in a manner consistent with all applicable laws and regulations.
                            </li>
                        </ul>
                    </section>

                    {/* Limitation of Liability */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Shield size={24} className="text-slate-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Limitation of Liability
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            To the fullest extent permitted by law, Digitalsprout and its creators shall NOT be liable for any:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Emotional distress or mental health issues.
                            </li>
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Relationship outcomes.
                            </li>
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Direct, indirect, incidental, or consequential damages.
                            </li>
                        </ul>
                    </section>

                    {/* Contact Information */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Contact Information
                        </h2>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-gray-700">
                                <strong>Digitalsprout</strong>
                                <br />
                                Email: info@digitalsprout.org
                            </p>
                        </div>
                    </section>

                    {/* Summary Box */}
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mt-8">
                        <div className="flex items-center mb-3">
                            <FileText size={24} className="text-slate-800 mr-3" />
                            <h3 className="text-lg font-semibold text-slate-800">
                                Terms Summary
                            </h3>
                        </div>
                        <p className="text-slate-700 font-medium">
                            UNSENT is a self-help tool. It is not a substitute for professional therapy. <strong>You use it at your own risk.</strong>
                            We are not responsible for your emotional well-being or relationship outcomes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnsentTermsOfService;
