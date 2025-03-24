import fs from 'fs';

export function createServices() {
  const api = `import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
`;

  const courseApi = `import { api } from './api';

export const getCourses = async () => {
  const res = await api.get('/courses');
  return res.data;
};
`;

  const lessonApi = `import { api } from './api';

export const getLessons = async (courseId) => {
  const res = await api.get(\`/courses/\${courseId}/lessons\`);
  return res.data;
};
`;

  const authApi = `import { api } from './api';

export const login = async (credentials) => {
  const res = await api.post('/auth/login', credentials);
  return res.data;
};
`;

  fs.writeFileSync('src/services/api.js', api);
  fs.writeFileSync('src/services/courseApi.js', courseApi);
  fs.writeFileSync('src/services/lessonApi.js', lessonApi);
  fs.writeFileSync('src/services/authApi.js', authApi);
}
