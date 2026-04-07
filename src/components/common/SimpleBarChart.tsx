import type { RevenuePoint } from '../../types/bank';

interface SimpleBarChartProps {
  data: RevenuePoint[];
}

function SimpleBarChart({ data }: SimpleBarChartProps) {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div className="bar-chart" role="img" aria-label="Monthly operating income trend">
      {data.map((point) => (
        <div key={point.month} className="bar-item">
          <div
            className="bar-fill"
            style={{ height: `${(point.value / maxValue) * 100}%` }}
            title={`${point.month}: ${point.value}M`}
          />
          <span className="bar-label">{point.month}</span>
        </div>
      ))}
    </div>
  );
}

export default SimpleBarChart;