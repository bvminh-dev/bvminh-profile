# is-a.dev domain registration — remaining work

PR: https://github.com/is-a-dev/register/pull/52553
Fork branch: `bvminh-dev/register` @ `add-bvminh-domain`
Domain: `bvminh.is-a.dev` → Vercel project `minhs-projects-32c86aec/bvminh-profile`

## Files submitted

- `domains/bvminh.json` — `A` record `216.198.79.1`, owner `bvminh-dev`.
- `domains/_vercel.bvminh.json` — `TXT` record `vc-domain-verify=bvminh.is-a.dev,4a57eb160eb16d73b86f`.

## Remaining steps

- [x] Wait for `is-a-dev/register` CI to pass on the PR (JSON/records/filename checks).
- [x] Wait for a maintainer to review and merge the PR — merged.
- [x] After merge: DNS needs to propagate — confirmed via `dig`, A record and TXT record both
      resolve correctly.
- [x] Load `https://bvminh.is-a.dev` directly and confirm it serves the site — `curl` returns
      HTTP 200 with a valid TLS cert. (Vercel dashboard may still show "Proxy Status Unknown" —
      that's a UI check unrelated to whether the site actually serves; ignore it if the curl
      check above passes.)
- [x] Double-check Vercel **Deployment Protection** is set the way you want long-term — set to
      require Vercel Authentication for preview deployments; Production confirmed still public
      (`curl` returns HTTP 200, no auth wall).
- [x] Update `metadataBase` in `app/layout.tsx` if the final canonical URL differs from
      `https://bvminh.is-a.dev` — already set to `https://bvminh.is-a.dev`, matches the final
      domain, no change needed.

## If the PR is rejected or changes are requested

- Re-read requirements in `.github/PULL_REQUEST_TEMPLATE.md` on `is-a-dev/register`.
- Common rejection reasons: unreachable preview link, incomplete/placeholder-looking site,
  missing contact info. If asked to flesh out content first, update `lib/content.ts` with real
  copy before pushing more commits to the `add-bvminh-domain` branch (pushing new commits updates
  the same PR automatically).
