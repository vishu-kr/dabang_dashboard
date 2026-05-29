import './CustomerSatisfaction.css';
import { customerSatisfaction } from '../data/mockData';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function CustomerSatisfaction() {
  return (
    <section className="card customer-sat">
      <h2 className="card-title">Customer Satisfaction</h2>

      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={customerSatisfaction} margin={{ top: 12, right: 8, left: 8, bottom: 0 }}>
          <defs>
            <linearGradient id="lastGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2196f3" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#2196f3" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="nowGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2bc485" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#2bc485" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="x" hide />
          <YAxis hide domain={[0, 30]} />
          <Tooltip contentStyle={{ borderRadius: 8, fontSize: 12, border: '1px solid #eef0f5' }} />
          <Area type="monotone" dataKey="last" stroke="#2196f3" strokeWidth={2.5} fill="url(#lastGrad)" dot={{ r: 3, fill: '#2196f3' }} />
          <Area type="monotone" dataKey="now" stroke="#2bc485" strokeWidth={2.5} fill="url(#nowGrad)" dot={{ r: 3, fill: '#2bc485' }} />
        </AreaChart>
      </ResponsiveContainer>

      <div className="cs-legend">
        <div className="cs-legend-item">
          <span className="cs-dot" style={{ background: '#2196f3' }} />
          <span className="cs-label">Last Month</span>
          <span className="cs-amount">$3,004</span>
        </div>
        <div className="cs-divider" />
        <div className="cs-legend-item">
          <span className="cs-dot" style={{ background: '#2bc485' }} />
          <span className="cs-label">This Month</span>
          <span className="cs-amount">$4,504</span>
        </div>
      </div>
    </section>
  );
}
