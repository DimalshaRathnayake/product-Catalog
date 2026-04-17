import { useState, useEffect, useRef } from "react";

const productCategories = [
  { title: "Badge Presses", desc: "Heavy-duty industrial presses engineered for high-volume badge and button production with precision consistency.", icon: "⚙" },
  { title: "Paper Cutters", desc: "Professional-grade rotary and guillotine cutters designed for clean, accurate cuts across all media types.", icon: "✂" },
  { title: "Button Molds", desc: "Precision-machined molds in all standard sizes — compatible with leading press systems worldwide.", icon: "◉" },
  { title: "Complete Kits", desc: "All-in-one starter and professional manufacturing kits with everything needed for immediate production.", icon: "◈" },
  { title: "Spare Parts", desc: "OEM-grade replacement components stocked globally for zero-downtime operational continuity.", icon: "⛭" },
  { title: "Accessories", desc: "Supplementary tools, films, mylar, and finishing materials to round out your production workflow.", icon: "◇" },
];

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "85+", label: "Countries Served" },
  { value: "500+", label: "Products" },
  { value: "2,000+", label: "Global Clients" },
];

const supportItems = [
  { title: "Advanced Manufacturing", icon: "⚡", desc: "Precision CNC and automated production lines delivering consistent, high-tolerance components at scale." },
  { title: "Quality Assurance", icon: "✦", desc: "ISO-certified multi-stage inspection protocols ensuring every shipment meets exacting global standards." },
  { title: "Global Shipping", icon: "◎", desc: "Optimized logistics network covering 85+ countries with real-time tracking and customs documentation." },
  { title: "Expert Support", icon: "◈", desc: "Dedicated B2B technical advisors providing setup, training, and lifecycle support for all product lines." },
];

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const handler = () => setY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return y;
}

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimSection({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(48px)",
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const scrollY = useScrollY();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const navLinks = ["Home", "Products", "Solutions", "Facilities", "About", "Contact"];
  const navOpaque = scrollY > 60;

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", background: "#080b10", color: "#e8e2d9", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Outfit:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --gold: #c9a84c;
          --gold-light: #e8c87a;
          --gold-dim: #7a6030;
          --bg: #080b10;
          --bg2: #0e1219;
          --bg3: #141a24;
          --surface: #161d29;
          --border: rgba(201,168,76,0.15);
          --text: #e8e2d9;
          --text-muted: #8a8a8a;
          --sans: 'Outfit', sans-serif;
          --serif: 'Cormorant Garamond', Georgia, serif;
        }

        html { scroll-behavior: smooth; }

        /* NAV */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          padding: 0 2.5rem;
          transition: background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease;
        }
        .nav.opaque {
          background: rgba(8,11,16,0.85);
          backdrop-filter: blur(20px);
          box-shadow: 0 1px 0 var(--border);
        }
        .nav-inner {
          max-width: 1320px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          height: 76px;
        }
        .nav-logo {
          font-family: var(--serif); font-size: 1.6rem; font-weight: 700;
          color: var(--gold); letter-spacing: 0.08em; text-decoration: none;
          display: flex; align-items: center; gap: 0.5rem;
        }
        .nav-logo span { display: inline-block; width: 6px; height: 6px; background: var(--gold); border-radius: 50%; margin-bottom: 2px; }
        .nav-links { display: flex; align-items: center; gap: 2.2rem; list-style: none; }
        .nav-links a {
          font-family: var(--sans); font-size: 0.82rem; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none;
          color: var(--text-muted); transition: color 0.3s;
        }
        .nav-links a:hover, .nav-links a.active { color: var(--gold); }
        .nav-cta {
          font-family: var(--sans); font-size: 0.78rem; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          padding: 0.55rem 1.4rem; border: 1px solid var(--gold);
          background: transparent; color: var(--gold); cursor: pointer;
          transition: background 0.3s, color 0.3s; border-radius: 2px;
        }
        .nav-cta:hover { background: var(--gold); color: var(--bg); }
        .nav-burger { display: none; background: none; border: none; cursor: pointer; padding: 4px; }
        .burger-line { display: block; width: 22px; height: 1.5px; background: var(--gold); margin: 5px 0; transition: all 0.3s; }

        /* HERO */
        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden; background: var(--bg);
        }
        .hero-bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 60% 40%, rgba(201,168,76,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 10% 80%, rgba(201,168,76,0.04) 0%, transparent 60%),
            linear-gradient(160deg, #060810 0%, #0e1520 50%, #080b10 100%);
        }
        .hero-grid {
          position: absolute; inset: 0; opacity: 0.06;
          background-image: linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent);
        }
        .hero-noise {
          position: absolute; inset: 0; opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
        }
        .hero-line-left {
          position: absolute; left: 0; top: 0; bottom: 0; width: 1px;
          background: linear-gradient(to bottom, transparent, var(--gold-dim) 30%, var(--gold-dim) 70%, transparent);
          opacity: 0.3;
        }
        .hero-content {
          position: relative; z-index: 2; max-width: 860px;
          text-align: center; padding: 0 2rem;
        }
        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 0.6rem;
          font-family: var(--sans); font-size: 0.72rem; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold);
          border: 1px solid var(--border); padding: 0.45rem 1.2rem; border-radius: 2px;
          margin-bottom: 2rem; animation: fadeSlideDown 0.9s ease both;
        }
        .hero-eyebrow::before { content: ''; width: 18px; height: 1px; background: var(--gold); }
        .hero-eyebrow::after { content: ''; width: 18px; height: 1px; background: var(--gold); }
        .hero-h1 {
          font-family: var(--serif); font-size: clamp(2.8rem, 6vw, 5.2rem);
          font-weight: 300; line-height: 1.12; letter-spacing: -0.01em;
          color: var(--text); margin-bottom: 1.5rem;
          animation: fadeSlideUp 1s ease 0.2s both;
        }
        .hero-h1 em { font-style: italic; color: var(--gold); }
        .hero-sub {
          font-family: var(--sans); font-size: 1rem; font-weight: 300; line-height: 1.7;
          color: var(--text-muted); max-width: 560px; margin: 0 auto 2.8rem;
          animation: fadeSlideUp 1s ease 0.35s both;
        }
        .hero-actions {
          display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;
          animation: fadeSlideUp 1s ease 0.5s both;
        }
        .hero-scroll {
          position: absolute; bottom: 2.5rem; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
          font-family: var(--sans); font-size: 0.65rem; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--text-muted); z-index: 2;
          animation: fadeIn 1.5s ease 1s both;
        }
        .scroll-line { width: 1px; height: 40px; background: linear-gradient(to bottom, var(--gold), transparent); animation: scrollPulse 2s ease-in-out infinite; }

        /* STATS */
        .stats-bar {
          background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          padding: 3rem 2rem;
        }
        .stats-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(4,1fr); gap: 2rem; }
        .stat-item { text-align: center; }
        .stat-value {
          font-family: var(--serif); font-size: clamp(2.2rem, 4vw, 3.5rem); font-weight: 600;
          color: var(--gold); line-height: 1; margin-bottom: 0.4rem;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .stat-label { font-family: var(--sans); font-size: 0.75rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-muted); }

        /* SECTION */
        .section { padding: 7rem 2rem; }
        .section-alt { background: var(--bg2); }
        .container { max-width: 1240px; margin: 0 auto; }

        .section-label {
          font-family: var(--sans); font-size: 0.7rem; font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold);
          margin-bottom: 0.8rem; display: flex; align-items: center; gap: 0.7rem;
        }
        .section-label::before { content: ''; width: 28px; height: 1px; background: var(--gold); }
        .section-title {
          font-family: var(--serif); font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 300; line-height: 1.2; color: var(--text);
          margin-bottom: 1rem;
        }
        .section-title em { font-style: italic; color: var(--gold); }
        .section-body {
          font-family: var(--sans); font-size: 0.95rem; line-height: 1.75;
          color: var(--text-muted); max-width: 540px;
        }
        .section-header-center { text-align: center; margin-bottom: 4rem; }
        .section-header-center .section-label { justify-content: center; }
        .section-header-center .section-label::before { display: none; }
        .section-header-center .section-body { margin: 0 auto; }

        /* PRODUCT CARDS */
        .product-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5px;
          border: 1.5px solid var(--border); background: var(--border);
          border-radius: 4px; overflow: hidden;
        }
        .product-card {
          background: var(--bg); padding: 2.4rem;
          transition: background 0.4s; cursor: default; position: relative;
          overflow: hidden;
        }
        .product-card::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.05) 0%, transparent 60%);
          opacity: 0; transition: opacity 0.4s;
        }
        .product-card:hover { background: var(--bg3); }
        .product-card:hover::before { opacity: 1; }
        .product-card:hover .pc-icon { color: var(--gold); transform: scale(1.1) rotate(-5deg); }
        .product-card:hover .pc-arrow { transform: translateX(4px); opacity: 1; }
        .pc-icon { font-size: 1.6rem; margin-bottom: 1.2rem; color: var(--gold-dim); transition: all 0.35s; display: block; }
        .pc-title { font-family: var(--serif); font-size: 1.25rem; font-weight: 600; color: var(--text); margin-bottom: 0.6rem; }
        .pc-desc { font-family: var(--sans); font-size: 0.83rem; line-height: 1.7; color: var(--text-muted); margin-bottom: 1.4rem; }
        .pc-link { font-family: var(--sans); font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); text-decoration: none; display: inline-flex; align-items: center; gap: 0.4rem; }
        .pc-arrow { transition: transform 0.3s, opacity 0.3s; opacity: 0.6; }

        /* WHY SECTION */
        .split-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
        .check-list { list-style: none; display: flex; flex-direction: column; gap: 0.8rem; margin: 1.8rem 0 2.4rem; }
        .check-list li {
          font-family: var(--sans); font-size: 0.9rem; color: var(--text-muted);
          display: flex; align-items: flex-start; gap: 0.75rem; padding-bottom: 0.8rem;
          border-bottom: 1px solid rgba(201,168,76,0.07);
        }
        .check-list li::before { content: '◆'; color: var(--gold); font-size: 0.5rem; margin-top: 4px; flex-shrink: 0; }
        .image-placeholder {
          aspect-ratio: 4/3; border-radius: 4px; background: var(--surface);
          border: 1px solid var(--border); display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
        }
        .image-placeholder::after {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 30% 30%, rgba(201,168,76,0.12) 0%, transparent 60%);
        }
        .img-label {
          font-family: var(--sans); font-size: 0.65rem; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--gold); border: 1px solid var(--border);
          padding: 0.4rem 0.9rem; position: relative; z-index: 1;
        }

        /* SUPPORT CARDS */
        .support-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.5rem; }
        .support-card {
          background: var(--surface); border: 1px solid var(--border); padding: 2rem;
          border-radius: 4px; transition: transform 0.35s, border-color 0.35s, box-shadow 0.35s;
        }
        .support-card:hover {
          transform: translateY(-6px);
          border-color: rgba(201,168,76,0.4);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,168,76,0.1);
        }
        .sc-icon { font-size: 1.4rem; color: var(--gold); margin-bottom: 1rem; display: block; }
        .sc-title { font-family: var(--serif); font-size: 1.1rem; color: var(--text); margin-bottom: 0.6rem; }
        .sc-desc { font-family: var(--sans); font-size: 0.82rem; line-height: 1.7; color: var(--text-muted); }

        /* DARK PANEL */
        .dark-panel {
          background: linear-gradient(135deg, #0a0f18 0%, #111827 100%);
          border: 1px solid var(--border); border-radius: 6px;
          padding: 4rem; overflow: hidden; position: relative;
        }
        .dark-panel::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }

        /* CTA SECTION */
        .cta-section {
          padding: 8rem 2rem; text-align: center; position: relative; overflow: hidden;
          background: var(--bg2);
        }
        .cta-section::before {
          content: 'TALENT'; position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%);
          font-family: var(--serif); font-size: 18vw; font-weight: 700;
          color: transparent; -webkit-text-stroke: 1px rgba(201,168,76,0.05);
          pointer-events: none; white-space: nowrap; z-index: 0; letter-spacing: 0.1em;
        }
        .cta-content { position: relative; z-index: 1; max-width: 640px; margin: 0 auto; }

        /* FOOTER */
        footer {
          background: #030508; border-top: 1px solid var(--border);
          padding: 4rem 2rem 2.5rem; font-family: var(--sans);
        }
        .footer-grid { max-width: 1240px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; margin-bottom: 3rem; }
        .footer-brand p { font-size: 0.83rem; line-height: 1.7; color: var(--text-muted); margin-top: 0.8rem; max-width: 280px; }
        .footer-col h5 { font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); margin-bottom: 1rem; }
        .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
        .footer-col a { font-size: 0.83rem; color: var(--text-muted); text-decoration: none; transition: color 0.2s; }
        .footer-col a:hover { color: var(--text); }
        .footer-bottom { max-width: 1240px; margin: 0 auto; padding-top: 2rem; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
        .footer-bottom p { font-size: 0.75rem; color: #444; }

        /* BUTTONS */
        .btn-gold {
          font-family: var(--sans); font-size: 0.78rem; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          padding: 0.85rem 2rem; background: var(--gold); color: #0a0b0e;
          border: none; cursor: pointer; border-radius: 2px;
          transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
        }
        .btn-gold:hover { background: var(--gold-light); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(201,168,76,0.25); }
        .btn-outline-gold {
          font-family: var(--sans); font-size: 0.78rem; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          padding: 0.85rem 2rem; background: transparent; color: var(--gold);
          border: 1px solid var(--gold); cursor: pointer; border-radius: 2px;
          transition: background 0.3s, color 0.3s;
        }
        .btn-outline-gold:hover { background: rgba(201,168,76,0.1); }

        /* ANIMATIONS */
        @keyframes fadeSlideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scrollPulse { 0%,100% { opacity: 1; transform: scaleY(1); } 50% { opacity: 0.3; transform: scaleY(0.7); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes lineDraw { from { width: 0; } to { width: 100%; } }
        @keyframes rotateSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100% { opacity: 0.6; } 50% { opacity: 1; } }

        .gold-shimmer {
          background: linear-gradient(90deg, var(--gold), var(--gold-light), var(--gold));
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        /* DECORATIVE */
        .deco-ring {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(201,168,76,0.08);
          pointer-events: none;
        }

        /* INLINE ACTIONS */
        .inline-actions { display: flex; gap: 1rem; flex-wrap: wrap; }

        /* TICKER */
        .ticker-bar {
          background: var(--gold); color: #0a0b0e;
          padding: 0.5rem 0; overflow: hidden; white-space: nowrap;
        }
        .ticker-inner {
          display: inline-flex; gap: 4rem;
          animation: ticker 28s linear infinite;
          font-family: var(--sans); font-size: 0.7rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
        }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ticker-sep { opacity: 0.4; }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .product-grid { grid-template-columns: repeat(2,1fr); }
          .split-grid { grid-template-columns: 1fr; gap: 3rem; }
          .support-grid { grid-template-columns: repeat(2,1fr); }
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .nav-links, .nav-cta { display: none; }
          .nav-burger { display: block; }
          .product-grid { grid-template-columns: 1fr; }
          .support-grid { grid-template-columns: 1fr; }
          .stats-inner { grid-template-columns: repeat(2,1fr); }
          .footer-grid { grid-template-columns: 1fr; }
          .section { padding: 4.5rem 1.2rem; }
          .dark-panel { padding: 2.5rem 1.5rem; }
        }

        /* MOBILE MENU */
        .mobile-menu {
          position: fixed; inset: 0; background: rgba(8,11,16,0.97);
          backdrop-filter: blur(20px); z-index: 999;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 2rem;
          transition: opacity 0.3s, pointer-events 0.3s;
        }
        .mobile-menu a {
          font-family: var(--serif); font-size: 2.2rem; font-weight: 300;
          color: var(--text); text-decoration: none; transition: color 0.3s;
          letter-spacing: 0.04em;
        }
        .mobile-menu a:hover { color: var(--gold); }
        .mobile-close {
          position: absolute; top: 1.5rem; right: 1.5rem;
          background: none; border: none; font-size: 1.5rem;
          color: var(--text-muted); cursor: pointer;
        }

        /* NUMBER COUNTER ANIMATION */
        .counter-anim { display: inline-block; }

        /* HORIZONTAL RULE */
        .gold-rule { width: 60px; height: 1px; background: var(--gold); margin: 1.5rem 0; }
        .gold-rule-center { width: 60px; height: 1px; background: var(--gold); margin: 1.5rem auto; }
      `}</style>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
          {navLinks.map(l => (
            <a key={l} href="#" onClick={() => setMenuOpen(false)}>{l}</a>
          ))}
        </div>
      )}

      {/* NAVBAR */}
      <nav className={`nav${navOpaque ? " opaque" : ""}`}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <span />TALENT
          </a>
          <ul className="nav-links">
            {navLinks.map(l => (
              <li key={l}>
                <a href="#" className={activeNav === l ? "active" : ""} onClick={() => setActiveNav(l)}>{l}</a>
              </li>
            ))}
          </ul>
          <button className="nav-cta">Get a Quote</button>
          <button className="nav-burger" onClick={() => setMenuOpen(true)}>
            <span className="burger-line" />
            <span className="burger-line" />
            <span className="burger-line" />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-noise" />
        <div className="hero-line-left" />

        {/* Decorative rings */}
        <div className="deco-ring" style={{ width: 600, height: 600, top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "rotateSlow 60s linear infinite" }} />
        <div className="deco-ring" style={{ width: 400, height: 400, top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.12 }} />
        <div className="deco-ring" style={{ width: 220, height: 220, top: "20%", right: "8%", animation: "float 8s ease-in-out infinite" }} />
        <div className="deco-ring" style={{ width: 120, height: 120, bottom: "25%", left: "6%", animation: "pulse 4s ease-in-out infinite" }} />

        <div className="hero-content">
          <div className="hero-eyebrow">Global Leader in Button Machinery Solutions</div>
          <h1 className="hero-h1">
            Premium <em>Button-Making</em><br />Machinery & Solutions
          </h1>
          <p className="hero-sub">
            Professional badge presses, paper cutters, molds, and accessories trusted by manufacturers in 85+ countries worldwide.
          </p>
          <div className="hero-actions">
            <button className="btn-gold">Explore Products</button>
            <button className="btn-outline-gold">Become a Distributor</button>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="scroll-line" />
          Scroll
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-bar">
        <div className="ticker-inner">
          {Array(2).fill(["Advanced Manufacturing", "ISO Certified", "Global Shipping", "85+ Countries", "30 Years Experience", "500+ Products", "2,000+ Clients", "OEM / ODM Solutions"]).flat().map((t, i) => (
            <span key={i}>{t} <span className="ticker-sep">◆</span></span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-inner">
          {stats.map((s, i) => (
            <AnimSection key={s.label} delay={i * 0.1}>
              <div className="stat-item">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <section className="section section-alt">
        <div className="container">
          <AnimSection className="section-header-center">
            <p className="section-label" style={{ justifyContent: "center" }}>Product Range</p>
            <h2 className="section-title">Complete <em>Manufacturing</em> Solutions</h2>
            <div className="gold-rule-center" />
            <p className="section-body">
              Browse industrial button presses, cutters, molds, and complete manufacturing support under one roof. Built for performance, designed to last.
            </p>
          </AnimSection>

          <div className="product-grid">
            {productCategories.map((item, i) => (
              <AnimSection key={item.title} delay={i * 0.07}>
                <article className="product-card">
                  <span className="pc-icon">{item.icon}</span>
                  <h3 className="pc-title">{item.title}</h3>
                  <p className="pc-desc">{item.desc}</p>
                  <a href="/products" className="pc-link">
                    View Products <span className="pc-arrow">→</span>
                  </a>
                </article>
              </AnimSection>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <button className="btn-outline-gold">View All Products</button>
          </div>
        </div>
      </section>

      {/* WHY TALENT */}
      <section className="section">
        <div className="container">
          <div className="split-grid">
            <AnimSection>
              <p className="section-label">Why Choose Us</p>
              <h2 className="section-title">Why Global Manufacturers<br />Choose <em>TALENT</em></h2>
              <div className="gold-rule" />
              <ul className="check-list">
                <li>Industry-leading warranty program with global coverage</li>
                <li>Comprehensive training materials and onboarding support</li>
                <li>Customizable solutions for OEM / ODM requirements</li>
                <li>Fast turnaround on spare parts from regional warehouses</li>
                <li>Reduced distributor support burden with self-service tools</li>
                <li>Competitive bulk pricing with volume incentive programs</li>
              </ul>
              <div className="inline-actions">
                <button className="btn-gold">Request Details</button>
                <button className="btn-outline-gold">Download Catalog</button>
              </div>
            </AnimSection>

            <AnimSection delay={0.2}>
              <div className="image-placeholder" style={{ aspectRatio: "1/1.1" }}>
                <div className="deco-ring" style={{ width: "80%", height: "80%", top: "10%", left: "10%", animation: "rotateSlow 30s linear infinite" }} />
                <div className="deco-ring" style={{ width: "50%", height: "50%", top: "25%", left: "25%", animation: "rotateSlow 20s linear infinite reverse", borderColor: "rgba(201,168,76,0.2)" }} />
                <span className="img-label">ISO Certified Models</span>
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="section section-alt">
        <div className="container">
          <AnimSection className="section-header-center">
            <p className="section-label" style={{ justifyContent: "center" }}>Our Commitment</p>
            <h2 className="section-title">Enterprise-Grade <em>Service</em> & Support</h2>
            <div className="gold-rule-center" />
          </AnimSection>

          <div className="support-grid">
            {supportItems.map((item, i) => (
              <AnimSection key={item.title} delay={i * 0.12}>
                <div className="support-card">
                  <span className="sc-icon">{item.icon}</span>
                  <h4 className="sc-title">{item.title}</h4>
                  <p className="sc-desc">{item.desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* MANUFACTURING FACILITY */}
      <section className="section">
        <div className="container">
          <AnimSection>
            <div className="dark-panel split-grid dark">
              <div className="image-placeholder" style={{ aspectRatio: "3/4", background: "rgba(201,168,76,0.03)" }}>
                <div className="deco-ring" style={{ width: "70%", height: "70%", top: "15%", left: "15%", animation: "rotateSlow 40s linear infinite" }} />
                <span className="img-label">50,000 sqm Facility</span>
              </div>
              <div>
                <p className="section-label">Manufacturing</p>
                <h2 className="section-title" style={{ color: "#e8e2d9" }}>
                  State-of-the-Art<br /><em>Manufacturing</em> Facilities
                </h2>
                <div className="gold-rule" />
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.9rem", lineHeight: 1.75, color: "#6b6b6b", marginBottom: "1.8rem" }}>
                  Our 50,000 sqm production center brings together precision metal fabrication, tooling, and quality control to ensure consistent output and long-term performance.
                </p>
                <ul className="check-list">
                  <li>Advanced CNC machining center</li>
                  <li>ISO-certified QA processes</li>
                  <li>Full in-house toolroom innovation</li>
                  <li>Dedicated export packaging facility</li>
                </ul>
                <button className="btn-outline-gold">Virtual Factory Tour</button>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-section">
        <AnimSection className="cta-content">
          <p className="section-label" style={{ justifyContent: "center" }}>Partner With Us</p>
          <h2 className="section-title" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", marginBottom: "1rem" }}>
            Ready to Scale Your<br /><em>Manufacturing</em> Operation?
          </h2>
          <div className="gold-rule-center" />
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", lineHeight: 1.7, color: "var(--text-muted)", marginBottom: "2.5rem" }}>
            Join 2,000+ global clients who trust TALENT for precision machinery, unmatched support, and competitive pricing across 85 countries.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-gold">Request a Free Quote</button>
            <button className="btn-outline-gold">Contact Our Team</button>
          </div>
        </AnimSection>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="nav-logo" style={{ textDecoration: "none", display: "inline-flex" }}>
              <span />TALENT
            </a>
            <p>Global leader in button-making machinery. Trusted by manufacturers across 85+ countries for over three decades.</p>
          </div>
          <div className="footer-col">
            <h5>Products</h5>
            <ul>
              {["Badge Presses","Paper Cutters","Button Molds","Complete Kits","Spare Parts"].map(l => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              {["About Us","Facilities","Certifications","News","Careers"].map(l => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              {["Get a Quote","Become a Distributor","Technical Support","Request Catalog","Locate Dealer"].map(l => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} TALENT Machinery Co., Ltd. All rights reserved.</p>
          <p>Privacy Policy · Terms of Use</p>
        </div>
      </footer>
    </div>
  );
}
