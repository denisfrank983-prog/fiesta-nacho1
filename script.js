// Sound
window.addEventListener("load", () => {
  const audio = document.getElementById("rocket-sound");
  audio.volume = 0.6;
  audio.play().catch(()=>{});
});

// Netlify submit + Modal
function handleSubmit(e) {
  e.preventDefault();

  // Send to Netlify
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(new FormData(e.target)).toString()
  });

  // Show modal
  document.getElementById("modal").style.display = "flex";

  // Reset form
  e.target.reset();
  return false;
}

// Countdown to 3 PM today
function countdown() {
  const now = new Date();
  const target = new Date();
  target.setHours(15, 0, 0, 0);

  if (now > target) target.setDate(target.getDate() + 1);

  const diff = target - now;
  const h = Math.floor(diff / 1000 / 60 / 60);
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  document.getElementById("countdown").innerText =
    `${h}h ${m}m ${s}s`;
}

setInterval(countdown, 1000);
countdown();

// particles.js
particlesJS.load('particles-js', 'particles.json');
