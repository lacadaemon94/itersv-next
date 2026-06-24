# Iter

Internal developer README for the Iter Next.js app.

Iter is the bilingual marketing site for practical AI, automation, and web
systems. The app serves the English landing page at `/`, the Spanish landing
page at `/es`, and localized sample workflow pages under `/case-studies/*` and
`/es/case-studies/*`.

## Local Environment

This repository lives in WSL2:

```bash
/home/zjavier/projectx/itersv-next
```

Run project commands from Ubuntu/WSL, not from the Windows UNC path.

```powershell
wsl --% -d Ubuntu --cd /home/zjavier/projectx/itersv-next bash -lc "npm run dev"
```

Node is managed by `nvm` in Ubuntu. If a shell cannot find Node or npm, load nvm
first:

```bash
source ~/.nvm/nvm.sh
```

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

The dev server defaults to:

```txt
http://localhost:3000
```

If port `3000` is busy:

```bash
npm run dev -- -p 3001
```

## Environment Variables

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_EMAILS=javier.flores@itersv.com
N8N_BASE_URL=
N8N_API_KEY=
N8N_WEBHOOK_URL=
N8N_STRATEGY_CALL_WEBHOOK_URL=
N8N_OUTBOUND_WEBHOOK_URL=
N8N_STATUS_WEBHOOK_URL=
ZOHO_SMTP_HOST=smtp.zoho.in
ZOHO_SMTP_PORT=465
ZOHO_SMTP_SECURE=true
ZOHO_SMTP_USER=
ZOHO_SMTP_PASSWORD=
ZOHO_SMTP_FROM_EMAIL=hola@itersv.com
ZOHO_SMTP_FROM_NAME=Iter
ZOHO_NOTIFY_TO=javier.flores@itersv.com
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=whatsapp:+50360581739
OPENAI_API_KEY=
```

`NEXT_PUBLIC_SITE_URL` is used for canonical URLs, sitemap entries, and social
image URLs. Use the production origin in deployed environments.

The server-side Supabase variables power strategy-call capture, Supabase Auth,
and the internal WhatsApp inbox at `/admin/inbox`. Keep
`SUPABASE_SERVICE_ROLE_KEY`, n8n keys, Twilio credentials, and OpenAI keys
server-only; do not expose them with `NEXT_PUBLIC_`.

Supabase Auth should be configured with:

- Magic-link email login enabled.
- Site URL set to the production Iter URL.
- Redirect URLs for local and production `/auth/callback`.
- Custom SMTP enabled through the Zoho Mail account so auth emails do not rely
  on Supabase's default SMTP limits.

The strategy-call endpoint uses `N8N_STRATEGY_CALL_WEBHOOK_URL` when provided.
If that dedicated workflow URL is not configured, it sends the notification
directly through the Zoho SMTP variables. The n8n WhatsApp workflows should use
the Iter Supabase project and Zoho-backed email delivery for inbound WhatsApp
notifications.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run generate:icons
```

- `dev`: starts Next.js with Turbopack.
- `build`: creates the production Next.js build.
- `start`: serves a production build.
- `lint`: runs ESLint over the app.
- `generate:icons`: regenerates favicon, Apple, Android, Windows, and Safari
  icon assets from the Iter mark.

## Route Map

Local app routes:

```txt
http://localhost:3000/
http://localhost:3000/es
http://localhost:3000/case-studies/whatsapp-ai-triage-engine
http://localhost:3000/es/case-studies/whatsapp-ai-triage-engine
http://localhost:3000/case-studies/synccore-revops-engine
http://localhost:3000/es/case-studies/synccore-revops-engine
http://localhost:3000/login
http://localhost:3000/admin/inbox
```

Metadata and platform routes:

```txt
http://localhost:3000/opengraph-image
http://localhost:3000/twitter-image
http://localhost:3000/es/opengraph-image
http://localhost:3000/es/twitter-image
http://localhost:3000/case-studies/whatsapp-ai-triage-engine/opengraph-image
http://localhost:3000/case-studies/whatsapp-ai-triage-engine/twitter-image
http://localhost:3000/case-studies/synccore-revops-engine/opengraph-image
http://localhost:3000/case-studies/synccore-revops-engine/twitter-image
http://localhost:3000/robots.txt
http://localhost:3000/sitemap.xml
http://localhost:3000/manifest.webmanifest
```

## Useful URLs

Sample workflow live demos:

```txt
https://whatsapp-ai-triage-engine.vercel.app/
https://synccore-revops-engine-dashboard.vercel.app/
```

Sample workflow source repositories:

```txt
https://github.com/lacadaemon94/whatsapp-ai-triage-engine.git
https://github.com/lacadaemon94/synccore-revops-engine.git
```

Contact links used by the site:

```txt
mailto:hola@itersv.com
tel:+50360581739
```

Social links used by the site:

```txt
https://x.com/iter_ia
https://www.facebook.com/Itersv503
https://www.instagram.com/iter_airev/
https://www.linkedin.com/company/itersv
```

## Source Layout

```txt
src/app                 Next.js App Router routes and metadata conventions
src/components          Landing page, case-study page, header, icons, providers
src/lib                 Bilingual content, i18n helpers, SEO, social images
src/proxy.ts            Locale-aware pathname header for html lang support
public                  Static favicon and platform icon assets
scripts                 Utility scripts, including icon generation
```

Primary content lives in:

```txt
src/lib/site-data.ts
```

SEO and social metadata helpers live in:

```txt
src/lib/seo.ts
src/lib/social-image.tsx
```

## Content Notes

- English is the default locale at root paths.
- Spanish routes live under `/es`.
- The case-study pages are positioned as sample workflows, not client results.
- Keep copy changes bilingual: update English first, then the Spanish matching
  content in `src/lib/site-data.ts`.
- Avoid adding fake testimonials, fake metrics, or claims that imply a workflow
  was deployed for a client.

## Git Hygiene

Ignored local-only paths include dependency folders, Next.js build output,
environment files, WSL/local archives, and agent state. Keep `.env.example`
tracked when adding new public environment variables.

Before handing off changes:

```bash
npm run lint
npm run build
git status --short --ignored
```
