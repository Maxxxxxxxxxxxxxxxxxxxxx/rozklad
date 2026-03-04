import { STOP_NAME } from "@/constants";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="border border-white p-2 flex justify-center items-center font-extrabold text-2xl">
      <h1>Odjazdy {STOP_NAME}</h1>
    </div>
  );
};

export default Header;
