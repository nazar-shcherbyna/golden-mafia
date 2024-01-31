import { z } from "zod";

export const RegisterFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(8),
  name: z.string().min(2, {
    message: "Please enter your name",
  }),
});
