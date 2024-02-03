import { signIn, signOut } from "next-auth/react";

export const AppHeader: React.FC = async () => {
  const isAuthenticated = false;

  const handleSignIn = async () => {
    await signIn();
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="w-full absolute top-0 left-0 flex items-center justify-between border-b border-[#dcdce5] bg-gradient-to-r from-indigo-500">
      <h1 className="text-white text-[30px] flex items-center">Golden Mafia</h1>
      <div className="flex items-center last:ml-4">
        {/* <p>User name: {data?.user?.name}</p> */}
        {/* {isAuthenticated ? (
          <button
            type="button"
            className="last:ml-4 border-red-500 bg-pink-700 text-white border"
            onClick={handleSignOut}
          >
            signout
          </button>
        ) : (
          <button
            type="button"
            className="last:ml-4 border-lime-500 bg-lime-700 text-white border"
            onClick={handleSignIn}
          >
            signin
          </button>
        )} */}
      </div>
    </header>
  );
};
