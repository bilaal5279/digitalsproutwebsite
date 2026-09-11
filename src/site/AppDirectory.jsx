import { useId, useState } from "react";
import { ArrowRight, ArrowUpRight, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { projectCategories, studioProjects } from "./siteData";

export function AppDirectory({ policiesOnly = false }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All apps");
  const searchId = useId();
  const normalizedQuery = query.trim().toLowerCase();
  const projects = studioProjects.filter((app) => (category === "All apps" || app.category === category) && `${app.name} ${app.description} ${app.category}`.toLowerCase().includes(normalizedQuery));
  return (
    <div className="project-directory">
      <div className="project-toolbar">
        <div className="project-filters" role="group" aria-label="Filter apps by purpose">{projectCategories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
        <div className="project-search"><Search size={18} aria-hidden="true" /><label htmlFor={searchId} className="sr-only">Search apps</label><input id={searchId} type="search" placeholder="Search apps…" value={query} onChange={(event) => setQuery(event.target.value)} autoComplete="off" />{query && <button type="button" aria-label="Clear app search" onClick={() => setQuery("")}><X size={17} /></button>}</div>
      </div>
      <p className="project-count" role="status">{projects.length} {projects.length === 1 ? "project" : "projects"}{category !== "All apps" ? ` in ${category}` : " in the collection"}</p>
      {projects.length ? <div className={`project-grid ${policiesOnly ? "project-grid--policies" : ""}`}>{projects.map((app) => (
        <article className="project-card" key={app.name} id={`app-${app.slug}`}>
          <div className="project-card__header">{app.image ? <img className="project-monogram" src={app.image} alt="" width="52" height="52" loading="lazy" /> : <span className={`project-monogram project-monogram--${app.tone}`} aria-hidden="true">{app.monogram}</span>}<span className="project-category">{app.category}</span></div>
          <h3>{app.name}</h3><p>{app.description}</p>
          {app.upcoming && <span className="project-upcoming">In development</span>}
          <div className="project-card__links">{app.product && !policiesOnly ? <Link to={app.product} aria-label={`Explore ${app.name}`}>Explore app <ArrowUpRight size={16} /></Link> : <a href={`mailto:info@digitalsprout.org?subject=${encodeURIComponent(`${app.name} support`)}`} aria-label={`${app.name} support`}>Get support <ArrowUpRight size={16} /></a>}<div><Link to={app.privacy} aria-label={`${app.name} privacy policy`}>Privacy</Link>{app.terms && <Link to={app.terms} aria-label={`${app.name} terms of service`}>Terms</Link>}</div></div>
        </article>
      ))}</div> : <div className="project-empty"><Search size={28} /><h3>No apps found</h3><p>Try a different name or choose another category.</p><button type="button" onClick={() => { setQuery(""); setCategory("All apps"); }}>Show all apps <ArrowRight size={16} /></button></div>}
    </div>
  );
}
