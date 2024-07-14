import { ExpenseStatistics } from "@/types";
import React from "react";
import {
  Cell,
  LabelList,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data: ExpenseStatistics[] = [
  {
    expenseLabel: "Entertainment",
    expensePercentage: 0.3,
  },
  {
    expenseLabel: "Investment",
    expensePercentage: 0.2,
  },
  {
    expenseLabel: "Others",
    expensePercentage: 0.35,
  },
  {
    expenseLabel: "Bill Expense",
    expensePercentage: 0.15,
  },
];

const COLORS = ["#343C6A", "#FA00FF", "#1814F3", "#FC7900"];

export const CustomPieChart = () => {
  return (
    <ResponsiveContainer width="100%" height={322}>
      <PieChart outerRadius={700}>
        <Pie
          data={data}
          dataKey="expensePercentage"
          cx={"50%"}
          cy={"50%"}
          outerRadius={160}
        >
          <LabelList
            dataKey={"expenseLabel"}
            position={"left"}
            style={{ fontSize: "13px" }}
          />
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
