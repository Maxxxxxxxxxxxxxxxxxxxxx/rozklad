import type { DepartureData } from "@/types";
import LineNumberIcon from "@/components/ui/LineNumberIcon";
import React from "react";

const Departure: React.FC<DepartureData> = (props) => {
  const isDelayed = props.delayInSeconds > 60;

  return (
    <div className="border border-black  rounded-xl p-2">
      <div className="dep-info-wrapper flex gap-3 flex-row grow items-center">
        <LineNumberIcon lineNumber={props.routeId} color="black" />
        <div className="info-left flex flex-col gap-1">
          <p>{props.headsign}</p>
          {isDelayed && (
            <p className="text-red-500 text-sm">
              Opóźnienie {Math.round(props.delayInSeconds / 60)} min
            </p>
          )}
          <p></p>
        </div>
        <div className="info-right"></div>
      </div>
    </div>
  );
};

export default Departure;
