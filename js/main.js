function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function displayTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  let part;

  if (hours > 12) {
    part = `PM`;
    hours = hours - 12;
  } else {
    part = `AM`;
  }

  document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds} ${part}`;
  setInterval(displayTime, 1000);
}
