import { useEffect, useState, type ReactNode } from "react";
import type { AppContext, StopInfo } from "@/types";
import type { StopData } from "@/types";
import { fetchStopsData } from "./departuresSerice";
import DeparturesContext from "./DeparturesContext";

export const DeparturesProvider = ({ children }: { children: ReactNode }) => {
  const [stopData, setStopData] = useState<StopData[]>([]);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [stopsInUse, setStopsInUse] = useState<StopInfo[]>([]);

  const useNoUpdate = import.meta.env.NO_UPDATE === "true"; // if env var is true, app fetches only once (for testing)

  useEffect(() => {
    if (useNoUpdate) {
      fetchStopsData(stopsInUse).then((data) => {
        setStopData(data);
      });
    } else {
      fetchStopsData(stopsInUse).then((data) => {
        setStopData(data);
      });

      const interval = setInterval(() => {
        fetchStopsData(stopsInUse).then((data) => {
          setStopData(data);
        });

        console.log(stopData);

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

  const value = {
    stopData: stopData,
    isAdminPanelOpen: isAdminPanelOpen,
    toggleAdminPanel,
    updateStopData,
    stopsInUse,
  } as AppContext;

  return (
    <DeparturesContext.Provider value={value}>
      {children}
    </DeparturesContext.Provider>
  );
};

export default DeparturesProvider;
