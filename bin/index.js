#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get project name from CLI
const projectName = process.argv[2] || 'edu-app';

console.log(`\x1b[36m🚀 Creating project: ${projectName}\x1b[0m`);

execSync(`npm create vite@latest ${projectName} -- --template react`, {
  stdio: 'inherit',
});
process.chdir(projectName);

console.log(`\x1b[33m📦 Installing dependencies...\x1b[0m`);
execSync(`npm install`, { stdio: 'inherit' });
execSync(
  `npm install sass axios react-router-dom zustand @tanstack/react-query @radix-ui/react-dialog @radix-ui/react-tooltip @radix-ui/react-tabs`,
  { stdio: 'inherit' }
);

// Directories to create
const dirs = [
  'src/assets',
  'src/styles/partials',
  'src/ui',
  'src/components',
  'src/layouts',
  'src/pages',
  'src/store',
  'src/hooks',
  'src/services',
  'src/router',
  'src/utils',
];

dirs.forEach((dir) => {
  fs.mkdirSync(dir, { recursive: true });
});

// index.scss with @use
fs.writeFileSync(
  'src/styles/index.scss',
  `@use './partials/reset' as *;\n@use './partials/variables' as *;\n@use './partials/mixins' as *;\n@use './partials/typography' as *;\n`
);

// Partials
fs.writeFileSync(
  'src/styles/partials/reset.scss',
  `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
  background-color: #f9f9f9;
  color: #111;
}
`
);

fs.writeFileSync(
  'src/styles/partials/variables.scss',
  `
$primary-color: #4f46e5;
$text-color: #111;
$background-color: #f9f9f9;
`
);

fs.writeFileSync(
  'src/styles/partials/mixins.scss',
  `
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
`
);

fs.writeFileSync(
  'src/styles/partials/typography.scss',
  `
h1, h2, h3 {
  font-weight: 600;
}
p {
  line-height: 1.6;
}
`
);

// Modify main.jsx to import styles
const mainPath = 'src/main.jsx';
const originalMain = fs.readFileSync(mainPath, 'utf-8');
fs.writeFileSync(mainPath, `import './styles/index.scss';\n${originalMain}`);

// 7. README.md
const readmeContent = `# 🧠 ${projectName}

> Scaffold a modern educational web project with React + Vite + SCSS + Zustand + React Query + Radix UI — in seconds.

---

## 🚀 Quick Start

\`\`\`bash
npx create-edu-ui ${projectName}
cd ${projectName}
npm run dev
\`\`\`

---

## 📦 What You Get

✅ React + Vite (blazingly fast dev)
✅ SCSS (Sass Modules) with modern \`@use\` syntax
✅ Zustand (simple and powerful global state)
✅ React Query (@tanstack/query for data fetching)
✅ Axios preinstalled and ready
✅ Radix UI (accessible and unstyled UI primitives)
✅ Preconfigured project structure
✅ No Tailwind, no clutter — clean and customizable
✅ Minimal but extendable

---

## 📁 Folder Structure

\`\`\`
src/
├── assets/
├── styles/
├── ui/
├── components/
├── layouts/
├── pages/
├── store/
├── hooks/
├── services/
├── router/
├── utils/
├── App.jsx
└── main.jsx
\`\`\`

---

## 🛠 Tech Stack

| Layer         | Tool                          |
|---------------|-------------------------------|
| Framework     | React                         |
| Dev server    | Vite                          |
| Styling       | Sass (SCSS Modules)           |
| State         | Zustand                       |
| Data fetching | React Query                   |
| UI Primitives | Radix UI                      |
| HTTP client   | Axios                         |

---

## 💡 Philosophy

This project is designed for educational platforms where:
- Lessons are modular and structured
- UI is clean and fully customizable
- You own the design — no forced Tailwind
- You get just enough to get started fast

---

## 🧙‍♂️ Author

Made with ❤️ by [your-name](https://github.com/your-profile)

---

## 📜 License

MIT — use it freely, share it proudly.
`;

fs.writeFileSync('README.md', readmeContent);

// Ready!
console.log('\x1b[32m✅ Project created successfully!\x1b[0m');
console.log(`\n👉 cd ${projectName} && npm run dev\n`);
