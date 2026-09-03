import React, { useState } from "react";
import {
  SectionHeader,
  OptionRow,
  SegmentedControl,
} from "./AdminPanelControls";

const AdminPanelDisplaySection: React.FC = () => {
  const [theme, setTheme] = useState("Ciemny");
  const [language, setLanguage] = useState("Polski");

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
        <OptionRow label="Język" description="Język aplikacji">
          <SegmentedControl
            options={["Polski", "Angielski"]}
            value={language}
            onChange={setLanguage}
          />
        </OptionRow>
      </div>
    </div>
  );
};

export default AdminPanelDisplaySection;
