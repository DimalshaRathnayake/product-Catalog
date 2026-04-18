import { products } from '../data/siteData';

export default function ProductsPage() {
  return (
    <>
      <section className="page-banner dark-banner">
        <div className="container banner-left">
          <h1>All Products</h1>
          <p>Explore our complete range of professional button-making machines, tools, and accessories.</p>
        </div>
      </section>

      <section className="section compact-top">
        <div className="container products-layout">
          <aside className="filter-card">
            <h3>Filters</h3>
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

          <div>
            <div className="catalog-toolbar">
              <input className="search-input" placeholder="Search products" />
              <select className="select-input"><option>Sort by newest</option></select>
            </div>
            <div className="product-grid">
              {products.map((item) => (
                <article key={item.sku} className="product-card">
                  <div className="product-thumb" />
                  <span className="badge">POPULAR</span>
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                  <strong>{item.price}</strong>
                  <button className="btn btn-primary full">Request Quote</button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
