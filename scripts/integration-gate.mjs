const command = process.argv[2];
const known = new Set(["db:generate", "db:migrate", "db:seed"]);

if (!known.has(command)) {
  console.error("Unknown integration command.");
  process.exit(2);
}

if (!process.env.DATABASE_URL) {
  console.log(`${command}: skipped — DATABASE_URL is not configured for this visual portfolio build.`);
  console.log("Connect an approved Vercel Marketplace Postgres resource before enabling persistence.");
  process.exit(0);
}

console.error(`${command}: blocked — the production Drizzle migration package is intentionally not scaffolded until the approved provider is connected.`);
process.exit(1);
