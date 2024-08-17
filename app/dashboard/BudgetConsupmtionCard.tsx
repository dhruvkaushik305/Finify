interface Props {
  spent: number;
  budget: number;
}
export default function BudgetConsumptionCard({ spent, budget }: Props) {
  const percentageSpent = Math.round((spent / budget) * 100);
  return (
    <div className="bg-secondary/80 text-black min-h-[150px] w-full rounded-3xl p-3 lg:p-5 flex flex-col shadow-lg">
      <p className="text-lg md:text-2xl font-medium">Budget Consumption</p>
      <p className="text-right text-3xl md:text-5xl xl:text-6xl grow flex items-center justify-end rounded-xl p-1">
        {percentageSpent}%
      </p>
    </div>
  );
}
