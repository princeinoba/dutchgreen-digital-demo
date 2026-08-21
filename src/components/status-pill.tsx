export function StatusPill({ children }: { children: React.ReactNode }) {
  const value = String(children).toLowerCase().replaceAll(" ", "-");
  return <span className={`status status-${value}`}>{children}</span>;
}
