# DutchGreen Digital Demo

A responsive, independent portfolio demonstration for a connected landscaping
customer journey and field-operations workspace. All records and photography in
this repository are synthetic concept material.

## Requirements

- Node.js 24 or newer
- pnpm 11.19.0 through Corepack

## Local installation and development

    corepack enable
    pnpm install --frozen-lockfile
    pnpm dev

Open http://localhost:3000. Public pages are immediately available. Choose
**Open portfolio demo** on /sign-in to create a local HttpOnly demo-session
cookie for /directors-ai-workspace/**. This is intentionally not production
authentication. The Microsoft, Google and email controls demonstrate the
intended provider layout without storing credentials.

## Verification and production build

    pnpm lint
    pnpm typecheck
    pnpm test
    pnpm test:integration
    pnpm build
    pnpm test:e2e

Run the optimized application after a successful build with:

    pnpm start

## Environment variables

No environment variable is required to build or run the read-only portfolio
demo. Copy .env.example only when testing optional configuration.

| Name | Scope | Current status |
| --- | --- | --- |
| **NEXT_PUBLIC_APP_URL** | public, build/runtime | Optional canonical sitemap URL; Vercel system URL is the deployment fallback |
| **NEXT_PUBLIC_DEMO_MODE** | public, demo-only | Reserved; keep true for every portfolio deployment |
| **DATABASE_URL** | server-only, runtime | Optional and feature-gated; integration commands skip safely when absent |
| **NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY** | public, future auth | Optional and currently unused |
| **CLERK_SECRET_KEY** | server-only, future auth | Optional and currently unused |
| **BLOB_READ_WRITE_TOKEN** | server-only, future uploads | Optional and currently unused |
| **RESEND_API_KEY**, **RESEND_FROM_EMAIL** | server-only, future email | Optional and currently unused |
| **UPSTASH_REDIS_REST_URL**, **UPSTASH_REDIS_REST_TOKEN** | server-only, future rate limits | Optional and currently unused |
| **AI_GATEWAY_API_KEY**, **AI_GATEWAY_MODEL** | server-only, future AI | Optional and currently unused |
| **PLAYWRIGHT_BASE_URL** | test-only | Optional target for remote E2E verification |

Never commit .env.local, provider credentials, or tokens. Variables prefixed
with NEXT_PUBLIC_ are visible to browsers and must never contain secrets.

## Vercel deployment

The authorized target is the **dutchgreen-digital-demo** project in the
**princeinobas-projects** team. Link explicitly and verify a Preview before
promoting the same artifact to Production:

    vercel link --yes --project dutchgreen-digital-demo --scope princeinobas-projects
    vercel pull --yes --environment=preview --scope princeinobas-projects
    vercel build
    vercel deploy --prebuilt --scope princeinobas-projects

See [docs/deployment.md](docs/deployment.md) for the gated release runbook.
The production integrations described in the rebuild brief—identity, Postgres,
private Blob storage, Resend, Upstash and Vercel AI Gateway—remain feature-gated
until real resources and credentials are approved and connected.

## Portfolio boundary

This project is not affiliated with or endorsed by DutchGreen. It is configured
with noindex, nofollow, uses a text wordmark, and does not contain real customer
data, credentials, testimonials or production claims.
