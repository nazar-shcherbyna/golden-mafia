"use server";

import { z } from "zod";
import { RegisterFormSchema } from "../schemas/register";

export const register = async (
  values: z.infer<typeof RegisterFormSchema>
): Promise<{
  success: string;
  error: string;
}> => {
  const validatedFields = RegisterFormSchema.safeParse(values);
  if (validatedFields.success === false) {
    return {
      error: "Invalid fields",
      success: "",
    };
  }

  return {
    success: "Register successful",
    error: "",
  };
};
