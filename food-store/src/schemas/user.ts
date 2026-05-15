import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(6),
});
