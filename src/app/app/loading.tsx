export default function PortalLoading() {
  return <div className="portal-loading" aria-busy="true"><div className="skeleton wide" /><div className="kpi-grid">{Array.from({ length: 4 }, (_, index) => <div className="skeleton card" key={index} />)}</div><div className="skeleton table" /></div>;
}
