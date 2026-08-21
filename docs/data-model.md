# Target data model

The current visual demo uses deterministic in-process synthetic records. The
production resource phase should add versioned Postgres migrations with the
following rules.

| Domain | Tables | Important rules |
| --- | --- | --- |
| Identity | `organizations`, `users`, `memberships` | UUID keys; roles owner/admin/estimator/crew; organization in every policy |
| Intake | `leads`, `lead_assets`, `lead_status_events`, `consents`, `idempotency_keys` | private assets; normalized contact fields; append-only status/consent evidence |
| Estimate | `estimates`, `estimate_items`, `estimate_status_events` | integer cents; version checks; immutable accepted snapshot |
| Customer | `customers` | organization scoped; archive instead of destructive delete |
| Work | `jobs`, `job_assignments`, `job_notes`, `job_checklist_items` | UTC timestamps; Toronto schedule interpretation; append-only activity |
| Catalog | `service_types`, `service_questions` | approved copy is shared by public UI and knowledge retrieval |
| Inventory | `materials`, `inventory_movements`, `job_materials` | stock is derived from additions/allocations/use/returns/corrections |
| Billing | `invoices`, `invoice_items`, `invoice_status_events` | one transactional write; line snapshots; unique job invoice/idempotency |
| Communication | `messages`, `email_events` | human approval, provider ID, delivery webhook state |
| AI | `knowledge_documents`, `ai_conversations`, `ai_messages`, `ai_usage` | source/version, model, tokens, latency, cost, reviewer and result state |
| Governance | `audit_events`, `organization_settings` | actor, organization, request ID, before/after summary and UTC timestamp |

## State transitions

- Lead: `new → qualified → site_visit → estimate_sent → won`; `lost` is a
  terminal reviewable path.
- Estimate: `draft → sent → accepted | declined | expired`.
- Job: `scheduled → confirmed → in_progress → completed`; cancellation records
  an event and does not delete work history.
- Invoice: `draft → sent → overdue | paid`; voiding records reason/actor.

Every transition must be re-authorized and validated on the server inside the
same transaction that appends its status/audit event.

## Data invariants

- Money is integer Canadian cents.
- Operational rows include `organization_id`.
- Public IDs are UUIDs; human references come from an atomic database sequence.
- Timestamps are stored in UTC and displayed in `America/Toronto`.
- Compound intake, conversion, invoice and inventory changes are transactional.
- Customer, job, material and invoice history is archived rather than erased.
