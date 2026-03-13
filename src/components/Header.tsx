import { STOP_NAME } from "@/constants";
import React from "react";
import { Clock } from "./Clock";

const Header: React.FC = () => {
  return (
    <div className="p-4 flex justify-between items-center font-extrabold text-4xl">
      <div className="header-left text-blue-400">
        <Clock />
      </div>
      <h1 className="header-center self-center text-5xl">
        Odjazdy <span className="text-blue-400">{STOP_NAME}</span>
      </h1>
    </div>
  );
};

export default Header;
