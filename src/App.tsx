import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AdminLayout from './components/layout/AdminLayout';
import BranchesPage from './pages/BranchesPage';
import CustomersPage from './pages/CustomersPage';
import DashboardPage from './pages/DashboardPage';
import LoansPage from './pages/LoansPage';
import RiskPage from './pages/RiskPage';
import SettingsPage from './pages/SettingsPage';
import TransactionsPage from './pages/TransactionsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="loans" element={<LoansPage />} />
          <Route path="risk" element={<RiskPage />} />
          <Route path="branches" element={<BranchesPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
