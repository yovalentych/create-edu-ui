import fs from 'fs';

export function createHooks() {
  const hooks = {
    'useAuth.js': `import { useUserStore } from '../store/userStore';

export function useAuth() {
  const { user, setUser } = useUserStore();
  const isAuthenticated = !!user;
  return { user, setUser, isAuthenticated };
}
`,
    'useCourses.js': `import { useQuery } from '@tanstack/react-query';
import { getCourses } from '../services/courseApi';

export function useCourses() {
  return useQuery(['courses'], getCourses);
}
`,
    'useLessons.js': `import { useQuery } from '@tanstack/react-query';
import { getLessons } from '../services/lessonApi';

export function useLessons(courseId) {
  return useQuery(['lessons', courseId], () => getLessons(courseId));
}
`,
  };

  for (const [file, content] of Object.entries(hooks)) {
    fs.writeFileSync(`src/hooks/${file}`, content);
  }
}
