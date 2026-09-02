import React, { useState } from "react";
import {
  SectionHeader,
  OptionRow,
  Toggle,
  SegmentedControl,
} from "./AdminPanelControls";

const AdminPanelNotificationsSection: React.FC = () => {
  const [threshold, setThreshold] = useState("2 min.");
  const [sound, setSound] = useState(false);
  const [browserPush, setBrowserPush] = useState(false);
  const [digest, setDigest] = useState(false);

  return (
    <div>
      <SectionHeader
        eyebrow="Alerty"
        title="Powiadomienia"
        description="Skonfiguruj, kiedy i jak zgłaszane są opóźnienia."
      />
      <div className="flex flex-col gap-3">
        <OptionRow
          label="Próg opóźnienia"
          description="Minimalne opóźnienie, przy którym odjazd zostanie oznaczony"
        >
          <SegmentedControl
            options={["1 min.", "2 min.", "5 min.", "10 min."]}
            value={threshold}
            onChange={setThreshold}
          />
        </OptionRow>
        <OptionRow
          label="Alerty dźwiękowe"
          description="Odtwórz dźwięk, gdy pojawi się nowe opóźnienie"
        >
          <Toggle checked={sound} onChange={setSound} label="Alerty dźwiękowe" />
        </OptionRow>
        <OptionRow
          label="Powiadomienia przeglądarki"
          description="Wyślij powiadomienie systemowe przy dużych opóźnieniach"
        >
          <Toggle
            checked={browserPush}
            onChange={setBrowserPush}
            label="Powiadomienia przeglądarki"
          />
        </OptionRow>
        <OptionRow
          label="Codzienne podsumowanie"
          description="Podsumuj opóźnienia na koniec każdego dnia"
        >
          <Toggle checked={digest} onChange={setDigest} label="Codzienne podsumowanie" />
        </OptionRow>
      </div>
    </div>
  );
};

export default AdminPanelNotificationsSection;
