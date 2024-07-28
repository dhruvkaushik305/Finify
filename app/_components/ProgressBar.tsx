export default function ProgressBar({
  percentageSpent,
}: {
  percentageSpent: number;
}) {
  return (
    <div className="w-full h-full flex items-center gap-2">
      <div className="w-full h-2.5 bg-slate-100 rounded-full">
        <div
          className={`bg-blue-500 h-2.5 rounded-full w-[${percentageSpent}%]`}
        ></div>
      </div>
      <span>{percentageSpent}%</span>
    </div>
  );
}
