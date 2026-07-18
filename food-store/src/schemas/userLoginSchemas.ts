import { z } from "zod";

export const UserLoginSchema = z.object({
    email: z.string().email(" Enter a valid email address."),
    password: z.string(),
  
});