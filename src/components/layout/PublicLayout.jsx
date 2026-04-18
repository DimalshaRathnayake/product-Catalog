import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/products', 'Products'],
  ['/resources', 'Resources'],
  ['/distributors', 'Distributors'],
  ['/contact', 'Contact'],
];

function Logo() {
  return (
    <div className="logo-wrap">
      <div className="logo-box">T</div>
      <div>
        <strong>TALENT</strong>
        <span>Button Factory</span>
      </div>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        @media (max-width: 1024px) {
          .nav-shell {
            gap: 16px !important;
          }

          .site-header nav {
            gap: 18px !important;
          }

          .nav-actions .btn {
            padding: 12px 16px !important;
            font-size: 14px !important;
          }
        }

        @media (max-width: 768px) {
          body {
            overflow-x: hidden !important;
          }

          .site-header {
            position: sticky !important;
            top: 0 !important;
            z-index: 1000 !important;
          }

          .nav-shell {
            position: relative !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            gap: 12px !important;
            padding-top: 14px !important;
            padding-bottom: 14px !important;
          }

          .logo-wrap {
            flex-shrink: 0 !important;
          }

          .logo-wrap strong {
            font-size: 15px !important;
            line-height: 1.2 !important;
            display: block !important;
          }

          .logo-wrap span {
            font-size: 12px !important;
            line-height: 1.2 !important;
            display: block !important;
          }

          .logo-box {
            width: 40px !important;
            height: 40px !important;
            display: grid !important;
            place-items: center !important;
            font-size: 18px !important;
            flex-shrink: 0 !important;
          }

          .mobile-menu-toggle {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: 44px !important;
            height: 44px !important;
            border: 1px solid rgba(0,0,0,0.08) !important;
            border-radius: 12px !important;
            background: #fff !important;
            font-size: 20px !important;
            cursor: pointer !important;
            flex-shrink: 0 !important;
            margin-left: auto !important;
            position: relative !important;
            z-index: 1300 !important;
          }

          .mobile-menu-overlay {
            position: fixed !important;
            inset: 0 !important;
            background: rgba(15, 23, 42, 0.45) !important;
            z-index: 1100 !important;
          }

          .site-header nav {
            position: fixed !important;
            top: 0 !important;
            right: 0 !important;
            left: auto !important;
            bottom: 0 !important;
            width: min(82vw, 320px) !important;
            max-width: 320px !important;
            height: 100vh !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 6px !important;
            padding: 90px 18px 24px !important;
            background: #ffffff !important;
            border-radius: 22px 0 0 22px !important;
            box-shadow: -20px 0 50px rgba(15, 23, 42, 0.22) !important;
            border-left: 1px solid rgba(0,0,0,0.06) !important;
            z-index: 1200 !important;
            transform: translateX(110%) !important;
            transition: transform 0.3s ease !important;
            overflow-y: auto !important;
          }

          .site-header nav.mobile-nav-open {
            transform: translateX(0) !important;
          }

          .site-header nav a {
            width: 100% !important;
            padding: 14px 14px !important;
            border-radius: 12px !important;
            font-size: 15px !important;
            color: #111827 !important;
          }

          .site-header nav a.active {
            background: rgba(0,0,0,0.05) !important;
          }

          .nav-actions {
            display: none !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu-toggle,
          .mobile-menu-overlay {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .nav-shell {
            padding-top: 12px !important;
            padding-bottom: 12px !important;
          }

          .logo-box {
            width: 36px !important;
            height: 36px !important;
            font-size: 16px !important;
          }

          .logo-wrap strong {
            font-size: 14px !important;
          }

          .logo-wrap span {
            font-size: 11px !important;
          }

          .mobile-menu-toggle {
            width: 40px !important;
            height: 40px !important;
            font-size: 18px !important;
          }

          .site-header nav {
            width: 88vw !important;
            padding: 82px 16px 22px !important;
          }

          .site-header nav a {
            padding: 12px 12px !important;
            font-size: 14px !important;
          }

          .cta-inner {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
          }

          .cta-inner h2 {
            font-size: 24px !important;
            line-height: 1.2 !important;
          }

          .cta-inner p {
            font-size: 14px !important;
            line-height: 1.7 !important;
          }

          .cta-actions {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            gap: 12px !important;
          }

          .cta-actions .btn {
            width: 100% !important;
          }

          .footer-grid {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }

          .footer-bottom {
            text-align: center !important;
            font-size: 13px !important;
            line-height: 1.6 !important;
          }

          .footer-main a,
          .footer-main p,
          .muted {
            font-size: 14px !important;
            line-height: 1.7 !important;
          }
        }

        @media (max-width: 768px) {
          .cta-inner {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 24px !important;
          }

          .cta-actions {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            gap: 12px !important;
          }

          .cta-actions .btn {
            width: 100% !important;
            justify-content: center !important;
          }

          .footer-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 24px !important;
          }
        }

        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <header className="site-header">
        {menuOpen && (
          <div
            className="mobile-menu-overlay"
            onClick={() => setMenuOpen(false)}
          />
        )}

        <div className="container nav-shell">
          <Logo />

          <nav className={menuOpen ? 'mobile-nav-open' : ''}>
            {navItems.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="icon-btn" aria-label="Search">⌕</button>
            <button className="btn btn-primary">Request Quote</button>
          </div>

          <button
            className="mobile-menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            type="button"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="cta-strip">
        <div className="container cta-inner">
          <div>
            <h2>Ready to Elevate Your Button Production?</h2>
            <p>Join thousands of satisfied customers worldwide. Get a custom quote for your business today.</p>
          </div>
          <div className="cta-actions">
            <button className="btn btn-light">Request a Quote</button>
            <button className="btn btn-outline-light">Contact Sales Team</button>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container footer-grid">
          <div>
            <Logo />
            <p className="muted">Trusted source for button-making machines, parts, molds, and industrial solutions worldwide.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <a href="/about">About Us</a>
            <a href="/products">Products</a>
            <a href="/resources">Resources</a>
            <a href="/distributors">Become a Distributor</a>
          </div>
          <div>
            <h4>Product Categories</h4>
            <a href="/products">Button Machines</a>
            <a href="/products">Paper Cutters</a>
            <a href="/products">Button Parts</a>
            <a href="/products">Molds & Accessories</a>
          </div>
          <div>
            <h4>Contact Us</h4>
            <p>No. 888 Demo Road, Guangdong, China</p>
            <p>+86 020 1234 5678</p>
            <p>info@talentbutton.com</p>
          </div>
        </div>
        <div className="container footer-bottom">© 2024 TALENT Button Factory. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default function PublicLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
