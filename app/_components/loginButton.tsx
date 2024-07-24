"use client";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      className="px-3 py-2 bg-black text-white rounded-xl"
      onClick={() => signIn()}
    >
      Log in
    </button>
  );
}
