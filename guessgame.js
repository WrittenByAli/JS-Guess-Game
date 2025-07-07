let maximum = prompt("Enter the maximum number:");
let num = Math.floor(Math.random() * maximum) + 1;
let guess;
let chance = 0;

function makeGuess() {
    chance ++;
  guess = parseInt(document.getElementById("user-input").value);
  let message = "";

  if (guess - num > 0) {
    message += "🔻 Random number is less than your guess<br>";
  } else if (guess - num < 0) {
    message += "🔺 Random number is greater than your guess<br>";
  }

  if (Math.abs(guess - num) < 10) {
    message += "🟡 You are close!<br>";
  }

  if (chance >= 4) {
    message += "❌ 4 lives used. You lost. The number was " + num;
    endGame();
  } else if (guess == num) {
    message += "✅ You guessed it right! The number was " + num;
    endGame();
  } else {
    message += "🔁 Try Again";
    chance++;
  }

  document.getElementById("message").innerHTML = message;
  document.getElementById("user-input").value = "";
}

function endGame() {
  document.getElementById("input-section").innerHTML =
    "<button onclick='location.reload()'>🔄 Play Again</button>";
}
