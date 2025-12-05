// FECHA DEL EVENTO
const eventDate = new Date("2025-12-07T15:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor(diff / (1000*60*60) % 24);
  const m = Math.floor(diff / (1000*60) % 60);
  const s = Math.floor(diff / 1000 % 60);

  document.getElementById("countdown").innerText =
    `${d} días ${h}h ${m}m ${s}s`;
}
setInterval(updateCountdown, 1000);

// FORM
const form = document.getElementById("form");
const resBox = document.getElementById("resultado");

form.addEventListener("submit", function(e) {
  resBox.innerText = "Enviando...";
  setTimeout(() => {
    resBox.innerText = "¡Gracias por confirmar! 🎉";
    form.reset();
  }, 1200);
});
