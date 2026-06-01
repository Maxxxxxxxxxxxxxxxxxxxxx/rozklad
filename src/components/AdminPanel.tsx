import DeparturesContext from "@/services/DeparturesContext";
import React, { useContext } from "react";
import AdminPanelStopForm from "./ui/AdminPanelStopForm";

const AdminPanel: React.FC = () => {
  const ctx = useContext(DeparturesContext);
  const isOpen = ctx?.isAdminPanelOpen;
  const toggleAdminPanel = ctx?.toggleAdminPanel;

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      )}

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-2xl mx-4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Admin Panel</h1>
              <button
                onClick={() => toggleAdminPanel()}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="space-y-4"></div>
            <AdminPanelStopForm></AdminPanelStopForm>
            <div className="bottom mt-6 flex gap-4"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPanel;
