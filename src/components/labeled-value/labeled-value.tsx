import React from "react";

import styles from "./labeled-value.module.css";
import clsx from "clsx";

type LabeledValueProps = {
  label: string;
  value: string;
  color: "white" | "primary-two";
};

export const LabeledValue = ({ label, value, color }: LabeledValueProps) => {
  return (
    <div>
      <p className={clsx(styles.label, styles[color])}>{label}</p>
      <p className={clsx(styles.value, styles[color])}>{value}</p>
    </div>
  );
};
