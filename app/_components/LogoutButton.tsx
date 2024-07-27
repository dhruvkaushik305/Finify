"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      className="px-3 py-2 bg-black text-white rounded-xl"
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
}
