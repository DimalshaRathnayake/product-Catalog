export default function ContactPage() {
  return (
    <>
      <section className="page-banner dark-banner">
        <div className="container banner-center">
          <h1>Get in touch with us</h1>
          <p>We&apos;d love to hear from you.</p>
        </div>
      </section>

      <section className="section compact-top">
        <div className="container contact-grid">
          <div className="form-card">
            <h3>Send Us a Message</h3>
            <div className="form-grid">
              <input placeholder="Name" />
              <input placeholder="Email" />
              <input placeholder="Company" />
              <input placeholder="Phone" />
              <textarea placeholder="Your Message" rows="5" />
            </div>
            <button className="btn btn-primary full">Send Message</button>
          </div>

          <div className="contact-side">
            <div className="contact-info-box">
              <h4>Phone</h4>
              <p>+86 020 1234 5678</p>
            </div>
            <div className="contact-info-box">
              <h4>Email</h4>
              <p>info@talentbutton.com</p>
            </div>
            <div className="contact-info-box">
              <h4>Address</h4>
              <p>No. 888 Demo Road, Guangdong, China</p>
            </div>
            <div className="office-card">
              <h4>Regional Office</h4>
              <p>Export support team available Monday to Friday.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
