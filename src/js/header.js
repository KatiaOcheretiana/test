const themePreference = () => {
  const hasLocalStorage = localStorage.getItem('theme');

  let supports = false;
  let theme = undefined;

  if (hasLocalStorage === 'light') {
    theme = 'light';
  }
  if (hasLocalStorage === 'dark') {
    theme = 'dark';
  }

  if (window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
    theme = hasLocalStorage ? hasLocalStorage : 'dark';
    supports = true;
  }
  if (window.matchMedia(`(prefers-color-scheme: light)`).matches) {
    theme = hasLocalStorage ? hasLocalStorage : 'light';
    supports = true;
  }
  if (window.matchMedia(`(prefers-color-scheme: no-preference)`).matches) {
    theme = hasLocalStorage ? hasLocalStorage : 'none';
    supports = true;
  }

  return { supports, theme };
};

document.addEventListener(
  'DOMContentLoaded',
  e => {
    const userThemePreference = themePreference();
    const toggle = document.querySelector('.toggle-theme');
    const html = document.documentElement;

    const setTheme = () => {
      switch (userThemePreference.theme) {
        case 'dark':
          toggle.classList.add('active');
          html.classList.add('dark');
          html.classList.remove('light');
          break;
        case 'light':
          toggle.classList.remove('active');
          html.classList.remove('dark');
          html.classList.add('light');
          break;
      }
    };

    setTheme();

    toggle.addEventListener(
      'click',
      e => {
        toggle.classList.toggle('active');
        if (toggle.classList.contains('active')) {
          html.classList.add('dark');
          html.classList.remove('light');
          localStorage.setItem('theme', 'dark');
        } else {
          html.classList.remove('dark');
          html.classList.add('light');
          localStorage.setItem('theme', 'light');
        }
      },
      false
    );
  },
  false
);
