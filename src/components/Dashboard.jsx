import { useState } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import {
  Cog6ToothIcon,
  UserCircleIcon,
  ChartBarIcon,
  ShoppingBagIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Sidebar from "./Sidebar";
import Customers from "./Customers";
import Orders from "./Orders";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const [editingSettings, setEditingSettings] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");

  // Handle collapse toggle from Sidebar

  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales 2023",
        data: [3000, 4500, 2800, 5100, 4200, 6800],
        borderColor: "rgb(59, 130, 246)",
        tension: 0.4,
      },
    ],
  };

  const productData = {
    labels: ["Electronics", "Clothing", "Books", "Food"],
    datasets: [
      {
        data: [35, 25, 20, 20],
        backgroundColor: [
          "rgb(59, 130, 246)",
          "rgb(34, 197, 94)",
          "rgb(249, 115, 22)",
          "rgb(168, 85, 247)",
        ],
      },
    ],
  };

  const renderContent = () => {
    switch (activeSection) {
      case "customers":
        return <Customers />;
      case "orders":
        return <Orders />;
      case "dashboard":
      default:
        return (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <ChartBarIcon className="h-12 w-12 text-blue-500" />
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">Today's Sales</p>
                    <p className="text-2xl font-bold text-gray-800">$1,234</p>
                    <p className="text-xs text-green-500">
                      +12% from yesterday
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <ShoppingBagIcon className="h-12 w-12 text-green-500" />
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">Total Products</p>
                    <p className="text-2xl font-bold text-gray-800">1,234</p>
                    <p className="text-xs text-blue-500">12 new today</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <UsersIcon className="h-12 w-12 text-purple-500" />
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">Active Users</p>
                    <p className="text-2xl font-bold text-gray-800">892</p>
                    <p className="text-xs text-green-500">+25% this week</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Sales Overview
                </h2>
                <div className="h-80">
                  <Line
                    data={salesData}
                    options={{ maintainAspectRatio: false, height: 300 }}
                  />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Product Categories
                </h2>
                <div className="h-80">
                  <Doughnut
                    data={productData}
                    options={{ maintainAspectRatio: true, height: 300 }}
                  />
                </div>
              </div>
            </div>

            {/* Recent Users */}
            <div className="mt-6 bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Recent Users
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          User
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Role
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Last Active
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <UserCircleIcon className="h-8 w-8 text-gray-400" />
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                John Doe
                              </div>
                              <div className="text-sm text-gray-500">
                                john@example.com
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            Admin
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          2 minutes ago
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="overflow-visible min-h-screen bg-gray-50 flex">
      <Sidebar onNavigate={setActiveSection} activeSection={activeSection} />
      <div className="flex-1 bg-gray-200">
        <div className="p-6">
          {/* Header */}
          <header className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-800">
                Fancy Online Shop
              </h1>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Online
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-200"
                onClick={() => setEditingSettings(!editingSettings)}
              >
                <Cog6ToothIcon className="h-5 w-5" />
                <span>{editingSettings ? "Save Settings" : "Settings"}</span>
              </button>
              <div className="flex items-center space-x-2">
                <UserCircleIcon className="h-8 w-8 text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Admin User
                  </p>
                  <p className="text-xs text-gray-500">admin@shop.com</p>
                </div>
              </div>
            </div>
          </header>

          {/* Dynamic Content */}
          {renderContent()}

          {/* Settings Modal */}
          {editingSettings && (
            <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-lg p-8 max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">Dashboard Settings</h2>
                <form className="space-y-4">
                  {/* ...existing form content... */}
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
