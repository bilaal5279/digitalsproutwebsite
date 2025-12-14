import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Menu,
  X,
  ChevronRight,
  Smartphone,
  Activity,
  Shield,
  Users,
  ChevronDown,
  ExternalLink,
  Star,
  Check,
} from "lucide-react";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import PdfConverterPrivacyPolicy from "./components/PdfConverterPrivacyPolicy";
import PdfConverterTermsOfService from "./components/PdfConverterTermsOfService";
import "./App.css";
const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 w-full">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-teal-600 to-purple-600"></div>
                  <div>
                    <span className="text-teal-700 font-bold text-xl">
                      Digital
                    </span>
                    <span className="text-purple-600 font-bold text-xl">
                      sprout
                    </span>
                  </div>
                </div>
              </div>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <a
                  href="#"
                  className="text-gray-900 hover:text-teal-600 inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 border-transparent hover:border-teal-600 transition-all duration-200"
                >
                  Home
                </a>
                <a
                  href="#products"
                  className="text-gray-600 hover:text-teal-600 inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 border-transparent hover:border-teal-600 transition-all duration-200"
                >
                  Products
                </a>
                <a
                  href="#features"
                  className="text-gray-600 hover:text-teal-600 inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 border-transparent hover:border-teal-600 transition-all duration-200"
                >
                  Features
                </a>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-teal-600 inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 border-transparent hover:border-teal-600 transition-all duration-200"
                >
                  About
                </a>
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-4">
              <a
                href="#contact"
                className="text-gray-600 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Contact
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.bilaal5279.weightly"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center"
              >
                Download Weightly
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-xl mt-2 mx-4 overflow-hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="text-gray-900 hover:bg-gray-50 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="#products"
                className="text-gray-600 hover:bg-gray-50 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Products
              </a>
              <a
                href="#features"
                className="text-gray-600 hover:bg-gray-50 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:bg-gray-50 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:bg-gray-50 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Testimonials
              </a>
              <div className="mt-4 px-3 pb-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.bilaal5279.weightly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center"
                >
                  Download Weightly
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pt-16 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-600 mb-6">
                <Star size={14} className="mr-1" /> Introducing Weightly 1.0
              </div>
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl tracking-tight md:text-6xl">
                Health Apps That
                <span className="block text-teal-600"> Grow With You </span>
              </h1>
              <p className="mt-6 text-xl text-gray-500 max-w-lg mx-auto lg:mx-0">
                We create intuitive mobile applications that help you track,
                manage, and improve your health journey with precision and
                purpose.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.bilaal5279.weightly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-md text-white bg-teal-600 hover:bg-teal-700 transition-all duration-200"
                >
                  Download Weightly
                  <ChevronRight size={18} className="ml-2" />
                </a>
                <button className="flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-96 md:w-72 md:h-96">
                {/* Phone frame */}
                <div className="absolute inset-0 bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"></div>

                {/* App screen */}
                <div className="absolute inset-2 rounded-2xl overflow-hidden bg-gradient-to-b from-gray-50 to-white">
                  {/* App header */}
                  <div className="h-14 bg-teal-600 flex items-center justify-center">
                    <h3 className="text-lg font-bold text-white">Weightly</h3>
                  </div>

                  {/* App content */}
                  <div className="p-4">
                    <div className="mb-4">
                      <div className="h-8 w-full bg-gray-100 rounded-lg flex items-center px-3">
                        <div className="h-4 w-4 rounded-full bg-teal-500 mr-2"></div>
                        <div className="h-2 w-24 bg-gray-300 rounded"></div>
                      </div>
                    </div>

                    {/* Weight graph */}
                    <div className="mb-4 p-3 bg-white rounded-lg shadow-sm">
                      <div className="h-2 w-20 bg-gray-200 rounded mb-3"></div>
                      <div className="h-32 w-full bg-gray-50 rounded relative">
                        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-teal-100 to-transparent rounded"></div>
                        <div className="absolute bottom-0 inset-x-0 h-px bg-teal-500"></div>
                        <div className="absolute bottom-8 left-6 h-2 w-2 rounded-full bg-teal-500"></div>
                        <div className="absolute bottom-12 left-12 h-2 w-2 rounded-full bg-teal-500"></div>
                        <div className="absolute bottom-16 left-16 h-2 w-2 rounded-full bg-teal-500"></div>
                        <div className="absolute bottom-14 left-24 h-2 w-2 rounded-full bg-teal-500"></div>
                        <div className="absolute bottom-20 left-32 h-2 w-2 rounded-full bg-teal-500"></div>
                        <div className="absolute bottom-24 left-40 h-2 w-2 rounded-full bg-purple-500"></div>
                      </div>
                    </div>

                    {/* Medication tracking */}
                    <div className="mb-2 p-3 bg-white rounded-lg shadow-sm">
                      <div className="h-2 w-24 bg-gray-200 rounded mb-3"></div>
                      <div className="flex items-center mb-2">
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                          <Check size={12} className="text-green-600" />
                        </div>
                        <div className="h-2 w-32 bg-gray-200 rounded"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center mr-2"></div>
                        <div className="h-2 w-24 bg-gray-200 rounded"></div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <div className="h-4 w-4 rounded-full bg-purple-500"></div>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
                        <div className="h-4 w-4 rounded-full bg-teal-500"></div>
                      </div>
                      <div className="flex-1"></div>
                      <div className="h-8 w-16 rounded-lg bg-teal-500"></div>
                    </div>
                  </div>
                </div>

                {/* Phone details */}
                <div className="absolute top-8 inset-x-0 h-1 w-16 bg-gray-700 mx-auto rounded"></div>
                <div className="absolute bottom-4 inset-x-0 h-1 w-8 bg-gray-700 mx-auto rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="w-full overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            className="w-full"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Featured App Section */}
      <div id="products" className="py-16 bg-white w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-700">
              <Smartphone size={14} className="mr-1" /> Our Products
            </div>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Precision Health Tracking
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Weightly is your complete GLP-1 medication companion, designed
              with precision and privacy in mind.
            </p>
          </div>

          <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-8 md:p-12 flex flex-col justify-center">
                <div className="text-teal-100 text-sm font-medium mb-2">
                  FEATURED PRODUCT
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Weightly</h3>
                <p className="text-teal-50 text-lg mb-6">
                  The smart, intuitive way to track your GLP-1 medication
                  journey and maximize your health outcomes.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check
                      size={20}
                      className="text-white mt-0.5 mr-2 flex-shrink-0"
                    />
                    <span className="text-white">Medication dose tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={20}
                      className="text-white mt-0.5 mr-2 flex-shrink-0"
                    />
                    <span className="text-white">
                      Weight progress visualization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={20}
                      className="text-white mt-0.5 mr-2 flex-shrink-0"
                    />
                    <span className="text-white">Symptom management tools</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.bilaal5279.weightly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 border border-white text-sm font-medium rounded-lg text-white hover:bg-white hover:text-teal-600 transition-all duration-200"
                  >
                    Download Now
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
              <div className="p-8 md:p-12 bg-white">
                <div className="h-full flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                    <div className="bg-gray-50 p-4 rounded-xl text-center">
                      <div className="h-12 w-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-3">
                        <Activity size={24} />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Activity
                      </h4>
                      <p className="text-sm text-gray-500">
                        Track exercise impact
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl text-center">
                      <div className="h-12 w-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto mb-3">
                        <Shield size={24} />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Tracking
                      </h4>
                      <p className="text-sm text-gray-500">Easy to use</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl text-center">
                      <div className="h-12 w-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto mb-3">
                        <Activity size={24} />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Progress
                      </h4>
                      <p className="text-sm text-gray-500">Track results</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl text-center">
                      <div className="h-12 w-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-3">
                        <ChevronDown size={24} />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Trends
                      </h4>
                      <p className="text-sm text-gray-500">Analyze progress</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div id="features" className="py-16 bg-gray-50 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-700">
              <Activity size={14} className="mr-1" /> Key Features
            </div>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything You Need in One App
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Comprehensive tools designed by health professionals and tech
              experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity size={24} />,
                title: "Simple Tracking",
                description:
                  "Keep track of your GLP-1 medication doses easily with our straightforward tracking interface.",
              },
              {
                icon: <Shield size={24} />,
                title: "Weight Monitoring",
                description:
                  "Record and visualize your weight changes over time to see your progress clearly.",
              },
              {
                icon: <Check size={24} />,
                title: "Dose Management",
                description:
                  "Manage your medication schedule with a clean, easy-to-use interface designed for simplicity.",
              },
              {
                icon: <Star size={24} />,
                title: "Progress Tracking",
                description:
                  "Follow your journey with simple metrics that help you stay motivated and on track.",
              },
              {
                icon: <ChevronDown size={24} />,
                title: "Easy to Use",
                description:
                  "Designed with simplicity in mind so you can focus on your health journey without complicated features.",
              },
              {
                icon: <Activity size={24} />,
                title: "Consistent Updates",
                description:
                  "We regularly improve the app based on user feedback to enhance your experience.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="about" className="py-16 bg-white w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-700">
              <Star size={14} className="mr-1" /> Testimonials
            </div>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Trusted by Thousands
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              See what our users have to say about their experience with
              Weightly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Weightly has made tracking my GLP-1 medication so much easier. The visualization tools help me stay motivated seeing my progress.",
                name: "Sarah J.",
                title: "Weightly User, 6 months",
              },
              {
                quote:
                  "The app has completely transformed how I manage my medication. I love how simple it is to log doses and track my progress over time.",
                name: "James K.",
                title: "Weightly User, 4 months",
              },
              {
                quote:
                  "The reminders are perfectly timed, and the symptom tracker has helped me identify patterns I wouldn't have noticed otherwise.",
                name: "Robert L.",
                title: "Weightly User, 3 months",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-medium text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 w-full">
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">
                Ready to transform your health journey?
              </span>
            </h2>
            <p className="mt-4 text-lg text-teal-100 max-w-md">
              Join thousands of satisfied users who are taking control of their
              health with Weightly.
            </p>
          </div>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.bilaal5279.weightly"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg shadow-md text-teal-600 bg-white hover:bg-gray-50 transition-all duration-200"
            >
              Download Now
            </a>
            <button className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-lg text-white hover:bg-teal-500 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 w-full">
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-teal-600 to-purple-600"></div>
                <div>
                  <span className="text-teal-500 font-bold text-xl">
                    Digital
                  </span>
                  <span className="text-purple-400 font-bold text-xl">
                    sprout
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Creating innovative health technology solutions that empower
                users on their wellness journey.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <span className="text-gray-400">About (Coming Soon)</span>
                </li>
                <li>
                  <span className="text-gray-400">Contact Us</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
                Products
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-teal-300 transition-colors"
                  >
                    Weightly
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-teal-300 transition-colors"
                  >
                    Coming Soon
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/Findmydevice/privacy-policy"
                    className="text-gray-400 hover:text-teal-300 transition-colors"
                  >
                    FindMyDevice Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/Findmydevice/terms-of-service"
                    className="text-gray-400 hover:text-teal-300 transition-colors"
                  >
                    FindMyDevice Terms of Service
                  </a>
                </li>
                <li>
                  <span className="text-gray-400">
                    More Legal Documents Coming Soon
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Digitalsprout, UK. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Designed with ❤️ in the UK
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/Findmydevice/privacy-policy"
          element={<PrivacyPolicy />}
        />
        <Route
          path="/Findmydevice/terms-of-service"
          element={<TermsOfService />}
        />
        <Route
          path="/pdfconverter/privacypolicy"
          element={<PdfConverterPrivacyPolicy />}
        />
        <Route
          path="/pdfconverter/terms-of-service"
          element={<PdfConverterTermsOfService />}
        />
      </Routes>
    </Router>
  );
};

export default App;
