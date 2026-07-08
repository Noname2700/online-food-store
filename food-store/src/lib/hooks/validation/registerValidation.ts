import { z } from "zod";
import { UserRegisterSchema } from "@/src/schemas/userRegisterSchemas";

export const validateRegister = (
  values: z.infer<typeof UserRegisterSchema>,
) => {
  const errors: Partial<
    Record<keyof z.infer<typeof UserRegisterSchema>, string>
  > = {};
  const result = UserRegisterSchema.safeParse(values);

  if (!result.success) {
    for (const issue of result.error.issues) {
      errors[issue.path[0] as keyof z.infer<typeof UserRegisterSchema>] =
        issue.message;
    }
  }

  return errors;
};
