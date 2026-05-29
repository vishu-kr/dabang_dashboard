import './TodaysSales.css';

import {
  FiBarChart2,
  FiFileText,
  FiPackage,
  FiUsers,
  FiDownload,
} from 'react-icons/fi';

import { statCards } from '../data/mockData';

const iconByLabel = {
  'Total Sales': <FiBarChart2 />,
  'Total Order': <FiFileText />,
  'Product Sold': <FiPackage />,
  'New Customers': <FiUsers />,
};

export default function TodaysSales() {
  return (
    <section className="card todays-sales">
      <div className="ts-header">
        <div>
          <h2 className="card-title">Today's Sales</h2>
          <p className="card-subtitle">Sales Summary</p>
        </div>

        <button className="export-btn">
          <FiDownload />
          <span>Export</span>
        </button>
      </div>

      <div className="ts-grid">
        {statCards.map((c) => (
          <div
            key={c.label}
            className={`stat-card tint-${c.tint}`}
          >
            <div className={`stat-icon icon-${c.tint}`}>
              {iconByLabel[c.label]}
            </div>

            <div className="stat-value">{c.value}</div>

            <div className="stat-label">{c.label}</div>

            <div className="stat-delta">{c.delta}</div>
          </div>
        ))}
      </div>
    </section>
  );
}