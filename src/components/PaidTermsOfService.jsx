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

const PaidTermsOfService = () => {
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
                        Paid - Easy Invoice Maker
                    </p>
                    <p className="text-blue-200 mt-2">
                        Effective Date: December 11, 2025
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
                            By downloading, installing, or using Paid - Easy Invoice Maker ("the App"), you
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
                            Paid is an invoice generation tool that allows users to:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                Create and manage professional invoices
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                Generate PDF documents for business use
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                Manage client and item lists locally on device
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
                            By using Paid, you agree to:
                        </p>
                        <ul className="space-y-2 text-gray-600 mb-4">
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                Ensure accuracy of all invoice data entered
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                Maintain backups of your important data, as the app operates locally
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                Use the generated documents for lawful business purposes only
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
                                Since all data is stored locally on your device, you are solely responsible for backing up your invoices and data. We cannot recover lost data if you uninstall the app or lose your device.
                            </p>
                        </div>
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
                            You may not use Paid to:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">✗</span>
                                Create fraudulent or misleading invoices
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">✗</span>
                                Engage in illegal financial activities
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">✗</span>
                                Violate any applicable tax or business laws
                            </li>
                        </ul>
                    </section>

                    {/* Privacy and Data */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Shield size={24} className="text-blue-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Privacy and Data
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Paid is designed with privacy as a core principle:
                        </p>
                        <ul className="space-y-2 text-gray-600 mb-4">
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✓</span>
                                No personal data is collected or stored by us
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✓</span>
                                All operations are performed locally on your device
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✓</span>
                                Your financial data never leaves your control
                            </li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed">
                            For detailed information about our privacy practices, please
                            review our
                            <a
                                href="/paid/privacy-policy"
                                className="text-blue-600 hover:text-blue-700 underline ml-1"
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
                                    No Professional Advice
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    The invoices generated by this App are templates. We do not provide accounting, tax, or legal advice. Ensure your invoices comply with your local regulations.
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
                                <span className="text-blue-600 mr-2">•</span>
                                Data loss due to device failure or app uninstallation
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                Indirect, incidental, special, or consequential damages
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                Loss of profits or business interruptions
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
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                        <div className="flex items-center mb-3">
                            <FileCheck size={24} className="text-blue-600 mr-3" />
                            <h3 className="text-lg font-semibold text-blue-800">
                                Terms Summary
                            </h3>
                        </div>
                        <p className="text-blue-700 font-medium">
                            Paid allows you to create invoices easily with zero data collection.
                            Your data is your responsibility as it lives 100% on your device.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaidTermsOfService;
