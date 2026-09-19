# Meta policy pages: release checklist

Prepared September 19, 2026. Local implementation; not yet deployed.

Approved by Javier:
- Controller: Javier Alejandro Flores, operating as Iter / Itersv, El Salvador.
- Contact: hola@itersv.com.
- Raw Meta test snapshots: up to 30 days.
- Reconciliation reports: only while needed for the agreed business task.
- Meta data services: n8n.itersv.com, OpenAI/ChatGPT, Supabase; Vultr hosting.

Public pages: /privacy, /data-deletion, /es/privacy, /es/data-deletion.
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
8. Replace/remove the existing Facebook-homepage Terms placeholder separately.

Data-handling form answers: no national-security disclosures in last 12 months;
no existing government-request procedures. Do not claim newly proposed policies
were already in place. Full shared-app checklist is in ropachiva-mcp's
docs/iter-app-review.md.

These pages describe the confirmed proposed service practices. They do not
establish Meta approval or certify compliance with every applicable law.
