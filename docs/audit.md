# Evidence audit

This audit distinguishes observed source evidence from the rebuild brief and from
the implementation choices in this repository. The uploaded application was
reviewed as a product/workflow reference only; no source file or Git object was
copied into the rebuild.

Archive verification on 2026-08-20:

| Archive | Observed SHA-256 | Result |
| --- | --- | --- |
| `open-fieldservice.zip` | `272d254d5b9ac2703c6327ad417b3a3914cc8f4b32808a9dc99d1e509aba1008` | Matches the supplied expectation |
| `ai.zip` | `ffaa74d14f617cc5311bd57f2d0d9fe06673f74fe6e127f2de78134553b4e34d` | Matches the supplied expectation |

Both archives contain top-level `.git` directories. They were inventoried
without extraction and were not copied into this repository.

## Observed evidence and response

| Observed evidence | Risk / impact | Recommendation and rebuild response |
| --- | --- | --- |
| `open-fieldservice/package.json:1-27` declares Preact, Vite, Hono, Wrangler and D1; `wrangler.toml:1-9` binds D1. The README instead says Node/SQLite/better-sqlite3. | Setup guidance does not describe the executable system and D1 is not directly portable to Vercel Postgres. | Corrected here with a clean Next.js 16 App Router foundation. Production persistence remains gated until an approved Marketplace Postgres resource is connected. |
| `src/server/index.ts` is 1,344 lines, `src/client/hooks/use-app.ts` is 409 lines and `src/client/styles.css` is 932 lines. | Server routes, global state and styling become hard to test and change independently. | Rebuilt by route and feature boundary. Server intake validation lives under `features/estimates`; visual shells and interactive islands are separate components. |
| `use-app.ts:40-88` owns most domain collections and the initial effect requests stats, jobs, customers, technicians, service types, materials, invoices, schedule and lookups. Additional effects refetch jobs/customers/invoices/schedule. | Initial over-fetching and duplicated requests grow with the product. | Portal routes render route-local synthetic data. The target architecture requires Server Component reads scoped to each route. |
| `use-app.ts:93-105` refetches jobs and customers whenever the search state changes, without debounce or cancellation. | Every keystroke can issue work and stale results can win. | Search controls are visual-only in this local demo. The production handoff specifies URL-backed, debounced and abortable server queries. |
| `src/client/app.tsx:22-55` performs hand-written routing and falls through to the dashboard. Detail selection is effect-driven and can briefly show stale/blank state. | Unknown URLs and loading transitions are ambiguous. | File-system routes, route-level loading/error/not-found states and dynamic template validation now handle navigation. |
| No session, membership, role, organization or authorization middleware exists. `?agent` only toggles UI visibility in `app.tsx:16-25`. | Anyone with network access could perform privileged operations; a query flag is not authorization. | `/app/**` is protected at proxy and server-layout boundaries. Current access is explicitly a read-only showcase cookie, not production auth. Clerk/organization roles remain a deployment gate. |
| `src/server/index.ts:103-106` reads and updates counters separately; creation paths use `ORDER BY id DESC LIMIT 1`; invoice header/line writes are not one transaction. | Concurrent requests can collide, return another request's row or leave partial financial records. | Production target uses database-generated scoped references, transactions and idempotency. The local intake handler demonstrates validation/idempotency but reports `persisted:false`. |
| `src/server/schema.sql:25,42,50,83-84,103-106,118-120` stores money as `REAL` and cascades customer/material deletions. | Binary rounding and destructive history loss are unacceptable for estimates/invoices. | Domain tests enforce integer cents. Target model uses immutable invoice snapshots, inventory movements and archive/soft-delete rules. |
| Query schemas accept broad strings and unbounded limits; operational timestamps do not declare `America/Toronto`. | Abuse, inconsistent states and DST errors appear at scale. | External boundaries use Zod and a 32 KB request limit. The target model requires enums, bounded pagination, UTC storage and Toronto presentation. |
| The CSS removes outlines in several form-control rules and has no responsive media query. Custom modal overlays do not show dialog focus behavior. | Keyboard and mobile use are materially impaired. | Rebuild includes `:focus-visible`, reduced-motion support, 44 px controls, mobile card tables, agenda schedule and semantic details/forms. |
| Package scripts expose development/build only; no test/spec files are present. | Regressions have no automated gate. | Added lint, strict typecheck, unit, integration, E2E, build and verify scripts plus CI. |
| `README.md:213-215` says AGPL-3.0 while root `LICENSE:1-13` is MIT. | Commercial reuse provenance is unresolved. | No source code was retained. The conflict is recorded in `THIRD_PARTY_NOTICES.md` and must be resolved before any later source reuse. |
| The supplied AI archive is the Vercel AI SDK monorepo rather than application code. | Vendoring it would add hundreds of MB, unrelated tooling and future maintenance risk. | It was inventoried only. No SDK code, workspace file, lockfile or Git history was copied. Gateway implementation waits for an approved model/resource configuration. |

## Current implementation boundary

Fixed locally: route structure, responsive public/portal HTML and CSS, synthetic
content, image disclosure, request validation, idempotent local response,
noindex metadata/headers, showcase route gating, loading/error/not-found states,
domain tests and production build.

Still gated: production identity/roles, organization isolation, Postgres
transactions, private uploads, rate-limit provider, email delivery/webhooks,
persistent audit history, live AI Gateway calls, analytics, preview deployment
and production promotion.
