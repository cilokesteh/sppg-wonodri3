import { validateEnv } from "@/lib/env";

export const dynamic = "force-static";

export function GET() {
  try {
    const validated = validateEnv();
    return Response.json(
      {
        status: "ready",
        service: "sppg-wonodri3",
        siteUrl: validated.NEXT_PUBLIC_SITE_URL,
        timestamp: new Date().toISOString(),
      },
      {
        status: 200,
        headers: { "cache-control": "no-store" },
      }
    );
  } catch (error) {
    return Response.json(
      {
        status: "not_ready",
        service: "sppg-wonodri3",
        error: error instanceof Error ? error.message : "Configuration error",
        timestamp: new Date().toISOString(),
      },
      {
        status: 503,
        headers: { "cache-control": "no-store" },
      }
    );
  }
}
