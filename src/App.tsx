import Dashboard from "@/page/Dashboard";
import { useEffect, useState } from "react";
import { fetchMockData, fetchStopsData } from "@/services/departuresSerice";
import { DeparturesContext } from "@/services/DeparturesContext";
import type { StopData } from "./types";

function App() {
  const [stopsData, setStopsData] = useState([] as StopData[]);

  useEffect(() => {
    console.log("STOPS DATA", stopsData);
  }, [stopsData]);

  useEffect(() => {
    fetchStopsData().then((data) => {
      setStopsData(data);
    });
    const interval = setInterval(() => {
      fetchStopsData().then((data) => {
        setStopsData(data);
      });

      // fetchMockData().then((data) => {
      //   setStopsData(data);
      // });

      return () => clearInterval(interval);
    }, 20000);
  }, []);

  return (
    <DeparturesContext.Provider value={stopsData}>
      <div className="margin-2 bg-gray-900 text-white">
        <Dashboard />
      </div>
    </DeparturesContext.Provider>
  );
}

export default App;
