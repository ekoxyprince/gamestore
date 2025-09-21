import user from "./features/users/index.ts";
import { Hono } from "hono";

const v1Routes = new Hono();

v1Routes.route("/v1", user);

export default v1Routes;
