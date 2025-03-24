import fs from 'fs';

export function createStores() {
  const stores = {
    'userStore.js': `import { create } from 'zustand';

export const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
`,
    'uiStore.js': `import { create } from 'zustand';

export const useUIStore = create((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
`,
    'courseStore.js': `import { create } from 'zustand';

export const useCourseStore = create((set) => ({
  courses: [],
  setCourses: (courses) => set({ courses }),
}));
`,
  };

  for (const [file, content] of Object.entries(stores)) {
    fs.writeFileSync(`src/store/${file}`, content);
  }
}
