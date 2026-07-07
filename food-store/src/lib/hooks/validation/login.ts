import { z } from "zod";
import { UserLoginSchema } from "@/src/schemas/userLoginSchemas"

export const validateLogin = (values: z.infer<typeof UserLoginSchema>) => {
  const errors: Record<string, string> = {};
  const result = UserLoginSchema.safeParse(values);

  if(!result.success) {
    for (const issue of result.error.issues) {
      errors[issue.path[0] as string] = issue.message;
    }
  }

  return errors;
};

