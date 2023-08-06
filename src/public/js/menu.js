const currentPath = window.location.pathname;
const activeLink = document.querySelector(`.nav-link[href="${currentPath}"]`);

if (activeLink) {
  activeLink.classList.add('activo');
}