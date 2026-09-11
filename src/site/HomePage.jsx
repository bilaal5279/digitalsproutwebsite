import { ArrowRight, ArrowUpRight, Layers3, MessageCircle, ScanLine } from "lucide-react";
import { Link } from "react-router-dom";
import { PageMeta, SitePage } from "./SiteChrome";
import { AppDirectory } from "./AppDirectory";
import { studioProjects } from "./siteData";

export default function HomePage() {
  return (
    <SitePage>
      <PageMeta title="DigitalSprout — Thoughtful apps for everyday life" description="Explore DigitalSprout’s independent collection of apps for wellbeing, work, creativity and everyday tasks. Find your app, support and clear product policies in one place." />
      <section className="portfolio-hero">
        <div className="ds-shell portfolio-hero__grid">
          <div className="portfolio-hero__copy">
            <p className="portfolio-eyebrow"><span /> Independent software studio · UK</p>
            <h1>Practical apps.<br /><span>Thoughtfully made.</span></h1>
            <p className="portfolio-lede">A collection of focused tools for your work, wellbeing and everything in between. Find the right app for the way you live.</p>
            <div className="ds-actions"><a className="ds-button ds-button--ink" href="#apps">Explore our apps <ArrowRight size={18} /></a><Link className="portfolio-quiet-link" to="/support">Get support <ArrowUpRight size={17} /></Link></div>
            <div className="portfolio-hero__footnote"><span>{studioProjects.length} focused projects</span><i /><span>One independent studio</span></div>
          </div>
          <Link className="portfolio-feature" to="/tip-tracker" aria-label="Explore TipMint, our upcoming server tip tracker">
            <div className="portfolio-feature__top"><span>Next from the studio</span><ArrowUpRight size={22} /></div>
            <img src="/assets/tipmint-icon.png" alt="" width="88" height="88" />
            <div><p className="portfolio-feature__name">TipMint</p><h2>A clearer view<br />of every shift.</h2><p>Cash, card, hours and tip-outs.<br />Your working day, all accounted for.</p></div>
            <div className="portfolio-feature__bottom"><span className="portfolio-status">In development</span><span>Meet TipMint <ArrowRight size={17} /></span></div>
          </Link>
        </div>
      </section>
      <section className="portfolio-collection" id="apps" aria-labelledby="collection-title">
        <div className="ds-shell">
          <div className="portfolio-section-heading"><div><p className="portfolio-eyebrow">The collection</p><h2 id="collection-title">Find your everyday essential.</h2></div><p>Browse by purpose. Every project has its own support and policy links, right where you need them.</p></div>
          <AppDirectory />
        </div>
      </section>
      <section className="portfolio-studio" id="approach" aria-labelledby="studio-title">
        <div className="ds-shell">
          <div className="portfolio-section-heading"><div><p className="portfolio-eyebrow">Behind the apps</p><h2 id="studio-title">Independent by choice.<br />Considered in the details.</h2></div><p>DigitalSprout is a UK software studio. We make individual apps with a clear job to do, and keep the people using them close to the process.</p></div>
          <div className="portfolio-principles">
            <article><Layers3 size={25} /><h3>One clear purpose</h3><p>Useful tools built around a specific task, from keeping a journal to finishing a shift.</p></article>
            <article><ScanLine size={25} /><h3>Clarity comes first</h3><p>Find product-specific privacy information and terms without having to search through unrelated projects.</p></article>
            <article><MessageCircle size={25} /><h3>A direct line to us</h3><p>Questions, a problem or a thoughtful suggestion? The studio support desk is an email away.</p><Link to="/support">Talk to our team <ArrowUpRight size={16} /></Link></article>
          </div>
        </div>
      </section>
      <section className="portfolio-contact"><div className="ds-shell portfolio-contact__inner"><div><p className="portfolio-eyebrow">Here to help</p><h2>Your app. The right answer.</h2><p>Find support, privacy policies and terms for every project.</p></div><Link className="ds-button ds-button--ink" to="/support">Visit the support hub <ArrowRight size={18} /></Link></div></section>
    </SitePage>
  );
}
