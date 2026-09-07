// Function to switch between screens
function goToStep(stepNumber) {
  // Hide all screens
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => {
    screen.classList.remove('active');
  });

  // Show target screen
  const targetScreen = document.getElementById(`step${stepNumber}`);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }
}