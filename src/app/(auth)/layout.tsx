export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <h1 className="bg-slate-300 text-center">Auth Layout</h1>
      {children}
    </div>
  );
}
