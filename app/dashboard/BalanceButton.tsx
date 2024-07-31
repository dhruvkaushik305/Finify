"use client";
import { useEffect, useState } from "react";
import { user } from "../lib/data";

export default function BalanceButton() {
  const [show, setShow] = useState(false);
  const fetchBalance = () => {
    return user.balance;
  };
  return (
    <div className="self-end text-sm">
      {show ? (
        <p onClick={() => setShow(false)}>
          Available Balance: &#8377;{fetchBalance()}
        </p>
      ) : (
        <button onClick={() => setShow(true)}>View balance</button>
      )}
    </div>
  );
}
