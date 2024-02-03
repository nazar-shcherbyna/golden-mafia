"use server";

import { z } from "zod";
import { LoginFormSchema } from "../schemas/login";

export const login = async (
  values: z.infer<typeof LoginFormSchema>
): Promise<{
  success: string;
  error: string;
}> => {
  const validatedFields = LoginFormSchema.safeParse(values);
  if (validatedFields.success === false) {
    return {
      error: "Invalid fields",
      success: "",
    };
  }

  return {
    success: "Login successful",
    error: "",
  };
};
