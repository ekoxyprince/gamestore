import { Hono } from "hono";
import signin from "./signin.ts";
import signup from "./signup.ts";

const auth = new Hono();

auth.route("/auth", signin);
auth.route("/auth", signup);

export default auth;
