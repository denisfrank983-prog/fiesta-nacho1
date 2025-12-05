function countdown() {
  const fechaObjetivo = new Date("December 7, 2025 15:00:00").getTime();
  const ahora = new Date().getTime();
  const distancia = fechaObjetivo - ahora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = 
    `${dias}d ${horas}h ${minutos}m ${segundos}s`;

  if (distancia < 0) {
    document.getElementById("countdown").innerHTML = "¡Hoy es el día! 🎉";
  }
}

setInterval(countdown, 1000);
