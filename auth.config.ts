import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { LoginFormSchema } from "./schemas/login";

export const authConfig = {
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        const validatedFields = LoginFormSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          if (email === "user@example.com" && password === "123456") {
            return {
              id: "123456",
              name: "Example name",
              email: "user@example.com",
            };
          }
        }

        return null;
      },
    }),
  ],
};
