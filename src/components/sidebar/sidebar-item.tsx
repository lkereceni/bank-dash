import React, { ReactNode } from "react";

import styles from "./sidebar-item.module.css";
import Link from "next/link";
import clsx from "clsx";

export type SidebarItemProps = {
  title: string;
  href: string;
  icon: ReactNode;
  isActive: boolean;
};

export const SidebarItem = ({
  title,
  icon,
  href,
  isActive,
}: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className={clsx(styles["sidebar-item-container"], {
        [styles.active]: isActive,
      })}
    >
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
    </Link>
  );
};
