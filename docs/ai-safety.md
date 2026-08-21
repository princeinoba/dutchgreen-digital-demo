# AI safety boundary

No live model is called by the local portfolio build. The operations workspace
shows a deterministic, labelled draft so reviewers can assess placement,
disclosure and human-control UX without implying a Gateway integration works.

## Approved assistants

| Assistant | Evidence allowed | Output | Human gate |
| --- | --- | --- | --- |
| GreenGuide FAQ | approved `knowledge_documents` only | short sourced answer or staff escalation | content owner approves source corpus |
| Estimate Concierge | current structured form fields | editable summary and missing-info list | homeowner reviews before submit |
| Lead Copilot | authorized organization-scoped lead | summary, flags and suggested next action | staff chooses any status/schedule action |
| Reply Draft | approved facts and authorized record | labelled email/SMS draft | staff edits, approves and explicitly sends |
| Job Brief | accepted estimate and service template | draft checklist/site brief | admin/crew approves before publication |

## Non-negotiable controls

- Retrieved, uploaded and user text is untrusted data, never system instruction.
- Retrieval sources and tools are allowlisted and organization-scoped.
- Price, availability, warranty, permit, safety and scheduling claims require an
  approved source or the assistant says it does not know.
- Send, schedule, status, price, invoice and destructive actions require a new
  server authorization plus explicit human confirmation.
- Store stable generation/conversation IDs, model/provider, prompt version,
  latency, tokens, cost, result/error and reviewer outcome.
- Redact email, phone, address, upload URLs, secrets and unnecessary free text
  from logs and analytics.
- Enforce per-user and per-organization rate/cost limits.
- Evaluate unsupported pricing, empty retrieval, prompt injection, data
  exfiltration, ambiguous/bilingual requests and cross-organization access.

## Enablement gate

Before enabling Vercel AI Gateway:

1. connect an approved knowledge store and identity/organization model;
2. pin the released AI SDK and inspect its installed exports/types/docs;
3. retrieve a current Gateway model ID and configure it by environment;
4. add durable usage/audit persistence and redacted observability;
5. pass authorization, groundedness, injection and approval-gate evaluations.
