import type { DepartureData } from "@/types";
import LineNumberIcon from "@/components/ui/LineNumberIcon";
import React from "react";

const Departure: React.FC<DepartureData> = (props) => {
  const isDelayed = props.delayInSeconds > 60;

  return (
    <div
      className={` ${isDelayed && "border border-orange-500/50"} ${isDelayed ? "bg-orange-500/20" : "bg-gray-600/30"} rounded-xl p-2`}
    >
      <div className="dep-info-wrapper flex gap-3 flex-row grow items-center">
        <LineNumberIcon lineNumber={props.routeId} color="black" />
        <div className="info-left flex flex-col gap-1">
          <p>{props.headsign}</p>
          <div className="flex flex-row grow gap-2 items-center">
            <p className="text-xs font-light">
              Pojazd: {props.vehicleCode ?? "----"}
            </p>
            {isDelayed && (
              <p className="text-yellow-400 text-xs">
                Opóźnienie {Math.round(props.delayInSeconds / 60)} min
              </p>
            )}
          </div>
          <p></p>
        </div>
        <div className="info-right"></div>
      </div>
    </div>
  );
};

export default Departure;
