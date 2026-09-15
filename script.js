document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const bouton = document.getElementById("envoyer");
  if (form && bouton) {
    bouton.addEventListener("click", (event) => {
      event.preventDefault();
      const nom = document.getElementById("nom").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      if (!nom || !email || !message) { alert("Veuillez remplir tous les champs avant d'envoyer."); return; }
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regexEmail.test(email)) { alert("Veuillez entrer une adresse e-mail valide."); return; }
      localStorage.setItem("nom", nom); localStorage.setItem("email", email); localStorage.setItem("message", message);
      window.location.href = "reponse.html";
    });
  }
});