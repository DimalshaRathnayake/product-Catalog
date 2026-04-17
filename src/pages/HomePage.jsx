import SectionTitle from '../components/common/SectionTitle';
import StatGrid from '../components/common/StatGrid';
import { productCategories } from '../data/siteData';

const stats = [
  { value: '30+', label: 'Years Experience' },
  { value: '85+', label: 'Countries Served' },
  { value: '500+', label: 'Products' },
  { value: '2,000+', label: 'Global Clients' },
];

const supportItems = ['Advanced Manufacturing', 'Quality Assurance', 'Global Shipping', 'Expert Support'];

export default function HomePage() {
  return (
    <>
      <style>{`
        .home-responsive .hero-section {
          position: relative;
          padding: 28px 0 48px;
          overflow: hidden;
        }

        .home-responsive .hero-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top left, rgba(59,130,246,0.18), transparent 30%),
            radial-gradient(circle at top right, rgba(168,85,247,0.14), transparent 24%);
          pointer-events: none;
        }

        .home-responsive .hero-card {
          position: relative;
          overflow: hidden;
          min-height: 560px;
          border-radius: 32px;
          display: flex;
          align-items: center;
          background:
            linear-gradient(135deg, rgba(15,23,42,0.88), rgba(30,41,59,0.82)),
            url("https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80") center/cover no-repeat;
          box-shadow: 0 30px 80px rgba(15,23,42,0.22);
          border: 1px solid rgba(255,255,255,0.12);
        }

        .home-responsive .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(2,6,23,0.82) 0%, rgba(15,23,42,0.62) 45%, rgba(30,41,59,0.45) 100%);
        }

        .home-responsive .hero-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
          padding: 72px 48px;
        }

        .home-responsive .eyebrow.pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.16);
          color: #ffffff;
          font-weight: 600;
          font-size: 0.95rem;
          backdrop-filter: blur(10px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.12);
          text-align: center;
        }

        .home-responsive .hero-content h1 {
          margin-top: 20px;
          margin-bottom: 18px;
          font-size: clamp(2.4rem, 5vw, 4.6rem);
          line-height: 1.05;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: #ffffff;
          text-shadow: 0 10px 30px rgba(0,0,0,0.25);
        }

        .home-responsive .hero-content p {
          max-width: 620px;
          font-size: 1.08rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.82);
          margin-bottom: 28px;
        }

        .home-responsive .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .home-responsive .hero-actions .btn,
        .home-responsive .inline-actions .btn,
        .home-responsive .dark-panel .btn {
          min-height: 48px;
          padding: 14px 22px;
          border-radius: 999px;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .home-responsive .hero-actions .btn-primary,
        .home-responsive .inline-actions .btn-primary {
          border: none;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          color: #ffffff;
          box-shadow: 0 16px 35px rgba(37,99,235,0.24);
        }

        .home-responsive .hero-actions .btn-light,
        .home-responsive .dark-panel .btn-light {
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.1);
          color: #ffffff;
          backdrop-filter: blur(10px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.12);
        }

        .home-responsive .inline-actions .btn-outline {
          border: 1px solid rgba(15,23,42,0.12);
          background: #ffffff;
          color: #0f172a;
          box-shadow: 0 10px 22px rgba(15,23,42,0.06);
        }

        .home-responsive .section {
          padding: 96px 0;
        }

        .home-responsive .soft-bg {
          background: linear-gradient(180deg, rgba(248,250,252,0.82) 0%, rgba(241,245,249,1) 100%);
        }

        .home-responsive .compact-top {
          padding-top: 84px;
        }

        .home-responsive .product-grid.three-col {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .home-responsive .info-card {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          padding: 32px 24px;
          background: rgba(255,255,255,0.86);
          border: 1px solid rgba(148,163,184,0.18);
          box-shadow: 0 18px 40px rgba(15,23,42,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .home-responsive .info-card:hover,
        .home-responsive .support-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 50px rgba(15,23,42,0.12);
        }

        .home-responsive .mini-icon {
          width: 56px;
          height: 56px;
          display: grid;
          place-items: center;
          border-radius: 18px;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          color: #ffffff;
          font-weight: 800;
          font-size: 1.1rem;
          margin-bottom: 16px;
          box-shadow: 0 14px 30px rgba(37,99,235,0.2);
        }

        .home-responsive .info-card h3 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #0f172a;
        }

        .home-responsive .info-card p {
          color: #475569;
          line-height: 1.75;
          margin-bottom: 16px;
        }

        .home-responsive .info-card a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 999px;
          background: rgba(37,99,235,0.1);
          color: #2563eb;
          font-size: 1.2rem;
          font-weight: 700;
          text-decoration: none;
        }

        .home-responsive .center-link {
          text-align: center;
          margin-top: 28px;
          font-weight: 700;
          color: #2563eb;
          font-size: 1rem;
        }

        .home-responsive .split-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 40px;
          align-items: center;
        }

        .home-responsive .check-list {
          margin-top: 18px;
          margin-bottom: 30px;
          display: grid;
          gap: 14px;
          list-style: none;
          padding: 0;
        }

        .home-responsive .check-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #334155;
          line-height: 1.7;
          font-weight: 500;
        }

        .home-responsive .check-list li::before {
          content: '✓';
          width: 24px;
          height: 24px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 999px;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          color: #ffffff;
          font-size: 0.8rem;
          margin-top: 2px;
        }

        .home-responsive .inline-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .home-responsive .image-card {
          position: relative;
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(148,163,184,0.18);
          box-shadow: 0 24px 60px rgba(15,23,42,0.16);
          min-height: 460px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .home-responsive .image-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(15,23,42,0.08), rgba(15,23,42,0.4));
        }

        .home-responsive .image-factory {
          background-image:
            linear-gradient(135deg, rgba(15,23,42,0.2), rgba(15,23,42,0.1)),
            url("https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80");
        }

        .home-responsive .image-plant {
          background-image:
            linear-gradient(135deg, rgba(15,23,42,0.2), rgba(15,23,42,0.1)),
            url("https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80");
        }

        .home-responsive .image-card.tall {
          min-height: 500px;
        }

        .home-responsive .image-tag {
          position: absolute;
          top: 24px;
          left: 24px;
          z-index: 2;
          padding: 12px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.18);
          color: #ffffff;
          font-weight: 700;
          backdrop-filter: blur(10px);
        }

        .home-responsive .support-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
        }

        .home-responsive .support-card {
          border-radius: 24px;
          padding: 32px 22px;
          background: rgba(255,255,255,0.86);
          border: 1px solid rgba(148,163,184,0.16);
          box-shadow: 0 18px 40px rgba(15,23,42,0.08);
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .home-responsive .circle-icon {
          width: 58px;
          height: 58px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          color: #ffffff;
          font-size: 1.2rem;
          box-shadow: 0 14px 28px rgba(37,99,235,0.22);
        }

        .home-responsive .support-card h4 {
          font-size: 1.08rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: #0f172a;
        }

        .home-responsive .support-card p {
          color: #475569;
          line-height: 1.75;
        }

        .home-responsive .dark-panel-wrap {
          padding-top: 96px;
          padding-bottom: 96px;
        }

        .home-responsive .dark-panel {
          border-radius: 32px;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(15,23,42,0.96), rgba(30,41,59,0.94));
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 30px 80px rgba(15,23,42,0.28);
          padding: 32px;
          gap: 40px;
          align-items: center;
        }

        .home-responsive .dark-panel .check-list li {
          color: rgba(255,255,255,0.86);
        }

        .home-responsive .dark-panel .check-list li::before {
          background: linear-gradient(135deg, #60a5fa, #8b5cf6);
        }

        .home-responsive .muted-light {
          color: rgba(255,255,255,0.75);
          line-height: 1.8;
          margin-top: 16px;
          margin-bottom: 24px;
        }

        @media (max-width: 1199px) {
          .home-responsive .product-grid.three-col {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .home-responsive .support-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .home-responsive .split-grid {
            gap: 32px;
          }
        }

        @media (max-width: 991px) {
          .home-responsive .section,
          .home-responsive .dark-panel-wrap {
            padding-top: 72px;
            padding-bottom: 72px;
          }

          .home-responsive .compact-top {
            padding-top: 64px;
          }

          .home-responsive .hero-card {
            min-height: 500px;
          }

          .home-responsive .hero-content {
            padding: 56px 32px;
            max-width: 100%;
          }

          .home-responsive .split-grid,
          .home-responsive .dark-panel.split-grid {
            grid-template-columns: 1fr;
          }

          .home-responsive .image-card,
          .home-responsive .image-card.tall {
            min-height: 380px;
          }

          .home-responsive .dark-panel {
            padding: 28px;
          }
        }

        @media (max-width: 767px) {
          .home-responsive .hero-section {
            padding: 16px 0 36px;
          }

          .home-responsive .hero-card {
            min-height: auto;
            border-radius: 24px;
          }

          .home-responsive .hero-content {
            padding: 40px 20px;
            text-align: center;
          }

          .home-responsive .eyebrow.pill {
            font-size: 0.84rem;
            padding: 10px 14px;
            width: 100%;
            max-width: 100%;
            line-height: 1.4;
          }

          .home-responsive .hero-content h1 {
            font-size: clamp(2rem, 9vw, 2.8rem);
            margin-top: 16px;
            margin-bottom: 14px;
          }

          .home-responsive .hero-content p {
            font-size: 0.98rem;
            line-height: 1.7;
            margin-bottom: 22px;
            max-width: 100%;
          }

          .home-responsive .hero-actions,
          .home-responsive .inline-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .home-responsive .hero-actions .btn,
          .home-responsive .inline-actions .btn,
          .home-responsive .dark-panel .btn {
            width: 100%;
          }

          .home-responsive .section,
          .home-responsive .dark-panel-wrap {
            padding-top: 56px;
            padding-bottom: 56px;
          }

          .home-responsive .compact-top {
            padding-top: 52px;
          }

          .home-responsive .product-grid.three-col,
          .home-responsive .support-grid {
            grid-template-columns: 1fr;
          }

          .home-responsive .info-card,
          .home-responsive .support-card {
            padding: 24px 18px;
          }

          .home-responsive .split-grid {
            gap: 24px;
          }

          .home-responsive .image-card,
          .home-responsive .image-card.tall {
            min-height: 280px;
            border-radius: 22px;
          }

          .home-responsive .image-tag {
            top: 16px;
            left: 16px;
            padding: 10px 14px;
            font-size: 0.84rem;
          }

          .home-responsive .dark-panel {
            border-radius: 24px;
            padding: 20px;
            gap: 24px;
          }
        }

        @media (max-width: 480px) {
          .home-responsive .hero-content {
            padding: 32px 16px;
          }

          .home-responsive .hero-content h1 {
            font-size: 1.85rem;
          }

          .home-responsive .hero-content p {
            font-size: 0.94rem;
          }

          .home-responsive .eyebrow.pill {
            font-size: 0.8rem;
            padding: 9px 12px;
          }

          .home-responsive .info-card h3,
          .home-responsive .support-card h4 {
            font-size: 1.02rem;
          }

          .home-responsive .center-link {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <div className="home-responsive">
        <section className="hero-section">
          <div className="container hero-card">
            <div className="hero-overlay" />
            <div className="hero-content">
              <span className="eyebrow pill">Global Leader in Button Machinery Solutions</span>
              <h1>Premium Button-Making Machinery & Solutions</h1>
              <p>Professional badge presses, paper cutters, molds, and accessories trusted by manufacturers worldwide.</p>
              <div className="hero-actions">
                <button className="btn btn-primary">Explore Products</button>
                <button className="btn btn-light">Become a Distributor</button>
              </div>
            </div>
          </div>
        </section>

        <StatGrid items={stats} />

        <section className="section soft-bg">
          <div className="container">
            <SectionTitle
              title="Complete Product Range"
              text="Browse industrial button presses, cutters, molds, and complete manufacturing support under one roof."
            />
            <div className="product-grid three-col">
              {productCategories.map((item) => (
                <article key={item.title} className="info-card">
                  <div className="mini-icon">T</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a href="/products">→</a>
                </article>
              ))}
            </div>
            <div className="center-link">View all Products</div>
          </div>
        </section>

        <section className="section">
          <div className="container split-grid">
            <div>
              <SectionTitle align="left" title="Why Global Manufacturers Choose TALENT" />
              <ul className="check-list">
                <li>Industry-leading warranty program</li>
                <li>Comprehensive training materials</li>
                <li>Customizable solutions for OEM/ODM</li>
                <li>Fast turnaround on spare parts</li>
                <li>Reduced distributor support burden</li>
                <li>Competitive bulk pricing</li>
              </ul>
              <div className="inline-actions">
                <button className="btn btn-primary">Request More Details</button>
                <button className="btn btn-outline">Download Catalog</button>
              </div>
            </div>
            <div className="image-card image-factory">
              <span className="image-tag">ISO MODELS</span>
            </div>
          </div>
        </section>

        <section className="section soft-bg compact-top">
          <div className="container">
            <SectionTitle title="Enterprise-Grade Service & Support" />
            <div className="support-grid">
              {supportItems.map((item) => (
                <div key={item} className="support-card">
                  <div className="circle-icon">◌</div>
                  <h4>{item}</h4>
                  <p>Professional assistance and structured after-sales support built for industrial clients.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section dark-panel-wrap">
          <div className="container dark-panel split-grid dark">
            <div className="image-card tall image-plant" />
            <div>
              <SectionTitle align="left" title="State-of-the-Art Manufacturing Facilities" />
              <p className="muted-light">
                Our 50,000 sqm production center brings together precision metal fabrication, tooling, and quality control to ensure consistent output and long-term performance.
              </p>
              <ul className="check-list light">
                <li>Advanced CNC machining center</li>
                <li>ISO-certified QA processes</li>
                <li>Full in-house toolroom innovation</li>
                <li>Dedicated export packaging facility</li>
              </ul>
              <button className="btn btn-light">Virtual Factory Tour</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
