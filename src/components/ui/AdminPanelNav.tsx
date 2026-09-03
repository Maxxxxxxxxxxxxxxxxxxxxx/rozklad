import React from "react";
import {
  StopsIcon,
  DisplayIcon,
  BellIcon,
  SyncIcon,
  InfoIcon,
} from "./AdminPanelIcons";

export type AdminPanelTab =
  | "stops"
  | "display"
  | "notifications"
  | "data"
  | "about";

const NAV_ITEMS: {
  id: AdminPanelTab;
  label: string;
  icon: React.FC<{ className?: string }>;
}[] = [
  { id: "stops", label: "Przystanki", icon: StopsIcon },
  { id: "display", label: "Wyświelanie", icon: DisplayIcon },
  { id: "notifications", label: "Powiadomienia", icon: BellIcon },
  { id: "data", label: "Synchronizacja", icon: SyncIcon },
  { id: "about", label: "O aplikacji", icon: InfoIcon },
];

const AdminPanelNav: React.FC<{
  active: AdminPanelTab;
  onChange: (tab: AdminPanelTab) => void;
}> = ({ active, onChange }) => {
  return (
    <nav className="flex md:flex-col gap-1 md:w-54 shrink-0 md:border-r-2 border-gray-700 md:pr-3 overflow-x-auto md:overflow-visible p-4">
      {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors duration-200 ease-in-out hover:cursor-pointer border-l-9 ${
              isActive
                ? "bg-blue-600/10 text-blue-400 border-blue-400"
                : "text-white/50 border-transparent hover:text-white hover:bg-gray-700/50"
            }`}
          >
            <Icon className="w-4 h-4 shrink-0" />
            {label}
          </button>
        );
      })}
    </nav>
  );
};

export default AdminPanelNav;
