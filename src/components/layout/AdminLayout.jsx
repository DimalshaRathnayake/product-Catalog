import { NavLink, Outlet, useLocation } from 'react-router-dom';

const links = [
  ['/admin/dashboard', 'Dashboard'],
  ['/admin/products', 'Products'],
  ['/admin/resources', 'Resources'],
  ['/admin/inquiries', 'Inquiries'],
  ['/admin/distributors', 'Distributors'],
  ['/admin/analytics', 'Analytics'],
  ['/admin/users-roles', 'Users & Roles'],
  ['/admin/settings', 'Settings'],
];

export default function AdminLayout() {
  const location = useLocation();
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <div className="logo-box">T</div>
          <div>
            <strong>TALENT Admin</strong>
            <span>Control panel</span>
          </div>
        </div>

        <nav className="admin-nav">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive || (to === '/admin/products' && location.pathname === '/admin/products/new') ? 'active' : ''
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="admin-profile">
          <div className="avatar">AD</div>
          <div>
            <strong>Admin User</strong>
            <span>Administrator</span>
          </div>
        </div>
      </aside>

      <section className="admin-main">
        <header className="admin-topbar">
          <input className="search-input" placeholder="Search products, inquiries, resources..." />
          <div className="topbar-actions">
            <button className="icon-btn">⤴</button>
            <button className="btn btn-primary small">View Website</button>
          </div>
        </header>
        <div className="admin-page-content">
          <Outlet />
        </div>
      </section>
    </div>
  );
}
