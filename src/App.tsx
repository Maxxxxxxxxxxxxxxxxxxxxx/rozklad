import Dashboard from "@/page/Dashboard";
import { useEffect, useState } from "react";
import { fetchStopsData } from "@/services/departuresSerice";
import { DeparturesContext } from "@/services/DeparturesContext";
import type { StopData } from "./types";

function App() {
  const [stopsData, setStopsData] = useState([] as StopData[]);

  useEffect(() => {
    fetchStopsData().then((data) => {
      setStopsData(data);
    });
  }, []);

  return (
    <DeparturesContext value={stopsData}>
      <div className="h-100 w-full margin-2">
        <Dashboard />
      </div>
    </DeparturesContext>
  );
}

export default App;
