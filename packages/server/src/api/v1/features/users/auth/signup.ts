import { Hono } from "hono";
import UserRepository from "../../../database/repositories/userRepo.ts";
import { validateJSON } from "../../../validations/index.ts";
import { signupSchema } from "../../../validations/schema/auth-schema.ts";

const router = new Hono();
const repo = new UserRepository();

router.post("/signup", validateJSON(signupSchema), async (c) => {
  const { fullname, email, password } = c.req.valid("json");
  const user = await repo.findOne({ email });
  if (user) {
    return c.json({ success: false, error: { message: "User exists" } }, 409);
  }
  await repo.create({ fullname, email, password });
  return c.json({ success: true, message: "Signup successful" }, 201);
});

export default router;
