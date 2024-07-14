import { BalanceHistory } from "@/types";
import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data: BalanceHistory[] = [
  {
    month: "Jul",
    balance: 100,
  },
  {
    month: "Aug",
    balance: 320,
  },
  {
    month: "Sep",
    balance: 480,
  },
  {
    month: "Oct",
    balance: 790,
  },
  {
    month: "Nov",
    balance: 200,
  },
  {
    month: "Dec",
    balance: 590,
  },
  {
    month: "Jan",
    balance: 220,
  },
];

export const CustomLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={322}>
      <LineChart data={data}>
        <CartesianGrid stroke="#DFE5EE" strokeDasharray="5 5" />
        <XAxis dataKey="month" stroke="#718EBF" axisLine={false} />
        <YAxis stroke="#718EBF" axisLine={false} />
        <Line
          type="monotone"
          dataKey="balance"
          stroke="#1814F3"
          strokeWidth={3}
          activeDot={false}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
