import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().uuid("Invalid ID format."),
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Enter a valid email address."),
  hashedPassword: z
    .string()
    .min(6, "Password must be at least 6 characters long"),
  createdAt: z.date(),
});
 