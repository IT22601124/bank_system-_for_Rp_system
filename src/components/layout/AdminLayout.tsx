import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Dashboard' },
  { to: '/customers', label: 'Customers' },
  { to: '/transactions', label: 'Transactions' },
  { to: '/loans', label: 'Loans' },
  { to: '/risk', label: 'Risk & Compliance' },
  { to: '/branches', label: 'Branches' },
  { to: '/settings', label: 'Settings' },
];

function AdminLayout() {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="brand-wrap">
          <p className="brand-kicker">Atlas National</p>
          <h1 className="brand-title">Bank Admin</h1>
        </div>

        <nav className="admin-nav" aria-label="Bank admin sections">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <section className="security-card">
          <p className="security-title">Security Watch</p>
          <p className="security-detail">MFA compliance: 98.6%</p>
          <p className="security-detail">Open incidents: 3</p>
        </section>
      </aside>

      <main className="admin-main">
        <header className="topbar">
          <input
            className="search-input"
            placeholder="Search customer, account, branch, case..."
            aria-label="Search"
          />
          <div className="topbar-actions">
            <button type="button" className="topbar-btn">Export Report</button>
            <button type="button" className="topbar-btn strong">New Alert Rule</button>
          </div>
        </header>

        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;