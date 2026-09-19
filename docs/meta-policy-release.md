# Meta policy pages: release checklist

Privacy/deletion published September 19, 2026 at commit 546f4c0. Public routes,
languages, production canonicals and sitemap verified. Meta confirmed those
URLs saved, and Business and pages was selected.

Owner approved the English/Spanish terms and replacement Meta URL on September
19, 2026. Terms release is included in this commit; verify deployment and saved
Meta URL after push. Lint and production build passed with the terms routes.

Approved by Javier:
- Controller: Javier Alejandro Flores, operating as Iter / Itersv, El Salvador.
- Contact: hola@itersv.com.
- Raw Meta test snapshots: up to 30 days.
- Reconciliation reports: only while needed for the agreed business task.
- Meta data services: n8n.itersv.com, OpenAI/ChatGPT, Supabase; Vultr hosting.

Public pages: /privacy, /data-deletion, /terms and their /es equivalents.
Linked from both language home footers and case-study footers; in sitemap.
Pages require no login, database call, or new Supabase configuration.
Existing auth, RLS, client and admin behavior is unchanged.

Before production release:
1. Javier reviews the final policy for all projects sharing the Iter app.
2. Verify hola@itersv.com intake is monitored.
3. Confirm the manual snapshot-cleanup owner and collection dates; ensure removal
   within 30 days. No automated deletion job is installed by these website changes.
4. Verify provider copies and workflow logs have compatible retention.
5. Build, inspect both languages, deploy through the site's existing workflow.
6. Verify public HTTPS responses, canonical URLs, language links and sitemap.
7. Configure Meta's privacy URL and data-deletion INSTRUCTIONS URL only after
   those pages are live. An instructions page is not an API callback.
8. Set https://www.itersv.com/terms as the Meta Terms URL after confirming it is live.
   Blank removal was attempted twice; Meta restored the old placeholder on reload.

Data-handling form answers: no national-security disclosures in last 12 months;
no existing government-request procedures. Do not claim newly proposed policies
were already in place. Full shared-app checklist is in ropachiva-mcp's
docs/iter-app-review.md.

These pages describe the confirmed proposed service practices. They do not
establish Meta approval or certify compliance with every applicable law.
