export const dynamic = "force-static";

export function GET() {
  return Response.json(
    {
      status: "ready",
      service: "sppg-wonodri3",
      timestamp: new Date().toISOString(),
    },
    {
      status: 200,
      headers: { "content-type": "application/json", "cache-control": "no-store" },
    }
  );
}
