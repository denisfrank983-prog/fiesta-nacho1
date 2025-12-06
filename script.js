// ===== Contador regresivo =====
function startCountdown() {
  const targetDate = new Date("December 7, 2025 15:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById("countdown").innerText = "¡Hoy es el evento! 🎉";
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerText =
      `${d}d ${h}h ${m}m ${s}s`;
  }, 1000);
}

startCountdown();


// ===== Confirmación de asistencia =====
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const personas = document.getElementById("personas").value;
  const asistencia = document.getElementById("asistencia").value;

  const mensajeDiv = document.getElementById("mensaje");

  mensajeDiv.innerHTML = `
    Gracias, <b>${nombre}</b> 🧡<br>
    ${asistencia}<br>
    El evento empieza a las <b>3:00 PM</b> 🎉<br><br>
    <a href="https://maps.app.goo.gl/VH71NaHd2JSh2FbLA?g_st=aw"
       target="_blank"
       style="color:#ffb400; text-decoration:underline;">
       Ver ubicación en Google Maps 📍
    </a>
  `;
});
