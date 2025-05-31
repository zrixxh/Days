function updateTimeAlive() {
  const birthDate = new Date('2003-12-18T00:00:00');
  const now = new Date();

  const diffMs = now - birthDate;
  const diffSecs = Math.floor(diffMs / 1000);

  const seconds = diffSecs % 60;
  const minutes = Math.floor(diffSecs / 60) % 60;
  const hours = Math.floor(diffSecs / 3600) % 24;
  const days = Math.floor(diffSecs / (3600 * 24));
  const weeks = Math.floor(days / 7);
  const months = Math.floor((now.getFullYear() - birthDate.getFullYear()) * 12 + (now.getMonth() - birthDate.getMonth()));

  document.getElementById('months').textContent = months;
  document.getElementById('weeks').textContent = weeks;
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

setInterval(updateTimeAlive, 1000);
updateTimeAlive();
