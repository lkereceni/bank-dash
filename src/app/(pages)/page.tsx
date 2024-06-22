import React from "react";

import styles from "./page.module.css";
import clsx from "clsx";

const DashboardPage = () => {
  return (
    <div className={clsx("page-container", styles["dashboard-grid"])}>
      <div className={styles["card-one"]}></div>
      <div className={styles["card-two"]}></div>
      <div className={styles["recent-transaction"]}></div>
      <div className={styles["weekly-activity"]}></div>
      <div className={styles["expense-statistics"]}></div>
      <div className={styles["quick-transfer"]}></div>
      <div className={styles["balance-history"]}></div>
    </div>
  );
};

export default DashboardPage;
