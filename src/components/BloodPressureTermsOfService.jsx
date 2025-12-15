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
    Heart,
    Activity,
} from "lucide-react";

const BloodPressureTermsOfService = () => {
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
            <div className="bg-gradient-to-r from-red-600 to-red-700 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                            <FileText size={32} className="text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-xl text-red-100 max-w-2xl mx-auto">
                        BLOOD PRESSURE: HEALTH LOG
                    </p>
                    <p className="text-red-200 mt-2">
                        Effective Date: December 14, 2025
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">

                    {/* Medical Disclaimer - Prominent */}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                        <div className="flex items-center mb-3">
                            <Activity size={24} className="text-red-600 mr-3" />
                            <h3 className="text-lg font-bold text-red-800">
                                MEDICAL DISCLAIMER
                            </h3>
                        </div>
                        <p className="text-red-700 font-medium mb-2">
                            THIS APP DOES NOT PROVIDE MEDICAL ADVICE.
                        </p>
                        <p className="text-red-700 text-sm leading-relaxed">
                            The information, including but not limited to, text, graphics, images and other material contained on this application are for informational purposes only. No material on this application is intended to be a substitute for professional medical advice, diagnosis or treatment. Always seek the advice of your physician or other qualified health care provider with any questions you may have regarding a medical condition or treatment and before undertaking a new health care regimen, and never disregard professional medical advice or delay in seeking it because of something you have read on this application.
                        </p>
                    </div>

                    {/* Introduction */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Smartphone size={24} className="text-red-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Agreement to Terms
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            By downloading, installing, or using BLOOD PRESSURE: HEALTH LOG ("the App"), you
                            agree to be bound by these Terms of Service ("Terms"). If you do
                            not agree to these Terms, please do not use the App. These Terms
                            apply to all users of the App.
                        </p>
                    </section>

                    {/* App Description */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Scale size={24} className="text-red-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                App Description
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            BLOOD PRESSURE: HEALTH LOG is a health utility application that allows
                            users to:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">•</span>
                                Log blood pressure readings
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">•</span>
                                Track heart rate data
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">•</span>
                                View simple statistics and trends
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">•</span>
                                Store all data locally on the device
                            </li>
                        </ul>
                    </section>

                    {/* User Responsibilities */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Users size={24} className="text-red-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                User Responsibilities
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            By using BLOOD PRESSURE: HEALTH LOG, you agree to:
                        </p>
                        <ul className="space-y-2 text-gray-600 mb-4">
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">•</span>
                                Use the App only for lawful purposes
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">•</span>
                                Accurate data entry for your own personal tracking
                            </li>
                        </ul>
                    </section>

                    {/* Prohibited Uses */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <AlertTriangle size={24} className="text-red-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Prohibited Uses
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            You may not use the App to:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">✗</span>
                                Process illegal or prohibited content
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">✗</span>
                                Attempt to reverse engineer, modify, or tamper with the App
                            </li>
                        </ul>
                    </section>

                    {/* Privacy and Data */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Shield size={24} className="text-red-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Privacy and Data Security
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            BLOOD PRESSURE: HEALTH LOG is designed with maximum privacy:
                        </p>
                        <ul className="space-y-2 text-gray-600 mb-4">
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✓</span>
                                No personal data is collected or stored by us
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✓</span>
                                All health data is stored locally on your device
                            </li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed">
                            For detailed information about our privacy practices, please
                            review our
                            <a
                                href="/bp/privacypolicy"
                                className="text-red-600 hover:text-red-700 underline ml-1"
                            >
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </section>

                    {/* Limitation of Liability */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Limitation of Liability
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            To the fullest extent permitted by law, Digitalsprout shall not be liable for any:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">•</span>
                                Indirect, incidental, special, or consequential damages
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">•</span>
                                Health complications resulting from reliance on the app
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">•</span>
                                Loss of data
                            </li>
                        </ul>
                    </section>

                    {/* Termination */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Clock size={24} className="text-red-600 mr-3" />
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
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-8">
                        <div className="flex items-center mb-3">
                            <FileText size={24} className="text-red-600 mr-3" />
                            <h3 className="text-lg font-semibold text-red-800">
                                Terms Summary
                            </h3>
                        </div>
                        <p className="text-red-700 font-medium">
                            Use BLOOD PRESSURE: HEALTH LOG for personal tracking only. It is not a medical device.
                            We prioritize your privacy with local-only storage, but you are responsible for your own health decisions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BloodPressureTermsOfService;
