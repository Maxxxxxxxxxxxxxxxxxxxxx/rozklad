import React from "react";
import Departure from "./Departure";
import type { DepartureData } from "@/types";
import departures from "@/mock/mockDepartures.json";

const DepartureBoard: React.FC = () => {
  const departuresMockData: DepartureData[] =
    departures.departures as DepartureData[];

  return (
    <div className="border border-black p-2">
      <h1> Departure Board</h1>
      <div className="flex gap-3 column border-black p-1">
        {departuresMockData.map((departure) => (
          <Departure key={departure.id} {...departure} />
        ))}
      </div>
    </div>
  );
};

export default DepartureBoard;
