import fs from 'fs';

export function createStructure() {
  const dirs = [
    'src/assets',
    'src/styles',
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
}
