let interval;

function startTimer() {
  const dobInput = document.getElementById('dob').value;
  if (!dobInput) {
    alert("Please enter your date of birth.");
    return;
  }

  const birthDate = new Date(dobInput);
  const display = document.getElementById('live-time');
  display.classList.remove('hidden');

  clearInterval(interval);
  interval = setInterval(() => updateTimeAlive(birthDate), 1000);
  updateTimeAlive(birthDate);
}

function updateTimeAlive(birthDate) {
  const now = new Date();
  const diffMs = now - birthDate;

  if (diffMs < 0) return;

  const diffSecs = Math.floor(diffMs / 1000);
  const seconds = diffSecs % 60;
  const minutes = Math.floor(diffSecs / 60) % 60;
  const hours = Math.floor(diffSecs / 3600) % 24;
  const days = Math.floor(diffSecs / (3600 * 24));
  const weeks = Math.floor(days / 7);

  // Calculate months more accurately
  const totalMonths =
    (now.getFullYear() - birthDate.getFullYear()) * 12 +
    (now.getMonth() - birthDate.getMonth());

  document.getElementById('months').textContent = totalMonths;
  document.getElementById('weeks').textContent = weeks;
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}
