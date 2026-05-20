import React from "react";
import {
    FileText,
    ArrowLeft,
    AlertTriangle,
    Scale,
    Shield,
    Activity,
    Heart,
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
                        End User License Agreement (EULA)
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
                            This app and its contents, including interactions with our AI assistant <strong>Sage</strong>, are for <strong>entertainment and self-help purposes only</strong>. It does not constitute professional psychological or medical advice, diagnosis, or treatment.
                        </p>
                        <p className="text-amber-700 text-sm leading-relaxed mt-2">
                            <strong>IF YOU ARE IN CRISIS:</strong> Do not rely on this app or Sage. Seek immediate professional help from a licensed therapist or contact emergency services (e.g., 988 in the US/Canada or your local emergency number).
                        </p>
                    </div>

                    {/* Agreement to Terms */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Scale size={24} className="text-slate-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                License Agreement
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            By downloading, installing, or using UNSENT ("the App") and interacting with <strong>Sage AI</strong>, you agree to be bound by this End User License Agreement (EULA).
                            If you do not agree to these terms, do not install or use the App.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            This EULA is a legal agreement between you (the end user) and Digitalsprout (the licensor) for the use of the UNSENT mobile application.
                        </p>
                    </section>

                    {/* License Grant */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <FileText size={24} className="text-slate-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                License Grant
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Subject to your compliance with this EULA, Digitalsprout grants you a limited, non-exclusive, non-transferable, revocable license to:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Download, install, and use the App on devices you own or control.
                            </li>
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Access and use the App's features for personal, non-commercial purposes only.
                            </li>
                        </ul>
                    </section>

                    {/* Subscription Terms */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Activity size={24} className="text-slate-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Auto-Renewable Subscription Terms
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            UNSENT offers auto-renewable subscription purchases for premium features:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <strong>Payment:</strong> Payment will be charged to your Apple ID account at confirmation of purchase.
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <strong>Auto-Renewal:</strong> Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period.
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <strong>Renewal Charges:</strong> Your account will be charged for renewal within 24 hours prior to the end of the current period at the same price.
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <strong>Managing Subscriptions:</strong> You can manage and cancel subscriptions by going to your App Store account settings after purchase.
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <strong>No Refunds:</strong> No refunds will be provided for any unused portion of a subscription period.
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <strong>Free Trial:</strong> If a free trial is offered, any unused portion will be forfeited when you purchase a subscription.
                            </li>
                        </ul>
                    </section>

                    {/* Restrictions */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <AlertTriangle size={24} className="text-slate-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                License Restrictions
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            You agree NOT to:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✗</span>
                                Copy, modify, or create derivative works of the App.
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✗</span>
                                Reverse engineer, decompile, or disassemble the App.
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✗</span>
                                Rent, lease, lend, sell, redistribute, or sublicense the App.
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✗</span>
                                Remove, alter, or obscure any proprietary notices on the App.
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✗</span>
                                Use the App for any illegal or unauthorized purpose.
                            </li>
                        </ul>
                    </section>

                    {/* Sage AI Terms */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Heart size={24} className="text-slate-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Sage AI Assistant
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Sage is an artificial intelligence assistant powered by OpenAI's ChatGPT. By using Sage, you acknowledge and agree to the following:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <strong>Not a Human:</strong> Sage is not a human, not a therapist, and not a medical professional.
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <strong>AI Limitations:</strong> AI can make mistakes, provide inaccurate information, or generate inappropriate content. You should not rely on Sage for critical life decisions.
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <strong>Data Processing:</strong> Your messages to Sage are processed by OpenAI. Do not share highly sensitive personal identification information (SSNs, bank details, etc.) in your chats.
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <strong>Supportive Only:</strong> Sage is designed to provide empathetic support for breakup recovery, but its suggestions should be used at your own discretion.
                            </li>
                        </ul>
                    </section>

                    {/* Prohibited Content and Conduct */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <AlertTriangle size={24} className="text-red-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Prohibited Content and Conduct
                            </h2>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
                            <p className="text-red-800 font-bold mb-2">
                                ZERO TOLERANCE POLICY
                            </p>
                            <p className="text-red-700 text-sm leading-relaxed">
                                Digitalsprout has ZERO TOLERANCE for objectionable content or abusive users. Violation of these terms will result in immediate termination of your account and access to the App without refund.
                            </p>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            When using UNSENT, especially in community forums, you agree that you will NOT post, share, or transmit any content that:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✗</span>
                                <strong>Harassment or Abuse:</strong> Harasses, bullies, threatens, intimidates, or abuses any person or group.
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✗</span>
                                <strong>Hate Speech:</strong> Promotes hatred, violence, or discrimination based on race, ethnicity, religion, gender, sexual orientation, disability, or any other protected characteristic.
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✗</span>
                                <strong>Sexual or Explicit Content:</strong> Contains pornography, sexually explicit material, or sexual solicitation.
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✗</span>
                                <strong>Violence or Harm:</strong> Depicts, promotes, or encourages violence, self-harm, suicide, or harm to others.
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✗</span>
                                <strong>Illegal Activity:</strong> Promotes or facilitates illegal activities, including drug use, terrorism, or criminal behavior.
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✗</span>
                                <strong>Child Safety:</strong> Exploits, sexualizes, or endangers minors in any way.
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✗</span>
                                <strong>Spam or Scams:</strong> Contains spam, phishing attempts, scams, or fraudulent content.
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✗</span>
                                <strong>Privacy Violations:</strong> Shares private information of others without consent (doxxing).
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✗</span>
                                <strong>Misinformation:</strong> Spreads dangerous misinformation that could cause harm.
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">✗</span>
                                <strong>Impersonation:</strong> Impersonates another person, organization, or entity.
                            </li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            <strong>Enforcement:</strong> We reserve the right to remove any content and terminate any user account that violates these terms. We may also report illegal activity to law enforcement authorities.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-2">
                            <strong>Reporting:</strong> If you encounter objectionable content or abusive behavior, please report it immediately to info@digitalsprout.org.
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
                            You are solely responsible for your use of the app and any actions you take based on it or the AI's suggestions.
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">⚠</span>
                                You acknowledge that "unsent" messages and chat history are stored locally and are not securely encrypted beyond standard device protections.
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">⚠</span>
                                You agree to use the app in a manner consistent with all applicable laws and regulations.
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">⚠</span>
                                When participating in community forums, you acknowledge that your posts and interactions are stored on Firebase/Firestore/Realtime Database servers and may be visible to other users.
                            </li>
                        </ul>
                    </section>

                    {/* Third-Party Services */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Shield size={24} className="text-slate-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Third-Party Services
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            The app uses Firebase, Firestore, and Firebase Realtime Database (provided by Google) to power community forums. By using the community forums feature, you agree to:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Have your forum posts, comments, and interactions stored on Google's Firebase servers.
                            </li>
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Comply with Google's Terms of Service and Firebase's Acceptable Use Policy.
                            </li>
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Not post content that violates community guidelines or applicable laws.
                            </li>
                        </ul>
                    </section>

                    {/* Warranty Disclaimer */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <AlertTriangle size={24} className="text-slate-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Warranty Disclaimer
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                            </li>
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                That the App will be uninterrupted, error-free, or secure.
                            </li>
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                That defects will be corrected or that the App is free of viruses or harmful components.
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
                            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL DIGITALSPROUT BE LIABLE FOR ANY:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Emotional distress, mental health issues, or physical harm.
                            </li>
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Actions taken based on Sage AI's advice or suggestions.
                            </li>
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Relationship outcomes or social consequences.
                            </li>
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Direct, indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the App.
                            </li>
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Loss of profits, data, or other intangible losses.
                            </li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability, so the above limitations may not apply to you.
                        </p>
                    </section>

                    {/* Termination */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <AlertTriangle size={24} className="text-slate-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Termination
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            This license is effective until terminated. Your rights under this license will terminate automatically without notice if you fail to comply with any term of this EULA. Upon termination:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                You must cease all use of the App and delete all copies from your devices.
                            </li>
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Termination does not entitle you to a refund of any subscription fees.
                            </li>
                        </ul>
                    </section>

                    {/* Governing Law */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Scale size={24} className="text-slate-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Governing Law
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            This EULA shall be governed by and construed in accordance with the laws of the jurisdiction in which Digitalsprout operates, without regard to its conflict of law provisions. Any disputes arising from this EULA shall be resolved in the courts of that jurisdiction.
                        </p>
                    </section>

                    {/* Changes to EULA */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <FileText size={24} className="text-slate-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Changes to This EULA
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Digitalsprout reserves the right to modify this EULA at any time. Changes will be effective immediately upon posting. Your continued use of the App after changes constitutes acceptance of the modified EULA.
                        </p>
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
                                EULA Summary
                            </h3>
                        </div>
                        <p className="text-slate-700 font-medium">
                            By using UNSENT, you agree to this license agreement. UNSENT is a self-help tool, not a substitute for professional therapy. <strong>You use it at your own risk.</strong>
                            Subscriptions auto-renew unless cancelled 24 hours before renewal. We are not responsible for your emotional well-being or relationship outcomes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnsentTermsOfService;
