import React, { useState } from "react";
import {
  SectionHeader,
  OptionRow,
  SegmentedControl,
} from "./AdminPanelControls";

const AdminPanelDisplaySection: React.FC = () => {
  const [theme, setTheme] = useState("Ciemny");

  return (
    <div>
      <SectionHeader
        eyebrow="Wygląd"
        title="Wyświetlanie"
        description="Podgląd nadchodzących ustawień wyświetlania tablicy odjazdów."
      />
      <div className="flex flex-col gap-3">
        <OptionRow label="Motyw" description="Schemat kolorów tablicy">
          <SegmentedControl
            options={["Ciemny", "Jasny", "Auto"]}
            value={theme}
            onChange={setTheme}
          />
        </OptionRow>
      </div>
    </div>
  );
};

export default AdminPanelDisplaySection;
