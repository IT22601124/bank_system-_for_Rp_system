import KpiCard from '../components/common/KpiCard';
import SimpleBarChart from '../components/common/SimpleBarChart';
import { kpis, revenueSeries } from '../constants/mockData';

function DashboardPage() {
  return (
    <section className="page-wrap">
      <header className="page-header">
        <div>
          <p className="page-kicker">Overview</p>
          <h2>Executive Command Dashboard</h2>
        </div>
        <p className="page-description">
          Real-time intelligence across liquidity, risk, customer operations, and branch performance.
        </p>
      </header>

      <section className="kpi-grid">
        {kpis.map((item) => (
          <KpiCard key={item.label} item={item} />
        ))}
      </section>

      <section className="two-col-grid">
        <article className="panel">
          <h3>Operating Income Trend</h3>
          <p className="panel-text">Monthly gross operating income in millions.</p>
          <SimpleBarChart data={revenueSeries} />
        </article>

        <article className="panel gradient-panel">
          <h3>Critical Alerts</h3>
          <ul className="alert-list">
            <li>
              <strong>AML Pattern Match</strong>
              <span>12 transactions require analyst review in Colombo cluster.</span>
            </li>
            <li>
              <strong>Branch Queue Spike</strong>
              <span>Kandy Trade queue exceeded SLA for 42 minutes.</span>
            </li>
            <li>
              <strong>Loan Exposure Shift</strong>
              <span>Corporate manufacturing exposure up by 6.2% this week.</span>
            </li>
          </ul>
        </article>
      </section>
    </section>
  );
}

export default DashboardPage;