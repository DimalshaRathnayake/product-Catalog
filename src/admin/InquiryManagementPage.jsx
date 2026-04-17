import { inquiries } from '../data/siteData';

export default function InquiryManagementPage() {
  const selected = inquiries[0];
  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Inquiry Management</h1>
          <p>Track and respond to customer inquiries.</p>
        </div>
        <button className="btn btn-primary">Mark as Resolved</button>
      </div>

      <div className="admin-grid inquiry-grid">
        <div className="admin-card">
          <div className="filter-pills">
            <span className="table-pill active">All</span>
            <span className="table-pill">Urgent</span>
            <span className="table-pill">Closed</span>
          </div>
          <div className="inquiry-list">
            {inquiries.map((item) => (
              <div className="inquiry-item" key={item.id}>
                <strong>{item.company}</strong>
                <p>{item.product}</p>
                <span>{item.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-card detail-card">
          <div className="detail-top">
            <h3>{selected.id}</h3>
            <span className="table-pill active">{selected.status}</span>
          </div>
          <div className="detail-grid">
            <div><label>Company</label><p>{selected.company}</p></div>
            <div><label>Email</label><p>{selected.email}</p></div>
            <div><label>Country</label><p>{selected.country}</p></div>
            <div><label>Product</label><p>{selected.product}</p></div>
            <div><label>Quantity</label><p>{selected.quantity}</p></div>
          </div>
          <div>
            <label>Message</label>
            <p>{selected.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
