import { type MiddlewareHandler } from "hono";
import { StatusCodes } from "http-status-codes";

export const isUser: MiddlewareHandler = async (c, next) => {
  const user = c.get("user");
  if (user.role !== "user") {
    return c.json(
      { success: false, error: { message: "Forbidden" } },
      StatusCodes.FORBIDDEN
    );
  }
  await next();
};
export const isAdmin: MiddlewareHandler = async (c, next) => {
  const user = c.get("user");
  if (user.role !== "admin") {
    return c.json(
      { success: false, error: { message: "Forbidden" } },
      StatusCodes.FORBIDDEN
    );
  }
  await next();
};
