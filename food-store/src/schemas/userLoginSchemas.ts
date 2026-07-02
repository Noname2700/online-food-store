import { z } from "zod";

export const UserLoginSchema = z.object({
    email: z.string().email(" Enter a valid email address."),
    password: z.string().min(6, "Password be at least 6 characters.").regex(/[A-Z]/, "Password must contain an uppercase letter.").regex(/[0-9]/, "Password must contain a number."),
  
});