import ProgressBar from "../_components/ProgressBar";

export default async function Page() {
  const budget = 1000;
  const spent = 600;
  const percentageSpent = (spent / budget) * 100;
  return (
    <main className="flex flex-col rounded-l-[1rem] bg-slate-200 w-full">
      <section className="p-5 text-gray-700 flex flex-col gap-4">
        <header className="text-4xl">Welcome,</header>
        <div className="flex gap-3 items-center">
          <p className="text-nowrap text-xl">Budget consupmtion</p>
          <ProgressBar percentageSpent={percentageSpent} />
        </div>
        {/* <p>something</p> */}
      </section>
    </main>
  );
}
