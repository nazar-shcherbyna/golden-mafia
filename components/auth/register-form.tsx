"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { register } from "../../actions/register";
import { RegisterFormSchema } from "../../schemas/register";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { Button } from "../ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { CardWrapper } from "./card-wrapper";

export const RegisterForm = () => {
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    resolver: zodResolver(RegisterFormSchema),
  });

  const [isSubmitting, startTransition] = React.useTransition();

  const handleSubmit = (values: z.infer<typeof RegisterFormSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values).then((data) => {
        setSuccess(data.success);
        setError(data.error);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account? Login here."
      showSocial
    >
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Name"
                    type="text"
                    autoComplete="username"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="some@example.com"
                    type="email"
                    autoComplete="email"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    autoComplete="current-password"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            Register
          </Button>
        </form>
      </FormProvider>
    </CardWrapper>
  );
};
