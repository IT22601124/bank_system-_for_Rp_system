interface StatusPillProps {
  value: string;
}

function StatusPill({ value }: StatusPillProps) {
  const normalized = value.toLowerCase();
  const className = `status-pill ${normalized}`;

  return <span className={className}>{value}</span>;
}

export default StatusPill;