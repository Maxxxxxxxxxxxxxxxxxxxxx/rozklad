import React from "react";

const LineNumberIcon: React.FC<{ lineNumber: number; color: string }> = ({
  lineNumber,
  color,
}) => {
  return (
    <div
      className={`p-2 w-9 h-9 font-bold rounded-full bg-red-600 text-white flex items-center justify-center`}
    >
      {lineNumber}
    </div>
  );
};

export default LineNumberIcon;
