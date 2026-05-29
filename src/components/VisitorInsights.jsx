import './VisitorInsights.css';
import { visitorInsights } from '../data/mockData';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine,
} from 'recharts';

const legend = [
  { key: 'loyal', label: 'Loyal Customers', color: '#8b6fdc' },
  { key: 'new', label: 'New Customers', color: '#ef4f6c' },
  { key: 'unique', label: 'Unique Customers', color: '#2bc485' },
];

export default function VisitorInsights() {
  return (
    <section className="card visitor-insights">
      <h2 className="card-title">Visitor Insights</h2>

      <div className="chart-wrap">
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={visitorInsights} margin={{ top: 16, right: 12, left: -16, bottom: 0 }}>
            <CartesianGrid stroke="#f0f1f5" vertical={false} />
            <XAxis dataKey="m" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 11 }} />
            <YAxis ticks={[100, 200, 300, 400]} domain={[0, 400]} axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 11 }} />
            <Tooltip contentStyle={{ borderRadius: 8, fontSize: 12, border: '1px solid #eef0f5' }} />
            <ReferenceLine x="Jul" stroke="#ef4f6c" strokeDasharray="3 3" />
            <Line type="monotone" dataKey="loyal" stroke="#8b6fdc" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="new" stroke="#ef4f6c" strokeWidth={3} dot={false}
              activeDot={{ r: 6, fill: '#ef4f6c', stroke: '#fff', strokeWidth: 2 }} />
            <Line type="monotone" dataKey="unique" stroke="#2bc485" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="vi-legend">
        {legend.map((l) => (
          <div key={l.key} className="legend-item">
            <span className="legend-swatch" style={{ background: l.color }} />
            <span>{l.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
