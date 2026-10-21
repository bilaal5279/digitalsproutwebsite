import { ArrowRight, ArrowUpRight, Heart, Palette, Sparkles, BriefcaseBusiness, MessageCircle, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import { PageMeta, SitePage } from "./SiteChrome";
import { AppIcon, ProductCard } from "./AppElements";
import { featuredProjects, studioProjects } from "./siteData";
import { organizationSchema, websiteSchema } from "./seo";

const categories = [
  { name: "Wellbeing", icon: Heart, copy: "Make space for yourself." },
  { name: "Work & money", icon: BriefcaseBusiness, copy: "A little more organised." },
  { name: "Creative", icon: Palette, copy: "Bring your ideas to life." },
  { name: "Everyday tools", icon: Sparkles, copy: "Small tasks, sorted." },
];

function AppGarden() {
  const names = ["Luma", "Revive", "TipMint", "Oche", "PupTempo", "Throughline"];
  return <div className="app-garden" aria-label="Discover Luma, Revive, TipMint, Oche, PupTempo and Throughline">
    <div className="app-garden__ring app-garden__ring--one" /><div className="app-garden__ring app-garden__ring--two" />
    <div className="app-garden__center"><Sprout size={32} strokeWidth={1.3} /><span>Small apps.<br /><em>More possibility.</em></span></div>
    {names.map((name, index) => { const app = studioProjects.find((item) => item.name === name); return app && <Link key={name} to={app.product} className={`garden-app garden-app--${index + 1}`} aria-label={`Discover ${name}`}><AppIcon app={app} eager /><span>{name}</span></Link>; })}
    <span className="garden-caption"><span /> Thoughtfully made. Ready for your day.</span>
  </div>;
}

export default function HomePage() {
  return <SitePage>
    <PageMeta title="DigitalSprout — Useful apps for your everyday" description="Discover DigitalSprout apps for wellbeing, work, creativity and everyday life. Explore features, download on the App Store or Google Play, and find support." structuredData={[organizationSchema, websiteSchema]} />
    <section className="studio-hero"><div className="ds-shell studio-hero__grid"><div className="studio-hero__copy"><p className="eyebrow"><span className="status-dot" /> Independent app studio · Made in the UK</p><h1>Good apps.<br />For your<br /> <em>everyday.</em></h1><p className="hero-lede">A little more clarity. A little less effort. Thoughtful apps for the things that make up your day.</p><div className="ds-actions"><Link to="/apps" className="ds-button ds-button--ink">Find your next app <ArrowRight size={18} /></Link><a href="#featured" className="text-link">Take a look around <span>↓</span></a></div><div className="hero-note"><div className="mini-icons">{featuredProjects.slice(0, 3).map((app) => <AppIcon app={app} key={app.name} eager />)}</div><p>One independent studio.<br /><strong>A whole collection of useful things.</strong></p></div></div><AppGarden /></div></section>
    <section className="purpose-strip" aria-label="Browse apps by category"><div className="ds-shell purpose-strip__grid">{categories.map(({ name, icon: Icon, copy }) => <Link key={name} to={`/apps?category=${encodeURIComponent(name)}`}><Icon size={23} strokeWidth={1.5} /><div><strong>{name}</strong><span>{copy}</span></div><ArrowUpRight size={17} /></Link>)}</div></section>
    <section className="section featured-section" id="featured"><div className="ds-shell"><div className="section-heading"><div><p className="eyebrow">Find your new favourite</p><h2>Made for your<br /><em>kind of day.</em></h2></div><div><p>From your first shift to your next creative project. A few favourites, ready to download.</p><Link to="/apps" className="text-link">Explore all {studioProjects.length} apps <ArrowRight size={17} /></Link></div></div><div className="featured-grid">{featuredProjects.map((app) => <ProductCard app={app} key={app.name} featured />)}</div></div></section>
    <section className="studio-story"><div className="ds-shell studio-story__grid"><div className="studio-story__art" aria-hidden="true"><span className="story-orbit" /><Sprout strokeWidth={.85} /><span>Room for<br /><em>good things.</em></span><small>DIGITALSPROUT · INDEPENDENT BY NATURE</small></div><div className="studio-story__copy"><p className="eyebrow">A small studio. A considered approach.</p><h2>Useful by design.<br /><em>Personal by nature.</em></h2><p>We’re DigitalSprout, an independent software studio in the UK. We make focused apps for real routines: keeping a journal, managing a collection, remembering the details, or making something new.</p><p>Each app has a job to do. Our job is to make it feel simple.</p><Link to="/about" className="text-link">Meet the studio <ArrowUpRight size={18} /></Link></div></div></section>
    <section className="section home-questions"><div className="ds-shell questions-grid"><div><p className="eyebrow">A few useful answers</p><h2>Before you<br /><em>dive in.</em></h2><Link className="text-link" to="/support">Visit the support hub <ArrowRight size={17} /></Link></div><div className="faq-list"><details><summary>Where can I download your apps?</summary><p>Open an app’s page to find its verified App Store or Google Play links. Availability and device compatibility can vary by app and region; the store listing has the latest details.</p></details><details><summary>Are your apps free?</summary><p>Pricing varies by app. Some apps include optional purchases or subscriptions. Check the store listing and the purchase screen for the current price and included features.</p></details><details><summary>How do I get help with an app?</summary><p>Visit our <Link to="/support">support hub</Link> or email <a href="mailto:info@digitalsprout.org">info@digitalsprout.org</a> with the app name, your device and a description of the problem.</p></details><details><summary>Where can I find privacy information?</summary><p>Every app page links to its own privacy policy and available terms. You can also find them together in our <Link to="/support#policies">app policy directory</Link>.</p></details></div></div></section>
    <section className="contact-band"><div className="ds-shell contact-band__inner"><MessageCircle size={32} strokeWidth={1.4} /><div><h2>A question, an idea, a little help?</h2><p>There’s a real person on the other end.</p></div><Link to="/support" className="ds-button ds-button--light">Let’s talk <ArrowUpRight size={18} /></Link></div></section>
  </SitePage>;
}
