import React from "react";

import styles from "./grid-item-header.module.css";
import { Button } from "../buttons/button/button";

type GridItemHeaderProps = {
  title: string;
  buttonText?: string;
};

export const GridItemHeader = ({ title, buttonText }: GridItemHeaderProps) => {
  return (
    <div className={styles["grid-item-header-container"]}>
      <h2 className={styles.title}>{title}</h2>
      {buttonText ? (
        <Button text={buttonText} variant={"plain"} onClick={() => {}} />
      ) : null}
    </div>
  );
};
