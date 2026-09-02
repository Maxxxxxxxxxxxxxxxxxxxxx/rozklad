import DeparturesContext from "@/services/DeparturesContext";
import React, { useContext, useState } from "react";
import AdminPanelNav from "./ui/AdminPanelNav";
import type { AdminPanelTab } from "./ui/AdminPanelNav";
import AdminPanelStopForm from "./ui/AdminPanelStopForm";
import AdminPanelDisplaySection from "./ui/AdminPanelDisplaySection";
import AdminPanelNotificationsSection from "./ui/AdminPanelNotificationsSection";
import AdminPanelDataSection from "./ui/AdminPanelDataSection";
import AdminPanelAboutSection from "./ui/AdminPanelAboutSection";

const AdminPanel: React.FC = () => {
  const ctx = useContext(DeparturesContext);
  const isOpen = ctx?.isAdminPanelOpen;
  const toggleAdminPanel = ctx?.toggleAdminPanel;
  const [tab, setTab] = useState<AdminPanelTab>("stops");

  const lastSaveTime = ctx?.lastSaveTime
    ? new Date(ctx.lastSaveTime).toLocaleString()
    : "Never";

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="flex flex-col border-1 rounded-2xl border-gray-700 bg-gray-800 shadow-2xl w-full max-w-3xl max-h-[85vh] text-white overflow-hidden">
          <div className="flex justify-between items-center px-6 py-4 border-b-1 border-gray-700 shrink-0">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 w-3 h-6 pt-7 rounded-sm"></div>
              <div>
                <h1 className="text-2xl font-extrabold text-white">
                  Panel administracyjny
                </h1>
                <p className="text-xs text-white/50 mt-0.5">
                  Konfiguracja i podgląd ustawień wyświetlacza
                </p>
              </div>
            </div>
            <button
              onClick={() => toggleAdminPanel?.()}
              className="text-white/50 hover:text-blue-300 text-2xl font-bold leading-none transition-colors duration-200 ease-in-out hover:cursor-pointer"
            >
              ×
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-6 overflow-y-auto grow bg-gray-900">
            <AdminPanelNav active={tab} onChange={setTab} />
            <div className="grow min-w-0">
              {tab === "stops" && <AdminPanelStopForm />}
              {tab === "display" && <AdminPanelDisplaySection />}
              {tab === "notifications" && <AdminPanelNotificationsSection />}
              {tab === "data" && <AdminPanelDataSection />}
              {tab === "about" && <AdminPanelAboutSection />}
            </div>
          </div>
          <div className="px-6 py-4 border-t-1 border-gray-700 bg-gray-900">
            <p className="text-xs text-white/50">
              Ostatni zapis:{" "}
              {new Date(lastSaveTime).toLocaleString() || "Nigdy"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
