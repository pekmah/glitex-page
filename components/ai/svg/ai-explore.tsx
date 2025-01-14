import React from "react";
import { COLORS } from "../../../constants";

export default function AiExplore({ isCurrent }: { isCurrent?: boolean }) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="19.5"
        stroke={!isCurrent ? COLORS.primary : "#EBEBEB"}
        strokeWidth={2}
      />
      <path
        d="M12 20H28M28 20L22 26M28 20L22 14"
        stroke={!isCurrent ? COLORS.primary : "white"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
