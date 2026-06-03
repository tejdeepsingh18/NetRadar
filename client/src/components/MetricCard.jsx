function MetricCard({ title, value, color }) {
  return (
    <div className="metric-card">
      <h3>{title}</h3>

      <h1 style={{ color: color }}>
        {value}
      </h1>
    </div>
  );
}

export default MetricCard;