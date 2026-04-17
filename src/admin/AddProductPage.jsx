const tabs = ['Basic Information', 'Technical Specifications', 'Media & Documents', 'Inventory & Pricing'];

export default function AddProductPage() {
  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Add New Product</h1>
          <p>Create a new product listing.</p>
        </div>
        <div className="head-actions">
          <button className="btn btn-outline">Cancel</button>
          <button className="btn btn-primary">Save Product</button>
        </div>
      </div>

      <div className="tab-row">
        {tabs.map((tab, index) => (
          <button className={`tab-btn ${index === 0 ? 'active' : ''}`} key={tab}>{tab}</button>
        ))}
      </div>

      <div className="admin-card form-stack">
        <div className="form-grid two-col">
          <div>
            <label>Product Name</label>
            <input placeholder="BTN 5000 Converter Button Press" />
          </div>
          <div>
            <label>SKU / Model Number</label>
            <input placeholder="BTN-5000" />
          </div>
          <div>
            <label>Category</label>
            <select><option>Button systems</option></select>
          </div>
          <div>
            <label>Brand</label>
            <input placeholder="TALENT" />
          </div>
          <div className="full-span">
            <label>Description</label>
            <textarea rows="5" placeholder="Enter product description" />
          </div>
        </div>
      </div>

      <div className="admin-card form-stack">
        <h3>Technical Specifications</h3>
        <div className="form-grid two-col">
          <div><label>Power Supply</label><input placeholder="110V / 220V" /></div>
          <div><label>Production Rate</label><input placeholder="400 pcs/hour" /></div>
          <div><label>Dimensions</label><input placeholder="L x W x H" /></div>
          <div><label>Weight</label><input placeholder="45 kg" /></div>
        </div>
      </div>

      <div className="admin-card form-stack">
        <h3>Media & Documents</h3>
        <div className="upload-box">Drag and drop files here or click to browse<br />Upload Files</div>
      </div>

      <div className="admin-card form-stack">
        <h3>Inventory & Pricing</h3>
        <div className="form-grid two-col">
          <div><label>Unit Price</label><input placeholder="$ 2,450" /></div>
          <div><label>Lead Time</label><input placeholder="7-14 days" /></div>
        </div>
      </div>
    </div>
  );
}
