import { execSync } from 'child_process';
import { createStructure } from './structure.js';
import { createStyles } from './styles.js';
import { createComponents } from './components.js';
import { createLayouts } from './layout.js';
import { createPages } from './pages.js';
import { createRouter } from './router.js';
import { createStores } from './store.js';
import { createHooks } from './hooks.js';
import { createServices } from './services.js';
import { createUtils } from './utils.js';
import { createAppEntrypoints } from './app.js';
import { createReadme } from './readme.js';

export function scaffoldProject(projectName) {
  console.log(`\x1b[36m🚀 Creating project: ${projectName}\x1b[0m`);

  // 1. Створення Vite-проєкту
  execSync(`npm create vite@latest ${projectName} -- --template react`, {
    stdio: 'inherit',
  });

  process.chdir(projectName);

  // 2. Встановлення залежностей
  console.log(`\x1b[33m📦 Installing dependencies...\x1b[0m`);
  execSync(`npm install`, { stdio: 'inherit' });
  execSync(
    `npm install sass axios react-router-dom zustand @tanstack/react-query @radix-ui/react-dialog @radix-ui/react-tooltip @radix-ui/react-tabs`,
    { stdio: 'inherit' }
  );

  // 3. Генерація структури
  createStructure();
  createStyles();
  createComponents();
  createLayouts();
  createPages();
  createRouter();
  createStores();
  createHooks();
  createServices();
  createUtils();
  createAppEntrypoints();
  createReadme(projectName);

  console.log('\x1b[32m✅ Project created successfully!\x1b[0m');
  console.log(`\n👉 cd ${projectName} && npm run dev\n`);
}
