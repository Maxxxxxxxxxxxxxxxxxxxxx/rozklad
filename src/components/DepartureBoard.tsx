import React from "react";
import Departure from "./Departure";
import type { StopData } from "@/types";

interface DepartureBoardProps {
  stopData: StopData;
}

const DepartureBoard: React.FC<DepartureBoardProps> = (props) => {
  return (
    <div className="border border-black p-4 w-full">
      <h1>{props.stopData.name}</h1>
      <div className="flex flex-col gap-3 border-black p-1">
        {props.stopData.departures.map((departure) => (
          <Departure key={departure.id} {...departure} />
        ))}
      </div>
    </div>
  );
};

export default DepartureBoard;
