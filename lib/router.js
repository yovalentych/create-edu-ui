import fs from 'fs';

export function createRouter() {
  const content = `import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import Courses from '../pages/Courses.jsx';
import CourseDetails from '../pages/CourseDetails.jsx';

export const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/courses', element: <Courses /> },
      { path: '/courses/:id', element: <CourseDetails /> },
    ],
  },
]);
`;

  fs.writeFileSync('src/router/index.jsx', content);
}
