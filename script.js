// Fecha del cumpleaños
const fechaEvento = new Date("December 7, 2025 15:00:00").getTime();

const diasSpan = document.getElementById("dias");
const horasSpan = document.getElementById("horas");
const minutosSpan = document.getElementById("minutos");
const segundosSpan = document.getElementById("segundos");

function actualizarCountdown() {
  const ahora = new Date().getTime();
  const distancia = fechaEvento - ahora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  diasSpan.textContent = dias;
  horasSpan.textContent = horas;
  minutosSpan.textContent = minutos;
  segundosSpan.textContent = segundos;
}

setInterval(actualizarCountdown, 1000);
actualizarCountdown();
