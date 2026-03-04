import Dashboard from "@/page/Dashboard";
import { useEffect, useState } from "react";
import { fetchMockData } from "@/services/departuresSerice";
import { DeparturesContext } from "@/services/DeparturesContext";
import type { StopData } from "./types";

function App() {
  const [stopsData, setStopsData] = useState([] as StopData[]);

  useEffect(() => {
    fetchMockData().then((data) => {
      setStopsData(data);
    });
  }, []);

  return (
    <DeparturesContext value={stopsData}>
      <div className="margin-2 bg-gray-900 text-white">
        <Dashboard />
      </div>
    </DeparturesContext>
  );
}

export default App;
