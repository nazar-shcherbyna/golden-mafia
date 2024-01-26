"use client";

import { Button } from "@/components/ui/Button";
import { CardWrapper } from "@/components/ui/card-wrapper";
import React from "react";

export const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {};

  return (
    <CardWrapper
      headerLabel="Login"
      backButtonHref="/"
      backButtonLabel="Back to Home"
      showSocial
    >
      <div className="flex flex-col gap-y-5 mb-5">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button
        className="border-lime-500 bg-lime-700 text-white border"
        onClick={handleLogin}
      >
        Login
      </Button>
    </CardWrapper>
  );
};
