document.addEventListener('DOMContentLoaded', () => {
    const contactFormFull = document.getElementById('contact-form-full');
    const formMessageFull = document.getElementById('form-message-full');

    contactFormFull.addEventListener('submit', function(e) {
        e.preventDefault();

        // Recopilación de datos del formulario
        const formData = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            telefono: document.getElementById('telefono').value || 'No proporcionado',
            asunto: document.getElementById('asunto').value,
            mensaje: document.getElementById('mensaje').value,
            fecha: new Date().toLocaleString()
        };

        // Validaciones adicionales
        if (!formData.nombre || !formData.email || !formData.asunto || !formData.mensaje) {
            formMessageFull.textContent = 'Por favor, completa todos los campos requeridos.';
            formMessageFull.style.color = 'red';
            return;
        }

        // Guardar en LocalStorage
        let contactos = JSON.parse(localStorage.getItem('contactosEspacioVirtual')) || [];
        contactos.push(formData);
        localStorage.setItem('contactosEspacioVirtual', JSON.stringify(contactos));

        // Mensaje de éxito
        formMessageFull.textContent = '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.';
        formMessageFull.style.color = 'green';

        // Limpiar formulario
        contactFormFull.reset();

        // Mostrar datos guardados (opcional, para demostración)
        console.log('Contactos guardados:', contactos);
    });

    // Opcional: Cargar y mostrar últimos contactos
    function cargarContactosAnteriores() {
        const contactos = JSON.parse(localStorage.getItem('contactosEspacioVirtual')) || [];
        const ultimosContactos = contactos.slice(-3); // Últimos 3 contactos

        // Puedes agregar lógica aquí para mostrar los últimos contactos si lo deseas
        console.log('Últimos contactos:', ultimosContactos);
    }

    cargarContactosAnteriores();
});