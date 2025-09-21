import { zValidator } from "@hono/zod-validator";
import { z, type ZodRawShape } from "zod";

export const validateJSON = function <T extends ZodRawShape>(
  schema: z.ZodObject<T>
) {
  return zValidator("json", schema);
};
