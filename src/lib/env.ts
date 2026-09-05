import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url("NEXT_PUBLIC_SITE_URL harus berupa URL valid")
    .refine(
      (url) => !url.includes("localhost") || process.env.NODE_ENV !== "production",
      "NEXT_PUBLIC_SITE_URL tidak boleh localhost di production"
    ),
  NEXT_PUBLIC_GA_ID: z.string().optional(),
});

export type Env = z.infer<typeof envSchema>;

export function validateEnv(): Env {
  const result = envSchema.safeParse({
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://sppgwonodri3.web.id",
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  });

  if (!result.success) {
    const errors = result.error.issues.map((issue) => `${issue.path.join(".")}: ${issue.message}`).join(", ");
    throw new Error(`[FAIL-FAST] Environment Validation Failed: ${errors}`);
  }

  return result.data;
}

export const env = validateEnv();
