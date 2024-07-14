export type WeeklyActivity = {
  day: string;
  deposit: number;
  withdraw: number;
};

export type ExpenseStatistics = {
  expenseLabel: string;
  expensePercentage: number;
};

export type BalanceHistory = {
  month: string;
  balance: number;
};
