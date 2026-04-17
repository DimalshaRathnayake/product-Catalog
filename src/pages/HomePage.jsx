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
        @media (max-width: 1024px) {
          .hero-card {
            padding: 60px 32px !important;
          }

          .hero-content h1 {
            font-size: 42px !important;
            line-height: 1.15 !important;
          }

          .split-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }

          .product-grid.three-col {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .support-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .image-card,
          .image-card.tall,
          .image-factory,
          .image-plant {
            min-height: 320px !important;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 24px !important;
          }

          .hero-card {
            min-height: auto !important;
            padding: 48px 20px !important;
            border-radius: 24px !important;
          }

          .hero-content {
            padding: 0 !important;
            max-width: 100% !important;
          }

          .hero-content h1 {
            font-size: 32px !important;
            line-height: 1.15 !important;
            margin-top: 16px !important;
          }

          .hero-content p {
            font-size: 15px !important;
            line-height: 1.7 !important;
          }

          .eyebrow.pill {
            font-size: 13px !important;
            line-height: 1.4 !important;
            padding: 10px 14px !important;
            display: inline-flex !important;
            flex-wrap: wrap !important;
          }

          .hero-actions {
            display: flex !important;
            flex-direction: column !important;
            gap: 12px !important;
            width: 100% !important;
          }

          .hero-actions .btn,
          .inline-actions .btn {
            width: 100% !important;
            justify-content: center !important;
          }

          .section {
            padding: 56px 0 !important;
          }

          .container {
            width: calc(100% - 32px) !important;
          }

          .product-grid.three-col,
          .support-grid,
          .split-grid {
            grid-template-columns: 1fr !important;
          }

          .info-card,
          .support-card {
            padding: 24px 20px !important;
          }

          .center-link {
            margin-top: 20px !important;
            text-align: center !important;
          }

          .check-list {
            gap: 12px !important;
          }

          .check-list li {
            font-size: 15px !important;
            line-height: 1.65 !important;
          }

          .inline-actions {
            display: flex !important;
            flex-direction: column !important;
            gap: 12px !important;
            width: 100% !important;
          }

          .image-card,
          .image-card.tall,
          .image-factory,
          .image-plant {
            min-height: 260px !important;
            border-radius: 22px !important;
          }

          .image-tag {
            top: 16px !important;
            left: 16px !important;
            font-size: 12px !important;
            padding: 10px 14px !important;
          }

          .dark-panel {
            padding: 20px !important;
            border-radius: 24px !important;
          }

          .muted-light {
            font-size: 15px !important;
            line-height: 1.7 !important;
          }
        }

        @media (max-width: 480px) {
          .hero-card {
            padding: 40px 16px !important;
          }

          .hero-content h1 {
            font-size: 28px !important;
          }

          .hero-content p {
            font-size: 14px !important;
          }

          .eyebrow.pill {
            font-size: 12px !important;
            padding: 8px 12px !important;
          }

          .mini-icon,
          .circle-icon {
            width: 48px !important;
            height: 48px !important;
            font-size: 16px !important;
          }

          .info-card h3,
          .support-card h4 {
            font-size: 18px !important;
          }

          .info-card p,
          .support-card p,
          .muted-light,
          .check-list li {
            font-size: 14px !important;
          }

          .image-card,
          .image-card.tall,
          .image-factory,
          .image-plant {
            min-height: 220px !important;
          }
        }
      `}</style>

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
    </>
  );
}
