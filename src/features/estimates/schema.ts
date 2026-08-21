import { z } from "zod";

export const estimateSchema = z.object({
  service: z.enum(["patios", "walkways", "driveways", "retaining-walls", "decks", "pool-landscapes"]),
  timeline: z.enum(["This season", "Next season", "Planning ahead", "Not sure"]),
  postalCode: z.string().trim().toUpperCase().regex(/^K[0-4][A-C-EG-HJ-NPR-TV-Z]\s?\d[A-C-EG-HJ-NPR-TV-Z]\d$/, "Enter an Ottawa-area postal code"),
  description: z.string().trim().min(12, "Add a little more project detail").max(700),
  budget: z.enum(["Under $10k", "$10k–$25k", "$25k–$50k", "$50k+"]).optional(),
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().toLowerCase().pipe(z.email()),
  phone: z.string().trim().regex(/^[+()\d\s.-]{7,24}$/, "Enter a valid phone number"),
  contact: z.enum(["Email", "Phone"]),
  consent: z.literal(true),
});

export type EstimateInput = z.infer<typeof estimateSchema>;
