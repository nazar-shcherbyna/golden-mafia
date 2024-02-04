export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Game routes layour</h1>
      {children}
    </div>
  );
}
