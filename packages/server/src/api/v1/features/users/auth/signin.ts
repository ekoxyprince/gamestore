import { Hono } from "hono";
import UserRepository from "../../../database/repositories/userRepo.ts";
import { validateJSON } from "../../../validations/index.ts";
import { signinSchema } from "../../../validations/schema/auth-schema.ts";
import bcrypt from "bcryptjs";
import * as jose from "jose";
import env from "../../../../../config/env.ts";
import { StatusCodes } from "http-status-codes";

const router = new Hono();
const repo = new UserRepository();
const secret = new TextEncoder().encode(env.jwt_secret);
const alg = "HS256";
router.post("/signin", validateJSON(signinSchema), async (c) => {
  const { email, password } = c.req.valid("json");
  const user = await repo.findOne({ email });
  if (!user) {
    return c.json(
      { success: false, error: { message: "incorrect creditials" } },
      StatusCodes.BAD_REQUEST
    );
  }
  const doMatch = await bcrypt.compare(password, user.password);
  if (!doMatch) {
    return c.json(
      { success: false, error: { message: "incorrect creditials" } },
      StatusCodes.BAD_REQUEST
    );
  }
  const accessToken = await new jose.SignJWT({
    id: user.id,
    "aun:astrodev:claim": true,
  })
    .setProtectedHeader({ alg })
    .setIssuer(env.domain)
    .setAudience(env.domain)
    .setIssuedAt()
    .sign(secret);

  return c.json(
    { success: true, message: "signin successful", accessToken },
    StatusCodes.OK
  );
});

export default router;
