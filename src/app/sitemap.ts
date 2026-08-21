import type { MetadataRoute } from "next";

const routes = [
  "", "/services", "/services/patios", "/projects",
  "/projects/riverside-patio", "/process", "/about", "/estimate",
  "/faq", "/contact", "/sign-in", "/forgot-password", "/privacy", "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const configuredUrl = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "");
  const vercelHost = process.env.VERCEL_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const base = configuredUrl ?? (vercelHost ? `https://${vercelHost}` : "http://localhost:3000");
  return routes.map((route) => ({ url: `${base}${route}`, changeFrequency: "monthly" }));
}
