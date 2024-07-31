import { user } from "../lib/data";
import BalanceButton from "./BalanceButton";
import Graph from "./Graph";

export default async function Page() {
  const budget = user.budget;
  const spent = user.spent;
  const percentageSpent = Math.round((spent / budget) * 100);

  return (
    <main className="flex flex-col justify-between rounded-tl-[2rem] w-full p-5 bg-[#FAFAFA]  border border-slate-200">
      <header className="text-4xl font-medium">
        Welcome, {user.name.split(" ")[0]}
      </header>
      <section className="grid grid-cols-2 gap-5">
        <div className="bg-secondary/80 text-white min-h-[150px] w-full rounded-3xl p-5 flex flex-col shadow-lg">
          <p className="text-2xl font-medium">Budget Consumption</p>
          <p className="text-right text-6xl grow flex items-center justify-end rounded-xl p-1">
            {percentageSpent}%
          </p>
        </div>
        <div className="bg-secondary/80 text-white min-h-[150px] w-full rounded-3xl p-5 flex flex-col shadow-lg">
          <p className="text-2xl font-medium">Budget Left</p>
          <p className="text-right text-6xl grow flex items-center justify-end rounded-xl p-1">
            &#8377;{budget - spent}
          </p>
          <BalanceButton />
        </div>
      </section>
      <section className="flex flex-col gap-3 items-start">
        <header className="text-2xl font-medium">
          This week&apos;s financial rollercoaster
        </header>
        <Graph />
      </section>
    </main>
  );
}
