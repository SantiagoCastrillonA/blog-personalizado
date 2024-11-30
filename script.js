document.addEventListener("DOMContentLoaded", () => {
  // Formulario de contacto
  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = this.nombre.value;
    const email = this.email.value;
    const mensaje = this.mensaje.value;

    // Validación de formulario
    if (nombre && email && mensaje) {
      // Guardar en LocalStorage
      const commentData = {
        nombre: nombre,
        email: email,
        mensaje: mensaje,
        fecha: new Date().toLocaleString(),
      };

      // Obtener comentarios existentes o inicializar
      let comments = JSON.parse(localStorage.getItem("blogComments")) || [];
      comments.push(commentData);
      localStorage.setItem("blogComments", JSON.stringify(comments));

      // Mostrar mensaje de éxito
      formMessage.textContent = "¡Comentario enviado con éxito!";
      formMessage.style.color = "green";

      // Limpiar formulario
      contactForm.reset();
    }
  });

  // Contador de visitas
  const statsButton = document.getElementById("stats-button");
  const visitCountDisplay = document.getElementById("visit-count");

  statsButton.addEventListener("click", () => {
    // Obtener el conteo actual o inicializarlo en 0
    let clickCount = parseInt(localStorage.getItem("clickCount")) || 0;

    // Incrementar
    clickCount++;

    // Guardar en LocalStorage
    localStorage.setItem("clickCount", clickCount);

    // Actualizar display
    visitCountDisplay.textContent = `Visitas: ${clickCount}`;
  });

  // Cargar conteo inicial de visitas
  const initialCount = parseInt(localStorage.getItem("clickCount")) || 0;
  visitCountDisplay.textContent = `Visitas: ${initialCount}`;
});
