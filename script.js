// Funcionalidad de la barra lateral de contacto
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('contactSidebar');
    const toggle = document.getElementById('contactToggle');
    const form = document.getElementById('contactForm');

    // Alternar la barra lateral
    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Cerrar la barra lateral al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });

    // Evitar que los clics dentro de la barra lateral la cierren
    sidebar.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Manejar envío del formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("✅ ¡Gracias por tu mensaje! Lo recibiremos en ccescolar@gmail.com");
        form.reset();
        sidebar.classList.remove('active');
    });
});