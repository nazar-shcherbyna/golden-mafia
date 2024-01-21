"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./styles.module.css";
export const Header: React.FC = () => {
  const { data, status } = useSession();

  const isAuthenticated = status === "authenticated";

  return (
    <header className={styles.header}>
      <h1>Golden Mafia</h1>
      <div className={styles["header__user"]}>
        <p>User name: {data?.user?.name}</p>
        {isAuthenticated ? (
          <button type="button" onClick={() => signOut()}>
            signout
          </button>
        ) : (
          <button type="button" onClick={() => signIn()}>
            signin
          </button>
        )}
      </div>
    </header>
  );
};
