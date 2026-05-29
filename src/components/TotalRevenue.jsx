import './TotalRevenue.css';
import { totalRevenue } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function TotalRevenue() {
  return (
    <section className="card total-revenue">
      <h2 className="card-title">Total Revenue</h2>

      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={totalRevenue} barCategoryGap="20%" margin={{ top: 16, right: 8, left: -12, bottom: 0 }}>
          <CartesianGrid stroke="#f0f1f5" vertical={false} />
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 11 }} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9ca3af', fontSize: 11 }}
            tickFormatter={(v) => v === 0 ? '0' : `${v}k`}
            ticks={[0, 5, 10, 15, 20, 25]}
            domain={[0, 25]}
          />
          <Tooltip cursor={{ fill: 'rgba(90,92,224,0.06)' }} contentStyle={{ borderRadius: 8, fontSize: 12, border: '1px solid #eef0f5' }} />
          <Bar dataKey="online" fill="#2196f3" radius={[6, 6, 0, 0]} barSize={12} />
          <Bar dataKey="offline" fill="#2bc485" radius={[6, 6, 0, 0]} barSize={12} />
        </BarChart>
      </ResponsiveContainer>

      <div className="tr-legend">
        <div className="legend-item">
          <span className="legend-dot" style={{ background: '#2196f3' }} />
          <span>Online Sales</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ background: '#2bc485' }} />
          <span>Offline Sales</span>
        </div>
      </div>
    </section>
  );
}
