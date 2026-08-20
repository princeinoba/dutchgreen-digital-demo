# Deployment runbook

## Authorized targets

- GitHub: https://github.com/princeinoba/dutchgreen-digital-demo
- Vercel team: **princeinobas-projects**
- Vercel project: **dutchgreen-digital-demo**

Always link these exact targets explicitly. Never reuse another Vercel project,
change custom-domain DNS, force-push, bypass protected checks, or commit .env
files, credentials, archives, caches or .vercel metadata.

## Local release gate

Use Node 24 and pnpm 11.19.0:

    corepack enable
    pnpm install --frozen-lockfile
    pnpm lint
    pnpm typecheck
    pnpm test
    pnpm test:integration
    pnpm build
    PLAYWRIGHT_BASE_URL=http://127.0.0.1:3000 pnpm test:e2e

Public routes require no secrets. **Open portfolio demo** on /sign-in creates a
four-hour, HttpOnly, read-only showcase cookie. It is demonstration access, not
production identity or authorization.

## Environment gate

NEXT_PUBLIC_APP_URL is an optional canonical sitemap URL. Vercel's system
deployment hostname is used when it is omitted on Vercel. NEXT_PUBLIC_DEMO_MODE
is a reserved public flag and must remain true. DATABASE_URL is optional for
the current read-only build; database scripts skip safely when it is absent.

All other names in .env.example are reserved for later, disabled integrations.
Do not invent values or enable a feature until its provider, authorization,
persistence, validation, error handling and tests are implemented.

## Preview

    vercel link --yes --project dutchgreen-digital-demo --scope princeinobas-projects
    vercel pull --yes --environment=preview --scope princeinobas-projects
    vercel build
    vercel deploy --prebuilt --scope princeinobas-projects
    vercel inspect <preview-url> --scope princeinobas-projects

Verify every route, direct refresh, desktop/mobile layout, same-origin assets,
form validation, the demo sign-in flow, the real 404, security/noindex headers,
console/network state and the absence of localhost or secret-bearing responses.

## Production

Record the current Production deployment before any release. After the release
commit is on the default branch and the Preview is READY and verified, build
with Production configuration. When the installed CLI supports staged promotion,
deploy with --skip-domain, verify the staged deployment, then promote that exact
deployment. Otherwise use the safest supported Production deployment and record
the resulting deployment ID, URL and Git SHA.

Do not attach dutchgreen.ca or change DNS. If post-promotion verification fails,
roll back to the recorded previous Production deployment and verify restoration.

## Production-resource phase

Before enabling non-demo features, provision and validate approved resources for
identity/organization roles, transactional Postgres persistence, private uploads,
rate limiting/idempotency, email delivery/webhooks, durable AI usage/audit records
and redacted observability. The current release intentionally keeps these features
disabled and makes no real customer contact.
