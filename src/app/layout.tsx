import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Golden Mafia",
  description: "Board game for 10-18 players.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500">
          <SessionProvider>{children}</SessionProvider>
        </main>
      </body>
    </html>
  );
}
