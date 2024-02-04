const body = document.querySelector('body');
const toggleTheme = document.querySelector('.toggle-theme');

let getMode = localStorage.getItem('mode');

if (getMode && getMode === 'dark') {
  body.classList.add('dark');
  toggleTheme.classList.add('active');
}
toggleTheme.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (!body.classList.contains('dark')) {
    return localStorage.setItem('mode', 'light');
  }
  return localStorage.setItem('mode', 'dark');
});

toggleTheme.addEventListener('click', () =>
  toggleTheme.classList.toggle('active')
);
