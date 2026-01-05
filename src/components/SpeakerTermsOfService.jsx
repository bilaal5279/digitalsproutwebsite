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
    Volume2,
} from "lucide-react";

const SpeakerTermsOfService = () => {
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
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                            <FileText size={32} className="text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        SPEAKER CLEANER - REMOVE WATER
                    </p>
                    <p className="text-blue-200 mt-2">
                        Effective Date: January 05, 2026
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">

                    {/* Introduction */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Smartphone size={24} className="text-blue-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Agreement to Terms
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            By downloading, installing, or using SPEAKER CLEANER - REMOVE WATER ("the App"), you
                            agree to be bound by these Terms of Service ("Terms"). If you do
                            not agree to these Terms, please do not use the App. These Terms
                            apply to all users of the App.
                        </p>
                    </section>

                    {/* App Description */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Scale size={24} className="text-blue-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                App Description
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            SPEAKER CLEANER - REMOVE WATER is a utility application that allows
                            users to:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                Play specific audio frequencies to help remove water from speakers
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                Test speaker functionality
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                Use without internet connection for core features
                            </li>
                        </ul>
                    </section>

                    {/* User Responsibilities */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Users size={24} className="text-blue-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                User Responsibilities
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            By using SPEAKER CLEANER, you agree to:
                        </p>
                        <ul className="space-y-2 text-gray-600 mb-4">
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                Use the App responsibly and at reasonable volume levels
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                Acknowledge that the app is a tool and effectiveness may vary based on hardware
                            </li>
                        </ul>
                    </section>

                    {/* Prohibited Uses */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <AlertTriangle size={24} className="text-blue-600 mr-3" />
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
                                Cause damage to audio equipment intentionally
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
                            <Shield size={24} className="text-blue-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Privacy and Data Security
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            SPEAKER CLEANER is designed with maximum privacy:
                        </p>
                        <ul className="space-y-2 text-gray-600 mb-4">
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✓</span>
                                No personal data is collected or stored by us
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✓</span>
                                All operations happen locally on your device
                            </li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed">
                            For detailed information about our privacy practices, please
                            review our
                            <a
                                href="/speaker/privacy-policy"
                                className="text-blue-600 hover:text-blue-700 underline ml-1"
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
                                <span className="text-blue-600 mr-2">•</span>
                                Damage to hardware (including speakers) resulting from misuse or high volume
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                Indirect, incidental, special, or consequential damages
                            </li>
                        </ul>
                    </section>

                    {/* Termination */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Clock size={24} className="text-blue-600 mr-3" />
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
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                        <div className="flex items-center mb-3">
                            <FileText size={24} className="text-blue-600 mr-3" />
                            <h3 className="text-lg font-semibold text-blue-800">
                                Terms Summary
                            </h3>
                        </div>
                        <p className="text-blue-700 font-medium">
                            Use SPEAKER CLEANER responsibly. We prioritize your privacy with local-only operations, but you are responsible for how you use the audio tools.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpeakerTermsOfService;
