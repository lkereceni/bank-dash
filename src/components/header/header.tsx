"use client";

import React from "react";

import styles from "./header.module.css";
import clsx from "clsx";
import { Search } from "../search/search";
import { IconButton } from "../icon-button/icon-button";
import { SettingsOutlineIcon } from "@/icons";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const handleSettingsButtonClick = () => {
    console.log("Settings button clicked!");
  };

  return (
    <header className={clsx("header", styles["header-container"])}>
      <div className={styles.title}>{title}</div>
      <div className={styles.controls}>
        <Search />
        <IconButton
          icon={<SettingsOutlineIcon />}
          onClick={handleSettingsButtonClick}
        />
      </div>
    </header>
  );
};
