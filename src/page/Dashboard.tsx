import React, { useContext } from "react";
import Header from "../components/Header";
import DepartureBoard from "../components/DepartureBoard";
import DepartureBoardWrapper from "@/components/DepartureBoardWrapper";
import { DeparturesContext } from "@/services/DeparturesContext";
import type { StopData } from "@/types";

const Dashboard: React.FC = () => {
  const stopsData = useContext(DeparturesContext);

  return (
    <div className="h-full w-full p-10">
      <Header />
      <DepartureBoardWrapper>
        {stopsData.map((d: StopData) => (
          <DepartureBoard key={d.lastUpdate} stopData={d} />
        ))}
      </DepartureBoardWrapper>
    </div>
  );
};

export default Dashboard;
