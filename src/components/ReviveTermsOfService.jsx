import React from 'react';
import { Shield, ArrowLeft, Heart, Database, Lock, Eye, Camera, CheckSquare, Zap } from 'lucide-react';

const ReviveTermsOfService = () => {
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
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                            <Shield size={32} className="text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
                    <p className="text-xl text-teal-100 max-w-2xl mx-auto">
                        REVIVE AI: PHOTO RESTORATION
                    </p>
                    <p className="text-teal-200 mt-2">
                        Effective Date: March 28, 2026
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">

                    {/* Description of Service */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Heart size={24} className="text-teal-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">1. Description of Service</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Welcome to Revive AI ("the App"), developed by Digital Sprout ("we," "us," or "our"). By downloading, accessing, or using Revive AI, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Revive AI is an AI-powered photo restoration tool. The App allows users to upload old, torn, faded, or damaged photos, which are then processed by artificial intelligence algorithms to restore them to crisp, vibrant, modern quality.
                        </p>
                    </section>

                    {/* Accounts and Monetization */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Database size={24} className="text-teal-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">2. Accounts and Monetization (Freemium Model)</h2>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">A. Account Creation</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            To use certain features of the App, you must register for an account using <strong>Firebase Authentication</strong>. You agree to provide accurate, current, and complete information during the registration process. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2">B. Free Tries and Revive Pro</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Revive AI operates on a <strong>freemium</strong> model. Upon creating an account, users are granted a set amount of "Free Tries" (credits) to use our restoration service. Users have the option to upgrade to <strong>Revive Pro</strong> through in-app purchases or a recurring subscription. Upgrading to Revive Pro grants you unlimited restorations and priority AI processing. Pricing and billing details are presented to you in the App before completing your purchase.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2">C. Billing and Cancellations</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            All in-app purchases and subscriptions are processed and managed entirely by the <strong>Apple App Store</strong> or <strong>Google Play Store</strong>. You must manage your payment methods, subscription renewals, and cancellations directly through your Apple ID or Google account settings. We do not handle refunds directly; please refer to the respective app store's refund policies.
                        </p>
                    </section>

                    {/* User Content and Permissions */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Lock size={24} className="text-teal-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">3. User Content and Permissions</h2>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">A. Ownership of Photos</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            You retain all copyright and ownership rights to the original and restored photos you process through Revive AI.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">B. License to Process Images</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            By uploading a photo to the App, you grant us a temporary, limited, non-exclusive license to upload, process, and return the image solely for the purpose of providing the AI restoration service. As stated in our Privacy Policy, user photos are <strong>temporarily</strong> stored on our secure servers via <strong>Firebase Storage & Functions</strong>. Images are processed securely and are never used to train third-party AI models or for marketing without your permission.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">C. Device Permissions</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            To function properly, the App requires certain device permissions. By using the App, you agree to the following requests:
                        </p>
                        <ul className="space-y-2 text-gray-600 mb-4">
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2 mt-1">•</span>
                                <strong>Camera Access:</strong> To take pictures of physical, old photos directly within the App.
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2 mt-1">•</span>
                                <strong>Photo Library Access (Read & Write):</strong> To allow you to select existing photos from your device's gallery for restoration and to save your finalized restorations directly back to your device's camera roll.
                            </li>
                        </ul>
                    </section>
                    
                    {/* Prohibited Conduct */}
                    <section className="mb-8">
                        <div className="flex items-center mb-4">
                            <Eye size={24} className="text-teal-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">4. Prohibited Conduct</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            You agree not to use Revive AI to:
                        </p>
                        <ul className="space-y-2 text-gray-600 mb-4">
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2 mt-1">•</span>
                                Upload any unlawful, proprietary, inappropriate, or explicitly offensive content that you do not own the rights to.
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2 mt-1">•</span>
                                Reverse-engineer, copy, or attempt to extract the source code or our AI models.
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2 mt-1">•</span>
                                Attempt to bypass the "Free Tries" counter or unlawfully access Revive Pro features.
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2 mt-1">•</span>
                                Overload or attempt to compromise the security of our services, including our Firebase backend.
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-600 mr-2 mt-1">•</span>
                                Use the App in any way that violates applicable local, national, or international laws.
                            </li>
                        </ul>
                    </section>

                    {/* Disclaimer of Warranties */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Disclaimer of Warranties</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Revive AI relies on complex artificial intelligence algorithms. While we strive to produce the best possible results, we do not guarantee that the AI will perfectly restore every photo to your satisfaction. The App and its services are provided on an "AS IS" and "AS AVAILABLE" basis, without any warranties of any kind, whether express, implied, or statutory.
                        </p>
                    </section>

                    {/* Limitation of Liability */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            To the maximum extent permitted by law, Digital Sprout shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues. We are not liable for any unauthorized access to our secure servers (Firebase) or any loss of user content resulting from circumstances beyond our control. Our total, aggregated liability regarding the App is limited to the amount you paid us for the Service, if any.
                        </p>
                    </section>

                    {/* Changes to Policy */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to the Terms</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try our best to provide reasonable notice prior to any new terms taking effect. By continuing to access or use our App after those revisions become effective, you agree to be bound by the revised terms.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            If you have questions or concerns regarding these Terms, please contact Digital Sprout via our main portal:
                        </p>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-gray-700">
                                <strong>Digitalsprout</strong><br />
                                Website: <a href="https://digitalsprout.org" className="text-teal-600 hover:underline">digitalsprout.org</a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ReviveTermsOfService;
