import React from "react";
import {
    FileText,
    ArrowLeft,
    Smartphone,
    AlertTriangle,
    Scale,
    Users,
    Clock,
    Shield,
    FileCheck,
} from "lucide-react";

const PocketWealthTermsOfService = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-md">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <a
                                href="/"
                                className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors"
                            >
                                <ArrowLeft size={20} className="mr-2" />
                                Back to Home
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-emerald-600 to-green-600"></div>
                            <div>
                                <span className="text-emerald-700 font-bold text-xl">Digital</span>
                                <span className="text-green-600 font-bold text-xl">
                                    sprout
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                            <FileText size={32} className="text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
                        PocketWealth Budget Tracker
                    </p>
                    <p className="text-emerald-200 mt-2">
                        Effective Date: December 20, 2025
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                    {/* Introduction */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Smartphone size={24} className="text-emerald-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Agreement to Terms
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            By downloading, installing, or using PocketWealth Budget Tracker ("the App"), you
                            agree to be bound by these Terms of Service ("Terms"). If you do
                            not agree to these Terms, please do not use the App. These Terms
                            apply to all users of the App.
                        </p>
                    </section>

                    {/* App Description */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Scale size={24} className="text-emerald-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                App Description
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            PocketWealth is a personal finance management tool that allows users to:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-emerald-600 mr-2">•</span>
                                Track income and expenses
                            </li>
                            <li className="flex items-start">
                                <span className="text-emerald-600 mr-2">•</span>
                                Manage budgets and financial goals
                            </li>
                            <li className="flex items-start">
                                <span className="text-emerald-600 mr-2">•</span>
                                Analyze spending habits locally on their device
                            </li>
                        </ul>
                    </section>

                    {/* User Responsibilities */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Users size={24} className="text-emerald-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                User Responsibilities
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            By using PocketWealth, you agree to:
                        </p>
                        <ul className="space-y-2 text-gray-600 mb-4">
                            <li className="flex items-start">
                                <span className="text-emerald-600 mr-2">•</span>
                                Accurately record your financial transactions
                            </li>
                            <li className="flex items-start">
                                <span className="text-emerald-600 mr-2">•</span>
                                Maintain backups of your data, as the app operates locally
                            </li>
                            <li className="flex items-start">
                                <span className="text-emerald-600 mr-2">•</span>
                                Secure your device against unauthorized access to your financial data
                            </li>
                        </ul>

                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                            <div className="flex items-center mb-2">
                                <AlertTriangle size={20} className="text-amber-600 mr-2" />
                                <h3 className="text-lg font-semibold text-amber-800">
                                    Data Responsibility
                                </h3>
                            </div>
                            <p className="text-amber-700">
                                Since all data is stored locally on your device, you are solely responsible for backing up your budget data. We cannot recover lost data if you uninstall the app or lose your device.
                            </p>
                        </div>
                    </section>

                    {/* Prohibited Uses */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <AlertTriangle size={24} className="text-emerald-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Prohibited Uses
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            You may not use PocketWealth to:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">✗</span>
                                Engage in unlawful financial activities
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">✗</span>
                                Attempt to reverse engineer the application
                            </li>
                        </ul>
                    </section>

                    {/* Privacy and Data */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Shield size={24} className="text-emerald-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Privacy and Data
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            PocketWealth is designed with privacy as a core principle:
                        </p>
                        <ul className="space-y-2 text-gray-600 mb-4">
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✓</span>
                                No personal or financial data is collected by us
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✓</span>
                                All operations are performed locally on your device
                            </li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed">
                            For detailed information about our privacy practices, please
                            review our
                            <a
                                href="/pocketwealth/privacy-policy"
                                className="text-emerald-600 hover:text-emerald-700 underline ml-1"
                            >
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </section>

                    {/* Disclaimers */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Disclaimers
                        </h2>
                        <div className="space-y-4">
                            <div className="border border-gray-200 rounded-lg p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">
                                    No Financial Advice
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    PocketWealth is a tool for tracking and visualization only. We do not provide financial, investment, or tax advice. Decisions made based on the app's data are your own responsibility.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Limitation of Liability */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Limitation of Liability
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            To the fullest extent permitted by law, Digitalsprout and its
                            affiliates shall not be liable for any:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-emerald-600 mr-2">•</span>
                                Data loss due to device failure or app uninstallation
                            </li>
                            <li className="flex items-start">
                                <span className="text-emerald-600 mr-2">•</span>
                                Indirect, incidental, or consequential damages arising from use of the App
                            </li>
                        </ul>
                    </section>

                    {/* Termination */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Clock size={24} className="text-emerald-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">Termination</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            You may stop using the App at any time by uninstalling it from
                            your device.
                        </p>
                    </section>

                    {/* Changes to Terms */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Changes to Terms
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            We may update these Terms from time to time. Any changes will be
                            posted on this page with an updated effective date.
                        </p>
                    </section>

                    {/* Governing Law */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Governing Law
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            These Terms are governed by and construed in accordance with the
                            laws of the United Kingdom.
                        </p>
                    </section>

                    {/* Contact Information */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Contact Information
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            If you have any questions about these Terms of Service, please
                            contact us:
                        </p>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-gray-700">
                                <strong>Digitalsprout</strong>
                                <br />
                                Email: info@digitalsprout.org
                                <br />
                                Website: digitalsprout.org
                            </p>
                        </div>
                    </section>

                    {/* Summary Box */}
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mt-8">
                        <div className="flex items-center mb-3">
                            <FileCheck size={24} className="text-emerald-600 mr-3" />
                            <h3 className="text-lg font-semibold text-emerald-800">
                                Terms Summary
                            </h3>
                        </div>
                        <p className="text-emerald-700 font-medium">
                            PocketWealth allows you to track your budget with zero data collection.
                            Your financial data is your responsibility as it lives 100% on your device.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PocketWealthTermsOfService;
