export default async function Page() {
  const budget = 1000;
  const spent = 600;
  const percentageSpent = (spent / budget) * 100;
  return (
    <main className="flex flex-col gap-3 rounded-tl-[2rem] w-full p-5 bg-[#FAFAFA]  border border-slate-200">
      <header className="text-3xl">Welcome,</header>
      <section className="grid grid-cols-2 gap-5">
        <div className="bg-secondary/80 text-white min-h-[200px] w-full rounded-3xl p-5 flex flex-col shadow-lg">
          <p className="text-2xl font-medium">Budget Consumption</p>
          <p className="text-right text-7xl grow flex items-center justify-end rounded-xl p-1">
            {percentageSpent}%
          </p>
        </div>
        <div className="bg-secondary/80 text-white min-h-[200px] w-full rounded-3xl p-5 flex flex-col shadow-lg">
          <p className="text-2xl font-medium">Budget Left</p>
          <p className="text-right text-7xl grow flex items-center justify-end rounded-xl p-1">
            &#8377;{budget - spent}
          </p>
          <button className="self-end">View balance</button>
        </div>
      </section>
    </main>
  );
}
