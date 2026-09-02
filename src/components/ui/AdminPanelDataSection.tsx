import React, { useContext, useState } from "react";
import { API_BASE_URL } from "@/constants";
import DeparturesContext from "@/services/DeparturesContext";
import {
  SectionHeader,
  OptionRow,
  SegmentedControl,
} from "./AdminPanelControls";

const AdminPanelDataSection: React.FC = () => {
  const ctx = useContext(DeparturesContext);
  const [pollInterval, setPollInterval] = useState("30 s");

  const lastUpdates = (ctx?.stopData ?? [])
    .map((stop) => stop.lastUpdate)
    .filter((value): value is string => Boolean(value));
  const lastSync = lastUpdates.length
    ? new Date(
        Math.max(...lastUpdates.map((value) => new Date(value).getTime())),
      ).toLocaleTimeString()
    : "—";

  return (
    <div>
      <SectionHeader
        eyebrow="System"
        title="Dane i synchronizacja"
        description="Status połączenia na żywo i konfiguracja odpytywania."
      />
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-4 border border-gray-700 bg-gray-900/50 rounded-lg p-4">
          <div className="flex items-center gap-2.5">
            <span className="relative flex w-2.5 h-2.5">
              <span className="animate-ping absolute inline-flex w-full h-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-green-500" />
            </span>
            <p className="text-sm font-semibold text-white">Połączenie na żywo</p>
          </div>
          <span className="font-mono text-xs text-white/50">
            ostatnia synchronizacja {lastSync}
          </span>
        </div>
        <OptionRow
          label="Częstotliwość odpytywania"
          description="Jak często odświeżane są odjazdy"
        >
          <SegmentedControl
            options={["15 s", "30 s", "60 s"]}
            value={pollInterval}
            onChange={setPollInterval}
          />
        </OptionRow>
        <OptionRow
          label="Aktywne przystanki"
          description="Przystanki aktualnie zasilające tablicę"
        >
          <span className="font-mono text-sm text-blue-400 font-bold">
            {ctx?.stopsInUse?.length ?? 0}
          </span>
        </OptionRow>
        <div className="border border-gray-700 bg-gray-900/50 rounded-lg p-4">
          <p className="text-sm font-semibold text-white mb-2">Punkt końcowy API</p>
          <p className="font-mono text-xs text-white/50 break-all bg-gray-900 border border-gray-700 rounded px-2 py-1.5">
            {API_BASE_URL}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanelDataSection;
