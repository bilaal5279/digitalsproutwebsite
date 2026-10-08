# HRTree website handoff

Prepared 8 October 2026. The HRTree legal text is a draft for the owner's legal review before publication. Check the operator details, support retention and provider arrangements, international transfer safeguards, store listing and shipped app behaviour. This document is internal release context; it is not rendered on the public pages.

## URLs

| Purpose | Canonical URL |
| --- | --- |
| App privacy | https://digitalsprout.org/hrtree/privacy-policy |
| App terms | https://digitalsprout.org/hrtree/terms-of-service |
| App support | https://digitalsprout.org/hrtree/support |

The requested short paths `/hrtree-privacy` and `/hrtree-terms` render the matching documents with canonical tags pointing at the URLs above. HRTree is listed in the existing studio app and policy directory as in development. No App Store link or release availability is invented.

## Basis for the drafts

Operator/contact details and England/Wales governing-law language follow the existing `src/site/HaulfolioLegal.jsx` and site footer: DIGITALSPROUT LTD, company 16297589, 1 Paxton Road, Stourbridge, England, DY9 8YD, info@digitalsprout.org.

The app information supplied for this work describes on-device records and preferences, medication and dose logs, check-ins, symptom severity, sleep, bleeding/flow, notes and appointments. Optional notifications are local. There is no HRTree account/backend, advertising or analytics SDK, Apple Health access or automatic cloud sync. Apple StoreKit handles native review requests. PDF reports are created locally and shared only through a user-selected destination. Local journal reset does not revoke exported reports, device backups or public reviews. The policies do not claim a medical-device certification or prescribe treatment.

Authoritative reference checks:

- [Apple: what iCloud Backup includes](https://support.apple.com/en-us/108770)
- [Apple: ratings and reviews](https://developer.apple.com/app-store/ratings-and-reviews/)
- [Apple Privacy Policy](https://www.apple.com/legal/privacy/)
- [Apple standard end-user licence](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/)
- [NHS: hormone replacement therapy](https://www.nhs.uk/medicines/hormone-replacement-therapy-hrt/)
- [ICO: individual rights](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/)

## Repository and deployment

The user-authorized `git pull --ff-only` advanced local `main` from `a63ab05` to `55d196a`. The HRTree changes are prepared as a bounded source commit on `main`; the eight pre-existing working-tree deletions are excluded. No direct Netlify deployment was performed.

Production `https://digitalsprout.org` responds from Netlify. The repository uses React/Vite and `public/_redirects` contains `/* /index.html 200` for client-side routes. The normal build command is `npm run build` and output directory is `dist`. The repository also tracks `dist`, but no Netlify project identifier, build configuration or automatic-publish mapping was found in the source. Confirm the existing Netlify site's linked repository/branch and build settings before publishing. Preserve the SPA rewrite so direct App Store links load correctly.

The checkout already had these deleted tracked files before this task, and that deletion state is preserved:

- `README.md`
- `UNSENT_EULA.txt`
- `eslint.config.js`
- `index.html`
- `package-lock.json`
- `package.json`
- `src/components/UnsentEULA.jsx`
- `src/index.css`

Those existing deletions prevent a normal build in this working directory. Validation instead used a temporary copy of the new upstream HEAD, excluding its tracked Windows `node_modules`, overlaid with only the HRTree changes and installed with `npm ci`. The source checkout's dependency tree and existing deletions were not replaced. Do not stage the pre-existing deletions as part of the HRTree release. For release, use the complete tracked HEAD plus the HRTree changes, or first resolve those deletions with the owner.

## Changed source files

- `src/site/HRTreePages.jsx`: privacy, terms, support and shared HRTree document layout.
- `src/App.jsx`: canonical routes and two short-path aliases.
- `src/site/siteData.js`: HRTree directory metadata.
- `src/site/AppDirectory.jsx`: support-page links when an app declares one, retaining email support for other apps.
- `src/site/HRTreePages.test.jsx`: new legal/disclosure/link/alias checks.
- `src/App.test.jsx`: existing directory-count expectations now use the actual project list length.
- `HRTREE_RELEASE_NOTES.md`: this handoff.

## Validation

Production build passed, ESLint passed, and all 78 Vitest tests passed, including 6 new HRTree-specific tests. The built privacy page was opened and visually inspected in Chrome. `git diff --check` passed. The isolated npm install reported four pre-existing dependency advisories (one moderate, three high); dependency upgrades were outside this content change. The new tests cover privacy distinctions, clinical/reminder limitations, deletion/contact instructions, canonical URLs, aliases and directory links; existing route tests also enumerate the new privacy and terms routes. Build output is retained in the temporary validation directory for review, not copied into tracked `dist` or published automatically.


## Current publish blocker

The deployment relationship cannot yet be confirmed: no Netlify CLI/config/environment credential is available, and GitHub exposes no statuses, check-runs or deployment records for upstream commit `55d196a`. The Netlify browser sign-in leads to an empty GitHub login form. The login tab is kept open for owner handoff; no credentials were entered. The source update can be published through Git; hosted deployment status must be checked separately. A source push alone is not proof that Netlify has published the pages.

Validated build output: `/var/folders/dd/5f_c2dvd545f7d9_3kmgxwt80000gn/T/hrtree-site-check-fhppg2zi/dist`. A local preview runs at `http://127.0.0.1:4178/hrtree/privacy-policy` while this work is active.
