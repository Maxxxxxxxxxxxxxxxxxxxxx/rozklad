import React from "react";

const LineNumberIcon: React.FC<{ lineNumber: number }> = ({ lineNumber }) => {
  return (
    <div
      className={`p-2 w-10 h-10 text-xl font-bold rounded-full bg-red-600 text-white flex items-center justify-center`}
    >
      {lineNumber}
    </div>
  );
};

export default LineNumberIcon;
