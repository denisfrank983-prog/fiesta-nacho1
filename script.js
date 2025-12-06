// Sound on page load (mute autoplay protection friendly)
window.addEventListener("load", () => {
  const audio = document.getElementById("rocket-sound");
  audio.volume = 0.6;
  audio.play().catch(() => {});
});

// Netlify submit + Modal + Sound
function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  // 🎵 Play Rocket sound on confirm
  const audio = document.getElementById("rocket-sound");
  audio.currentTime = 0;
  audio.play().catch(()=>{});

  // 📩 Send to Netlify properly
  fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams(formData).toString()
  })
    .then(() => {
      // 🎉 Show modal now that Netlify stored the data
      document.getElementById("modal").style.display = "flex";

      // 🧼 Reset form
      form.reset();
    })
    .catch((error) => {
      alert("Error al enviar: " + error);
    });

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
particlesJS.load("particles-js", "particles.json");
