import { STOP_NAME } from "@/constants";
import React, { useContext } from "react";
import { Clock } from "./Clock";
import Gear from "./ui/Gear";
import DeparturesContext from "@/services/DeparturesContext";

const Header: React.FC = () => {
  const toggleAdminPanel = useContext(DeparturesContext)?.toggleAdminPanel;
  return (
    <div className="p-4 flex justify-between items-center font-extrabold text-4xl">
      <div className="header-left flex flex-row align-center items-center gap-2 text-blue-400">
        <div
          onClick={toggleAdminPanel}
          className="options-wrapper mr-5 hover:cursor-pointer text-blue-400 transition-colors duration-200 ease-in-out hover:text-blue-300"
        >
          <Gear />
        </div>
        <Clock />
      </div>
      <h1 className="header-center self-center text-5xl">
        Odjazdy <span className="text-blue-400">{STOP_NAME}</span>
      </h1>
    </div>
  );
};

export default Header;
