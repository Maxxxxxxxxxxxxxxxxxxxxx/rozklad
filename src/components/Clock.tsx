import React, { useEffect } from "react";
import { useState } from "react";

export const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const formattedTime = time.toLocaleTimeString("pl-PL", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());

      return () => clearInterval(interval);
    }, 1000);
  }, []);

  return <div>{formattedTime}</div>;
};
