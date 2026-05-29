import Dashboard from "@/page/Dashboard";
import DeparturesProvider from "@/services/DeparturesProvider";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <DeparturesProvider>
      <AdminPanel />
      <div className="margin-2 bg-gray-900 text-white">
        <Dashboard />
      </div>
    </DeparturesProvider>
  );
}

export default App;
