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
} from "lucide-react";

const PokeyTermsOfService = () => {
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
                            <Smartphone size={24} className="text-blue-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Agreement to Terms
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            By downloading, installing, or using Pokey ("the App"), you
                            agree to be bound by these Terms of Service ("Terms"). If you do
                            not agree to these Terms, please do not use the App.
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
                            Pokey is a Pokemon TCG card portfolio application that allows users to:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                Browse and search for Pokemon Trading Card Game cards
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                Track your personal card collection
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                View market prices and card details
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
                            By using Pokey, you agree to:
                        </p>
                        <ul className="space-y-2 text-gray-600 mb-4">
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                Use the App for personal, non-commercial use
                            </li>
                        </ul>
                    </section>

                    {/* Disclaimer */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <AlertTriangle size={24} className="text-blue-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Disclaimer
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Pokey is an unofficial app and is not affiliated with, endorsed, sponsored, or specifically approved by Nintendo, The Pokemon Company, or Game Freak. All Pokemon attributes and associated trademarks are the property of their respective owners.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-2">
                            Card prices and data are provided for informational purposes only and we do not guarantee their accuracy.
                        </p>
                    </section>


                    {/* Privacy */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Shield size={24} className="text-blue-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Privacy Policy
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Your use of the App is also governed by our Privacy Policy. Please review our
                            <a
                                href="/pokey/privacy-policy"
                                className="text-blue-600 hover:text-blue-700 underline ml-1"
                            >
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </section>

                    {/* Termination */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Clock size={24} className="text-blue-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">Termination</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            You may stop using the App at any time by uninstalling it.
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
                </div>
            </div>
        </div>
    );
};

export default PokeyTermsOfService;
