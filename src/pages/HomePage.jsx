import { useEffect, useState } from 'react';

const stats = [
  { value: '30+', label: 'Years Experience' },
  { value: '85+', label: 'Countries Served' },
  { value: '500+', label: 'Products' },
  { value: '2,000+', label: 'Global Clients' },
];

const supportItems = [
  'Advanced Manufacturing',
  'Quality Assurance',
  'Global Shipping',
  'Expert Support',
];

const productCategories = [
  {
    title: 'Badge Press Machines',
    desc: 'Industrial-grade button press machines engineered for precision, speed, and long-term reliability.',
  },
  {
    title: 'Paper Cutters',
    desc: 'High-performance cutters built for clean, efficient production workflows at scale.',
  },
  {
    title: 'Molds & Dies',
    desc: 'Accurate mold systems designed for consistency, flexibility, and premium output quality.',
  },
  {
    title: 'Accessories',
    desc: 'Essential add-ons and production components to optimize machine performance and maintenance.',
  },
  {
    title: 'Custom OEM Solutions',
    desc: 'Tailored manufacturing support for distributors, private labels, and industrial partners.',
  },
  {
    title: 'Spare Parts',
    desc: 'Fast-access replacement parts and technical support to minimize downtime globally.',
  },
];

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('show');
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', onScroll);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <style>{`
        :root{
          --bg:#07111f;
          --bg2:#0b1728;
          --panel:rgba(255,255,255,0.08);
          --panel-strong:rgba(255,255,255,0.12);
          --border:rgba(255,255,255,0.14);
          --text:#eaf2ff;
          --muted:#a9bad3;
          --primary:#4da3ff;
          --primary-2:#7dc1ff;
          --accent:#8b5cf6;
          --success:#22c55e;
          --shadow:0 20px 60px rgba(0,0,0,0.35);
          --radius:24px;
          --container:1200px;
        }

        *{
          box-sizing:border-box;
          margin:0;
          padding:0;
        }

        html{
          scroll-behavior:smooth;
        }

        body{
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background:
            radial-gradient(circle at top left, rgba(77,163,255,0.18), transparent 30%),
            radial-gradient(circle at top right, rgba(139,92,246,0.16), transparent 28%),
            linear-gradient(180deg, #06101d 0%, #0a1423 45%, #09111d 100%);
          color: var(--text);
        }

        a{
          text-decoration:none;
          color:inherit;
        }

        .homepage{
          min-height:100vh;
          overflow:hidden;
        }

        .container{
          width:min(var(--container), calc(100% - 32px));
          margin:0 auto;
        }

        .navbar{
          position:fixed;
          top:0;
          left:0;
          width:100%;
          z-index:999;
          transition:all .35s ease;
        }

        .navbar-inner{
          width:min(var(--container), calc(100% - 32px));
          margin:16px auto 0;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:14px 18px;
          border:1px solid transparent;
          border-radius:18px;
          transition:all .35s ease;
        }

        .navbar.scrolled .navbar-inner{
          background:rgba(7,17,31,0.65);
          backdrop-filter:blur(16px);
          -webkit-backdrop-filter:blur(16px);
          border-color:rgba(255,255,255,0.12);
          box-shadow:0 12px 30px rgba(0,0,0,0.28);
        }

        .brand{
          display:flex;
          align-items:center;
          gap:12px;
          font-weight:800;
          letter-spacing:.4px;
        }

        .brand-badge{
          width:42px;
          height:42px;
          border-radius:14px;
          display:grid;
          place-items:center;
          background:linear-gradient(135deg, var(--primary), var(--accent));
          color:white;
          font-weight:800;
          box-shadow:0 10px 24px rgba(77,163,255,0.28);
        }

        .nav-links{
          display:flex;
          align-items:center;
          gap:26px;
          color:#d7e6fb;
        }

        .nav-links a{
          position:relative;
          font-size:0.95rem;
          transition:color .25s ease;
        }

        .nav-links a:hover{
          color:white;
        }

        .nav-links a::after{
          content:'';
          position:absolute;
          left:0;
          bottom:-6px;
          width:0;
          height:2px;
          background:linear-gradient(90deg, var(--primary), var(--accent));
          transition:width .25s ease;
        }

        .nav-links a:hover::after{
          width:100%;
        }

        .nav-actions{
          display:flex;
          gap:12px;
        }

        .btn{
          border:none;
          outline:none;
          cursor:pointer;
          border-radius:999px;
          padding:14px 22px;
          font-size:0.95rem;
          font-weight:700;
          transition:all .3s ease;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:10px;
        }

        .btn-primary{
          background:linear-gradient(135deg, var(--primary), var(--accent));
          color:white;
          box-shadow:0 15px 35px rgba(77,163,255,0.25);
        }

        .btn-primary:hover{
          transform:translateY(-2px) scale(1.01);
          box-shadow:0 18px 40px rgba(77,163,255,0.32);
        }

        .btn-secondary{
          background:rgba(255,255,255,0.08);
          color:white;
          border:1px solid rgba(255,255,255,0.15);
          backdrop-filter:blur(10px);
        }

        .btn-secondary:hover{
          background:rgba(255,255,255,0.14);
          transform:translateY(-2px);
        }

        .btn-outline{
          background:transparent;
          color:white;
          border:1px solid rgba(255,255,255,0.22);
        }

        .btn-outline:hover{
          background:rgba(255,255,255,0.08);
          transform:translateY(-2px);
        }

        .hero{
          position:relative;
          padding:140px 0 90px;
        }

        .hero-grid{
          display:grid;
          grid-template-columns:1.2fr 0.8fr;
          gap:30px;
          align-items:center;
        }

        .hero-left{
          position:relative;
          z-index:1;
        }

        .eyebrow{
          display:inline-flex;
          align-items:center;
          gap:10px;
          padding:10px 16px;
          border-radius:999px;
          background:rgba(255,255,255,0.08);
          border:1px solid rgba(255,255,255,0.14);
          color:#dceaff;
          font-size:0.88rem;
          margin-bottom:22px;
          backdrop-filter:blur(10px);
        }

        .eyebrow-dot{
          width:10px;
          height:10px;
          border-radius:50%;
          background:linear-gradient(135deg, #22c55e, #86efac);
          box-shadow:0 0 18px rgba(34,197,94,0.7);
        }

        .hero h1{
          font-size:clamp(2.7rem, 5vw, 5.2rem);
          line-height:1.02;
          letter-spacing:-0.03em;
          margin-bottom:20px;
          max-width:760px;
        }

        .gradient-text{
          background:linear-gradient(90deg, #ffffff 0%, #a9d1ff 48%, #c4b5fd 100%);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          color:transparent;
        }

        .hero p{
          color:var(--muted);
          font-size:1.08rem;
          line-height:1.8;
          max-width:680px;
          margin-bottom:30px;
        }

        .hero-actions{
          display:flex;
          flex-wrap:wrap;
          gap:14px;
          margin-bottom:32px;
        }

        .hero-metrics{
          display:grid;
          grid-template-columns:repeat(3, minmax(0,1fr));
          gap:16px;
          max-width:720px;
        }

        .metric-card{
          background:rgba(255,255,255,0.06);
          border:1px solid rgba(255,255,255,0.12);
          backdrop-filter:blur(14px);
          border-radius:20px;
          padding:18px;
          box-shadow:var(--shadow);
        }

        .metric-card strong{
          display:block;
          font-size:1.2rem;
          margin-bottom:6px;
        }

        .metric-card span{
          color:var(--muted);
          font-size:0.92rem;
        }

        .hero-right{
          position:relative;
        }

        .hero-visual{
          position:relative;
          min-height:580px;
          border-radius:34px;
          background:
            linear-gradient(160deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03)),
            radial-gradient(circle at 20% 20%, rgba(77,163,255,0.24), transparent 28%),
            radial-gradient(circle at 80% 30%, rgba(139,92,246,0.22), transparent 26%),
            linear-gradient(180deg, #122138 0%, #0c1829 100%);
          border:1px solid rgba(255,255,255,0.14);
          box-shadow:var(--shadow);
          overflow:hidden;
        }

        .hero-orb{
          position:absolute;
          border-radius:50%;
          filter:blur(10px);
          animation:float 6s ease-in-out infinite;
        }

        .orb-1{
          width:180px;
          height:180px;
          background:rgba(77,163,255,0.25);
          top:60px;
          right:40px;
        }

        .orb-2{
          width:120px;
          height:120px;
          background:rgba(139,92,246,0.24);
          bottom:110px;
          left:40px;
          animation-delay:1.5s;
        }

        .floating-panel{
          position:absolute;
          background:rgba(255,255,255,0.08);
          border:1px solid rgba(255,255,255,0.14);
          border-radius:22px;
          backdrop-filter:blur(16px);
          box-shadow:0 18px 40px rgba(0,0,0,0.22);
          padding:18px;
          animation:float 5s ease-in-out infinite;
        }

        .panel-a{
          top:50px;
          left:24px;
          width:220px;
        }

        .panel-b{
          bottom:40px;
          right:24px;
          width:240px;
          animation-delay:1.3s;
        }

        .panel-c{
          top:210px;
          right:22px;
          width:170px;
          animation-delay:.7s;
        }

        .mini-label{
          color:#d9e9ff;
          font-size:0.82rem;
          margin-bottom:10px;
          opacity:.9;
        }

        .mini-title{
          font-size:1.08rem;
          font-weight:800;
          margin-bottom:8px;
        }

        .mini-text{
          color:var(--muted);
          font-size:0.9rem;
          line-height:1.6;
        }

        .machine-core{
          position:absolute;
          inset:110px 70px 100px 70px;
          border-radius:28px;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04)),
            linear-gradient(180deg, #13233a 0%, #0d1827 100%);
          border:1px solid rgba(255,255,255,0.12);
          display:flex;
          align-items:center;
          justify-content:center;
          overflow:hidden;
        }

        .machine-grid{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:16px;
          width:100%;
          padding:24px;
        }

        .machine-box{
          min-height:120px;
          border-radius:20px;
          background:rgba(255,255,255,0.06);
          border:1px solid rgba(255,255,255,0.08);
          display:flex;
          align-items:center;
          justify-content:center;
          color:#cfe3ff;
          font-weight:700;
          text-align:center;
          padding:16px;
        }

        .section{
          padding:90px 0;
          position:relative;
        }

        .section-title{
          text-align:center;
          max-width:760px;
          margin:0 auto 52px;
        }

        .section-title.left{
          text-align:left;
          margin:0 0 28px;
        }

        .section-title .tag{
          display:inline-block;
          margin-bottom:14px;
          color:#b8cffa;
          font-size:0.9rem;
          letter-spacing:.12em;
          text-transform:uppercase;
        }

        .section-title h2{
          font-size:clamp(2rem, 4vw, 3.2rem);
          line-height:1.12;
          margin-bottom:14px;
        }

        .section-title p{
          color:var(--muted);
          line-height:1.8;
          font-size:1rem;
        }

        .stats-grid{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:18px;
          margin-top:-20px;
          position:relative;
          z-index:2;
        }

        .stat-card{
          background:rgba(255,255,255,0.07);
          border:1px solid rgba(255,255,255,0.12);
          backdrop-filter:blur(14px);
          border-radius:24px;
          padding:28px 20px;
          text-align:center;
          transition:all .3s ease;
          box-shadow:var(--shadow);
        }

        .stat-card:hover{
          transform:translateY(-6px);
          background:rgba(255,255,255,0.1);
        }

        .stat-card h3{
          font-size:2rem;
          margin-bottom:8px;
        }

        .stat-card p{
          color:var(--muted);
          font-size:0.95rem;
        }

        .products-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:22px;
        }

        .product-card{
          position:relative;
          background:linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.05));
          border:1px solid rgba(255,255,255,0.12);
          border-radius:24px;
          padding:24px;
          overflow:hidden;
          transition:all .35s ease;
          backdrop-filter:blur(14px);
          min-height:250px;
        }

        .product-card:hover{
          transform:translateY(-8px);
          border-color:rgba(125,193,255,0.35);
          box-shadow:0 20px 50px rgba(0,0,0,0.26);
        }

        .product-card::before{
          content:'';
          position:absolute;
          inset:auto -40px -40px auto;
          width:140px;
          height:140px;
          background:radial-gradient(circle, rgba(77,163,255,0.22), transparent 65%);
          border-radius:50%;
        }

        .product-icon{
          width:56px;
          height:56px;
          display:grid;
          place-items:center;
          border-radius:18px;
          margin-bottom:18px;
          background:linear-gradient(135deg, rgba(77,163,255,0.22), rgba(139,92,246,0.2));
          border:1px solid rgba(255,255,255,0.12);
          font-size:1.2rem;
          font-weight:800;
          color:#fff;
        }

        .product-card h3{
          font-size:1.18rem;
          margin-bottom:12px;
        }

        .product-card p{
          color:var(--muted);
          line-height:1.7;
          font-size:0.96rem;
          margin-bottom:20px;
        }

        .product-link{
          color:#cfe2ff;
          font-weight:700;
          display:inline-flex;
          gap:8px;
          align-items:center;
          transition:transform .25s ease;
        }

        .product-card:hover .product-link{
          transform:translateX(4px);
        }

        .split-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:28px;
          align-items:center;
        }

        .feature-panel{
          background:rgba(255,255,255,0.06);
          border:1px solid rgba(255,255,255,0.12);
          border-radius:28px;
          padding:34px;
          backdrop-filter:blur(14px);
          box-shadow:var(--shadow);
        }

        .check-list{
          list-style:none;
          display:grid;
          gap:14px;
          margin:26px 0 30px;
        }

        .check-list li{
          color:#dce9fb;
          display:flex;
          align-items:flex-start;
          gap:12px;
          line-height:1.6;
        }

        .check-list li::before{
          content:'✓';
          flex:0 0 auto;
          width:24px;
          height:24px;
          border-radius:50%;
          display:grid;
          place-items:center;
          background:linear-gradient(135deg, var(--primary), var(--accent));
          color:white;
          font-size:0.82rem;
          margin-top:2px;
        }

        .inline-actions{
          display:flex;
          flex-wrap:wrap;
          gap:14px;
        }

        .visual-card{
          position:relative;
          min-height:520px;
          border-radius:30px;
          background:
            linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03)),
            radial-gradient(circle at 20% 20%, rgba(77,163,255,0.18), transparent 26%),
            linear-gradient(180deg, #12243b 0%, #0c1728 100%);
          border:1px solid rgba(255,255,255,0.12);
          box-shadow:var(--shadow);
          overflow:hidden;
        }

        .visual-layer{
          position:absolute;
          border-radius:24px;
          background:rgba(255,255,255,0.08);
          border:1px solid rgba(255,255,255,0.12);
          backdrop-filter:blur(12px);
        }

        .visual-1{
          inset:40px 100px 240px 40px;
        }

        .visual-2{
          inset:180px 40px 70px 140px;
        }

        .visual-3{
          width:170px;
          height:170px;
          right:28px;
          top:30px;
          border-radius:28px;
          background:linear-gradient(135deg, rgba(77,163,255,0.2), rgba(139,92,246,0.2));
        }

        .support-grid{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:20px;
        }

        .support-card{
          background:rgba(255,255,255,0.06);
          border:1px solid rgba(255,255,255,0.12);
          border-radius:24px;
          padding:26px 22px;
          text-align:left;
          transition:all .3s ease;
          backdrop-filter:blur(14px);
          box-shadow:var(--shadow);
        }

        .support-card:hover{
          transform:translateY(-7px);
          background:rgba(255,255,255,0.09);
        }

        .circle-icon{
          width:54px;
          height:54px;
          border-radius:50%;
          display:grid;
          place-items:center;
          font-size:1.2rem;
          margin-bottom:18px;
          background:linear-gradient(135deg, rgba(77,163,255,0.22), rgba(139,92,246,0.2));
          border:1px solid rgba(255,255,255,0.14);
        }

        .support-card h4{
          font-size:1.08rem;
          margin-bottom:12px;
        }

        .support-card p{
          color:var(--muted);
          line-height:1.7;
          font-size:0.95rem;
        }

        .dark-panel{
          position:relative;
          overflow:hidden;
          background:
            linear-gradient(135deg, rgba(77,163,255,0.14), rgba(139,92,246,0.12)),
            rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.12);
          border-radius:34px;
          padding:36px;
          box-shadow:var(--shadow);
          backdrop-filter:blur(16px);
        }

        .muted{
          color:var(--muted);
          line-height:1.8;
          margin-bottom:24px;
        }

        .footer-cta{
          text-align:center;
          padding-top:20px;
        }

        .footer-cta-box{
          background:linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.05));
          border:1px solid rgba(255,255,255,0.12);
          border-radius:30px;
          padding:48px 28px;
          box-shadow:var(--shadow);
          backdrop-filter:blur(14px);
        }

        .footer-cta-box h2{
          font-size:clamp(2rem, 4vw, 3rem);
          margin-bottom:14px;
        }

        .footer-cta-box p{
          color:var(--muted);
          max-width:700px;
          margin:0 auto 28px;
          line-height:1.8;
        }

        .reveal{
          opacity:0;
          transform:translateY(34px);
          transition:all .8s cubic-bezier(.2,.65,.2,1);
        }

        .reveal.show{
          opacity:1;
          transform:translateY(0);
        }

        @keyframes float{
          0%{ transform:translateY(0px); }
          50%{ transform:translateY(-10px); }
          100%{ transform:translateY(0px); }
        }

        @media (max-width: 1100px){
          .hero-grid,
          .split-grid{
            grid-template-columns:1fr;
          }

          .products-grid{
            grid-template-columns:repeat(2,1fr);
          }

          .support-grid{
            grid-template-columns:repeat(2,1fr);
          }

          .stats-grid{
            grid-template-columns:repeat(2,1fr);
          }

          .hero-visual{
            min-height:500px;
          }
        }

        @media (max-width: 760px){
          .nav-links{
            display:none;
          }

          .nav-actions{
            display:none;
          }

          .hero{
            padding:120px 0 70px;
          }

          .hero-metrics{
            grid-template-columns:1fr;
          }

          .products-grid,
          .support-grid,
          .stats-grid{
            grid-template-columns:1fr;
          }

          .section{
            padding:70px 0;
          }

          .hero-visual{
            min-height:420px;
          }

          .machine-core{
            inset:90px 20px 80px 20px;
          }

          .floating-panel{
            position:absolute;
            transform:scale(.92);
          }

          .panel-a{
            left:10px;
            top:18px;
          }

          .panel-b{
            right:10px;
            bottom:18px;
          }

          .panel-c{
            right:10px;
            top:150px;
          }

          .feature-panel,
          .dark-panel,
          .footer-cta-box{
            padding:26px;
          }
        }
      `}</style>

      <div className="homepage">
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="navbar-inner">
            <a href="/" className="brand">
              <span className="brand-badge">T</span>
              <span>TALENT Machinery</span>
            </a>

            <nav className="nav-links">
              <a href="#products">Products</a>
              <a href="#why-us">Why Us</a>
              <a href="#support">Support</a>
              <a href="#facility">Facilities</a>
            </nav>

            <div className="nav-actions">
              <button className="btn btn-secondary">Catalog</button>
              <button className="btn btn-primary">Contact Us</button>
            </div>
          </div>
        </header>

        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-left reveal show">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Global Leader in Button Machinery Solutions
              </div>

              <h1>
                <span className="gradient-text">Industry-Level</span> Button-Making Machinery
                <br />
                Built for Modern Global Manufacturing
              </h1>

              <p>
                Premium badge presses, paper cutters, molds, spare parts, and OEM-ready solutions
                delivered with enterprise-grade quality, global logistics, and expert technical support.
              </p>

              <div className="hero-actions">
                <button className="btn btn-primary">Explore Products</button>
                <button className="btn btn-outline">Become a Distributor</button>
              </div>

              <div className="hero-metrics">
                <div className="metric-card">
                  <strong>Precision Engineering</strong>
                  <span>Reliable production systems designed for continuous industrial use.</span>
                </div>
                <div className="metric-card">
                  <strong>Export Ready</strong>
                  <span>Trusted by global distributors, manufacturers, and wholesale partners.</span>
                </div>
                <div className="metric-card">
                  <strong>Fast Support</strong>
                  <span>Structured after-sales service, technical guidance, and spare part support.</span>
                </div>
              </div>
            </div>

            <div className="hero-right reveal">
              <div className="hero-visual">
                <div className="hero-orb orb-1" />
                <div className="hero-orb orb-2" />

                <div className="floating-panel panel-a">
                  <div className="mini-label">Production Confidence</div>
                  <div className="mini-title">ISO-Level Quality</div>
                  <div className="mini-text">Consistency-focused machinery systems with dependable manufacturing standards.</div>
                </div>

                <div className="floating-panel panel-b">
                  <div className="mini-label">Global Reach</div>
                  <div className="mini-title">85+ Countries Served</div>
                  <div className="mini-text">Scalable distribution support for industrial buyers and enterprise partners.</div>
                </div>

                <div className="floating-panel panel-c">
                  <div className="mini-label">Machine Line</div>
                  <div className="mini-title">500+ Products</div>
                  <div className="mini-text">Full ecosystem of machinery, molds, and accessories.</div>
                </div>

                <div className="machine-core">
                  <div className="machine-grid">
                    <div className="machine-box">Badge Press Systems</div>
                    <div className="machine-box">Precision Cutters</div>
                    <div className="machine-box">Custom Mold Solutions</div>
                    <div className="machine-box">Enterprise Accessories</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container reveal">
          <div className="stats-grid">
            {stats.map((item) => (
              <div key={item.label} className="stat-card">
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="products">
          <div className="container">
            <div className="section-title reveal">
              <span className="tag">Product Ecosystem</span>
              <h2>Complete Product Range for Industrial Buyers</h2>
              <p>
                Discover a full suite of premium manufacturing solutions, from core machinery to
                accessories and OEM-ready systems, designed for reliability, speed, and scale.
              </p>
            </div>

            <div className="products-grid">
              {productCategories.map((item, index) => (
                <article className="product-card reveal" key={item.title}>
                  <div className="product-icon">{String(index + 1).padStart(2, '0')}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a href="/products" className="product-link">
                    Explore category <span>→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="why-us">
          <div className="container split-grid">
            <div className="feature-panel reveal">
              <div className="section-title left">
                <span className="tag">Why TALENT</span>
                <h2>Why Global Manufacturers Choose TALENT</h2>
                <p>
                  Built for serious production environments, our solutions combine industrial
                  durability, technical support, and distributor-ready business value.
                </p>
              </div>

              <ul className="check-list">
                <li>Industry-leading warranty and product assurance programs</li>
                <li>Comprehensive training materials and technical onboarding</li>
                <li>Customizable OEM and ODM manufacturing solutions</li>
                <li>Fast spare-part turnaround for reduced downtime</li>
                <li>Lower distributor support burden through structured service systems</li>
                <li>Competitive bulk pricing for international business growth</li>
              </ul>

              <div className="inline-actions">
                <button className="btn btn-primary">Request More Details</button>
                <button className="btn btn-outline">Download Catalog</button>
              </div>
            </div>

            <div className="visual-card reveal">
              <div className="visual-layer visual-1" />
              <div className="visual-layer visual-2" />
              <div className="visual-layer visual-3" />
            </div>
          </div>
        </section>

        <section className="section" id="support">
          <div className="container">
            <div className="section-title reveal">
              <span className="tag">Enterprise Support</span>
              <h2>Service & Support Designed for Industrial Operations</h2>
              <p>
                From advanced manufacturing coordination to global shipping and technical response,
                we provide the infrastructure serious clients need for dependable scale.
              </p>
            </div>

            <div className="support-grid">
              {supportItems.map((item) => (
                <div className="support-card reveal" key={item}>
                  <div className="circle-icon">✦</div>
                  <h4>{item}</h4>
                  <p>
                    Professional assistance and structured after-sales support tailored for
                    industrial clients, distributors, and enterprise buyers.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="facility">
          <div className="container">
            <div className="dark-panel split-grid reveal">
              <div className="visual-card">
                <div className="visual-layer visual-1" />
                <div className="visual-layer visual-2" />
                <div className="visual-layer visual-3" />
              </div>

              <div>
                <div className="section-title left">
                  <span className="tag">Manufacturing Facilities</span>
                  <h2>State-of-the-Art Production Infrastructure</h2>
                </div>

                <p className="muted">
                  Our 50,000 sqm production environment integrates precision fabrication, tooling,
                  quality control, and export-ready packaging to ensure stable output and long-term
                  machine performance for global buyers.
                </p>

                <ul className="check-list">
                  <li>Advanced CNC machining and fabrication systems</li>
                  <li>ISO-oriented quality control workflows</li>
                  <li>In-house toolroom innovation and prototyping support</li>
                  <li>Dedicated export packaging and logistics preparation</li>
                </ul>

                <button className="btn btn-primary">Virtual Factory Tour</button>
              </div>
            </div>
          </div>
        </section>

        <section className="section footer-cta">
          <div className="container reveal">
            <div className="footer-cta-box">
              <h2>Ready to Upgrade Your Manufacturing Workflow?</h2>
              <p>
                Partner with TALENT for premium button-making machinery, enterprise-grade service,
                and global distribution support designed for long-term business growth.
              </p>

              <div className="hero-actions" style={{ justifyContent: 'center' }}>
                <button className="btn btn-primary">Get a Quote</button>
                <button className="btn btn-outline">Talk to Sales</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
