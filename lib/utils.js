import fs from 'fs';

export function createUtils() {
  const formatDate = `export function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB');
}
`;

  const validateEmail = `export function validateEmail(email) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}
`;

  fs.writeFileSync('src/utils/formatDate.js', formatDate);
  fs.writeFileSync('src/utils/validateEmail.js', validateEmail);
}
