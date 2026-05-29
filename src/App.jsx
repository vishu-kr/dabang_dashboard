import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TodaysSales from './components/TodaysSales';
import VisitorInsights from './components/VisitorInsights';
import TotalRevenue from './components/TotalRevenue';
import CustomerSatisfaction from './components/CustomerSatisfaction';
import TargetVsReality from './components/TargetVsReality';
import TopProducts from './components/TopProducts';
import SalesMapping from './components/SalesMapping';
import VolumeServiceLevel from './components/VolumeServiceLevel';

export default function App() {
  return (
    <div className="app">
      <Sidebar active="dashboard" />
      <main className="main">
        <Header />

        <div className="dashboard-grid">
          <TodaysSales />
          <VisitorInsights />
        </div>

        <div className="grid-row-3">
          <TotalRevenue />
          <CustomerSatisfaction />
          <TargetVsReality />
        </div>

        <div className="grid-row-3">
          <TopProducts />
          <SalesMapping />
          <VolumeServiceLevel />
        </div>
      </main>
    </div>
  );
}
