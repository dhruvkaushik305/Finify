import Link from "next/link";
import React from "react";
import { GoHistory, GoHomeFill } from "react-icons/go";
export default function NavItems() {
  return (
    <nav className="min-w-[18rem] h-full flex flex-col items-center pl-2">
      <Link href={"/dashboard"} className="w-full">
        <button className="flex items-center gap-3 rounded-md p-3 w-full justify-start hover:shadow-md text-xl">
          <GoHomeFill size={25} />
          Dashboard
        </button>
      </Link>
      <Link href={"/dashboard/history"} className="w-full">
        <button className="flex items-center gap-3 rounded-md p-3 w-full justify-start hover:shadow-md text-xl">
          <GoHistory size={25} />
          Transactions
        </button>
      </Link>
    </nav>
  );
}
