function displayTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
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
