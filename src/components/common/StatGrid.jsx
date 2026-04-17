export default function StatGrid({ items }) {
  return (
    <section className="stats-bar container">
      {items.map((item) => (
        <div key={item.label} className="stat-card">
          <h3>{item.value}</h3>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
}
