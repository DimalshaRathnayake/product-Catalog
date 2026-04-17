import SectionTitle from '../components/common/SectionTitle';
import { milestones } from '../data/siteData';

export default function AboutPage() {
  return (
    <>
      <section className="page-banner dark-banner">
        <div className="container banner-center">
          <h1>About TALENT Button Factory</h1>
          <p>Three decades of excellence in button-making machinery manufacturing.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div>
            <SectionTitle align="left" title="Our Story" />
            <p>
              Since 1995, TALENT has been at the forefront of button-making machinery innovation. What started as a small workshop has evolved into a global factory trusted by manufacturers across six continents.
            </p>
            <p>
              We combine precision engineering, quality materials, and customer-centric service to deliver equipment that keeps production moving from small studios to full-scale industrial operations.
            </p>
            <div className="stats-inline four">
              <div><strong>50,000 sqm</strong><span>Production Area</span></div>
              <div><strong>200+</strong><span>Skilled Staff</span></div>
              <div><strong>35+</strong><span>Years of Service</span></div>
              <div><strong>ISO 9001</strong><span>Certified Systems</span></div>
            </div>
          </div>
          <div className="image-card image-machines" />
        </div>
      </section>

      <section className="section soft-bg">
        <div className="container">
          <SectionTitle title="Our Journey" />
          <div className="timeline">
            {milestones.map((item) => (
              <div className="timeline-item" key={item.year}>
                <div className="timeline-dot">{item.year}</div>
                <div className="timeline-line" />
                <div className="timeline-text">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
