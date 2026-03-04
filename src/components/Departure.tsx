import type { DepartureData } from "@/types";
import React from "react";

const Departure: React.FC<DepartureData> = (props) => {
  return (
    <div className="border border-black p-2">
      <h3>Departure</h3>
      <p>Route: {props.routeShortName}</p>
      <p>Headsign: {props.headsign}</p>
      <p>
        Estimated Time: {new Date(props.estimatedTime).toLocaleTimeString()}
      </p>
      <p>Delay: {props.delayInSeconds} seconds</p>
    </div>
  );
};

export default Departure;
