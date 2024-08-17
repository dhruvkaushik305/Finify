import { auth } from "@/auth";
import Graph from "./Graph";
import prisma from "@/prisma/db";
import { redirect } from "next/navigation";
import Card from "./Card";

export default async function Page() {
  const session = await auth();
  if (!session) redirect("/");
  const data = await prisma.statement.findUnique({
    where: { userId: session?.user?.id },
    select: {
      spent: true,
      budget: true,
    },
  });
  return (
    <main className="flex flex-col gap-5 justify-between rounded-tl-[2rem] w-full p-3 lg:p-5 bg-[#FAFAFA]  border border-slate-200">
      <header className="text-2xl lg:text-3xl xl:text-4xl font-medium">
        Welcome, {session.user?.name?.split(" ")[0]}
      </header>
      {data ? (
        <section className="flex flex-col justify-around flex-1 gap-5">
          <section className="grid grid-cols-2 gap-3 lg:gap-5">
            <Card
              title="Budget Consumption"
              children={
                <span>{Math.round((data.spent / data.budget) * 100)}%</span>
              }
            />
            <Card
              title="Budget Left"
              children={<span>&#8377;{data.budget - data.spent}</span>}
            />
          </section>
          <section className="flex flex-col gap-3 items-start">
            <header className="text-xl md:text-2xl font-medium">
              Weekly expediture
            </header>
            <Graph />
          </section>
        </section>
      ) : (
        <p>Complete your profile to view this section</p>
      )}
    </main>
  );
}
