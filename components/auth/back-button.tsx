"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  label: string;
  href: string;
}

export const BackButton = ({ label, href }: Props) => {
  return (
    <Button variant="link" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
