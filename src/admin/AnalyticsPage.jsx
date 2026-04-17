import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const trend = [
  { month: 'Jan', visits: 120 },
  { month: 'Feb', visits: 150 },
  { month: 'Mar', visits: 185 },
  { month: 'Apr', visits: 176 },
  { month: 'May', visits: 215 },
  { month: 'Jun', visits: 92 },
];

const regional = [
  { region: 'NA', leads: 22, conv: 9 },
  { region: 'EU', leads: 18, conv: 7 },
  { region: 'APAC', leads: 14, conv: 5 },
  { region: 'LATAM', leads: 10, conv: 4 },
  { region: 'AFR', leads: 8, conv: 3 },
];

export default function AnalyticsPage() {
  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Analytics & Reports</h1>
          <p>Monitor key lead and performance data.</p>
        </div>
        <button className="btn btn-outline">Export Report</button>
      </div>
      <div className="admin-grid two-wide">
        <div className="admin-card chart-card">
          <h3>Inquiry Trend Over 6 Months</h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={trend}><XAxis dataKey="month" /><YAxis /><Tooltip /><Line type="monotone" dataKey="visits" stroke="currentColor" strokeWidth={3} /></LineChart>
          </ResponsiveContainer>
        </div>
        <div className="admin-card chart-card">
          <h3>Regional Lead Distribution</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={regional}><XAxis dataKey="region" /><YAxis /><Tooltip /><Bar dataKey="leads" fill="currentColor" opacity={0.85} /><Bar dataKey="conv" fill="currentColor" opacity={0.35} /></BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="admin-grid">
        <div className="admin-card">
          <h3>Top Products by Inquiry</h3>
          <div className="mini-bars">
            {['BTN 3500', 'BTN 5000', 'PC 450', 'Mold Set A'].map((item, index) => (
              <div className="mini-bar-row" key={item}><span>{item}</span><div className="mini-bar" style={{ width: `${90 - index * 12}%` }} /></div>
            ))}
          </div>
        </div>
        <div className="admin-card summary-card">
          <h3>Lead Conversion Metrics</h3>
          <div className="summary-box"><span>Total Leads</span><strong>744</strong></div>
          <div className="summary-box success"><span>Converted</span><strong>143</strong></div>
          <div className="summary-box accent"><span>Conversion Rate</span><strong>19.2%</strong></div>
        </div>
      </div>
    </div>
  );
}
