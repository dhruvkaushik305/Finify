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
import { expenditure } from "../lib/data";

function Graph() {
  return (
    <ResponsiveContainer width="100%" height={400} className="h-full">
      <LineChart data={expenditure}>
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
