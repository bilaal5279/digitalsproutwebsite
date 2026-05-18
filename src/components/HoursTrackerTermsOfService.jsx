import React from "react";
import {
    FileText,
    ArrowLeft,
    Scale,
    Shield,
    Clock,
    AlertCircle,
    Download,
} from "lucide-react";

const HoursTrackerTermsOfService = () => {
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
            <div className="bg-gradient-to-r from-teal-800 to-teal-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center">
                            <FileText size={32} className="text-teal-400" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Terms of Service
                    </h1>
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

                    {/* Disclaimer */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 border-l-4 border-l-blue-600">
                        <div className="flex items-center mb-3">
                            <AlertCircle size={24} className="text-blue-600 mr-3" />
                            <h3 className="text-lg font-bold text-blue-800">
                                Usage Disclaimer
                            </h3>
                        </div>
                        <p className="text-blue-700 text-sm leading-relaxed">
                            Hours Tracker: Clock In is a tool to assist with time management and record-keeping. It is <strong>your responsibility</strong> to ensure the accuracy of the logs for billing, payroll, or legal purposes. We are not responsible for any financial discrepancies or disputes between you and your employer/clients.
                        </p>
                    </div>

                    {/* Introduction */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Scale size={24} className="text-teal-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                1. Agreement to Terms
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            By downloading, installing, or using Hours Tracker: Clock In ("the App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the App.
                        </p>
                    </section>

                    {/* License and Use */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Clock size={24} className="text-teal-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                2. License and Subscriptions
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We grant you a personal, non-exclusive license to use the App. Some features may require a premium subscription.
                        </p>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Payments & Subscriptions:</h3>
                        <ul className="space-y-2 text-gray-600 mb-4">
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2">•</span>
                                <div>
                                    <strong>Processing:</strong> Payments are handled by the Apple App Store or Google Play Store. We use <strong>RevenueCat</strong> to manage subscription status.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2">•</span>
                                <div>
                                    <strong>Renewal:</strong> Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2">•</span>
                                <div>
                                    <strong>Refunds:</strong> All billing and refund requests must be directed to the respective App Store.
                                </div>
                            </li>
                        </ul>

                        <p className="text-gray-600 leading-relaxed font-semibold">
                            You agree not to:
                        </p>
                        <ul className="space-y-2 text-gray-600 mt-2">
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2">•</span>
                                Modify, reverse engineer, or attempt to extract the source code of the App.
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2">•</span>
                                Use the App for any illegal or unauthorized purpose.
                            </li>
                        </ul>
                    </section>

                    {/* Data Ownership */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Download size={24} className="text-teal-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                3. Data and Exports
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            All data entered into the App is stored locally on your device. We do not back up your data to our servers.
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2">•</span>
                                <strong>Backup:</strong> You are solely responsible for backing up your data and exports.
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2">•</span>
                                <strong>Loss of Data:</strong> We are not liable for any loss of data caused by app deletion, device failure, or software bugs.
                            </li>
                        </ul>
                    </section>

                    {/* Limitation of Liability */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Shield size={24} className="text-teal-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                4. Limitation of Liability
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            To the maximum extent permitted by law, Digitalsprout shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use, arising out of your use of the App.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            The App is provided "as is" and "as available" without warranties of any kind, either express or implied.
                        </p>
                    </section>

                    {/* Contact Information */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            5. Contact Information
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
                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mt-8">
                        <div className="flex items-center mb-3">
                            <FileText size={24} className="text-teal-800 mr-3" />
                            <h3 className="text-lg font-semibold text-teal-800">
                                Terms Summary
                            </h3>
                        </div>
                        <p className="text-teal-700 font-medium">
                            Hours Tracker: Clock In is a local tool for your convenience. You are responsible for your own data and the accuracy of your logs. We provide the tool "as is" and are not liable for data loss or financial disputes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HoursTrackerTermsOfService;
