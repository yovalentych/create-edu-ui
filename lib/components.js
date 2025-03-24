import fs from 'fs';

export function createComponents() {
  const components = {
    'Sidebar.jsx': `export default function Sidebar() {
  return <aside style={{ width: '200px' }}>Sidebar</aside>;
}
`,
    'Header.jsx': `export default function Header() {
  return <header style={{ height: '60px' }}>Header</header>;
}
`,
    'CourseCard.jsx': `export default function CourseCard({ title }) {
  return <div style={{ border: '1px solid #ccc', padding: '1rem' }}>{title}</div>;
}
`,
    'ProgressBar.jsx': `export default function ProgressBar({ progress }) {
  return <div style={{ background: '#eee', height: '10px' }}><div style={{ width: progress + '%', background: '#4f46e5', height: '100%' }}></div></div>;
}
`,
    'StatWidget.jsx': `export default function StatWidget({ label, value }) {
  return <div><h4>{label}</h4><p>{value}</p></div>;
}
`,
  };

  for (const [file, content] of Object.entries(components)) {
    fs.writeFileSync(`src/components/${file}`, content);
  }
}
