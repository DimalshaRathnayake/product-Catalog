import { useState } from 'react';
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <style>{`
        @media (max-width: 1024px) {
          .admin-layout {
            grid-template-columns: 260px minmax(0, 1fr) !important;
          }

          .admin-topbar {
            gap: 12px !important;
          }

          .topbar-actions {
            display: flex !important;
            gap: 10px !important;
          }

          .search-input {
            min-width: 0 !important;
            width: 100% !important;
          }
        }

        @media (max-width: 768px) {
          .admin-layout {
            display: block !important;
            position: relative !important;
          }

          .admin-sidebar {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            bottom: 0 !important;
            width: min(82vw, 320px) !important;
            max-width: 320px !important;
            transform: ${sidebarOpen ? 'translateX(0)' : 'translateX(-100%)'} !important;
            transition: transform 0.3s ease !important;
            z-index: 1200 !important;
            overflow-y: auto !important;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2) !important;
          }

          .admin-sidebar-overlay {
            position: fixed !important;
            inset: 0 !important;
            background: rgba(15, 23, 42, 0.45) !important;
            z-index: 1100 !important;
          }

          .admin-main {
            width: 100% !important;
            min-width: 0 !important;
          }

          .admin-topbar {
            display: flex !important;
            flex-wrap: wrap !important;
            align-items: center !important;
            gap: 12px !important;
            padding: 16px !important;
            position: sticky !important;
            top: 0 !important;
            z-index: 1000 !important;
          }

          .admin-topbar .search-input {
            order: 3 !important;
            width: 100% !important;
            min-width: 0 !important;
          }

          .topbar-actions {
            display: flex !important;
            align-items: center !important;
            gap: 10px !important;
            margin-left: auto !important;
          }

          .admin-page-content {
            padding: 16px !important;
          }

          .mobile-admin-toggle {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: 42px !important;
            height: 42px !important;
            border: 1px solid rgba(0, 0, 0, 0.08) !important;
            border-radius: 12px !important;
            background: #fff !important;
            cursor: pointer !important;
            font-size: 20px !important;
            flex-shrink: 0 !important;
          }

          .admin-brand {
            padding-right: 40px !important;
          }

          .admin-profile {
            margin-top: 20px !important;
          }

          .btn.small {
            white-space: nowrap !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-admin-toggle,
          .admin-sidebar-overlay {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .admin-sidebar {
            width: 88vw !important;
          }

          .admin-topbar {
            padding: 14px !important;
          }

          .admin-page-content {
            padding: 14px !important;
          }

          .mobile-admin-toggle {
            width: 40px !important;
            height: 40px !important;
            font-size: 18px !important;
            border-radius: 10px !important;
          }

          .search-input {
            font-size: 14px !important;
          }

          .topbar-actions .btn.small {
            padding: 10px 12px !important;
            font-size: 13px !important;
          }

          .topbar-actions .icon-btn {
            width: 40px !important;
            height: 40px !important;
          }

          .admin-nav a {
            font-size: 14px !important;
          }

          .admin-brand strong,
          .admin-profile strong {
            font-size: 14px !important;
          }

          .admin-brand span,
          .admin-profile span {
            font-size: 12px !important;
          }
        }
      `}</style>

      <div className="admin-layout">
        {sidebarOpen && <div className="admin-sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

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
                onClick={() => setSidebarOpen(false)}
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
            <button
              type="button"
              className="mobile-admin-toggle"
              aria-label="Toggle sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen((prev) => !prev)}
            >
              {sidebarOpen ? '✕' : '☰'}
            </button>

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
    </>
  );
}
