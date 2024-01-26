"use client";

import { signIn, signOut, useSession } from "next-auth/react";
export const Header: React.FC = () => {
  const { data, status } = useSession();

  const isAuthenticated = status === "authenticated";

  return (
    <header className="w-full absolute top-0 left-0 flex items-center justify-between border-b border-[#dcdce5]">
      <h1 className="text-fuchsia-800 text-[24px] flex items-center">
        Golden Mafia
      </h1>
      <div className="flex items-center last:ml-4">
        <p>User name: {data?.user?.name}</p>
        {isAuthenticated ? (
          <button
            type="button"
            className="last:ml-4 border-red-500 bg-pink-700 text-white border"
            onClick={() => signOut()}
          >
            signout
          </button>
        ) : (
          <button
            type="button"
            className="last:ml-4 border-lime-500 bg-lime-700 text-white border"
            onClick={() => signIn()}
          >
            signin
          </button>
        )}
      </div>
    </header>
  );
};
