"use client";

import { LoginFormSchemaType } from "@/types";
import { LoginFormSchema } from "@/zodSchemas/login";
import { useFormState } from "react-dom";

export async function authenticate(
  prevState: LoginFormSchemaType,
  formData: FormData
): Promise<LoginFormSchemaType> {
  const parsedLoginData = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (parsedLoginData.success === true) {
    return Promise.resolve({
      email: parsedLoginData.data.email,
      password: parsedLoginData.data.password,
    });
  }

  return {
    email: "",
    password: "",
  };
}

export default function Login() {
  const initialState: LoginFormSchemaType = {
    email: "",
    password: "",
  };

  const [state, formAction] = useFormState(authenticate, initialState);

  console.log("state", state);

  return (
    <form action={formAction}>
      <label htmlFor="email">User name</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">password</label>
      <input type="password" name="password" id="password" />
      <button type="submit">Login</button>
    </form>
  );
}
