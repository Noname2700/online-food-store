import { z } from "zod";

export const customerProfileSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(50, "Name must be less than 50 characters."),

  email: z.string().email("Enter a valid email address."),

  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits."),

  address: z.string().min(5, "Address must be at least 5 characters."),

  apartment: z.string().optional(),

  city: z.string().min(2, "City must be at least 2 characters."),

  state: z.string().length(2, "State must be a 2‑letter code (NY, NJ, CA)."),

  zip: z.string().regex(/^\d{5}$/, "ZIP code must be 5 digits."),

  deliveryInstructions: z
    .string()
    .max(200, "Delivery instructions must be under 200 characters.")
    .optional(),
});
