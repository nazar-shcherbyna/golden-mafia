export default async function Home() {
  // const users = await new Promise<
  //   Array<{
  //     id: number;
  //     name: string;
  //   }>
  // >((resolve) => {
  //   setTimeout(() => {
  //     resolve([
  //       { id: 1, name: "John" },
  //       { id: 2, name: "Jane" },
  //     ]);
  //   }, 4000);
  // });

  // console.log("users", users);

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-white text-6xl font-semibold">🔐 Auth</h1>
      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}
    </div>
  );
}
