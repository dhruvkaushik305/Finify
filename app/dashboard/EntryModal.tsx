"use client";
import React from "react";
import { IoCreateOutline } from "react-icons/io5";
export default function EntryModal() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [amount, setAmount] = React.useState<number | null>(null);
  const [selectValue, setSelectValue] = React.useState("Credit");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value != "") setAmount(Number(e.target.value));
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      amount: amount,
      type: selectValue,
    };
    console.log(formData);
  };
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
          <div className="absolute bg-[#FAFAFA] rounded-xl top-1/2 left-1/2 z-20 h-fit w-fit p-10 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-10 text-gray-700">
            <header className="text-2xl font-medium">Enter Expense</header>
            <form
              className="flex flex-col items-center gap-3"
              onSubmit={onSubmit}
            >
              <div className="flex p-2 bg-white rounded-xl items-center gap-2">
                <label htmlFor="amount-input">Amount</label>
                <input
                  type="number"
                  id="amount-input"
                  className="focus:outline-none"
                  value={amount !== null ? amount : ""}
                  onChange={handleAmountChange}
                  required
                />
                <select
                  className="p-1 rounded-lg"
                  value={selectValue}
                  onChange={handleSelectChange}
                >
                  <option>Credit</option>
                  <option>Debit</option>
                </select>
              </div>
              <button className="bg-black px-2 py-1 rounded-lg text-white">
                Register
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
