import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export const AppHeader: React.FC = async () => {
  return (
    <header className="w-full absolute top-0 left-0 flex items-center justify-between border-b border-[#dcdce5] bg-gradient-to-r from-indigo-500">
      <h1 className="text-white text-[30px] flex items-center">Golden Mafia</h1>
      <div className="flex items-center last:ml-4">
        {/* <p>User name: {data?.user?.name}</p> */}
        <form
          action={async () => {
            "use server";

            await signOut();
          }}
        >
          <Button type="submit">SignOut</Button>
        </form>
      </div>
    </header>
  );
};
