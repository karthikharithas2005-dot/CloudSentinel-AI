import { Link, useLocation } from "react-router-dom";
import {
  FaShieldAlt,
  FaExclamationTriangle,
  FaChartLine,
  FaRobot,
  FaFileAlt,
  FaCog,
  FaCloud,
} from "react-icons/fa";

import "../styles/sidebar.css";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <FaShieldAlt />,
    },
    {
      name: "Alerts",
      path: "/alerts",
      icon: <FaExclamationTriangle />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <FaChartLine />,
    },
    {
      name: "AI Insights",
      path: "/insights",
      icon: <FaRobot />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <FaFileAlt />,
    },
    {
      name: "Cloud Connections",
      path: "/cloud",
      icon: <FaCloud />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>🛡 CloudSentinel</h2>
      </div>

      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`sidebar-item ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            <span className="icon">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>

      <div className="sidebar-footer">
        <p>CloudSentinel AI</p>
      </div>
    </div>
  );
}

export default Sidebar;
