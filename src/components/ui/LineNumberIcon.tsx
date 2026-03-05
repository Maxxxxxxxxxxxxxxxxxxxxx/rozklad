import { LINE_COLORS } from "@/constants";
import React from "react";

const LineNumberIcon: React.FC<{ lineNumber: number; color: string }> = ({
  lineNumber,
  color,
}) => {
  return (
    <div
      className={`p-2 w-10 h-10 text-xl font-bold rounded-full ${LINE_COLORS.find((l) => l.lineId === lineNumber)?.color || "bg-red-600"} text-white flex items-center justify-center`}
    >
      {lineNumber}
    </div>
  );
};

export default LineNumberIcon;
