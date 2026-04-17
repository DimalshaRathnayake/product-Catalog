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
      <section
        className="hero-section"
        style={{
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '2rem',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at top left, rgba(59,130,246,0.18), transparent 28%), radial-gradient(circle at top right, rgba(168,85,247,0.14), transparent 24%)',
            pointerEvents: 'none',
          }}
        />
        <div
          className="container hero-card"
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '32px',
            minHeight: '560px',
            display: 'flex',
            alignItems: 'center',
            background:
              'linear-gradient(135deg, rgba(15,23,42,0.88), rgba(30,41,59,0.82)), url("https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80") center/cover no-repeat',
            boxShadow: '0 30px 80px rgba(15,23,42,0.28)',
            border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div
            className="hero-overlay"
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(135deg, rgba(2,6,23,0.82) 0%, rgba(15,23,42,0.62) 45%, rgba(30,41,59,0.45) 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '40px',
              right: '40px',
              width: '180px',
              height: '180px',
              background: 'rgba(59,130,246,0.18)',
              filter: 'blur(40px)',
              borderRadius: '999px',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '30px',
              left: '30px',
              width: '140px',
              height: '140px',
              background: 'rgba(168,85,247,0.14)',
              filter: 'blur(40px)',
              borderRadius: '999px',
              pointerEvents: 'none',
            }}
          />
          <div
            className="hero-content"
            style={{
              position: 'relative',
              zIndex: 2,
              maxWidth: '760px',
              padding: '4.5rem 3rem',
            }}
          >
            <span
              className="eyebrow pill"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '0.8rem 1.2rem',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.16)',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.95rem',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
              }}
            >
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '999px',
                  background: 'linear-gradient(135deg, #22c55e, #86efac)',
                  boxShadow: '0 0 14px rgba(34,197,94,0.8)',
                }}
              />
              Global Leader in Button Machinery Solutions
            </span>

            <h1
              style={{
                marginTop: '1.4rem',
                marginBottom: '1.2rem',
                fontSize: 'clamp(2.5rem, 5vw, 4.6rem)',
                lineHeight: 1.05,
                fontWeight: 800,
                letterSpacing: '-0.04em',
                color: '#fff',
                textShadow: '0 10px 30px rgba(0,0,0,0.25)',
              }}
            >
              Premium Button-Making Machinery & Solutions
            </h1>

            <p
              style={{
                maxWidth: '620px',
                fontSize: '1.08rem',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.82)',
                marginBottom: '1.8rem',
              }}
            >
              Professional badge presses, paper cutters, molds, and accessories trusted by manufacturers worldwide.
            </p>

            <div
              className="hero-actions"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                marginBottom: '2.2rem',
              }}
            >
              <button
                className="btn btn-primary"
                style={{
                  padding: '0.95rem 1.6rem',
                  borderRadius: '999px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                  color: '#fff',
                  fontWeight: 700,
                  boxShadow: '0 16px 35px rgba(37,99,235,0.35)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                Explore Products
              </button>
              <button
                className="btn btn-light"
                style={{
                  padding: '0.95rem 1.6rem',
                  borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.18)',
                  background: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  fontWeight: 700,
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                Become a Distributor
              </button>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '14px',
                maxWidth: '650px',
              }}
            >
              {['Industrial Precision', 'Global Export Ready', 'Trusted Quality'].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: '0.95rem 1rem',
                    borderRadius: '18px',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div
        style={{
          marginTop: '-32px',
          position: 'relative',
          zIndex: 3,
        }}
      >
        <StatGrid items={stats} />
      </div>

      <section
        className="section soft-bg"
        style={{
          position: 'relative',
          paddingTop: '6rem',
          paddingBottom: '6rem',
          background:
            'linear-gradient(180deg, rgba(248,250,252,0.7) 0%, rgba(241,245,249,0.95) 100%)',
        }}
      >
        <div className="container">
          <SectionTitle
            title="Complete Product Range"
            text="Browse industrial button presses, cutters, molds, and complete manufacturing support under one roof."
          />
          <div
            className="product-grid three-col"
            style={{
              display: 'grid',
              gap: '24px',
            }}
          >
            {productCategories.map((item) => (
              <article
                key={item.title}
                className="info-card"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '24px',
                  padding: '2rem 1.5rem',
                  background: 'rgba(255,255,255,0.82)',
                  border: '1px solid rgba(148,163,184,0.18)',
                  boxShadow: '0 18px 40px rgba(15,23,42,0.08)',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-30px',
                    right: '-30px',
                    width: '110px',
                    height: '110px',
                    borderRadius: '999px',
                    background: 'radial-gradient(circle, rgba(59,130,246,0.12), transparent 70%)',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  className="mini-icon"
                  style={{
                    width: '56px',
                    height: '56px',
                    display: 'grid',
                    placeItems: 'center',
                    borderRadius: '18px',
                    background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    marginBottom: '1rem',
                    boxShadow: '0 14px 30px rgba(37,99,235,0.2)',
                  }}
                >
                  T
                </div>
                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    marginBottom: '0.8rem',
                    color: '#0f172a',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: '#475569',
                    lineHeight: 1.75,
                    marginBottom: '1rem',
                  }}
                >
                  {item.desc}
                </p>
                <a
                  href="/products"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '42px',
                    height: '42px',
                    borderRadius: '999px',
                    background: 'rgba(37,99,235,0.1)',
                    color: '#2563eb',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                  }}
                >
                  →
                </a>
              </article>
            ))}
          </div>
          <div
            className="center-link"
            style={{
              textAlign: 'center',
              marginTop: '2rem',
              fontWeight: 700,
              color: '#2563eb',
              fontSize: '1rem',
            }}
          >
            View all Products
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{
          paddingTop: '6rem',
          paddingBottom: '6rem',
        }}
      >
        <div className="container split-grid" style={{ alignItems: 'center', gap: '2.5rem' }}>
          <div>
            <SectionTitle align="left" title="Why Global Manufacturers Choose TALENT" />
            <ul
              className="check-list"
              style={{
                marginTop: '1.4rem',
                marginBottom: '2rem',
                display: 'grid',
                gap: '14px',
                listStyle: 'none',
                padding: 0,
              }}
            >
              {[
                'Industry-leading warranty program',
                'Comprehensive training materials',
                'Customizable solutions for OEM/ODM',
                'Fast turnaround on spare parts',
                'Reduced distributor support burden',
                'Competitive bulk pricing',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    color: '#334155',
                    lineHeight: 1.7,
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      flexShrink: 0,
                      display: 'grid',
                      placeItems: 'center',
                      borderRadius: '999px',
                      background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                      color: '#fff',
                      fontSize: '0.8rem',
                      marginTop: '2px',
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div
              className="inline-actions"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
              }}
            >
              <button
                className="btn btn-primary"
                style={{
                  padding: '0.95rem 1.5rem',
                  borderRadius: '999px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                  color: '#fff',
                  fontWeight: 700,
                  boxShadow: '0 16px 35px rgba(37,99,235,0.25)',
                  cursor: 'pointer',
                }}
              >
                Request More Details
              </button>
              <button
                className="btn btn-outline"
                style={{
                  padding: '0.95rem 1.5rem',
                  borderRadius: '999px',
                  border: '1px solid rgba(15,23,42,0.12)',
                  background: '#fff',
                  color: '#0f172a',
                  fontWeight: 700,
                  boxShadow: '0 10px 22px rgba(15,23,42,0.06)',
                  cursor: 'pointer',
                }}
              >
                Download Catalog
              </button>
            </div>
          </div>
          <div
            className="image-card image-factory"
            style={{
              minHeight: '460px',
              borderRadius: '28px',
              position: 'relative',
              overflow: 'hidden',
              background:
                'linear-gradient(135deg, rgba(15,23,42,0.2), rgba(15,23,42,0.1)), url("https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80") center/cover no-repeat',
              boxShadow: '0 24px 60px rgba(15,23,42,0.16)',
              border: '1px solid rgba(148,163,184,0.18)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(15,23,42,0.08), rgba(15,23,42,0.38))',
              }}
            />
            <span
              className="image-tag"
              style={{
                position: 'absolute',
                top: '24px',
                left: '24px',
                zIndex: 2,
                padding: '0.75rem 1rem',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.18)',
                color: '#fff',
                fontWeight: 700,
                backdropFilter: 'blur(10px)',
              }}
            >
              ISO MODELS
            </span>
          </div>
        </div>
      </section>

      <section
        className="section soft-bg compact-top"
        style={{
          paddingTop: '6rem',
          paddingBottom: '6rem',
          background:
            'linear-gradient(180deg, rgba(248,250,252,0.9) 0%, rgba(241,245,249,1) 100%)',
        }}
      >
        <div className="container">
          <SectionTitle title="Enterprise-Grade Service & Support" />
          <div
            className="support-grid"
            style={{
              display: 'grid',
              gap: '22px',
            }}
          >
            {supportItems.map((item) => (
              <div
                key={item}
                className="support-card"
                style={{
                  borderRadius: '24px',
                  padding: '2rem 1.4rem',
                  background: 'rgba(255,255,255,0.85)',
                  border: '1px solid rgba(148,163,184,0.16)',
                  boxShadow: '0 18px 40px rgba(15,23,42,0.08)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  className="circle-icon"
                  style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '999px',
                    display: 'grid',
                    placeItems: 'center',
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                    color: '#fff',
                    fontSize: '1.2rem',
                    boxShadow: '0 14px 28px rgba(37,99,235,0.22)',
                  }}
                >
                  ◌
                </div>
                <h4
                  style={{
                    fontSize: '1.08rem',
                    fontWeight: 700,
                    marginBottom: '0.7rem',
                    color: '#0f172a',
                  }}
                >
                  {item}
                </h4>
                <p
                  style={{
                    color: '#475569',
                    lineHeight: 1.75,
                  }}
                >
                  Professional assistance and structured after-sales support built for industrial clients.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section dark-panel-wrap"
        style={{
          paddingTop: '6rem',
          paddingBottom: '6rem',
        }}
      >
        <div
          className="container dark-panel split-grid dark"
          style={{
            borderRadius: '32px',
            overflow: 'hidden',
            background:
              'linear-gradient(135deg, rgba(15,23,42,0.96), rgba(30,41,59,0.94))',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 30px 80px rgba(15,23,42,0.28)',
            padding: '2rem',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          <div
            className="image-card tall image-plant"
            style={{
              minHeight: '500px',
              borderRadius: '24px',
              background:
                'linear-gradient(135deg, rgba(15,23,42,0.2), rgba(15,23,42,0.1)), url("https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80") center/cover no-repeat',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 18px 40px rgba(0,0,0,0.18)',
            }}
          />
          <div>
            <SectionTitle align="left" title="State-of-the-Art Manufacturing Facilities" />
            <p
              className="muted-light"
              style={{
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.8,
                marginTop: '1rem',
                marginBottom: '1.6rem',
              }}
            >
              Our 50,000 sqm production center brings together precision metal fabrication, tooling, and quality control to ensure consistent output and long-term performance.
            </p>
            <ul
              className="check-list light"
              style={{
                marginBottom: '1.8rem',
                display: 'grid',
                gap: '14px',
                listStyle: 'none',
                padding: 0,
              }}
            >
              {[
                'Advanced CNC machining center',
                'ISO-certified QA processes',
                'Full in-house toolroom innovation',
                'Dedicated export packaging facility',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    color: 'rgba(255,255,255,0.86)',
                    lineHeight: 1.7,
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      flexShrink: 0,
                      display: 'grid',
                      placeItems: 'center',
                      borderRadius: '999px',
                      background: 'linear-gradient(135deg, #60a5fa, #8b5cf6)',
                      color: '#fff',
                      fontSize: '0.8rem',
                      marginTop: '2px',
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              className="btn btn-light"
              style={{
                padding: '0.95rem 1.5rem',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.14)',
                background: 'rgba(255,255,255,0.1)',
                color: '#fff',
                fontWeight: 700,
                backdropFilter: 'blur(10px)',
                boxShadow: '0 12px 28px rgba(0,0,0,0.16)',
                cursor: 'pointer',
              }}
            >
              Virtual Factory Tour
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
