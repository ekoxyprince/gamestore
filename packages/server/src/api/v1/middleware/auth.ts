import { type MiddlewareHandler } from "hono";
import env from "../../../config/env.ts";
import { jwtVerify } from "jose";
import { StatusCodes } from "http-status-codes";
import UserRepository from "../database/repositories/userRepo.ts";
const userRepo = new UserRepository();

const secret = new TextEncoder().encode(env.jwt_secret);
interface JwtPayload {
  id: string;
}
export type Variables = {
  user: {
    userId: string;
    role: string;
  };
};
const auth: MiddlewareHandler = async (c, next) => {
  try {
    let authHeader = c.req.header("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return c.json(
        { success: false, error: { message: "invalid auth token" } },
        StatusCodes.UNAUTHORIZED
      );
    }
    const token = authHeader.split(" ")[1];
    const decoded = await jwtVerify(token!, secret, {
      issuer: env.domain,
      audience: env.domain,
    });
    const user = await userRepo.findOneById(decoded.payload.id as string);
    if (!user) {
      return c.json(
        { success: false, error: { message: "invalid auth token" } },
        StatusCodes.UNAUTHORIZED
      );
    }
    c.set("user", { userId: user.id, role: user.role });
    await next();
  } catch (error) {
    console.log(error);
    return c.json(
      { success: false, error: { message: "invalid auth token" } },
      StatusCodes.UNAUTHORIZED
    );
  }
};

export default auth;
