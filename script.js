// Contact form sidebar functionality
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('contactSidebar');
    const toggle = document.getElementById('contactToggle');
    const form = document.getElementById('contactForm');

    // Toggle sidebar
    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });

    // Prevent clicks inside sidebar from closing it
    sidebar.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("✅ ¡Gracias por tu mensaje! Lo recibiremos en ccescolar@gmail.com");
        form.reset();
        sidebar.classList.remove('active');
    });
});