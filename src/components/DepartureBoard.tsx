import React from "react";
import Departure from "./Departure";
import EmptyDepartures from "@/components/ui/EmptyDepartures";
import type { StopData } from "@/types";

interface DepartureBoardProps {
  stopData: StopData;
}

const DepartureBoard: React.FC<DepartureBoardProps> = (props) => {
  const formattedDate =
    props.stopData.lastUpdate &&
    new Date(props.stopData.lastUpdate).toLocaleTimeString();

  return (
    <div className="border-2 rounded-2xl border-gray-700 bg-gray-800/50 w-full">
      <div className="flex flex-col gap-0.5 mb-1 pb-2 pt-3 px-3 border-b-2 border-gray-700">
        <h1 className="font-semibold text-xl">{props.stopData.name}</h1>
        <h5 className="font-light text-xs text-white/50">
          Ostatnia aktualizacja: {formattedDate}
        </h5>
      </div>
      <div className="flex flex-col gap-2 border-black p-2">
        {props.stopData.departures?.length ? (
          props.stopData.departures.map((departure) => (
            <Departure key={departure.trip} {...departure} />
          ))
        ) : (
          <EmptyDepartures />
        )}
      </div>
    </div>
  );
};

export default DepartureBoard;
