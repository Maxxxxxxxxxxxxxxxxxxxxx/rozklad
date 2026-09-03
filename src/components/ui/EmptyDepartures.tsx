import React from "react";

const EmptyDepartures: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-gray-700 bg-gray-600/10 px-4 py-10 text-center">
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white/30">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
        <line
          x1="12"
          y1="12"
          x2="12"
          y2="7.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <line
          x1="12"
          y1="12"
          x2="15.5"
          y2="13.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
      <p className="font-semibold text-white/70">Brak odjazdów</p>
      <p className="font-light text-xs text-white/50">
        Nie ma teraz zaplanowanych odjazdów z tego przystanku.
      </p>
    </div>
  );
};

export default EmptyDepartures;
