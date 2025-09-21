import app from "./app.js";
import { serve } from "@hono/node-server";
import env from "./config/env.js";
import connectToDb from "./api/v1/database/index.ts";

connectToDb().then(() => {
  const server = serve({
    port: Number(env.port),
    fetch: app.fetch,
  });
  server.on("listening", () => {
    console.log(`Server is running on port ${env.port}`);
  });
});
