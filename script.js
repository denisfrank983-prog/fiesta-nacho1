// Sonido Rocket League al abrir
window.addEventListener("load", () => {
  const audio = document.getElementById("rocket-sound");
  audio.volume = 0.6;
  audio.play().catch(()=>{});
});

// Enviar a Netlify + abrir modal
function handleSubmit(e) {
  e.preventDefault();

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(new FormData(e.target)).toString()
  });

  document.getElementById("modal").style.display = "flex";
  e.target.reset();
  return false;
}

// Countdown hasta domingo 3pm
function countdown() {
  const now = new Date();
  const target = new Date();

  target.setHours(15, 0, 0, 0);
  const day = now.getDay();

  // Domingo y ya pasó → siguiente domingo
  if (day === 0 && now > target) {
    target.setDate(target.getDate() + 7);
  }

  // Si no es domingo → buscar próximo domingo
  if (day !== 0) {
    const faltan = 7 - day;
    target.setDate(target.getDate() + faltan);
  }

  const diff = target - now;
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const m = Math.floor(diff / (1000 * 60)) % 60;
  const s = Math.floor(diff / 1000) % 60;

  document.getElementById("countdown").innerText =
    `${d}d ${h}h ${m}m ${s}s`;
}

setInterval(countdown, 1000);
countdown();

// Config Partículas
particlesJS.load('particles-js', 'particles.json');
