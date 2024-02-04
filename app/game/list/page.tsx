import { auth } from "@/auth";

export default async function GameListPage() {
  const session = await auth();

  return (
    <div>
      <h1>Game List Page</h1>
      <div>{JSON.stringify(session)}</div>
    </div>
  );
}
