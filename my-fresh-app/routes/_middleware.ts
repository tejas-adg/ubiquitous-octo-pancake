// Middleware runs before handling requests
import { FreshContext } from "$fresh/server.ts";

export async function handler(req: Request, ctx: FreshContext) {
  // 1. Pre-request handling
  console.log(`${req.method} ${req.url}`);

  // Check auth token from header
  const token = req.headers.get("authorization");
  if (!token && req.url.includes("/admin")) {
    return new Response("Unauthorized", { status: 401 });
  }

  // 2. Continue to route handler
  const resp = await ctx.next();

  // 3. Post-response handling
  resp.headers.set("x-powered-by", "Fresh");
  resp.headers.set("cache-control", "public, max-age=60");

  return resp;
}
