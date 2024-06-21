import React from "react";

import styles from "./search.module.css";
import { SearchIcon } from "@/icons";

export const Search = () => {
  return (
    <div className={styles["search-container"]}>
      <SearchIcon />
      <input
        className={styles["search-input"]}
        type="text"
        placeholder="Search for something"
      />
    </div>
  );
};
