import type { Kpi } from '../../types/bank';

interface KpiCardProps {
  item: Kpi;
}

function KpiCard({ item }: KpiCardProps) {
  const trendClass = item.trend === 'up' ? 'kpi-delta up' : 'kpi-delta down';

  return (
    <article className="kpi-card">
      <p className="kpi-label">{item.label}</p>
      <p className="kpi-value">{item.value}</p>
      <p className={trendClass}>{item.delta}</p>
    </article>
  );
}

export default KpiCard;