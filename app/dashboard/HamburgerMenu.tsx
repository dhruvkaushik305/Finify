"use client";
import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import NavItems from "./NavItems";
export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <IoMenuOutline
        size={30}
        className="lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="absolute top-[4rem] bg-white w-full lg:hidden">
          <NavItems />
        </div>
      )}
    </>
  );
}
