import React from "react";

const Chevrons: React.FC = () => {
  return (
    <>
      <style>{`
        .chevron {
          fill: #f59e0b;
          animation: lightStep 1.2s infinite;
        }

        .chevron:nth-child(1) { animation-delay: 0s; }
        .chevron:nth-child(2) { animation-delay: 0.3s; }
        .chevron:nth-child(3) { animation-delay: 0.6s; }

        @keyframes lightStep {
          0%, 100% { fill: #374151; }
          10% { fill: currentColor; }
          30% { fill: currentColor; }
          31% { fill: #374151; }
        }
      `}</style>

      <svg width="80" height="20" viewBox="0 0 30 30">
        <polygon
          className="chevron"
          points="10,5 20,15 10,25 15,25 25,15 15,5"
        />
        <polygon
          className="chevron"
          points="35,5 45,15 35,25 40,25 50,15 40,5"
        />
        <polygon
          className="chevron"
          points="60,5 70,15 60,25 65,25 75,15 65,5"
        />
      </svg>
    </>
  );
};

export default Chevrons;
