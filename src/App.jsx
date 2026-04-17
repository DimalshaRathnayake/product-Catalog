import { Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import AdminLayout from './components/layout/AdminLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ResourcesPage from './pages/ResourcesPage';
import DistributorPage from './pages/DistributorPage';
import ContactPage from './pages/ContactPage';
import DashboardPage from './admin/DashboardPage';
import ProductManagementPage from './admin/ProductManagementPage';
import AddProductPage from './admin/AddProductPage';
import ResourceManagementPage from './admin/ResourceManagementPage';
import InquiryManagementPage from './admin/InquiryManagementPage';
import DistributorApplicationsPage from './admin/DistributorApplicationsPage';
import AnalyticsPage from './admin/AnalyticsPage';
import UsersRolesPage from './admin/UsersRolesPage';
import SettingsPage from './admin/SettingsPage';

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/distributors" element={<DistributorPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="products" element={<ProductManagementPage />} />
        <Route path="products/new" element={<AddProductPage />} />
        <Route path="resources" element={<ResourceManagementPage />} />
        <Route path="inquiries" element={<InquiryManagementPage />} />
        <Route path="distributors" element={<DistributorApplicationsPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="users-roles" element={<UsersRolesPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}
