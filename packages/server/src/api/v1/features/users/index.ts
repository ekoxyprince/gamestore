import auth from "./auth/index.ts";
import profile from "./profile/index.ts";
import { Hono } from "hono";
const user = new Hono();

user.route("/user", auth);
user.route("/user", profile);

export default user;
