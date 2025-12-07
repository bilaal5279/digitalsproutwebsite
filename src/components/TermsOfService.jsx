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

const TermsOfService = () => {
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
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
              <FileText size={32} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            FindMyDevice - Bluetooth Device Scanner
          </p>
          <p className="text-purple-200 mt-2">
            Effective Date: December 5, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          {/* Introduction */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Smartphone size={24} className="text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Agreement to Terms
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              By downloading, installing, or using FindMyDevice ("the App"), you
              agree to be bound by these Terms of Service ("Terms"). If you do
              not agree to these Terms, please do not use the App. These Terms
              apply to all users of the App.
            </p>
          </section>

          {/* App Description */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Scale size={24} className="text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                App Description
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              FindMyDevice is a Bluetooth device scanner application that allows
              users to:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Scan for nearby Bluetooth devices
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                View basic information about discovered devices
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Help locate lost or misplaced Bluetooth-enabled devices
              </li>
            </ul>
          </section>

          {/* User Responsibilities */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Users size={24} className="text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                User Responsibilities
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              By using FindMyDevice, you agree to:
            </p>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Use the App only for lawful purposes and in accordance with
                these Terms
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Respect the privacy and property rights of others
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Only scan for and attempt to locate devices that belong to you
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Comply with all applicable local, state, and federal laws
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Not use the App to harass, stalk, or invade the privacy of
                others
              </li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
              <div className="flex items-center mb-2">
                <AlertTriangle size={20} className="text-amber-600 mr-2" />
                <h3 className="text-lg font-semibold text-amber-800">
                  Important Notice
                </h3>
              </div>
              <p className="text-amber-700">
                You are responsible for ensuring your use of this App complies
                with all applicable privacy laws and regulations in your
                jurisdiction.
              </p>
            </div>
          </section>

          {/* Prohibited Uses */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <AlertTriangle size={24} className="text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Prohibited Uses
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              You may not use FindMyDevice to:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                Track or monitor devices that do not belong to you without
                permission
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                Engage in stalking, harassment, or invasion of privacy
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                Violate any applicable laws or regulations
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                Attempt to reverse engineer, modify, or tamper with the App
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                Use the App for any commercial purposes without authorization
              </li>
            </ul>
          </section>

          {/* Privacy and Data */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Shield size={24} className="text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Privacy and Data
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              FindMyDevice is designed with privacy as a core principle:
            </p>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                No personal data is collected or stored
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                All operations are performed locally on your device
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                No data is transmitted to external servers
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Scan results are temporary and not permanently stored
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              For detailed information about our privacy practices, please
              review our
              <a
                href="/Findmydevice/privacy-policy"
                className="text-purple-600 hover:text-purple-700 underline ml-1"
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
                  App Functionality
                </h3>
                <p className="text-gray-600 text-sm">
                  The effectiveness of Bluetooth scanning depends on various
                  factors including device compatibility, Bluetooth settings,
                  and environmental conditions. We cannot guarantee the App will
                  detect all nearby Bluetooth devices.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Device Compatibility
                </h3>
                <p className="text-gray-600 text-sm">
                  The App requires Bluetooth functionality and appropriate
                  permissions. Some devices or operating system versions may not
                  be fully supported.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Legal Compliance
                </h3>
                <p className="text-gray-600 text-sm">
                  Users are solely responsible for ensuring their use of the App
                  complies with all applicable laws and regulations in their
                  jurisdiction.
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
                <span className="text-purple-600 mr-2">•</span>
                Indirect, incidental, special, or consequential damages
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Loss of data, profits, or business opportunities
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Damages resulting from misuse of the App
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Issues arising from device incompatibility or technical
                limitations
              </li>
            </ul>
          </section>

          {/* Termination */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Clock size={24} className="text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Termination</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              You may stop using the App at any time by uninstalling it from
              your device. We reserve the right to discontinue the App or modify
              its functionality at any time without notice. These Terms remain
              in effect until terminated by either party.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Changes to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update these Terms from time to time. Any changes will be
              posted on this page with an updated effective date. Your continued
              use of the App after any changes constitutes acceptance of the new
              Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Governing Law
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms are governed by and construed in accordance with the
              laws of the United Kingdom. Any disputes arising from these Terms
              or your use of the App shall be subject to the exclusive
              jurisdiction of the courts of the United Kingdom.
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
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-8">
            <div className="flex items-center mb-3">
              <FileText size={24} className="text-purple-600 mr-3" />
              <h3 className="text-lg font-semibold text-purple-800">
                Terms Summary
              </h3>
            </div>
            <p className="text-purple-700 font-medium">
              Use FindMyDevice responsibly and only for your own devices. We
              prioritize your privacy with no data collection, but you're
              responsible for complying with all applicable laws in your area.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
