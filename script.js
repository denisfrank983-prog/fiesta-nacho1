// Enviar datos a Netlify + mostrar modal + sonido
function handleSubmit(e) {
  e.preventDefault();

  // Reproducir sonido
  const audio = document.getElementById("rocket-sound");
  audio.volume = 0.6;
  audio.currentTime = 0;
  audio.play().catch(()=>{});

  // Enviar datos a Netlify
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(new FormData(e.target)).toString()
  })
  .then(() => {
    // Modal visible
    document.getElementById("modal").style.display = "flex";
    e.target.reset();
  })
  .catch(() => {
    alert("Error al enviar. Intenta de nuevo.");
  });

  return false;
}

// Countdown hasta domingo 3PM
function countdown() {
  const now = new Date();
  const target = new Date();

  // Buscar próximo domingo
  target.setDate(target.getDate() + ((7 - target.getDay()) % 7));
  target.setHours(15, 0, 0, 0);

  const diff = target - now;
  if (diff < 0) return;

  const h = Math.floor(diff / 1000 / 60 / 60);
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  document.getElementById("countdown").innerText = `${h}h ${m}m ${s}s`;
}

setInterval(countdown, 1000);
countdown();

// particles.js
particlesJS.load('particles-js', 'particles.json');
