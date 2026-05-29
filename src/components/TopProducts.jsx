import './TopProducts.css';
import { topProducts } from '../data/mockData';

export default function TopProducts() {
  return (
    <section className="card top-products">
      <h2 className="card-title">Top Products</h2>

      <div className="tp-table">
        <div className="tp-head">
          <span>#</span>
          <span>Name</span>
          <span>Popularity</span>
          <span className="tp-sales-col">Sales</span>
        </div>

        {topProducts.map((p) => (
          <div key={p.id} className="tp-row">
            <span className="tp-id">{p.id}</span>
            <span className="tp-name">{p.name}</span>
            <span className="tp-bar">
              <span className="tp-bar-fill" style={{ width: `${p.popularity * 2}%`, background: p.color }} />
            </span>
            <span className="tp-tag" style={{ color: p.color, borderColor: p.color }}>{p.popularity}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
