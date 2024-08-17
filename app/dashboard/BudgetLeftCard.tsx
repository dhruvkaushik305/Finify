import prisma from "@/prisma/db";
import BalanceButton from "./BalanceButton";
import { auth } from "@/auth";

interface Props {
  budget: number;
  spent: number;
  userId: string;
}

export default function BudgetLeftCard({ budget, spent, userId }: Props) {
  return (
    <div className="bg-secondary/80 text-black min-h-[150px] w-full rounded-3xl p-3 lg:p-5 flex flex-col shadow-lg">
      <p className="text-xl md:text-2xl font-medium">Budget Left</p>
      <p className="text-right text-4xl md:text-5xl xl:text-6xl grow flex items-center justify-end rounded-xl p-1">
        &#8377;{budget - spent}
      </p>
      <BalanceButton userId={userId} />
    </div>
  );
}
