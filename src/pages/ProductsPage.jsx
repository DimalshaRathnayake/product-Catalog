import { products } from '../data/siteData';

export default function ProductsPage() {
  return (
    <>
      <section className="page-banner dark-banner products-hero">
        <div className="container banner-left">
          <span className="eyebrow">Product Catalog</span>
          <h1>All Products</h1>
          <p>
            Explore our complete range of professional button-making machines,
            tools, and accessories designed for quality production.
          </p>
        </div>
      </section>

      <section className="section compact-top products-section">
        <div className="container products-layout">
          <aside className="filter-card advanced-filter-card">
            <div className="filter-header">
              <h3>Filters</h3>
              <span>Refine results</span>
            </div>

            <div className="filter-group">
              <label>Category</label>
              <a>Button Machines</a>
              <a>Paper Cutters</a>
              <a>Button Parts</a>
              <a>Molds & Accessories</a>
            </div>

            <div className="filter-group">
              <label>Size</label>
              <a>25 mm</a>
              <a>32 mm</a>
              <a>44 mm</a>
              <a>58 mm</a>
            </div>
          </aside>

          <div className="products-content">
            <div className="catalog-toolbar advanced-toolbar">
              <div className="search-wrap">
                <span>⌕</span>
                <input className="search-input" placeholder="Search products" />
              </div>

              <select className="select-input">
                <option>Sort by newest</option>
              </select>
            </div>

            <div className="product-grid advanced-product-grid">
              {products.map((item) => (
                <article key={item.sku} className="product-card advanced-product-card">
                  <div className="product-thumb advanced-product-thumb">
                    <div className="thumb-glow" />
                  </div>

                  <div className="product-card-body">
                    <div className="product-topline">
                      <span className="badge">POPULAR</span>
                      <span className="sku">{item.sku}</span>
                    </div>

                    <h3>{item.name}</h3>
                    <p>{item.category}</p>

                    <div className="product-footer">
                      <strong>{item.price}</strong>
                      <button className="btn btn-primary full">Request Quote</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
