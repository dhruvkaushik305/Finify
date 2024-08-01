import { IoCreateOutline } from "react-icons/io5";
import { user } from "../lib/data";
import Link from "next/link";
import { GoHistory, GoHomeFill } from "react-icons/go";
import EntryModal from "./EntryModal";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col h-screen">
      <nav className="min-h-[4rem] flex justify-around items-center bg-white">
        <header className="text-3xl font-semibold">Finify</header>
        <div className="flex gap-5 items-center">
          <EntryModal />
          <div className="bg-gray-200 h-10 flex justify-center items-center w-10 rounded-full">
            {user.name[0][0].toUpperCase()}
          </div>
        </div>
      </nav>
      <section className="flex grow h-full">
        <nav className="min-w-[18rem] h-full flex flex-col items-center">
          <Link href={"/dashboard"} className="w-full">
            <button className="flex items-center gap-3 rounded-md p-3 w-full justify-center hover:shadow-md text-xl">
              <GoHomeFill size={25} />
              Dashboard
            </button>
          </Link>
          <Link href={"/dashboard/history"} className="w-full">
            <button className="flex items-center gap-3 rounded-md p-3 w-full justify-center hover:shadow-md text-xl">
              <GoHistory size={25} />
              Transactions
            </button>
          </Link>
        </nav>
        {children}
      </section>
    </main>
  );
}
