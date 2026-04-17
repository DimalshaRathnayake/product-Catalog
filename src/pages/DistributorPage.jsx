export default function DistributorPage() {
  const perks = ['Global Support', 'Competitive Pricing', 'Training Program', 'Sales Materials'];

  return (
    <>
      <section className="page-banner dark-banner">
        <div className="container banner-center">
          <h1>Become a Distribution Partner</h1>
          <p>Join our global network and bring premium button-making solutions to your region.</p>
        </div>
      </section>

      <section className="section compact-top">
        <div className="container narrow">
          <div className="support-grid four-cols tight-gap">
            {perks.map((perk) => (
              <div key={perk} className="support-card small">
                <div className="circle-icon">◌</div>
                <h4>{perk}</h4>
                <p>Strategic support for your local market.</p>
              </div>
            ))}
          </div>

          <div className="form-card centered-card">
            <h3>Apply to Become a Distributor</h3>
            <div className="form-grid two-col">
              <input placeholder="Name" />
              <input placeholder="Title" />
              <input placeholder="Company Name" />
              <input placeholder="Your Email" />
              <input placeholder="Country" />
              <input placeholder="Phone Number" />
              <textarea placeholder="Tell us about your market reach and industry experience" rows="4" />
            </div>
            <button className="btn btn-primary">Submit Application</button>
          </div>
        </div>
      </section>
    </>
  );
}
