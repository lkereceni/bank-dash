import React from "react";

import logo from "../../../public/logo.svg";

import styles from "./sidebar.module.css";
import { SidebarItem, SidebarProps } from "./sidebar-item";
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

const sidebarItems: SidebarProps[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: <DashboardIcon />,
    isActive: false,
  },
  {
    title: "Transactions",
    href: "/transactions",
    icon: <TransactionsIcon />,
    isActive: false,
  },
  {
    title: "Accounts",
    href: "/accounts",
    icon: <AccountsIcon />,
    isActive: false,
  },
  {
    title: "Investments",
    href: "/investments",
    icon: <InvestmentsIcon />,
    isActive: false,
  },
  {
    title: "Credit Cards",
    href: "/credit-cards",
    icon: <CreditCardsIcon />,
    isActive: false,
  },
  {
    title: "Loans",
    href: "/loans",
    icon: <LoansIcon />,
    isActive: false,
  },
  {
    title: "Services",
    href: "/services",
    icon: <ServicesIcon />,
    isActive: false,
  },
  {
    title: "My Privileges",
    href: "/my-privileges",
    icon: <MyPrivilegesIcon />,
    isActive: false,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <SettingsIcon />,
    isActive: false,
  },
];

export const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <Link href="/">
        <Image src={logo} alt="bank-dash-logo" />
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
