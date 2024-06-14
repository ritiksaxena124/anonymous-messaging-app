import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6, {
    message: "Invalid password",
  }),
});
