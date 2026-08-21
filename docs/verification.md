# Verification

## Automated gates

Run:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm test:integration
pnpm build
pnpm test:e2e
```

The unit suite covers integer money, lifecycle transitions, inventory movements,
normalization and postal-code validation. The integration suite covers a valid
request, idempotent duplicate response and invalid input. Playwright covers
public discovery/estimate navigation and explicit portal gating at 390×844 and
1440×900.

## Manual responsive matrix

Review at 320, 390, 768 and 1440 CSS pixels:

- no horizontal document overflow;
- public header switches to compact menu;
- one primary estimate CTA remains visible;
- service/project/detail content order is logical;
- form fields, chips and actions remain at least 44 px;
- portal sidebar becomes top/bottom navigation;
- tables become labelled cards and retain every essential value;
- week schedule becomes agenda;
- sign-in matches the mobile image-header treatment;
- dialogs/details/forms have a visible keyboard path and focus.

## Accessibility baseline

- one skip link and semantic main/navigation landmarks;
- logical heading hierarchy per route;
- explicit labels for form controls and icon-only buttons;
- global `:focus-visible` treatment;
- status text in addition to colour;
- reduced-motion media query;
- loading, error, not-found and live form-error states.

Repeat Axe automation and assistive-technology review on the deployed preview.
Local checks do not establish WCAG conformance.

## Budgets

- no browser console errors in core journeys;
- no failed core-route requests;
- route-local JavaScript only for estimate, navigation, checklist, settings and
  simulated AI controls;
- hero images load eagerly only above the fold; other images lazy load;
- every `fill` image supplies `sizes`;
- synthetic JPEG source assets total approximately 3.1 MB and are optimized by
  Next Image at delivery;
- target good Core Web Vitals on the verified Vercel preview.

## Results recorded during the implementation pass

- Archive SHA-256 checks: 2/2 matched.
- ESLint: passed.
- TypeScript: passed.
- Unit tests: 5 passed, 0 failed.
- Integration tests: 3 passed, 0 failed.
- Next.js production build: passed; 30 static pages generated plus dynamic portal/API routes.
- Browser: 390×844 and 1440×900 home, sign-in and portal samples had no horizontal overflow or browser errors.
- Local Axe: 0 violations on final home, sign-in and portal samples; layered-image contrast checks remained automated-review incomplete.
- Playwright against the production server: 4 passed, 0 failed.
- Vercel preview/production: not run; authorization/resources were not supplied.
