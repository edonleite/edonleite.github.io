document.addEventListener('DOMContentLoaded', () => {
  /* ===============================
     Toggle Menu (Mobile)
  =============================== */
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('nav');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  /* ===============================
     Botão Voltar ao Topo
  =============================== */
  const btnTopo = document.getElementById('btn-topo');

  if (btnTopo) {
    // Mostrar / esconder botão ao rolar
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        btnTopo.style.display = 'flex';
      } else {
        btnTopo.style.display = 'none';
      }
    });

    // Scroll suave para o topo
    btnTopo.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
});
