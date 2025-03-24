import fs from 'fs';

export function createStyles() {
  fs.mkdirSync('src/styles', { recursive: true });

  fs.writeFileSync(
    'src/styles/index.scss',
    `@use './reset' as *;\n@use './variables' as *;\n@use './mixins' as *;\n@use './typography' as *;\n`
  );

  const partials = {
    'reset.scss': `* { margin: 0; padding: 0; box-sizing: border-box; }\nbody { font-family: sans-serif; background: #f9f9f9; color: #111; }`,
    'variables.scss': `$primary-color: #4f46e5;\n$text-color: #111;\n$background-color: #f9f9f9;`,
    'mixins.scss': `@mixin flex-center { display: flex; justify-content: center; align-items: center; }`,
    'typography.scss': `h1, h2, h3 { font-weight: 600; }\np { line-height: 1.6; }`,
  };

  for (const [file, content] of Object.entries(partials)) {
    fs.writeFileSync(`src/styles/${file}`, content);
  }
}
