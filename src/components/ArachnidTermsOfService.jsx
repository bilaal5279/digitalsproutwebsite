import React from "react";
import {
    FileText,
    ArrowLeft,
    AlertTriangle,
    Scale,
    Shield,
    Activity,
    Bug, // Using Bug as a proxy for Spider if Spider isn't available, or just Bug
    Skull,
} from "lucide-react";

const ArachnidTermsOfService = () => {
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
                        ARACHNID: SPIDER IDENTIFIER
                    </p>
                    <p className="text-slate-400 mt-2">
                        Effective Date: December 31, 2025
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">

                    {/* CRITICAL SAFETY DISCLAIMER */}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8 border-l-4 border-l-red-600">
                        <div className="flex items-center mb-3">
                            <Skull size={24} className="text-red-600 mr-3" />
                            <h3 className="text-lg font-bold text-red-800">
                                CRITICAL SAFETY WARNING - READ CAREFULLY
                            </h3>
                        </div>
                        <p className="text-red-700 font-bold mb-2 uppercase">
                            DO NOT TOUCH OR HANDLE SPIDERS BASED ON THIS APP.
                        </p>
                        <p className="text-red-700 text-sm leading-relaxed mb-3">
                            Artificial Intelligence is NOT infallible. The identification provided by Arachnid is a <strong>prediction based on probabilities</strong> and can be incorrect. Harmless spiders often look similar to highly venomous ones.
                        </p>
                        <p className="text-red-700 text-sm leading-relaxed">
                            <strong>ALWAYS assume a spider is dangerous unless confirmed by a professional expert.</strong> We are strictly not liable for any bites, stings, allergic reactions, injuries, or damages resulting from your interaction with any creature.
                        </p>
                    </div>

                    {/* Medical Disclaimer */}
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
                        <div className="flex items-center mb-3">
                            <Activity size={24} className="text-amber-600 mr-3" />
                            <h3 className="text-lg font-bold text-amber-800">
                                NO MEDICAL ADVICE
                            </h3>
                        </div>
                        <p className="text-amber-700 text-sm leading-relaxed">
                            This app and its contents are for <strong>informational purposes only</strong>. It does not constitute medical advice, diagnosis, or treatment.
                        </p>
                        <p className="text-amber-700 text-sm leading-relaxed mt-2">
                            <strong>IF YOU ARE BITTEN:</strong> Do not rely on this app for a diagnosis. Seek immediate professional medical attention.
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
                            By downloading or using ARACHNID ("the App"), you agree to be bound by these Terms.
                            If you do not agree, strictly do not use the App.
                        </p>
                    </section>

                    {/* Accuracy of AI */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <AlertTriangle size={24} className="text-slate-800 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Accuracy of AI Identification
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We use advanced AI (Google Gemini) to identify spiders, but <strong>no AI is 100% accurate</strong>. Identifications may be wrong due to poor lighting, blur, unique angles, or similar-looking species.
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">⚠</span>
                                You acknowledge that results are suggestions, not facts.
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">⚠</span>
                                You agree not to rely on the App for situations where safety is at risk.
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
                                Personal injury, bites, stings, or death resulting from interactions with wildlife.
                            </li>
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Misidentification of species.
                            </li>
                            <li className="flex items-start">
                                <span className="text-slate-600 mr-2">•</span>
                                Direct, indirect, incidental, or consequential damages.
                            </li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mt-4 font-semibold">
                            BY USING THIS APP, YOU WAIVE YOUR RIGHT TO SUE DIGITALSPROUT FOR ANY INJURIES RELATED TO THE USE OF THE APP.
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
                                Terms Summary
                            </h3>
                        </div>
                        <p className="text-slate-700 font-medium">
                            Arachnid is an informational tool. It is not a safety device or a doctor. <strong>You use it at your own risk.</strong>
                            We are not responsible if you get bitten. Stay safe and always consult professional pest control or medical experts.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArachnidTermsOfService;
