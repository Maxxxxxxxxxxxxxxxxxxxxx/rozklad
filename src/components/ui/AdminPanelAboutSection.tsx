import React from "react";
import { APP_VERSION, STOP_NAME } from "@/constants";
import { SectionHeader } from "./AdminPanelControls";

const AdminPanelAboutSection: React.FC = () => {
  return (
    <div>
      <SectionHeader
        eyebrow="Informacje"
        title="O aplikacji"
        description={`Tablica odjazdów dla przystanku ${STOP_NAME}.`}
      />
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between border border-gray-700 bg-gray-900/50 rounded-lg p-4">
          <p className="text-sm font-semibold text-white">Wersja</p>
          <span className="font-mono text-xs px-2 py-1 rounded-md bg-blue-600/10 text-blue-400 border border-blue-400/30">
            {APP_VERSION}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminPanelAboutSection;
