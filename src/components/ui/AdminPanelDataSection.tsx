import React, { useContext } from "react";
import { API_BASE_URL } from "@/constants";
import AppContext from "@/services/AppContext";
import { DEFAULT_POLL_INTERVAL } from "@/services/settingsStorage";
import {
  SectionHeader,
  OptionRow,
  SegmentedControl,
} from "./AdminPanelControls";

const AdminPanelDataSection: React.FC = () => {
  const ctx = useContext(AppContext);
  // Derived from the context so it stays correct after the settings are cleared.
  const pollInterval = `${Math.round(
    (ctx?.pollInterval ?? DEFAULT_POLL_INTERVAL) / 1000,
  )} s`;
  const handlePollIntervalChange = (value: string) => {
    const intervalInSeconds = parseInt(value.split(" ")[0], 10);
    ctx.setPollInterval(intervalInSeconds * 1000);
  };

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
              <span
                className={`animate-ping absolute inline-flex w-full h-full rounded-full bg-${ctx?.syncStatus ? "green" : "red"}-500 opacity-75`}
              />
              <span
                className={`relative inline-flex rounded-full w-2.5 h-2.5 bg-${ctx?.syncStatus ? "green" : "red"}-500`}
              />
            </span>
            <p className="text-sm font-semibold text-white">
              {ctx?.syncStatus ? "Połączono" : "Brak połączenia"}
            </p>
          </div>
        </div>
        <OptionRow
          label="Częstotliwość odpytywania"
          description="Jak często odświeżane są odjazdy"
        >
          <SegmentedControl
            options={["15 s", "20 s", "30 s", "60 s"]}
            value={pollInterval}
            onChange={handlePollIntervalChange}
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
          <p className="text-sm font-semibold text-white mb-2">
            Punkt końcowy API
          </p>
          <p className="font-mono text-xs text-white/50 break-all bg-gray-900 border border-gray-700 rounded px-2 py-1.5">
            {API_BASE_URL}
          </p>
        </div>
        <OptionRow
          label="Zapisane dane"
          description="Usuwa zapisane ustawienia z ciasteczek i pamięci przeglądarki"
        >
          <button
            type="button"
            onClick={() => ctx.clearSavedSettings()}
            className="px-4 py-2 rounded-lg border border-red-500/40 bg-red-500/10 text-red-400 text-sm font-semibold transition-colors duration-200 ease-in-out hover:bg-red-500/20 hover:cursor-pointer"
          >
            Wyczyść
          </button>
        </OptionRow>
      </div>
    </div>
  );
};

export default AdminPanelDataSection;
