import { resourceFiles } from '../data/siteData';

export default function ResourcesPage() {
  return (
    <>
      <section className="page-banner dark-banner">
        <div className="container banner-left">
          <h1>Technical Resources</h1>
          <p>Manuals, guides, and operation resources.</p>
        </div>
      </section>

      <section className="section compact-top">
        <div className="container stack-list">
          {resourceFiles.map((file) => (
            <article key={file.title} className="resource-row">
              <div className="resource-icon">▣</div>
              <div>
                <h3>{file.title}</h3>
                <p>{file.meta}</p>
              </div>
              <button className="btn btn-primary small">Download</button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
