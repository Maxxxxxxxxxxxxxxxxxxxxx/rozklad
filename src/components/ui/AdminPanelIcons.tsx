import React from "react";

type IconProps = { className?: string };

export const StopsIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.75" />
  </svg>
);

export const DisplayIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <line x1="4" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    <circle cx="14" cy="6" r="2" fill="currentColor" />
    <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    <circle cx="8" cy="12" r="2" fill="currentColor" />
    <line x1="4" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    <circle cx="16" cy="18" r="2" fill="currentColor" />
  </svg>
);

export const BellIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M6 9a6 6 0 1 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 13 6 9Z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <path d="M10 18a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

export const SyncIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M4 12a8 8 0 0 1 13.66-5.66M20 12a8 8 0 0 1-13.66 5.66"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
    <path
      d="M17.5 3v4h-4M6.5 21v-4h4"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const InfoIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
    <line x1="12" y1="11" x2="12" y2="16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    <circle cx="12" cy="7.75" r="1" fill="currentColor" />
  </svg>
);
