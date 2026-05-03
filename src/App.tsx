import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import AdminLayout from './components/layout/AdminLayout';
import BranchesPage from './pages/BranchesPage';
import CustomersPage from './pages/CustomersPage';
import DashboardPage from './pages/DashboardPage';
import LoansPage from './pages/LoansPage';
import LoginPage from './pages/LoginPage';
import RiskPage from './pages/RiskPage';
import SettingsPage from './pages/SettingsPage';
import TransactionsPage from './pages/TransactionsPage';

const AUTH_KEY = 'bank-admin-authenticated';

function isAuthenticated() {
  return window.localStorage.getItem(AUTH_KEY) === 'true';
}

function RequireAuth() {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<AdminLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="customers" element={<CustomersPage />} />
            <Route path="transactions" element={<TransactionsPage />} />
            <Route path="loans" element={<LoansPage />} />
            <Route path="risk" element={<RiskPage />} />
            <Route path="branches" element={<BranchesPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={isAuthenticated() ? '/' : '/login'} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
