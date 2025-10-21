
const selectedTheme = document.querySelector('#theme');
const body = document.body;

const applyTheme = (theme) => {
  if (theme === 'dark') {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
  localStorage.setItem('theme', theme);
  selectedTheme.value = theme;
};

const initialTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
};

selectedTheme.addEventListener('change', (event) => {
  applyTheme(event.target.value);
});

initialTheme();
