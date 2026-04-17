import { resourceFiles } from '../data/siteData';

export default function ResourceManagementPage() {
  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Resource Management</h1>
          <p>Upload manuals, guides, and downloads.</p>
        </div>
        <button className="btn btn-primary">Upload Resource</button>
      </div>
      <div className="admin-card stack-list compact-list">
        {resourceFiles.map((file) => (
          <div className="resource-admin-row" key={file.title}>
            <div className="resource-icon">▣</div>
            <div>
              <strong>{file.title}</strong>
              <p>{file.meta}</p>
            </div>
            <div className="row-actions">Edit</div>
          </div>
        ))}
      </div>
    </div>
  );
}
