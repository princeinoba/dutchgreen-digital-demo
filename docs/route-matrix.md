# Route matrix

All routes inherit the independent-demo boundary and `noindex,nofollow`.
Top-level loading, error and not-found views are implemented; the portal adds
its own loading, error and record-not-found states.

| Route | Template / purpose | Responsive behavior |
| --- | --- | --- |
| `/` | Focused value, synthetic hero, service entries | One-column 390 px hero and single prominent CTA |
| `/services` | Six approved service paths | 3/2/1-column cards |
| `/services/[slug]` | Six generated service details | Image/copy stack; next-step cards collapse |
| `/projects` | Six synthetic project concepts | 3/2/1-column gallery |
| `/projects/[slug]` | Generated case-study template | Project brief stacks below image |
| `/process` | Five-stage lifecycle | Horizontal line becomes vertical timeline |
| `/about` | Team concept and confirmation labels | Copy precedes image on mobile |
| `/estimate` | Three-step recoverable form | Single-column card, 44 px controls |
| `/estimate/success` | Honest local receipt/reference | Compact centered receipt; no booked-visit claim |
| `/faq` | Six expandable answers | Two columns become one |
| `/contact` | General message and estimate channel | Form and contact cards stack |
| `/sign-in` | Authentication platform design and explicit portfolio entry | Mobile image header matches reference |
| `/forgot-password` | Honest recovery-unavailable state | Uses the responsive authentication shell |
| `/privacy` | Plain-language principles | Single readable policy card |
| `/accessibility` | WCAG commitments | Single readable policy card |
| `/directors-ai-workspace` | KPIs, pipeline, attention queue, schedule | 2-column KPIs, card table, bottom nav |
| `/directors-ai-workspace/leads` | Search/filter lead register | Rows become labelled record cards |
| `/directors-ai-workspace/leads/[id]` | Project, AI draft, timeline, next action | Panels stack |
| `/directors-ai-workspace/schedule` | Week grid plus mobile agenda | Calendar becomes agenda below 700 px |
| `/directors-ai-workspace/jobs` | Job register | Rows become labelled cards |
| `/directors-ai-workspace/jobs/[id]` | Site brief, status, checklist, activity | Panels stack; checklist remains interactive |
| `/directors-ai-workspace/customers` | Customer register | Rows become labelled cards |
| `/directors-ai-workspace/customers/[id]` | Profile, history, communication | Hero/history panels stack |
| `/directors-ai-workspace/crew` | Availability and workload | Two-column cards become one |
| `/directors-ai-workspace/services` | Approved service catalog | Labelled mobile cards |
| `/directors-ai-workspace/materials` | KPIs and inventory view | Labelled mobile cards |
| `/directors-ai-workspace/invoices` | Billing KPIs and register | Labelled mobile cards |
| `/directors-ai-workspace/invoices/[id]` | Synthetic invoice detail | Invoice/state panels stack |
| `/directors-ai-workspace/ai` | Approved-assistant workspace | Assistant rail hides; reviewed draft remains |
| `/directors-ai-workspace/settings` | Profile and workspace controls | Fields and controls stack |

Protected Directors workspace routes redirect anonymous requests to `/sign-in`. Legacy `/app/**` URLs remain protected compatibility aliases. In this
portfolio build, an explicit read-only showcase action creates the local
HTTP-only cookie. Production must replace it with Clerk membership/role checks
at proxy, Server Component, server action and repository boundaries.
