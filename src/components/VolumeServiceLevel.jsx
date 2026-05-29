import './VolumeServiceLevel.css';
import { volumeService } from '../data/mockData';
import { BarChart, Bar, Tooltip, ResponsiveContainer, YAxis } from 'recharts';

export default function VolumeServiceLevel() {
  return (
    <section className="card volume-service">
      <h2 className="card-title">Volume vs Service Level</h2>

      <ResponsiveContainer width="100%" height={170}>
        <BarChart data={volumeService} barCategoryGap="25%" margin={{ top: 12, right: 8, left: 8, bottom: 0 }}>
          <YAxis hide />
          <Tooltip cursor={{ fill: 'rgba(90,92,224,0.06)' }} contentStyle={{ borderRadius: 8, fontSize: 12, border: '1px solid #eef0f5' }} />
          <Bar dataKey="service" stackId="a" fill="#2bc485" barSize={14} />
          <Bar dataKey="volume"  stackId="a" fill="#2196f3" barSize={14} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <div className="vs-legend">
        <div className="vs-item">
          <div className="vs-row">
            <span className="legend-dot" style={{ background: '#2196f3' }} />
            <span>Volume</span>
          </div>
          <div className="vs-num">1,135</div>
        </div>
        <div className="vs-item">
          <div className="vs-row">
            <span className="legend-dot" style={{ background: '#2bc485' }} />
            <span>Services</span>
          </div>
          <div className="vs-num">635</div>
        </div>
      </div>
    </section>
  );
}
