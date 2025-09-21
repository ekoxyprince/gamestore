import { Hono } from "hono";
import details from "./details.ts";

export default new Hono().route("/profile", details);
