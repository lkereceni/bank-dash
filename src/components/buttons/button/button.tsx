"use client";

import React from "react";

import styles from "./button.module.css";
import clsx from "clsx";

type ButtonProps = {
  text: string;
  variant: "primary" | "plain";
  onClick: () => void;
};

export const Button = ({ text, variant, onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(styles["button-container"], styles[variant])}
      onClick={onClick}
    >
      <p>{text}</p>
    </button>
  );
};
