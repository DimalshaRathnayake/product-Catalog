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
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Logo />
        <nav>
          {navItems.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" aria-label="Search">⌕</button>
          <button className="btn btn-primary">Request Quote</button>
        </div>
      </div>
    </header>
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
