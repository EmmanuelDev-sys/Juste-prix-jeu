let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById("guess");
  const guess = Number(guessInput.value);
  const result = document.getElementById("result");
  const attemptsDisplay = document.getElementById("attempts");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    result.textContent = "Entre un nombre entre 1 et 100 !";
    result.style.color = "orange";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = `Tentatives : ${attempts}`;

  if (guess === secretNumber) {
    result.textContent = `Bravo ! 🎉 C'était ${secretNumber} en ${attempts} tentatives !`;
    result.style.color = "lime";
    guessInput.disabled = true;
  } else if (guess < secretNumber) {
    result.textContent = "Trop bas ! ↑";
    result.style.color = "#ffa657";
  } else {
    result.textContent = "Trop haut ! ↓";
    result.style.color = "#ffa657";
  }

  guessInput.value = "";
  guessInput.focus();
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("result").textContent = "";
  document.getElementById("attempts").textContent = "Tentatives : 0";
  document.getElementById("guess").disabled = false;
  document.getElementById("guess").value = "";
  document.getElementById("guess").focus();
}
