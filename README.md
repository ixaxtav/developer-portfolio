# Ixax Tavarez — developer portfolio

[www.ixaxtavarez.com](https://www.ixaxtavarez.com)

A personal portfolio for my work as a lead full-stack developer. Built with Next.js 16, React 19, TypeScript, and plain CSS. The visual direction is an editorial notebook: warm paper, serif headlines, purposeful diagrams, and readable project narratives.

## Develop

Use Node 22 (`nvm use`) and npm.

```sh
npm ci
npm run dev
```

No API keys, database, or environment variables are required.

## Verify

```sh
npm run check
npm audit --audit-level=moderate
```

`check` runs ESLint, TypeScript, the production build, and integration tests. The tests start and stop an isolated loopback production server on a free port. They verify pages and internal links, current career content, nonce-based CSP, headers, removed assets, PDF delivery/indexing, robots, sitemap, and social previews. They do not call third-party services or send messages. Visual/mobile and assistive-technology review remain manual checks.

ESLint 9 is retained for the current Next.js React/accessibility plugin peer compatibility; upgrade it when those plugins support ESLint 10. This is development tooling, not a deployed runtime dependency.

CI runs on pull requests and pushes to main. Dependabot checks npm weekly and GitHub Actions monthly. Updates still need review; there is no automatic merge.

## Content

- `content/profile.json`: public professional facts, job dates, skills, and résumé copy. Keep it free of private phone numbers, precise addresses, and credentials.
- `lib/projects.ts`: case-study narratives and conceptual workflows. Describe actual contributions; don't invent performance metrics or publish internal business rules.
- `app/work/[slug]/page.tsx`: case-study pages.
- `app/globals.css`: responsive design, visible focus, reduced-motion, and print styles.
- `public/avatar.png`: the only photograph; no operational/customer screenshots are served.

The case studies describe professional work whose source is private. Original workflow diagrams use no customer records, device identifiers, payroll details, or location data.

## Public résumé

The public PDF omits the personal phone number and uses a broad location. It shares its copy with the site's profile data. To regenerate it, use Python 3 with ReportLab installed:

```sh
python3 -m pip install reportlab
python3 scripts/build-resume.py
```

Inspect the generated PDF for layout and verify its text before committing. The committed PDF is served directly; deployment does not require Python. The PDF's `X-Robots-Tag: noindex, noarchive` expresses indexing preference, not confidentiality. Keep private application-specific résumé details outside this public repository.

## Security and privacy

- Current supported Next.js/React versions; committed npm lockfile.
- Per-request nonce-based script CSP through `proxy.ts`; HTML is dynamically rendered and not shared-cacheable so the nonce stays unique. This trades static HTML caching for stricter script execution. Static assets still cache normally.
- Inline styles remain permitted for framework-generated attributes; inline scripts require a nonce. No third-party script origins are allowed.
- Security headers include HSTS, nosniff, framing protection, a restricted permissions policy, and referrer policy.
- No account system, form handler, analytics SDK, third-party font request, or image-optimization endpoint is used.
- Vercel still processes infrastructure/request information; see the site's privacy page.
- Plain `.env` and `.env.*` files are ignored. Public identifiers and public email are intentionally visible.

Previously published screenshots and an older résumé were removed/replaced in September 2026. Ordinary commits do not erase historical Git objects, old deployment URLs, caches, forks, or downloaded copies. Assess those separately if any old content is confirmed sensitive. This repository does not perform destructive history rewrites or delete old deployments automatically.

## Deployment

Pushes to `main` trigger the connected Vercel project. `engines.node` selects Node 22. Vercel runs `npm run build`. The canonical host is `https://www.ixaxtavarez.com`; configure domain redirects in Vercel.

After deployment, check the home page, all case studies, `/resume.pdf`, `/robots.txt`, `/sitemap.xml`, security headers, and a mobile viewport. Make sure the live PDF has the current content and its noindex header. Old screenshot URLs should return 404.
