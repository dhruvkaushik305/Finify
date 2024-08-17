import EntryModal from "./EntryModal";
import NavItems from "./NavItems";
import HamburgerMenu from "./HamburgerMenu";
import { auth } from "@/auth";
import Image from "next/image";
import { signOut } from "@/auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <main className="flex flex-col h-screen">
      <nav className="relative min-h-[4rem] flex justify-between lg:justify-around items-center bg-white gap-3 px-2">
        <HamburgerMenu />
        <div className="flex items-center justify-between lg:justify-around w-full">
          <header className="text-2xl sm:text-3xl font-semibold">Finify</header>
          <div className="flex gap-5 items-center">
            <EntryModal />
            {session && (
              <div className="bg-gray-300 rounded-full flex gap-4 items-center p-1">
                <Image
                  src={session!.user!.image!}
                  alt="user profile picture"
                  width={35}
                  height={35}
                  className="rounded-full"
                />
                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/" });
                  }}
                >
                  <button
                    type="submit"
                    className="bg-gray-400 text-black rounded-full px-2 py-1 sm:px-3 sm:py-2"
                  >
                    Sign Out
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </nav>
      <section className="flex grow h-full">
        <div className="hidden lg:block">
          <NavItems />
        </div>
        {children}
      </section>
    </main>
  );
}
