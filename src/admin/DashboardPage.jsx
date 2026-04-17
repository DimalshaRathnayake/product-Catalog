import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const trend = [
  { month: 'Jan', leads: 30 },
  { month: 'Feb', leads: 42 },
  { month: 'Mar', leads: 56 },
  { month: 'Apr', leads: 54 },
  { month: 'May', leads: 68 },
  { month: 'Jun', leads: 27 },
];

const regions = [
  { name: 'North America', value1: 18, value2: 8 },
  { name: 'Europe', value1: 16, value2: 7 },
  { name: 'Asia Pacific', value1: 13, value2: 5 },
  { name: 'Latin America', value1: 9, value2: 4 },
  { name: 'Africa', value1: 6, value2: 3 },
];

export default function DashboardPage() {
  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Dashboard Overview</h1>
          <p>Monitor leads, inventory, and performance metrics.</p>
        </div>
        <div className="head-actions">
          <button className="btn btn-outline">Export Report</button>
          <button className="btn btn-primary">View All Inquiries</button>
        </div>
      </div>

      <div className="metric-grid">
        {[
          ['324', 'Total Leads This Month'],
          ['89', 'Products in Catalog'],
          ['12', 'Pending Distributor Requests'],
          ['2,847', 'Monthly Page Views'],
        ].map(([value, label]) => (
          <div className="metric-card" key={label}>
            <h2>{value}</h2>
            <p>{label}</p>
          </div>
        ))}
      </div>

      <div className="admin-grid two-wide">
        <div className="admin-card chart-card">
          <div className="card-head"><h3>Inquiry Trend</h3></div>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={trend}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="leads" stroke="currentColor" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="admin-card chart-card">
          <div className="card-head"><h3>Leads by Region</h3></div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={regions}>
              <XAxis dataKey="name" hide />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value1" fill="currentColor" opacity={0.85} />
              <Bar dataKey="value2" fill="currentColor" opacity={0.35} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="admin-grid">
        <div className="admin-card">
          <div className="card-head"><h3>Top Products by Inquiry</h3></div>
          <div className="mini-bars">
            {['BTN 3500', 'BTN 5000', 'PC 450', 'Mold Set A'].map((item, index) => (
              <div className="mini-bar-row" key={item}><span>{item}</span><div className="mini-bar" style={{ width: `${85 - index * 15}%` }} /></div>
            ))}
          </div>
        </div>
        <div className="admin-card">
          <div className="card-head"><h3>Recent Inquiries</h3></div>
          <ul className="simple-list">
            <li>Global Merch Solutions <span>Urgent</span></li>
            <li>European Badge Co. <span>Follow-up</span></li>
            <li>School Supply Network <span>Quoted</span></li>
          </ul>
        </div>
      </div>

      <div className="alert-strip">Action Required: Review the latest distributor application and update product catalog pricing.</div>
    </div>
  );
}
