
document.addEventListener("DOMContentLoaded", () => {
  const scoreEl = document.getElementById("score");
  const timeEl = document.getElementById("time");
  const questionEl = document.getElementById("question");
  const inputEl = document.getElementById("input_number");
  const checkBtn = document.getElementById("checkBtn");
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popup-message");
  const restartBtn = document.getElementById("restartBtn");
  const difficultyEl = document.getElementById("difficulty");
  const remainingRounds = document.getElementById("totalRounds");

  let score = 0;
  let timeLeft = 20;
  let timer;
  let num1, num2, correctAnswer;
  let roundCount = 0;
  const totalRounds = 10;
  let gameOver = false;
  let gameStarted = false; //  controls when to start

  //  Generate question based on difficulty
  function generateQuestion() {
    const difficulty = difficultyEl.value;

    if (difficulty === "easy") {
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
      if (num2 > num1) [num1, num2] = [num2, num1];
    } else if (difficulty === "medium") {
      num1 = Math.floor(Math.random() * 90) + 10;
      num2 = Math.floor(Math.random() * 90) + 10;
      if (num2 > num1) [num1, num2] = [num2, num1];
    } else if (difficulty === "hard") {
        num1 = Math.floor(Math.random() * 910) + 90;
        num2 = Math.floor(Math.random() * 910) + 90;
        if (num2 > num1) [num1, num2] = [num2, num1];
    }

    correctAnswer = num1 - num2;
    questionEl.textContent = `Random Number: ${num1} - ${num2}`;
    inputEl.value = "";
    inputEl.focus();
  }

  //  Timer
  function startTimer() {
    clearInterval(timer);
    timeLeft = 20;
    timeEl.textContent = timeLeft;

    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        timeEl.textContent = timeLeft;
      } else {
        clearInterval(timer);
        checkAnswer(false, true);
      }
    }, 1000);
  }

  //  Check Answer
  function checkAnswer(clicked = true, timeout = false) {
    if (gameOver) return;
    clearInterval(timer);
    roundCount++;

    let userAnswer = parseInt(inputEl.value);
    if (!timeout && userAnswer === correctAnswer) {
      score++;
      scoreEl.textContent = score;
      remainingRounds.textContent = roundCount;
      questionEl.textContent = ` Correct! ${num1} - ${num2} = ${correctAnswer}`;
    } else if (timeout) {
        questionEl.textContent = ` Time’s up! Correct answer: ${correctAnswer}`;
        remainingRounds.textContent = roundCount;
    } else {
        questionEl.textContent = ` Wrong! Correct answer: ${correctAnswer}`;
        remainingRounds.textContent = roundCount;
    }

    if (roundCount >= totalRounds) {
      endGame();
    } else {
      setTimeout(() => {
        generateQuestion();
        startTimer();
      }, 1500);
    }
  }

  //  End Game
  function endGame() {
    gameOver = true;
    popup.classList.remove("hidden");
    popupMessage.innerHTML = ` Final Score: <strong>${score}/${totalRounds}</strong>`;
  }

  //  Reset Game
  function resetGame() {
    gameOver = false;
    score = 0;
    roundCount = 0;
    scoreEl.textContent = score;
    remainingRounds.textContent = roundCount;
    popup.classList.add("hidden");
    generateQuestion();
    startTimer();
  }

  // On mode select (start game)
  difficultyEl.addEventListener("change", () => {
    if (!gameStarted) {
      gameStarted = true;
      startGame();
    } else {
      // Restart if changed during game
      resetGame();
    }
  });


  function startGame() {
    questionEl.textContent = " Game Started!";
    setTimeout(() => {
      generateQuestion();
      startTimer();
    }, 1000);
  }

  checkBtn.addEventListener("click", () => checkAnswer(true));
  restartBtn.addEventListener("click", resetGame);

  // Initial message before mode selection
  questionEl.textContent = "Please select a difficulty to begin!";
});
