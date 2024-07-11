"use client";

import React from "react";
import {
  Bar,
  CartesianGrid,
  Legend,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import { WeeklyActivity } from "@/types";

const data: WeeklyActivity[] = [
  {
    day: "Sat",
    deposit: 480,
    withdraw: 250,
  },
  {
    day: "Sun",
    deposit: 350,
    withdraw: 120,
  },
  {
    day: "Mon",
    deposit: 340,
    withdraw: 260,
  },
  {
    day: "Tue",
    deposit: 480,
    withdraw: 380,
  },
  {
    day: "Wed",
    deposit: 170,
    withdraw: 230,
  },
  {
    day: "Thu",
    deposit: 400,
    withdraw: 230,
  },
  {
    day: "Fri",
    deposit: 400,
    withdraw: 330,
  },
];

export const CustomBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={322}>
      <BarChart data={data} barGap={12}>
        <CartesianGrid vertical={false} stroke="#F3F3F5" strokeWidth={1} />
        <XAxis
          dataKey="day"
          stroke="#718EBF"
          axisLine={false}
          tickLine={false}
          tickMargin={16}
        />
        <YAxis
          stroke="#718EBF"
          axisLine={false}
          tickLine={false}
          tickMargin={12}
        />
        <Bar dataKey="deposit" barSize={16} radius={30} fill="#1814F3" />
        <Bar dataKey="withdraw" barSize={16} radius={30} fill="#16DBCC" />
        <Legend
          margin={{ bottom: 30 }}
          verticalAlign={"top"}
          align={"right"}
          payload={[
            {
              value: "Deposit",
              type: "circle",
              id: "deposit",
              color: "#1814F3",
            },
            {
              value: "Withdraw",
              type: "circle",
              id: "withdraw",
              color: "#16DBCC",
            },
          ]}
          wrapperStyle={{
            position: "absolute",
            paddingBottom: 22,
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
