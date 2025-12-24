import React from 'react';
import { Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SupportPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                <div className="flex justify-center mb-6">
                    <div className="h-16 w-16 bg-teal-100 rounded-full flex items-center justify-center">
                        <Mail size={32} className="text-teal-600" />
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
                    Contact Support
                </h1>

                <p className="text-gray-600 text-center mb-8">
                    Need assistance with one of our apps? We're here to help!
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mb-8 border border-gray-100">
                    <p className="text-sm text-gray-500 text-center mb-1">
                        Email us at
                    </p>
                    <a
                        href="mailto:info@digitalsprout.org"
                        className="block text-xl font-medium text-teal-600 text-center hover:text-teal-700 transition-colors"
                    >
                        info@digitalsprout.org
                    </a>
                </div>

                <div className="text-center">
                    <Link
                        to="/"
                        className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors font-medium"
                    >
                        <ArrowLeft size={16} className="mr-2" />
                        Back to Home
                    </Link>
                </div>
            </div>

            <div className="mt-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="h-6 w-6 rounded bg-gradient-to-r from-teal-600 to-purple-600"></div>
                    <div>
                        <span className="text-teal-700 font-bold">Digital</span>
                        <span className="text-purple-600 font-bold">sprout</span>
                    </div>
                </div>
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Digitalsprout, UK
                </p>
            </div>
        </div>
    );
};

export default SupportPage;
