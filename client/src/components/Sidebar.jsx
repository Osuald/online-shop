import { useState, useEffect } from "react";
import {
  ChartBarIcon,
  ShoppingBagIcon,
  UsersIcon,
  CurrencyDollarIcon,
  Cog6ToothIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  BuildingStorefrontIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

const Sidebar = ({ onNavigate, activeSection }) => {
  const [collapsed, setCollapsed] = useState(false);

  const navigation = [
    {
      name: "Dashboard",
      icon: ChartBarIcon,
      id: "dashboard",
      current: activeSection === "dashboard",
    },
    {
      name: "Products",
      icon: ShoppingBagIcon,
      id: "products",
      current: activeSection === "products",
    },
    {
      name: "Orders",
      icon: ClipboardDocumentListIcon,
      id: "orders",
      current: activeSection === "orders",
    },
    {
      name: "Customers",
      icon: UsersIcon,
      id: "customers",
      current: activeSection === "customers",
    },
    {
      name: "Transactions",
      icon: CurrencyDollarIcon,
      href: "#",
      current: false,
    },
    {
      name: "Store Settings",
      icon: BuildingStorefrontIcon,
      href: "#",
      current: false,
    },
  ];

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-64"
      } sticky top-0 min-h-[80vh] fixed left-0 bg-gray-800 text-white transition-all duration-300`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!collapsed && <h2 className="text-xl font-bold">Admin Panel</h2>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg bg-gray-700 hover:bg-gray-600"
        >
          {collapsed ? (
            <ChevronRightIcon className="w-5 h-5" />
          ) : (
            <ChevronLeftIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      <nav className="mt-4">
        {navigation.map((item) => (
          <a
            key={item.name}
            onClick={() => onNavigate(item.id)}
            className={`flex items-center cursor-pointer ${
              collapsed ? "justify-center" : "justify-start"
            } px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 ${
              item.current ? "bg-gray-700 text-white" : ""
            }`}
          >
            <item.icon className="w-6 h-6 flex-shrink-0" />
            {!collapsed && <span className="ml-3">{item.name}</span>}
          </a>
        ))}
      </nav>

      <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
        <a
          href="#"
          className={`flex items-center ${
            collapsed ? "justify-center" : "justify-start"
          } text-gray-300 hover:text-white transition-colors duration-200`}
        >
          <Cog6ToothIcon className="w-6 h-6" />
          {!collapsed && <span className="ml-3">Settings</span>}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
