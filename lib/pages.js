import fs from 'fs';

export function createPages() {
  const pages = {
    'Dashboard.jsx': `export default function Dashboard() {
  return <div>Welcome to your Dashboard</div>;
}
`,
    'Courses.jsx': `export default function Courses() {
  return <div>Courses Page</div>;
}
`,
    'CourseDetails.jsx': `export default function CourseDetails() {
  return <div>Course Details Page</div>;
}
`,
    'Lessons.jsx': `export default function Lessons() {
  return <div>Lessons Page</div>;
}
`,
    'Students.jsx': `export default function Students() {
  return <div>Students Page</div>;
}
`,
    'Groups.jsx': `export default function Groups() {
  return <div>Groups Page</div>;
}
`,
    'Settings.jsx': `export default function Settings() {
  return <div>Settings Page</div>;
}
`,
    'Login.jsx': `export default function Login() {
  return <div>Login Page</div>;
}
`,
    'Register.jsx': `export default function Register() {
  return <div>Register Page</div>;
}
`,
  };

  for (const [file, content] of Object.entries(pages)) {
    fs.writeFileSync(`src/pages/${file}`, content);
  }
}
