export const legalDirectory = [
  { name: "HRTree", privacy: "/hrtree/privacy-policy", terms: "/hrtree/terms-of-service", support: "/hrtree/support" },
  { name: "Haulfolio", privacy: "/haulfolio/privacy-policy", terms: "/haulfolio/terms-of-service" },
  { name: "TipMint", privacy: "/tip-tracker/privacy-policy", terms: "/tip-tracker/terms-of-service" },
  { name: "Find My Device", privacy: "/Findmydevice/privacy-policy", terms: "/Findmydevice/terms-of-service" },
  { name: "PDF Converter", privacy: "/pdfconverter/privacypolicy", terms: "/pdfconverter/terms-of-service" },
  { name: "Paid", privacy: "/paid/privacy-policy", terms: "/paid/terms-of-service" },
  { name: "Blood Pressure", privacy: "/bp/privacypolicy", terms: "/bp/terms-of-service" },
  { name: "PocketWealth", privacy: "/pocketwealth/privacy-policy", terms: "/pocketwealth/terms-of-service" },
  { name: "WTMP", privacy: "/wtmp/privacy-policy", terms: "/wtmp/terms-of-service" },
  { name: "Metal Stud Finder", privacy: "/metal/privacy-policy" },
  { name: "Arachnid", privacy: "/arachnid/privacy-policy", terms: "/arachnid/terms-of-service" },
  { name: "Mic to Speaker", privacy: "/bmic/privacy-policy" },
  { name: "Speaker Cleaner", privacy: "/speaker/privacy-policy", terms: "/speaker/terms-of-service" },
  { name: "Pokey", privacy: "/pokey/privacy-policy", terms: "/pokey/terms-of-service" },
  { name: "FishID", privacy: "/fishid/privacy-policy", terms: "/fishid/terms-of-service" },
  { name: "Unsent", privacy: "/unsent/privacy-policy", terms: "/unsent/terms-of-service" },
  { name: "Revive", privacy: "/revive/privacy-policy", terms: "/revive/terms-of-service" },
  { name: "Hours Tracker", privacy: "/hourstracker/privacy-policy", terms: "/hourstracker/terms-of-service" },
  { name: "SoberTracker", privacy: "/sobertracker/privacy-policy", terms: "/sobertracker/terms-of-service" },
  { name: "Ask Tarot", privacy: "/ask-tarot/privacy-policy", terms: "/ask-tarot/terms-of-service" },
  { name: "PupTempo", privacy: "/puptempo/privacy-policy", terms: "/puptempo/terms-of-service" },
  { name: "Throughline", privacy: "/throughline/privacy-policy", terms: "/throughline/terms-of-service" },
  { name: "Oche", privacy: "/oche/privacy-policy", terms: "/oche/terms-of-service" },
  { name: "Luma", privacy: "/luma/privacy-policy", terms: "/luma/terms-of-service" },
  { name: "Vocal Remover", privacy: "/vocal-remover/privacy-policy", terms: "/vocal-remover/terms-of-service" },
];

const projectDetails = {
  HRTree: ["Wellbeing", "A private journal for menopause, symptoms and your prescribed HRT routine.", "Hr", "green"],
  Haulfolio: ["Work & money", "Keep clothing inventory, sales and recorded costs organized.", "Hf", "green"],
  TipMint: ["Work & money", "Track server tips, working hours and shift earnings.", "TM", "green"],
  Luma: ["Wellbeing", "A focused journal for migraines and the patterns around them.", "Lu", "purple"],
  Throughline: ["Wellbeing", "Keep a clear record of symptoms over time.", "Th", "blue"],
  SoberTracker: ["Wellbeing", "A companion for recording your sobriety journey.", "St", "green"],
  "Blood Pressure": ["Wellbeing", "Keep your blood pressure readings together in one journal.", "Bp", "red"],
  Revive: ["Creative", "Tools for restoring and refreshing old photographs.", "Re", "purple"],
  "Vocal Remover": ["Creative", "An audio utility for separating vocals and instrumentals.", "Vr", "blue"],
  "Mic to Speaker": ["Creative", "A focused microphone and speaker utility.", "Ms", "purple"],
  Oche: ["Everyday tools", "A darts scoreboard to help keep the game moving.", "Oc", "green"],
  PupTempo: ["Everyday tools", "A companion for puppy potty-training routines.", "Pt", "orange"],
  "Ask Tarot": ["Everyday tools", "A space for tarot readings and reflection.", "At", "purple"],
  "Hours Tracker": ["Work & money", "Keep a record of your working hours.", "Ht", "blue"],
  Paid: ["Work & money", "Create and manage professional invoices.", "Pa", "green"],
  PocketWealth: ["Work & money", "A place to organize your personal money records.", "Pw", "blue"],
  "PDF Converter": ["Everyday tools", "Convert documents and keep useful files close at hand.", "Pd", "red"],
  "Find My Device": ["Everyday tools", "A utility for locating nearby Bluetooth devices.", "Fd", "blue"],
  WTMP: ["Everyday tools", "Tools for understanding activity on your phone.", "Wt", "purple"],
  "Metal Stud Finder": ["Everyday tools", "A focused utility for metal and stud detection.", "Mf", "orange"],
  "Speaker Cleaner": ["Everyday tools", "An audio utility designed for speaker cleaning.", "Sc", "blue"],
  Arachnid: ["Everyday tools", "A companion for identifying and learning about spiders.", "Ar", "green"],
  FishID: ["Everyday tools", "A companion for identifying and learning about fish.", "Fi", "blue"],
  Pokey: ["Everyday tools", "A portfolio companion for your Pokémon TCG collection.", "Po", "orange"],
  Unsent: ["Wellbeing", "Track a no-contact journey and make space for reflection.", "Un", "purple"],
};

const featuredOrder = ["TipMint", "Luma", "Revive", "Throughline", "Oche", "PupTempo"];
export const projectCategories = ["All apps", "Wellbeing", "Work & money", "Creative", "Everyday tools"];
export const studioProjects = legalDirectory.map((app) => {
  const [category, description, monogram, tone] = projectDetails[app.name];
  return { ...app, category, description, monogram, tone, ...(["Haulfolio", "HRTree"].includes(app.name) ? { upcoming: true } : {}), slug: app.name.toLowerCase().replaceAll(" ", "-"), ...(app.name === "TipMint" ? { product: "/tip-tracker", upcoming: true, image: "/assets/tipmint-icon.png" } : {}) };
}).sort((a, b) => {
  const aIndex = featuredOrder.indexOf(a.name);
  const bIndex = featuredOrder.indexOf(b.name);
  return (aIndex === -1 ? 99 : aIndex) - (bIndex === -1 ? 99 : bIndex) || a.name.localeCompare(b.name);
});
