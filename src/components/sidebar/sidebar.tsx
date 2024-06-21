"use client";

import React from "react";

import logo from "../../../public/logo.svg";

import styles from "./sidebar.module.css";
import { SidebarItem, SidebarItemProps } from "./sidebar-item";
import {
  AccountsIcon,
  CreditCardsIcon,
  DashboardIcon,
  InvestmentsIcon,
  LoansIcon,
  MyPrivilegesIcon,
  ServicesIcon,
  SettingsIcon,
  TransactionsIcon,
} from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();

  const sidebarItems: SidebarItemProps[] = [
    {
      title: "Dashboard",
      href: "/",
      icon: <DashboardIcon />,
      isActive: pathname === "/",
    },
    {
      title: "Transactions",
      href: "/transactions",
      icon: <TransactionsIcon />,
      isActive: pathname === "/transactions",
    },
    {
      title: "Accounts",
      href: "/accounts",
      icon: <AccountsIcon />,
      isActive: pathname === "/accounts",
    },
    {
      title: "Investments",
      href: "/investments",
      icon: <InvestmentsIcon />,
      isActive: pathname === "/investments",
    },
    {
      title: "Credit Cards",
      href: "/credit-cards",
      icon: <CreditCardsIcon />,
      isActive: pathname === "/credit-cards",
    },
    {
      title: "Loans",
      href: "/loans",
      icon: <LoansIcon />,
      isActive: pathname === "/loans",
    },
    {
      title: "Services",
      href: "/services",
      icon: <ServicesIcon />,
      isActive: pathname === "/services",
    },
    {
      title: "My Privileges",
      href: "/my-privileges",
      icon: <MyPrivilegesIcon />,
      isActive: pathname === "/my-privileges",
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <SettingsIcon />,
      isActive: pathname === "/settings",
    },
  ];

  return (
    <aside className={styles["sidebar-container"]}>
      <Link href="/">
        <Image priority src={logo} alt="bank-dash-logo" />
      </Link>
      <nav>
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            title={item.title}
            href={item.href}
            icon={item.icon}
            isActive={item.isActive}
          />
        ))}
      </nav>
    </aside>
  );
};
