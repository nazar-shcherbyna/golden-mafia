"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const LoginButton: React.FC<{
  children: React.ReactNode;
  asChild?: boolean;
  mode?: "redirect" | "modal";
}> = ({ children, asChild, mode = "redirect" }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>TODO: create modal</span>;
  }

  return (
    <span onClick={handleClick} className="cursor-pointer">
      {children}
    </span>
  );
};
