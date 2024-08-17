"use client";
import { useEffect, useState } from "react";
import { user } from "../lib/data";
import { fetchBalance } from "../actions";

export default function BalanceButton({ userId }: { userId: string }) {
  const [show, setShow] = useState(false);
  const [balance, setBalance] = useState<number | null>(null);
  const showBalance = async () => {
    const response = await fetchBalance(userId);
    if (response.success) response.balance;
  };
  return (
    <div className="self-end text-sm">
      {show ? (
        <p onClick={() => setShow(false)}>
          Available Balance: &#8377;{balance ? balance : "Loading..."}
        </p>
      ) : (
        <button
          onClick={() => {
            showBalance();
            setShow(true);
          }}
        >
          View balance
        </button>
      )}
    </div>
  );
}
