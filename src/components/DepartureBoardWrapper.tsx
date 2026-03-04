import React from "react";

const DepartureBoardWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="flex flex-row gap-8 p-5 w-full grow">{children}</div>;
};

export default DepartureBoardWrapper;
