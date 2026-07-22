import DashboardCards from "../components/DashboardCards";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold">
        Welcome to RouteIQ 👋
      </h1>

      <p className="text-gray-500 mt-2">
        Smart Logistics & Inventory Management Dashboard
      </p>

      <DashboardCards />

    </div>
  );
}

export default Dashboard;