"use client";
import React from "react";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import NavItems from "./NavItems";
export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      {isOpen ? (
        <IoClose
          size={30}
          className="lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      ) : (
        <IoMenuOutline
          size={30}
          className="lg:hidden"
          onClick={() => setIsOpen(true)}
        />
      )}
      {isOpen && (
        <div className="absolute top-[4rem] left-0 bg-white w-full lg:hidden h-screen">
          <div className="h-fit">
            <NavItems />
          </div>
          <div
            className="h-full bg-black/50 absolute w-full"
            onClick={() => setIsOpen(false)}
          ></div>
        </div>
      )}
    </>
  );
}
