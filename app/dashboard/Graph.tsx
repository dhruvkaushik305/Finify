"use client";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import React from "react";
import { fetchExpenses } from "../actions";

function Graph() {
  const [data, setData] = React.useState<any>([]);
  React.useEffect(() => {
    fetchExpenses().then((data) => {
      if (data.success) {
        setData(data!.expenses);
      }
    });
  }, []);
  return (
    <ResponsiveContainer width="100%" height={400} className="h-full z-0">
      <LineChart data={data}>
        <Line type="monotone" dataKey="amount" stroke="#0023FF" />
        <CartesianGrid stroke="#ccc" strokeDasharray="7" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip animationDuration={500} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default React.memo(Graph);
