import React from "react";

import clsx from "clsx";

import { LabeledValue } from "../labeled-value/labeled-value";
import Image from "next/image";

import cardLogo from "@/images/card-logo.png";
import cardChip from "@/images/card-chip.png";
import cardLogoDark from "@/images/card-logo-dark.png";
import cardChipDark from "@/images/card-chip-dark.png";

import styles from "./credit-card.module.css";

type CreditCardProps = {
  className?: string;
  variant: "primary" | "secondary";
};

export const CreditCard = ({ className, variant }: CreditCardProps) => {
  return (
    <div
      className={clsx(
        styles["credit-card-container"],
        styles[variant],
        className
      )}
    >
      <div className={styles["top-row"]}>
        <LabeledValue
          label="BALANCE"
          value="$5,756"
          color={variant === "primary" ? "white" : "primary-two"}
        />
        <Image
          src={variant === "primary" ? cardChip : cardChipDark}
          alt="Card chip"
        />
      </div>
      <div className={styles["mid-row"]}>
        <LabeledValue
          label="CARD HOLDER"
          value="Eddy Cusuma"
          color={variant === "primary" ? "white" : "primary-two"}
        />
        <LabeledValue
          label="VALID"
          value="12/22"
          color={variant === "primary" ? "white" : "primary-two"}
        />
      </div>
      <div className={clsx(styles["bottom-row"], styles[variant])}>
        <p>3778 **** **** 1234</p>
        <Image
          src={variant === "primary" ? cardLogo : cardLogoDark}
          alt="Card chip"
        />
      </div>
    </div>
  );
};
