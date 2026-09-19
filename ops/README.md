# Iter inbox qualification — September 19, 2026

## Delivery callbacks

`whatsapp-status-order.sql` was applied to Iter project `zmegzvizumiadufngzrs`
with the owner's approval. It replaces two existing invoker functions without
changing their signatures or grants. RopaChiva was not modified.

The live test proved callbacks can arrive out of order: n8n execution 351
applied `delivered`, then 352 applied `sent` for the same message. Twilio's
authoritative record remained Delivered. The patch prevents lower-progress
callbacks and repeated outbound logging from overwriting more advanced state.
Delivered/read take precedence over late failure notifications. Unknown
statuses do not replace known status.

Validation used temporary copies of the test conversation and functions in a
transaction that was rolled back. Checked forward progress, late sent, late
failure, late delivered after read, unknown status, repeated send logging and
genuine undelivered/error-code storage. No test sends occurred in this check.
After application, a late sent callback was replayed in a rolled-back
transaction against the designated test message; its stored state stayed
Delivered. One incorrect test-message label was repaired using the verified
Twilio outcome. Earlier unrelated messages were not rewritten.

Rollback: execute `whatsapp-status-order.rollback.sql` against Iter only. It
restores the previous function behavior, including its ordering vulnerability;
it does not revert verified message status. These scripts are targeted repair
artifacts, not a newly bootstrapped Supabase migration history. The repository
has no linked Supabase CLI baseline.

Remaining limitation: a callback received before the message is first logged
is still not buffered by the existing schema. Exactly-once sends across
network failures are also not guaranteed by the current outbound workflow.
The UI now avoids overlapping clicks and advises checking an uncertain send
before retrying.

Security advisor checked after the patch: existing server-only tables have
RLS with no client policies; those restrictions were preserved. Unrelated
warnings remain for `touch_updated_at` search_path and leaked-password
protection. No auth setting was changed.

References: [search_path advisory](https://supabase.com/docs/guides/database/database-linter?lint=0011_function_search_path_mutable),
[password protection](https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection).

## Inbox updates

The page previously loaded a static snapshot and reloaded only after a send.
It now refreshes through the existing authenticated API every five seconds
while visible, and on focus/reconnection. Requests do not overlap; cleanup
aborts requests and ignores stale results. Draft text stays in separate state.
The newest 100 messages are loaded and displayed chronologically; older
history pagination is not added by this fix.

Run `node --test tests/inbox-refresh.test.mjs`, `npm run lint` and
`npm run build`. All six tests, lint and production build passed locally.
The owner authorized production publication on September 19, 2026. The inbox
changes and these database repair records are versioned together; deploying
the website does not reapply the SQL repair.
