import { Button } from "@/components/ui/button";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const Social: React.FC = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        className="w-full"
        size="lg"
        variant="outline"
        onClick={() => {
          console.log("google");
        }}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        className="w-full"
        size="lg"
        variant="outline"
        onClick={() => {
          console.log("github");
        }}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};
