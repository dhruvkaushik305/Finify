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
import { expenditure } from "../lib/data";

export default function Graph() {
  return (
    <ResponsiveContainer width="100%" height={500} className="h-full">
      <LineChart data={expenditure}>
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="4" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip animationDuration={500} />
      </LineChart>
    </ResponsiveContainer>
  );
}
