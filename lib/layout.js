import fs from 'fs';

export function createLayouts() {
  const dashboard = `import Sidebar from '../components/Sidebar.jsx';
import Header from '../components/Header.jsx';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <main style={{ padding: '1rem' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
`;

  const authLayout = `import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div style={{ padding: '2rem' }}>
      <Outlet />
    </div>
  );
}
`;

  fs.writeFileSync('src/layouts/DashboardLayout.jsx', dashboard);
  fs.writeFileSync('src/layouts/AuthLayout.jsx', authLayout);
}
