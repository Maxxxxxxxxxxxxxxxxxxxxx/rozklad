import React from "react";

export const ClockIcon: React.FC = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <line
        x1="12"
        y1="12"
        x2="12"
        y2="7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="12"
        y1="12"
        x2="16"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ClockIcon;
