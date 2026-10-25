# China Adventure

Live site: https://china-trip-website.vercel.app

This Next.js travel website deploys through its existing Vercel GitHub integration.
Run the package manager matching the committed lockfile, install dependencies, then run `npm run dev` for development or the `build` script for a production build.

## Pageviews

`app/layout.tsx` loads `https://metrics.aljufairi.org/script.js` with the site's public website ID. The tracker counts pageviews and deduplicates query/hash-only navigation. It sends origin/path and origin-only referrers, no queries/fragments/titles or custom events; it uses no cookies/storage, honors Do Not Track, and does not enable replay. Existing Vercel Analytics remains unchanged.

Analytics dashboard: https://sin.koi-procyon.ts.net:9443 (Tailscale and app login required). No analytics secret belongs in this repository. Change the layout's public website ID if moving the deployment to a different Umami instance.
