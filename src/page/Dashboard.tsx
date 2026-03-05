import React, { useContext } from "react";
import Header from "../components/Header";
import DepartureBoard from "../components/DepartureBoard";
import DepartureBoardWrapper from "@/components/DepartureBoardWrapper";
import { DeparturesContext } from "@/services/DeparturesContext";
import type { StopData } from "@/types";

const Dashboard: React.FC = () => {
  const stopsData = useContext(DeparturesContext);

  return (
    <div className="h-full w-full">
      <Header />
      <DepartureBoardWrapper>
        {stopsData?.map((d: StopData) => (
          <DepartureBoard key={d.stopId} stopData={d} />
        ))}
      </DepartureBoardWrapper>
    </div>
  );
};

export default Dashboard;
