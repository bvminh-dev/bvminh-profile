# is-a.dev domain registration — remaining work

PR: https://github.com/is-a-dev/register/pull/52553
Fork branch: `bvminh-dev/register` @ `add-bvminh-domain`
Domain: `bvminh.is-a.dev` → Vercel project `minhs-projects-32c86aec/bvminh-profile`

## Files submitted

- `domains/bvminh.json` — `A` record `216.198.79.1`, owner `bvminh-dev`.
- `domains/_vercel.bvminh.json` — `TXT` record `vc-domain-verify=bvminh.is-a.dev,4a57eb160eb16d73b86f`.

## Remaining steps

- [ ] Wait for `is-a-dev/register` CI to pass on the PR (JSON/records/filename checks).
- [ ] Wait for a maintainer to review and merge the PR. Community repo — can take from hours to
      several days. Watch the PR for review comments and respond if changes are requested.
- [ ] After merge: DNS needs to propagate (usually minutes, occasionally up to ~1h).
- [ ] Confirm in Vercel Dashboard → `bvminh-profile` → Settings → Domains that `bvminh.is-a.dev`
      shows **Valid Configuration**.
- [ ] Load `https://bvminh.is-a.dev` directly and confirm it serves the site (not a 404 or SSL
      warning — first HTTPS cert issuance can take a few minutes after DNS resolves).
- [ ] Once confirmed working, double-check Vercel **Deployment Protection** is set the way you
      want long-term (it was temporarily disabled to let the is-a.dev reviewer view the preview
      URL during the PR — decide whether to keep it open or protect preview deployments only,
      keeping Production public).
- [ ] Update `metadataBase` in `app/layout.tsx` if the final canonical URL differs from
      `https://bvminh.is-a.dev` (it currently assumes this domain).

## If the PR is rejected or changes are requested

- Re-read requirements in `.github/PULL_REQUEST_TEMPLATE.md` on `is-a-dev/register`.
- Common rejection reasons: unreachable preview link, incomplete/placeholder-looking site,
  missing contact info. If asked to flesh out content first, update `lib/content.ts` with real
  copy before pushing more commits to the `add-bvminh-domain` branch (pushing new commits updates
  the same PR automatically).
