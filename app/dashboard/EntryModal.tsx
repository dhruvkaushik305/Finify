"use client";
import React from "react";
import { IoCreateOutline } from "react-icons/io5";
export default function EntryModal() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <IoCreateOutline
        size={23}
        onClick={() => setModalOpen(true)}
        className="cursor-pointer"
      />
      {modalOpen && (
        <div>
          <div
            className="absolute top-0 left-0 h-screen w-screen bg-black/70 z-10"
            onClick={() => setModalOpen(false)}
          ></div>
          <div className="absolute bg-[#FAFAFA] rounded-xl top-1/2 left-1/2 z-20 h-[25rem] w-[35rem] transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      )}
    </>
  );
}
