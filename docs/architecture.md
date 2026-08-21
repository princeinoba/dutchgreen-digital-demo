# Architecture

## Implemented application

The repository is a clean Next.js 16.3 App Router application using React 19,
strict TypeScript, responsive CSS and small interactive client islands.

```text
browser
  ├─ public Server Component routes
  │    ├─ shared marketing shell
  │    ├─ reusable service/project templates
  │    └─ estimate client island → POST /api/estimate
  └─ /app/**
       ├─ proxy showcase boundary
       ├─ server-layout cookie check
       ├─ shared responsive portal shell
       └─ route-local synthetic records
```

Reads are rendered in Server Components. Client code is limited to the
three-step form, portal navigation state, checklist, settings and simulated AI
workspace. There is no global application data store and no route calls another
internal HTTP API for its initial render.

## Production target

When resources are approved, the dependency direction is:

```text
UI → server action / route handler → feature service → repository → Postgres
                                     ├─ private Blob
                                     ├─ Resend
                                     ├─ Upstash
                                     └─ AI Gateway
```

Features should own their schema, policy, service, repository and UI:
`leads`, `customers`, `estimates`, `jobs`, `schedule`, `crew`,
`services`, `materials`, `invoices`, `communications` and `ai`.

## Decisions

- Next.js App Router gives each route independent loading, errors, metadata and
  data access.
- Node runtime remains the default. No Edge-only dependency is introduced.
- Images are local approved synthetic concepts rendered through `next/image`
  with explicit `sizes`.
- CSS is split into shared/public, portal and responsive layers because the
  atlas is the visual authority. Component classes remain feature-oriented.
- A read-only showcase session demonstrates protected routing. It is
  intentionally replaceable and must not be treated as real authentication.
- The local estimate endpoint validates, limits request size and demonstrates
  idempotency, but deliberately returns `persisted:false`. It never invents a
  notification or appointment.
- AI output is deterministic in the local showcase and visibly labelled. No
  model call is made without Gateway configuration, approved knowledge and
  persistence.
