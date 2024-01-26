import { LoginButton } from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { Poppins } from "next/font/google";

const font = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default async function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <h1 className={cn("text-white text-6xl font-semibold", font.className)}>
        🔐 Auth
      </h1>
      <div>
        <LoginButton>
          <Button>SignIn</Button>
        </LoginButton>
      </div>
    </div>
  );
}
