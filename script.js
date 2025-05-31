function calculateDaysAlive() {
  const birthDate = new Date('2003-12-18');
  const today = new Date();
  
  // Get time difference in milliseconds
  const diffTime = today - birthDate;
  // Convert to days
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  document.getElementById('days').textContent = diffDays;
}

calculateDaysAlive();

