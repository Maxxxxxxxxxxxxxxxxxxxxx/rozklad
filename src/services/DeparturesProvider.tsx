import { useEffect, useRef, useState, type ReactNode } from "react";
import type { AppContext, StopMetadata } from "@/types";
import type { StopData } from "@/types";
import { fetchAllDeparturesByStopInfo } from "./departuresSerice";
import DeparturesContext from "./DeparturesContext";

export const DeparturesProvider = ({ children }: { children: ReactNode }) => {
  const [stopData, setStopData] = useState<StopData[]>([]);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [stopsInUse, setStopsInUse] = useState<StopMetadata[]>([]);
  const useNoUpdate = import.meta.env.NO_UPDATE === "true"; // if env var is true, app fetches only once (for testing)
  const stopsInUseRef = useRef(stopsInUse);

  useEffect(() => {
    stopsInUseRef.current = stopsInUse;
  }, [stopsInUse]);

  useEffect(() => {
    if (useNoUpdate) {
      fetchAllDeparturesByStopInfo(stopsInUseRef.current).then((data) => {
        setStopData(data);
      });
    } else {
      const interval = setInterval(() => {
        fetchAllDeparturesByStopInfo(stopsInUseRef.current).then((data) => {
          console.log("stops in use", stopsInUseRef.current);
          setStopData(data);
        });

        console.log("stopdata", stopData);

        return () => clearInterval(interval);
      }, 20000);
    }
  }, []);

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

  const parametersLastSaveTime = new Date().toISOString();

  const value = {
    stopData: stopData,
    isAdminPanelOpen: isAdminPanelOpen,
    toggleAdminPanel,
    updateStopData,
    stopsInUse,
    setCurrentStopsInUse,
    parametersLastSaveTime: parametersLastSaveTime,
  } as AppContext;

  return (
    <DeparturesContext.Provider value={value}>
      {children}
    </DeparturesContext.Provider>
  );
};

export default DeparturesProvider;
