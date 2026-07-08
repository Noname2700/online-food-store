import { z } from "zod";

export const restaurantProfileSchema = z.object({
  restaurantName: z.string().min(3, "Restaurant name is required"),
  cuisineType: z.string().min(3, "Cuisine type is required"),
  address: z.string().min(5, "Address must be valid"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits."),
  openHours: z.number().min(0).max(23),
  closeHours: z.number().min(0).max(23),
  deliveryRadius: z.number().min(1).max(20),
  priceBracket: z.number().min(1).max(5),
});
