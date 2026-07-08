import { z } from "zod";
import { customerProfileSchema } from "../../../schemas/customerProfileSchema";

export const validateCustomerProfile = (
  values: z.infer<typeof customerProfileSchema>,
) => {
  const errors: Partial<
    Record<keyof z.infer<typeof customerProfileSchema>, string>
  > = {};

  const result = customerProfileSchema.safeParse(values);

  if (!result.success) {
    for (const issue of result.error.issues) {
      const key = issue.path[0] as keyof z.infer<typeof customerProfileSchema>;
      errors[key] = issue.message;
    }
  }
  return errors;
};
