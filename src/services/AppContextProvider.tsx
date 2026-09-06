import { useEffect, useRef, useState, type ReactNode } from "react";
import type { AppContextProps, StopMetadata } from "@/types";
import type { StopData } from "@/types";
import { fetchAllDeparturesByStopInfo } from "./departuresSerice";
import {
  DEFAULT_POLL_INTERVAL,
  clearStoredSettings,
  loadSettings,
  saveSettings,
} from "./settingsStorage";
import AppContext from "./AppContext";

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [persisted] = useState(loadSettings); // read the cookie once, on first render
  const [stopData, setStopData] = useState<StopData[]>([]);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [stopsInUse, setStopsInUse] = useState<StopMetadata[]>(
    persisted?.stopsInUse ?? [],
  );
  const [pollInterval, setPollInterval] = useState(
    persisted?.pollInterval ?? DEFAULT_POLL_INTERVAL,
  );
  const [parametersLastSaveTime, setParametersLastSaveTime] = useState<
    string | null
  >(persisted?.savedAt ?? null);
  const useNoUpdate = import.meta.env.NO_UPDATE === "true"; // if env var is true, app fetches only once (for testing)
  const stopsInUseRef = useRef(stopsInUse);
  const syncStatus = useRef<boolean>(false);
  const skipNextSave = useRef(true); // the restored settings must not be written back on mount

  useEffect(() => {
    stopsInUseRef.current = stopsInUse;
  }, [stopsInUse]);

  // Persist the settings to a cookie whenever the user changes them.
  useEffect(() => {
    if (skipNextSave.current) {
      skipNextSave.current = false;
      return;
    }

    setParametersLastSaveTime(saveSettings({ stopsInUse, pollInterval }));
  }, [stopsInUse, pollInterval]);

  useEffect(() => {
    const fetchDepartures = async () => {
      try {
        const data = await fetchAllDeparturesByStopInfo(stopsInUseRef.current);
        setStopData(data);
        syncStatus.current = true; // Set syncStatus to true when data is successfully fetched
      } catch (error) {
        console.error("Error fetching departures:", error);
        syncStatus.current = false; // Set syncStatus to false if there's an error
      }
    };

    fetchDepartures(); // restored stops should show up without waiting a full interval

    if (useNoUpdate) return;

    const interval = setInterval(fetchDepartures, pollInterval);
    return () => clearInterval(interval);
  }, [pollInterval, useNoUpdate]);

  const toggleAdminPanel = () => {
    setIsAdminPanelOpen((prev) => !prev);
  };

  const updateStopData = (newStopData: StopData[]) => {
    setStopData(newStopData);
  };

  const setCurrentStopsInUse = async (stops: StopMetadata[]) => {
    setStopsInUse(stops);
    const data = await fetchAllDeparturesByStopInfo(stops);
    console.log("Fetched departures for stops:", data);
    setStopData(data);
  };

  const clearSavedSettings = () => {
    clearStoredSettings();
    skipNextSave.current = true; // resetting the state below must not write a fresh cookie
    setStopsInUse([]);
    setStopData([]);
    setPollInterval(DEFAULT_POLL_INTERVAL);
    setParametersLastSaveTime(null);
  };

  const value = {
    stopData: stopData,
    isAdminPanelOpen: isAdminPanelOpen,
    toggleAdminPanel,
    updateStopData,
    stopsInUse,
    setStopsInUse,
    setCurrentStopsInUse,
    parametersLastSaveTime: parametersLastSaveTime,
    pollInterval,
    setPollInterval,
    clearSavedSettings,
    syncStatus: syncStatus.current,
  } as AppContextProps;

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
