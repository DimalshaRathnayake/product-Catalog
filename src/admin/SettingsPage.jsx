export default function SettingsPage() {
  return (
    <div>
      <div className="page-head">
        <div>
          <h1>System Settings</h1>
          <p>Configure general preferences and notifications.</p>
        </div>
        <button className="btn btn-primary">Save Changes</button>
      </div>

      <div className="tab-row slim">
        {['General', 'Contact Info', 'User Settings', 'SEO & Meta'].map((item, index) => (
          <button className={`tab-btn ${index === 0 ? 'active' : ''}`} key={item}>{item}</button>
        ))}
      </div>

      <div className="admin-card form-stack">
        <div className="form-grid">
          <div><label>Company Name</label><input placeholder="TALENT Button Factory" /></div>
          <div><label>Support Email</label><input placeholder="support@talentbutton.com" /></div>
          <div><label>Administrator Notification Email</label><input placeholder="admin@talentbutton.com" /></div>
        </div>
        <div className="check-row"><input type="checkbox" defaultChecked /> Enable B2B quote emails</div>
        <div className="check-row"><input type="checkbox" defaultChecked /> Enable new distributor application alerts</div>
      </div>
    </div>
  );
}
