import "./Sidebar.css";

import {
  FiGrid,
  FiBarChart2,
  FiShoppingCart,
  FiPackage,
  FiTrendingUp,
  FiMessageSquare,
  FiSettings,
  FiLogOut,
  FiPieChart,
  FiAward,
} from "react-icons/fi";

const navItems = [
  { key: "dashboard", label: "Dashboard", icon: FiPieChart },
  { key: "leaderboard", label: "Leaderboard", icon: FiBarChart2 },
  { key: "order", label: "Order", icon: FiShoppingCart },
  { key: "products", label: "Products", icon: FiPackage },
  { key: "sales", label: "Sales Report", icon: FiTrendingUp },
  { key: "messages", label: "Messages", icon: FiMessageSquare },
  { key: "settings", label: "Settings", icon: FiSettings },
  { key: "signout", label: "Sign Out", icon: FiLogOut },
];

export default function Sidebar({ active = "dashboard" }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-mark">
          <FiGrid size={18} />
        </div>

        <span className="brand-name">Dabang</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.key}
              className={`nav-item ${active === item.key ? "is-active" : ""
                }`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-promo">
        <div className="promo-mark">
          <FiAward size={20} />
        </div>

        <h4>Dabang Pro</h4>

        <p>
          Get access to all
          <br />
          features on tetumbas
        </p>

        <button className="promo-cta">
          Get Pro
        </button>
      </div>
    </aside>
  );
}



