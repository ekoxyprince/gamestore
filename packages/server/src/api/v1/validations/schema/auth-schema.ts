import z from "zod";

export const signupSchema = z.object({
  fullname: z.string().nonempty(),
  email: z.string().nonempty(),
  password: z.string().nonempty(),
});

export const signinSchema = z.object({
  email: z.string(),
  password: z.string(),
});
