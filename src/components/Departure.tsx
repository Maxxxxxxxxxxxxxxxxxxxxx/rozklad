import type { DepartureData } from "@/types";
import LineNumberIcon from "@/components/ui/LineNumberIcon";
import React from "react";
import Chevrons from "@/components/ui/Chevrons";
import { ClockIcon } from "@/components/ui/ClockIcon";

const Departure: React.FC<DepartureData> = (props) => {
  const isDelayed = props.delayInSeconds > 60;
  const estimatedTimeSeconds = Math.floor(
    (new Date(props.estimatedTime).getTime() - new Date().getTime()) / 1000,
  );

  const estimatedTimeMinutes = Math.floor(estimatedTimeSeconds / 60);

  return (
    <div
      className={` ${isDelayed && "border border-orange-500/50"} ${isDelayed ? "bg-orange-500/20 border border-orange-500/50 border-pulse" : "bg-gray-600/30"} h-15 rounded-lg p-2`}
    >
      <div className="dep-info-wrapper flex gap-3 flex-row grow items-center">
        <LineNumberIcon lineNumber={props.routeId} color="black" />
        <div className="flex flex-row justify-between items-center w-full">
          <div className="info-left flex flex-col gap-1">
            <p>{props.headsign}</p>
            <div className="flex flex-row grow gap-2 items-center h-">
              <p className="text-xs font-light text-white/50">
                {props.vehicleCode && `nr taboru: ${props.vehicleCode}`}
              </p>
              {isDelayed && (
                <p className="text-yellow-400 text-xs">
                  Opóźnienie {Math.round(props.delayInSeconds / 60)} min
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-row gap-5 justify-between dark:text-blue-300 bright:text-blue-500 items-center">
            <ClockIcon />
            <div className="info-eta flex flex-row gap-2 w-20 justify-end text-right">
              {estimatedTimeSeconds < 60 ? (
                <Chevrons />
              ) : (
                `${estimatedTimeMinutes} min`
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departure;
