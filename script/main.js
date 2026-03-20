function step() {
  currentYear++;
  yearElement.textContent = currentYear;
  ageElement.textContent = currentYear - birthYear;

  if (currentYear >= targetYear) return; // ← moved to after the update

  const isSlow = currentYear >= slowdownStart;
  const delay = isSlow ? 250 + (currentYear - slowdownStart) * 150 : 80;
  setTimeout(step, delay);
}
