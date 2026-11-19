const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    menuButton.textContent = isOpen ? '×' : '☰';
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menú');
      menuButton.textContent = '☰';
    });
  });
}

const yearElement = document.getElementById('year');
if (yearElement) yearElement.textContent = new Date().getFullYear();
