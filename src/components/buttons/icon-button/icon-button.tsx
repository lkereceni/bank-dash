"use client";

import React, { ReactNode } from "react";

import styles from "./icon-button.module.css";

type IconButtonProps = {
  icon: ReactNode;
  onClick: () => void;
};

export const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return (
    <button className={styles["icon-button-container"]} onClick={onClick}>
      {icon}
    </button>
  );
};
