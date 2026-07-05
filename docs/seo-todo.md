# SEO Todo

Baseline date: 2026-07-05
GSC range: 2026-06-05 to 2026-07-02
Search type: Web

## Baseline

| Metric | Value |
| --- | ---: |
| Clicks | 1 |
| Impressions | 18 |
| CTR | 5.56% |
| Avg. position | 2.94 |

Notes:

- Query rows are suppressed/anonymized due to low volume.
- Most visibility is branded or near-branded enough that technical cleanup comes before content expansion.
- Canonical domain is `https://www.itersv.com`.

## Completed

- [x] Confirm production canonical domain as `https://www.itersv.com`.
- [x] Update production `NEXT_PUBLIC_SITE_URL` to `https://www.itersv.com`.
- [x] Verify `https://itersv.com/` redirects to `https://www.itersv.com/`.
- [x] Verify `robots.txt` points to `https://www.itersv.com/sitemap.xml`.
- [x] Verify `sitemap.xml` emits only `https://www.itersv.com` URLs.
- [x] Verify homepage canonical, hreflang, Open Graph URL, and Open Graph image use `https://www.itersv.com`.

## Next Technical Fixes

- [x] Resubmit `https://www.itersv.com/sitemap.xml` in Google Search Console.
- [x] Remove or let expire the stale `https://itersv.com/sitemap.xml` submission in Google Search Console.
- [x] Request indexing for the six canonical public URLs:
  - `https://www.itersv.com/`
  - `https://www.itersv.com/es`
  - `https://www.itersv.com/case-studies/whatsapp-ai-triage-engine`
  - `https://www.itersv.com/case-studies/synccore-revops-engine`
  - `https://www.itersv.com/es/case-studies/whatsapp-ai-triage-engine`
  - `https://www.itersv.com/es/case-studies/synccore-revops-engine`
- [x] Add `noindex` metadata to admin/auth utility pages such as `/login`, `/auth/confirm`, and `/auth/callback`.
- [x] Change case-study hero titles from styled `div` text to semantic `h1` elements.
- [x] Add structured data for Organization, WebSite, BreadcrumbList, and case-study pages.

## Content Guardrails

- Keep English as the default locale and Spanish under `/es`.
- Keep case-study pages positioned as sample workflows, not client results.
- Keep copy updates bilingual in `src/lib/site-data.ts`.
- Do not add fake testimonials, fake metrics, or claims that imply deployed client work.

## Recheck After Cleanup

- [ ] Confirm GSC selected canonical is `https://www.itersv.com/`, not `https://itersv.com/`.
- [ ] Confirm sitemap status shows the six submitted URLs and nonzero indexed URLs.
- [ ] Confirm `/es` and both Spanish case-study URLs are known to Google.
- [ ] Compare next 28 settled days against the current baseline: clicks 1, impressions 18, CTR 5.56%, avg. position 2.94.
