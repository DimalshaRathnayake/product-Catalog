import { roleUsers } from '../data/siteData';

export default function UsersRolesPage() {
  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Users & Roles</h1>
          <p>Manage team access and permissions.</p>
        </div>
        <button className="btn btn-primary">Add User</button>
      </div>
      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {roleUsers.map((user) => (
              <tr key={user.email}>
                <td><strong>{user.name}</strong><span>{user.email}</span></td>
                <td>{user.role}</td>
                <td><span className="table-pill active">{user.status}</span></td>
                <td>⋯</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
