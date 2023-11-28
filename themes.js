const background = document.getElementById('background');
const icon1 = document.getElementById('icon1');
const icon2 = document.getElementById('icon2');

// Tema por defecto (claro u oscuro)

document.addEventListener('DOMContentLoaded', function () {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
  } else if (prefersDarkScheme.matches) {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'light');
  }

  if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
    icon1.classList.add('fa-moon');
    icon1.classList.remove('fa-sun');
    icon2.classList.add('fa-moon');
    icon2.classList.remove('fa-sun');

    if (background) {
      background.classList.add('dark');
      background.classList.remove('light');
    }
  } else {
    icon1.classList.add('fa-sun');
    icon1.classList.remove('fa-moon');
    icon2.classList.add('fa-sun');
    icon2.classList.remove('fa-moon');

    if (background) {
      background.classList.add('light');
      background.classList.remove('dark');
    }
  }
});

// Botón para cambiar de tema

document.getElementById('btnSwitch1').addEventListener('click', function () {
  const currentTheme = document.documentElement.getAttribute('data-bs-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  document.documentElement.setAttribute('data-bs-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  if (newTheme === 'dark') {
    icon1.classList.add('fa-moon');
    icon1.classList.remove('fa-sun');
    icon2.classList.add('fa-moon');
    icon2.classList.remove('fa-sun');

    if (background) {
      background.classList.add('dark');
      background.classList.remove('light');
    }
  } else {
    icon1.classList.add('fa-sun');
    icon1.classList.remove('fa-moon');
    icon2.classList.add('fa-sun');
    icon2.classList.remove('fa-moon');

    if (background) {
      background.classList.add('light');
      background.classList.remove('dark');
    }
  }
});

document.getElementById('btnSwitch2').addEventListener('click', function () {
  const currentTheme = document.documentElement.getAttribute('data-bs-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  document.documentElement.setAttribute('data-bs-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  if (newTheme === 'dark') {
    icon1.classList.add('fa-moon');
    icon1.classList.remove('fa-sun');
    icon2.classList.add('fa-moon');
    icon2.classList.remove('fa-sun');
    
    if (background) {
      background.classList.add('dark');
      background.classList.remove('light');
    }
  } else {
    icon1.classList.add('fa-sun');
    icon1.classList.remove('fa-moon');
    icon2.classList.add('fa-sun');
    icon2.classList.remove('fa-moon');
    
    if (background) {
      background.classList.add('light');
      background.classList.remove('dark');
    }
  }
});