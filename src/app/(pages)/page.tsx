"use client";

import React from "react";

import styles from "./page.module.css";
import clsx from "clsx";
import { CreditCard, GridItemHeader } from "@/components";
import { CustomBarChart } from "@/components/charts/custom-bar-chart/custom-bar-chart";
import { CustomPieChart } from "@/components/charts/custom-pie-chart/custom-pie-chart";

const DashboardPage = () => {
  return (
    <div className={clsx("page-container", styles["dashboard-grid"])}>
      <div className={clsx(styles["my-cards-grid"], styles["grid-flex"])}>
        <GridItemHeader title="My Cards" buttonText="See All" />
        <div className={styles["cards-container"]}>
          <CreditCard className={styles["card-one"]} variant={"primary"} />
          <CreditCard className={styles["card-two"]} variant={"secondary"} />
        </div>
      </div>
      <div className={clsx(styles["recent-transactions"], styles["grid-flex"])}>
        <GridItemHeader title="Recent Transactions" />
        <div className={styles["recent-transactions-div"]}></div>
      </div>
      <div className={clsx(styles["weekly-activity"], styles["grid-flex"])}>
        <GridItemHeader title="Weekly Activity" />
        <div className={styles.card}>
          <CustomBarChart />
        </div>
      </div>
      <div className={clsx(styles["expense-statistics"], styles["grid-flex"])}>
        <GridItemHeader title="Expense Statistics" />
        <div className={styles.card}>
          <CustomPieChart />
        </div>
      </div>
      <div className={styles["quick-transfer"]}></div>
      <div className={styles["balance-history"]}></div>
    </div>
  );
};

export default DashboardPage;
