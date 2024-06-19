import React, { ReactNode } from "react";

import styles from "./sidebar-item.module.css";
import Link from "next/link";

export type SidebarProps = {
  title: string;
  href: string;
  icon: ReactNode;
  isActive: boolean;
};

export const SidebarItem = ({ title, icon, href, isActive }: SidebarProps) => {
  return (
    <Link href={href} className={styles["sidebar-item-container"]}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
    </Link>
  );
};
