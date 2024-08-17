"use client";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";

export default function LoginButton() {
  return (
    <motion.button
      type="submit"
      className="px-4 py-3 rounded-lg bg-secondary font-medium flex gap-1 items-center"
      whileTap={{ scale: 0.95, rotate: "1deg" }}
      whileHover={{ scale: 1.2 }}
      onClick={() => signIn("google")}
    >
      Signin with <FaGoogle size={17} />
    </motion.button>
  );
}
