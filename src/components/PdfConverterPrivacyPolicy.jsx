import React from 'react';
import { Shield, ArrowLeft, FileText, Database, Lock, Eye } from 'lucide-react';

const PdfConverterPrivacyPolicy = () => {
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
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            PDF Converter - Secure Local Document Processing
          </p>
          <p className="text-teal-200 mt-2">
            Effective Date: December 14, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          
          {/* Introduction */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <FileText size={24} className="text-teal-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              PDF Converter is a document conversion application designed with your privacy as the absolute priority. 
              We are committed to full transparency regarding our data practices. This privacy policy 
              explains how we handle information in our app.
            </p>
          </section>

          {/* Data Collection */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Database size={24} className="text-teal-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Data Collection</h2>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
              <div className="flex items-center mb-2">
                <Eye size={20} className="text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-green-800">We Collect No Personal Data</h3>
              </div>
              <p className="text-green-700">
                PDF Converter does not collect, store, or transmit any personal information, user data, or document contents 
                to external servers or third parties.
              </p>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What We Don't Collect:</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                Personal identification information (name, email, phone number)
              </li>
               <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                Document contents, metadata, or file names
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                Device identifiers or unique device information
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                Location data or GPS coordinates
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                Usage analytics or app behavior data
              </li>
            </ul>
          </section>

          {/* Local Processing */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Lock size={24} className="text-teal-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Local Processing Only</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              All document conversion and processing operates entirely on your device. Your files never leave your phone.
            </p>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                Files are processed locally using on-device technology
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                We do not upload your files to any cloud server for conversion
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                Converted files are saved directly to your device storage
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                No copies are retained by the app after the session ends
              </li>
            </ul>
          </section>

          {/* Permissions */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">App Permissions</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              PDF Converter requires the following permissions to function:
            </p>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Storage Access</h3>
                <p className="text-gray-600 text-sm">
                  Required to read the files you select for conversion and to save the converted files back to your device. 
                  We only access the specific files you choose.
                </p>
              </div>
            </div>
          </section>

          {/* Third Party Services */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed">
              PDF Converter does not integrate with any third-party services, analytics platforms, advertising networks, 
              or external APIs. The app operates completely independently on your device.
            </p>
          </section>

          {/* Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              Since we don't collect, store, or transmit any data, your documents remain as secure as your device itself. 
              We eliminate the risk of server-side data breaches by not using servers at all.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Our app is safe for users of all ages as we do not collect any personal information from anyone, 
              including children under 13 years of age.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this privacy policy from time to time. Any changes will be posted on this page with 
              an updated effective date.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about this privacy policy or our app, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700">
                <strong>Digitalsprout</strong><br />
                Email: info@digitalsprout.org<br />
                Website: digitalsprout.org
              </p>
            </div>
          </section>

          {/* Summary Box */}
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mt-8">
            <div className="flex items-center mb-3">
              <Shield size={24} className="text-teal-600 mr-3" />
              <h3 className="text-lg font-semibold text-teal-800">Privacy Summary</h3>
            </div>
            <p className="text-teal-700 font-medium">
              PDF Converter is designed with privacy by default. We collect no data, store nothing externally, 
              and all conversions happen locally on your device. Your privacy is completely protected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfConverterPrivacyPolicy;
