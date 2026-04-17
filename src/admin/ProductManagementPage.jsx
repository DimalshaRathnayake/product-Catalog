import { Link } from 'react-router-dom';
import { products } from '../data/siteData';

export default function ProductManagementPage() {
  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Product Management</h1>
          <p>Create, edit, and manage catalog inventory.</p>
        </div>
        <Link className="btn btn-primary" to="/admin/products/new">Add Product</Link>
      </div>

      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.sku}>
                <td>
                  <strong>{item.name}</strong>
                  <span>{item.sku}</span>
                </td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                <td><span className="table-pill active">{item.status}</span></td>
                <td>⋯</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
