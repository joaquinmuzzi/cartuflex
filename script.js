// Animación de formulario
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("✅ ¡Gracias por tu mensaje! Lo recibiremos en ccescolar@gmail.com");
    this.reset();
  });
  