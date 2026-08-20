import { createElement, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./site/HomePage";
import { PageMeta } from "./site/SiteChrome";
import {
  TipTrackerPage,
  TipTrackerPrivacyPolicy,
  TipTrackerSupport,
  TipTrackerTermsOfService,
} from "./site/TipTrackerPages";
import { NotFoundPage, SupportPage } from "./site/UtilityPages";
import "./App.css";

const lazyDefault = (loader) => lazy(loader);
const lazyNamed = (loader, exportName) => lazy(() => loader().then((module) => ({ default: module[exportName] })));

const PrivacyPolicy = lazyDefault(() => import("./components/PrivacyPolicy"));
const TermsOfService = lazyDefault(() => import("./components/TermsOfService"));
const PdfConverterPrivacyPolicy = lazyDefault(() => import("./components/PdfConverterPrivacyPolicy"));
const PdfConverterTermsOfService = lazyDefault(() => import("./components/PdfConverterTermsOfService"));
const PaidPrivacyPolicy = lazyDefault(() => import("./components/PaidPrivacyPolicy"));
const PaidTermsOfService = lazyDefault(() => import("./components/PaidTermsOfService"));
const BloodPressurePrivacyPolicy = lazyDefault(() => import("./components/BloodPressurePrivacyPolicy"));
const BloodPressureTermsOfService = lazyDefault(() => import("./components/BloodPressureTermsOfService"));
const PocketWealthPrivacyPolicy = lazyDefault(() => import("./components/PocketWealthPrivacyPolicy"));
const PocketWealthTermsOfService = lazyDefault(() => import("./components/PocketWealthTermsOfService"));
const WtmpPrivacyPolicy = lazyDefault(() => import("./components/WtmpPrivacyPolicy"));
const WtmpTermsOfService = lazyDefault(() => import("./components/WtmpTermsOfService"));
const MetalStudFinderPrivacyPolicy = lazyDefault(() => import("./components/MetalStudFinderPrivacyPolicy"));
const ArachnidPrivacyPolicy = lazyDefault(() => import("./components/ArachnidPrivacyPolicy"));
const ArachnidTermsOfService = lazyDefault(() => import("./components/ArachnidTermsOfService"));
const MicToSpeakerPrivacyPolicy = lazyDefault(() => import("./components/MicToSpeakerPrivacyPolicy"));
const SpeakerPrivacyPolicy = lazyDefault(() => import("./components/SpeakerPrivacyPolicy"));
const SpeakerTermsOfService = lazyDefault(() => import("./components/SpeakerTermsOfService"));
const PokeyPrivacyPolicy = lazyDefault(() => import("./components/PokeyPrivacyPolicy"));
const PokeyTermsOfService = lazyDefault(() => import("./components/PokeyTermsOfService"));
const FishIdPrivacyPolicy = lazyDefault(() => import("./components/FishIdPrivacyPolicy"));
const FishIdTermsOfService = lazyDefault(() => import("./components/FishIdTermsOfService"));
const UnsentPrivacyPolicy = lazyDefault(() => import("./components/UnsentPrivacyPolicy"));
const UnsentTermsOfService = lazyDefault(() => import("./components/UnsentTermsOfService"));
const RevivePrivacyPolicy = lazyDefault(() => import("./components/RevivePrivacyPolicy"));
const ReviveTermsOfService = lazyDefault(() => import("./components/ReviveTermsOfService"));
const HoursTrackerPrivacyPolicy = lazyDefault(() => import("./components/HoursTrackerPrivacyPolicy"));
const HoursTrackerTermsOfService = lazyDefault(() => import("./components/HoursTrackerTermsOfService"));
const SoberTrackerPrivacyPolicy = lazyDefault(() => import("./components/SoberTrackerPrivacyPolicy"));
const SoberTrackerTermsOfService = lazyDefault(() => import("./components/SoberTrackerTermsOfService"));
const AskTarotPrivacyPolicy = lazyNamed(() => import("./components/AskTarotLegal"), "AskTarotPrivacyPolicy");
const AskTarotTermsOfService = lazyNamed(() => import("./components/AskTarotLegal"), "AskTarotTermsOfService");
const PupTempoPrivacyPolicy = lazyNamed(() => import("./components/PupTempoLegal"), "PupTempoPrivacyPolicy");
const PupTempoTermsOfService = lazyNamed(() => import("./components/PupTempoLegal"), "PupTempoTermsOfService");
const ThroughlinePrivacyPolicy = lazyNamed(() => import("./components/ThroughlineLegal"), "ThroughlinePrivacyPolicy");
const ThroughlineTermsOfService = lazyNamed(() => import("./components/ThroughlineLegal"), "ThroughlineTermsOfService");
const OchePrivacyPolicy = lazyNamed(() => import("./components/OcheLegal"), "OchePrivacyPolicy");
const OcheTermsOfService = lazyNamed(() => import("./components/OcheLegal"), "OcheTermsOfService");
const LumaPrivacyPolicy = lazyNamed(() => import("./components/LumaLegal"), "LumaPrivacyPolicy");
const LumaTermsOfService = lazyNamed(() => import("./components/LumaLegal"), "LumaTermsOfService");
const VocalRemoverPrivacyPolicy = lazyNamed(() => import("./components/VocalRemoverLegal"), "VocalRemoverPrivacyPolicy");
const VocalRemoverTermsOfService = lazyNamed(() => import("./components/VocalRemoverLegal"), "VocalRemoverTermsOfService");

const legacyRoutes = [
  ["/unsent/privacy-policy", "Unsent Privacy Policy", UnsentPrivacyPolicy],
  ["/unsent/terms-of-service", "Unsent Terms of Service", UnsentTermsOfService],
  ["/revive/privacy-policy", "Revive Privacy Policy", RevivePrivacyPolicy],
  ["/revive/terms-of-service", "Revive Terms of Service", ReviveTermsOfService],
  ["/Findmydevice/privacy-policy", "Find My Device Privacy Policy", PrivacyPolicy],
  ["/Findmydevice/terms-of-service", "Find My Device Terms of Service", TermsOfService],
  ["/pdfconverter/privacypolicy", "PDF Converter Privacy Policy", PdfConverterPrivacyPolicy],
  ["/pdfconverter/terms-of-service", "PDF Converter Terms of Service", PdfConverterTermsOfService],
  ["/paid/privacy-policy", "Paid Privacy Policy", PaidPrivacyPolicy],
  ["/paid/terms-of-service", "Paid Terms of Service", PaidTermsOfService],
  ["/bp/privacypolicy", "Blood Pressure Privacy Policy", BloodPressurePrivacyPolicy],
  ["/bp/terms-of-service", "Blood Pressure Terms of Service", BloodPressureTermsOfService],
  ["/pocketwealth/privacy-policy", "PocketWealth Privacy Policy", PocketWealthPrivacyPolicy],
  ["/pocketwealth/terms-of-service", "PocketWealth Terms of Service", PocketWealthTermsOfService],
  ["/pokey/privacy-policy", "Pokey Privacy Policy", PokeyPrivacyPolicy],
  ["/pokey/terms-of-service", "Pokey Terms of Service", PokeyTermsOfService],
  ["/fishid/privacy-policy", "FishID Privacy Policy", FishIdPrivacyPolicy],
  ["/fishid/terms-of-service", "FishID Terms of Service", FishIdTermsOfService],
  ["/wtmp/privacy-policy", "WTMP Privacy Policy", WtmpPrivacyPolicy],
  ["/wtmp/terms-of-service", "WTMP Terms of Service", WtmpTermsOfService],
  ["/metal/privacy-policy", "Metal Stud Finder Privacy Policy", MetalStudFinderPrivacyPolicy],
  ["/arachnid/privacy-policy", "Arachnid Privacy Policy", ArachnidPrivacyPolicy],
  ["/arachnid/terms-of-service", "Arachnid Terms of Service", ArachnidTermsOfService],
  ["/speaker/privacy-policy", "Speaker Cleaner Privacy Policy", SpeakerPrivacyPolicy],
  ["/speaker/terms-of-service", "Speaker Cleaner Terms of Service", SpeakerTermsOfService],
  ["/bmic/privacy-policy", "Mic to Speaker Privacy Policy", MicToSpeakerPrivacyPolicy],
  ["/hourstracker/privacy-policy", "Hours Tracker Privacy Policy", HoursTrackerPrivacyPolicy],
  ["/hourstracker/terms-of-service", "Hours Tracker Terms of Service", HoursTrackerTermsOfService],
  ["/sobertracker/privacy-policy", "SoberTracker Privacy Policy", SoberTrackerPrivacyPolicy],
  ["/sobertracker/terms-of-service", "SoberTracker Terms of Service", SoberTrackerTermsOfService],
  ["/ask-tarot/privacy-policy", "Ask Tarot Privacy Policy", AskTarotPrivacyPolicy],
  ["/ask-tarot/terms-of-service", "Ask Tarot Terms of Service", AskTarotTermsOfService],
  ["/ask-tarot/terms", "Ask Tarot Terms of Service", AskTarotTermsOfService],
  ["/puptempo/privacy-policy", "PupTempo Privacy Policy", PupTempoPrivacyPolicy],
  ["/puptempo/terms-of-service", "PupTempo Terms of Service", PupTempoTermsOfService],
  ["/puptempo/terms", "PupTempo Terms of Service", PupTempoTermsOfService],
  ["/throughline/privacy-policy", "Throughline Privacy Policy", ThroughlinePrivacyPolicy],
  ["/throughline/terms-of-service", "Throughline Terms of Service", ThroughlineTermsOfService],
  ["/throughline/terms", "Throughline Terms of Service", ThroughlineTermsOfService],
  ["/oche/privacy-policy", "Oche Privacy Policy", OchePrivacyPolicy],
  ["/oche/privacy", "Oche Privacy Policy", OchePrivacyPolicy],
  ["/oche/terms-of-service", "Oche Terms of Service", OcheTermsOfService],
  ["/oche/terms", "Oche Terms of Service", OcheTermsOfService],
  ["/luma/privacy", "Luma Privacy Policy", LumaPrivacyPolicy],
  ["/luma/privacy-policy", "Luma Privacy Policy", LumaPrivacyPolicy],
  ["/luma/terms", "Luma Terms of Service", LumaTermsOfService],
  ["/luma/terms-of-service", "Luma Terms of Service", LumaTermsOfService],
  ["/migraine-tracker/privacy", "Luma Privacy Policy", LumaPrivacyPolicy],
  ["/migraine-tracker/terms", "Luma Terms of Service", LumaTermsOfService],
  ["/vocal-remover/privacy-policy", "Vocal Remover Privacy Policy", VocalRemoverPrivacyPolicy],
  ["/vocal-remover/privacy", "Vocal Remover Privacy Policy", VocalRemoverPrivacyPolicy],
  ["/vocal-remover/terms-of-service", "Vocal Remover Terms of Service", VocalRemoverTermsOfService],
  ["/vocal-remover/terms", "Vocal Remover Terms of Service", VocalRemoverTermsOfService],
];

function LoadingPage() {
  return <div className="ds-loading" role="status"><span /> Loading page…</div>;
}

function LegacyPage({ path, title, Component }) {
  return (
    <>
      <PageMeta title={`${title} — DigitalSprout`} description={`${title} for a DigitalSprout app.`} path={path} />
      {createElement(Component)}
    </>
  );
}

function AppRoutes() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tip-tracker" element={<TipTrackerPage />} />
        <Route path="/tip-tracker/privacy-policy" element={<TipTrackerPrivacyPolicy />} />
        <Route path="/tip-tracker/terms-of-service" element={<TipTrackerTermsOfService />} />
        <Route path="/tip-tracker/support" element={<TipTrackerSupport />} />
        <Route path="/support" element={<SupportPage />} />
        {legacyRoutes.map(([path, title, Component]) => (
          <Route key={path} path={path} element={<LegacyPage path={path} title={title} Component={Component} />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default function App() {
  return <BrowserRouter><AppRoutes /></BrowserRouter>;
}
