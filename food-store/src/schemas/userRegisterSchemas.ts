import { z } from "zod";

export const UserRegisterSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.string().email(" Enter a valid email address."),
    password: z
      .string()
      .min(6, "Password be at least 6 characters.")
      .regex(/[A-Z]/, "Password must contain an uppercase letter.")
      .regex(/[0-9]/, "Password must contain a number."),
    confirmpassword: z.string(),
  })
  .refine((data) => data.password === data.confirmpassword, {
    path: ["confirmpassword"],
    message: "Passwords do not match.",
  });
