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
        @media (max-width: 768px) {
          .split-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }

          .image-card.image-factory {
            width: 100% !important;
            min-height: 240px !important;
            height: 240px !important;
            border-radius: 20px !important;
            overflow: hidden !important;
            background-position: center center !important;
            background-size: cover !important;
            display: block !important;
            position: relative !important;
          }

          .image-card.image-factory .image-tag,
          .image-card.image-factory span.image-tag {
            position: absolute !important;
            top: 14px !important;
            left: 14px !important;
            z-index: 2 !important;
            font-size: 12px !important;
            line-height: 1.2 !important;
            padding: 8px 12px !important;
            border-radius: 999px !important;
            max-width: calc(100% - 28px) !important;
            white-space: nowrap !important;
          }
        }

        @media (max-width: 480px) {
          .image-card.image-factory {
            min-height: 210px !important;
            height: 210px !important;
            border-radius: 18px !important;
          }

          .image-card.image-factory .image-tag,
          .image-card.image-factory span.image-tag {
            top: 12px !important;
            left: 12px !important;
            font-size: 11px !important;
            padding: 7px 10px !important;
            max-width: calc(100% - 24px) !important;
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
