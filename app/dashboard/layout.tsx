import { user } from "../lib/data";
import EntryModal from "./EntryModal";
import NavItems from "./NavItems";
import HamburgerMenu from "./HamburgerMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col h-screen">
      <nav className="relative min-h-[4rem] flex justify-between lg:justify-around items-center bg-white gap-3 px-2">
        <HamburgerMenu />
        <div className="flex items-center justify-between lg:justify-around w-full">
          <header className="text-3xl font-semibold">Finify</header>
          <div className="flex gap-5 items-center">
            <EntryModal />
            <div className="bg-gray-200 h-10 flex justify-center items-center w-10 rounded-full">
              {user.name[0][0].toUpperCase()}
            </div>
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
