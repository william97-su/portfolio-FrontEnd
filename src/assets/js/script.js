document.addEventListener('DOMContentLoaded', function () {
  // Obtener todos los enlaces del Navbar
  var navbarLinks = document.querySelectorAll('#navbar-header .nav-link');

  // Agregar un evento de clic a cada enlace
  navbarLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Evitar el comportamiento predeterminado del enlace

      // Obtener el atributo "href" del enlace
      var targetId = this.getAttribute('href');

      // Obtener el elemento de destino basado en el ID
      var targetElement = document.querySelector(targetId);

      // Desplazamiento suave al elemento de destino
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});