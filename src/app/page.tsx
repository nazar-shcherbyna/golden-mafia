"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const { data } = useSession();
  console.log("session", data);

  return (
    <main className={styles.main}>
      <div>
        <p>User name: {data?.user?.name}</p>
        <button type="button" onClick={() => signIn()}>
          signin
        </button>
        <button type="button" onClick={() => signOut()}>
          signout
        </button>
      </div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        {data?.user?.image && (
          <Image
            className={styles.logo}
            src={data.user.image}
            alt="Next.js Logo"
            width={180}
            height={37}
          />
        )}
      </div>
    </main>
  );
}
