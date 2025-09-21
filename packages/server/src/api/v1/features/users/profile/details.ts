import { Hono } from "hono";
import UserRepository from "../../../database/repositories/userRepo.ts";
const userRepo = new UserRepository();
import auth, { type Variables } from "../../../middleware/auth.ts";
import { StatusCodes } from "http-status-codes";
import { isUser } from "../../../middleware/role.ts";

export default new Hono<{ Variables: Variables }>().get(
  "/details",
  auth,
  async (c) => {
    const user = c.get("user");
    const details = await userRepo.findOneById(user.userId);
    return c.json(
      { success: true, message: "detailed retrieved", data: details },
      StatusCodes.OK
    );
  }
);
