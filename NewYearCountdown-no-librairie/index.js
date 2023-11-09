let dayElemt = document.getElementById("day");
let hourElemt = document.getElementById("hour");
let minuteElemt = document.getElementById("minute");
let secondElemt = document.getElementById("second");

let newYear = "2024-01-01T00:00:00";
function countdown() {
  let newDate = new Date(newYear);
  let currentDate = new Date();

  let totalSeconds = (newDate - currentDate) / 1000;
  let dayleft = Math.round(totalSeconds / 3600 / 24);
  let hourleft = Math.round((totalSeconds / 3600) % 24);
  let minuteleft = Math.round((totalSeconds / 60) % 60);
  let secondleft = Math.round(totalSeconds % 60);

  dayElemt.textContent = formatDate(dayleft);
  hourElemt.textContent = formatDate(hourleft);
  minuteElemt.textContent = formatDate(minuteleft);
  secondElemt.textContent = formatDate(secondleft);
}

function formatDate(date) {
  return date < 10 ? `0${date}` : date;
}

setInterval(countdown, 1000);
