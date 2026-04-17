import { distributorApplications } from '../data/siteData';

export default function DistributorApplicationsPage() {
  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Distributor Applications</h1>
          <p>Review and manage distributor partnership requests.</p>
        </div>
      </div>
      <div className="stack-list compact-list">
        {distributorApplications.map((item) => (
          <div key={item.name} className="admin-card distributor-row">
            <div>
              <strong>{item.name}</strong>
              <p>{item.region}</p>
            </div>
            <div>{item.date}</div>
            <div><span className={`table-pill ${item.status === 'Approved' ? 'active' : ''}`}>{item.status}</span></div>
            <div className="row-actions split-actions">
              <button className="btn btn-light small">Approve</button>
              <button className="btn btn-outline small">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
