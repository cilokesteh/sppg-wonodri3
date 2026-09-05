export const dynamic = "force-static";

export function GET() {
  return Response.json(
    {
      status: "ok",
      service: "sppg-wonodri3",
      timestamp: new Date().toISOString(),
    },
    {
      status: 200,
      headers: { "cache-control": "no-store" },
    }
  );
}
