import './TargetVsReality.css';
import { targetReality } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FiTrendingUp, FiGrid } from "react-icons/fi";

export default function TargetVsReality() {
  return (
    <section className="card target-reality">
      <h2 className="card-title">Target vs Reality</h2>

      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={targetReality} barCategoryGap="15%" margin={{ top: 12, right: 8, left: -22, bottom: 0 }}>
          <XAxis dataKey="m" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 10 }} />
          <YAxis hide />
          <Tooltip cursor={{ fill: 'rgba(90,92,224,0.06)' }} contentStyle={{ borderRadius: 8, fontSize: 12, border: '1px solid #eef0f5' }} />
          <Bar dataKey="reality" fill="#2bc485" radius={[4, 4, 0, 0]} barSize={14} />
          <Bar dataKey="target" fill="#fcd34d" radius={[4, 4, 0, 0]} barSize={14} />
        </BarChart>
      </ResponsiveContainer>

      <div className="tr-rows">

        <div className="tr-row">
          <div
            className="tr-row-icon"
            style={{ background: "#d6f5e3" }}
          >
            <FiTrendingUp
              size={16}
              color="#2bc485"
            />
          </div>

          <div className="tr-text">
            <div className="tr-label">
              Reality Sales
            </div>

            <div className="tr-sub">
              Global
            </div>
          </div>

          <div
            className="tr-value"
            style={{ color: "#2bc485" }}
          >
            8.823
          </div>
        </div>

        <div className="tr-row">
          <div
            className="tr-row-icon"
            style={{ background: "#fef3c7" }}
          >
            <FiGrid
              size={16}
              color="#f59e0b"
            />
          </div>

          <div className="tr-text">
            <div className="tr-label">
              Target Sales
            </div>

            <div className="tr-sub">
              Commercial
            </div>
          </div>

          <div
            className="tr-value"
            style={{ color: "#f59e0b" }}
          >
            12.122
          </div>
        </div>

      </div>
    </section>
  );
}
