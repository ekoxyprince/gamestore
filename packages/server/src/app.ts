import { Hono } from "hono";
import { compress } from "hono/compress";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import v1Routes from "./api/v1/index.ts";

const app = new Hono();
app.use(compress());
app.use(cors());
app.use(logger());
app.route("/api", v1Routes);

export default app;
