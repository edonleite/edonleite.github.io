document.addEventListener('DOMContentLoaded', () => {
  /* ===============================
     Menu Hamburguer (Mobile)
  =============================== */
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Fecha menu ao clicar em um link
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  /* ===============================
     Botão Voltar ao Topo
  =============================== */
  const btnTopo = document.getElementById('btn-topo');

  if (btnTopo) {
    window.addEventListener('scroll', () => {
      btnTopo.style.display = window.scrollY > 300 ? 'flex' : 'none';
    });

    btnTopo.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
});
