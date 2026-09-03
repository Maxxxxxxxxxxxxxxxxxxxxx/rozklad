import Dashboard from "@/page/Dashboard";
import AppContextProvider from "@/services/AppContextProvider";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <AppContextProvider>
      <AdminPanel />
      <div className="margin-2 bg-gray-900 text-white">
        <Dashboard />
      </div>
    </AppContextProvider>
  );
}

export default App;
