// document.addEventListener('DOMContentLoaded', () => {
//   const playerText = document.getElementById("playerText");
//   const computerText = document.getElementById("computerText");
//   const resultText = document.getElementById("para");
//   const tableBody = document.getElementById("tableBody");
//   const playerScoreEl = document.getElementById("playerScore");
//   const computerScoreEl = document.getElementById("computerScore");
//   const tieScoreEl = document.getElementById("tieScore");
//   const popup = document.getElementById("popup");
//   const popupTitle = document.getElementById("popup-title");
//   const popupMessage = document.getElementById("popup-message");
//   const restartBtn = document.getElementById("restartBtn");
//   const timeLeftEl = document.getElementById("timeLeft");

//   let roundCount = 0;
//   let playerWins = 0;
//   let computerWins = 0;
//   let ties = 0;
//   let timer;
//   let timeLeft = 10;
//   let gameOver = false;

//   const choices = { rck: "Rock", ppr: "Paper", ssrs: "Scissors" };
//   for (let id in choices) {
//     document.getElementById(id).addEventListener('click', () => playRound(choices[id]));
//   }

// //   function startTimer() {
// //     clearInterval(timer);
// //     timeLeft = 10;
// //     timeLeftEl.textContent = timeLeft;
// //     timer = setInterval(() => {
// //       if (timeLeft > 0) {
// //         timeLeft--;
// //         timeLeftEl.textContent = timeLeft;
// //       } else {
// //         clearInterval(timer);
// //         if (!gameOver) showResult("⏰ Time's up! No choice made.", "none");
// //       }
// //     }, 1000);
// //   }

// function startTimer() {
//   clearInterval(timer);
//   timeLeft = 15; // increased to 15 seconds for smoother gameplay
//   timeLeftEl.textContent = timeLeft;

//   timer = setInterval(() => {
//     if (timeLeft > 0) {
//       timeLeft--;
//       timeLeftEl.textContent = timeLeft;
//     } else {
//       clearInterval(timer);
//       if (!gameOver) {
//         // Count as computer win if player didn't play
//         roundCount++;
//         const computerChoice = getRandomChoice();
//         computerWins++;

//         addScoreRow(" No Move", computerChoice, " Computer Wins by Timeout");
//         updateScoreboard();

//         // Update UI
//         playerText.textContent = `Player: No Move`;
//         computerText.textContent = `Computer: ${computerChoice}`;
//         resultText.textContent = "⏰ Time's up! Computer Wins!";

//         if (roundCount >= 10) {
//           gameOver = true;
//           showPopup();
//         } else {
//           startTimer();
//         }
//       }
//     }
//   }, 1000);
// }


//   function getRandomChoice() {
//     return ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
//   }

//   function playRound(userChoice) {
//     if (gameOver) return;
//     clearInterval(timer);

//     const computerChoice = getRandomChoice();
//     let result = "";

//     if (userChoice === computerChoice) {
//       result = " Tie!";
//       ties++;
//     } else if (
//       (userChoice === "Rock" && computerChoice === "Scissors") ||
//       (userChoice === "Paper" && computerChoice === "Rock") ||
//       (userChoice === "Scissors" && computerChoice === "Paper")
//     ) {
//       result =  You Win!";
//       playerWins++;
//     } else {
//       result = " Computer Wins!";
//       computerWins++;
//     }

//     roundCount++;
//     updateUI(userChoice, computerChoice, result);
//     highlightResult(result);
//     updateScoreboard();
//     addScoreRow(userChoice, computerChoice, result);



//     if (roundCount >= 10) {
//       gameOver = true;
//       showPopup();
//     } else {
//       startTimer();
//     }
//   }

//   function updateUI(userChoice, computerChoice, result) {
//     playerText.textContent = `Player: ${userChoice}`;
//     computerText.textContent = `Computer: ${computerChoice}`;
//     resultText.textContent = result;
//     playerText.classList.add("pop");
//     computerText.classList.add("pop");
//     setTimeout(() => {
//     playerText.classList.remove("pop");
//     computerText.classList.remove("pop");
//     }, 250);
//   }

//   function highlightResult(result) {
//   if (result.includes("You Win")) {
//     document.body.style.backgroundColor = "#4CAF50"; // green
//   } else if (result.includes("Computer")) {
//     document.body.style.backgroundColor = "#E74C3C"; // red
//   } else {
//     document.body.style.backgroundColor = "#F1C40F"; // yellow
//   }
//   setTimeout(() => document.body.style.backgroundColor = "", 400);
// }


//   function updateScoreboard() {
//     playerScoreEl.textContent = playerWins;
//     computerScoreEl.textContent = computerWins;
//     tieScoreEl.textContent = ties;
//   }

//   function addScoreRow(player, comp, result) {
//     const newRow = tableBody.insertRow();
//     newRow.innerHTML = `
//       <td>${roundCount}</td>
//       <td>${player}</td>
//       <td>${comp}</td>
//       <td>${result}</td>
//     `;
//   }

//   function showPopup() {
//     popup.classList.remove("hidden");
//     let message = "";
//     if (playerWins > computerWins) message = " You are the Champion!";
//     else if (computerWins > playerWins) message = " Computer wins the game!";
//     else message = " It's a tie overall!";
//     popupMessage.innerHTML = `
//       ${message}<br><br>
//       <strong>Final Scores:</strong><br>
//       You: ${playerWins}<br>
//       Computer: ${computerWins}<br>
//       Ties: ${ties}
//     `;
//   }

//   restartBtn.addEventListener('click', () => {
//     popup.classList.add("hidden");
//     resetGame();
//   });

//   function resetGame() {
//     roundCount = 0;
//     playerWins = 0;
//     computerWins = 0;
//     ties = 0;
//     gameOver = false;
//     tableBody.innerHTML = "";
//     playerText.textContent = "Player: -";
//     computerText.textContent = "Computer: -";
//     resultText.textContent = "Result will appear here...";
//     updateScoreboard();
//     startTimer();
//   }

//   startTimer();
// });


document.addEventListener('DOMContentLoaded', () => {
  const playerText = document.getElementById("playerText");
  const computerText = document.getElementById("computerText");
  const resultText = document.getElementById("para");
  const tableBody = document.getElementById("tableBody");
  const playerScoreEl = document.getElementById("playerScore");
  const computerScoreEl = document.getElementById("computerScore");
  const tieScoreEl = document.getElementById("tieScore");
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popup-message");
  const restartBtn = document.getElementById("restartBtn");
  const timeLeftEl = document.getElementById("timeLeft");

  let roundCount = 0;
  let playerWins = 0;
  let computerWins = 0;
  let ties = 0;
  let timer;
  let timeLeft = 15;
  let gameOver = false;

  const choices = { rck: "Rock", ppr: "Paper", ssrs: "Scissors" };

  // Add event listeners for all buttons
  for (let id in choices) {
    document.getElementById(id).addEventListener('click', () => playRound(choices[id]));
  }

  function disableButtons(disabled) {
    for (let id in choices) {
      document.getElementById(id).disabled = disabled;
    }
  }

  function startTimer() {
    if (gameOver) return; // ✅ Prevent timer if game is over
    clearInterval(timer);
    timeLeft = 15;
    timeLeftEl.textContent = timeLeft;

    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        timeLeftEl.textContent = timeLeft;
      } else {
        clearInterval(timer);
        if (!gameOver) {
          // Count as computer win if player didn't play
          roundCount++;
          const computerChoice = getRandomChoice();
          computerWins++;

          addScoreRow(" No Move", computerChoice, " Computer Wins by Timeout");
          updateScoreboard();

          playerText.textContent = `Player: No Move`;
          computerText.textContent = `Computer: ${computerChoice}`;
          resultText.textContent = "⏰ Time's up! Computer Wins!";

          if (roundCount >= 10) {
            gameOver = true;
            disableButtons(true);
            showPopup();
          } else {
            startTimer();
          }
        }
      }
    }, 1000);
  }

  function getRandomChoice() {
    return ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
  }

  function playRound(userChoice) {
    if (gameOver) return;
    clearInterval(timer);

    const computerChoice = getRandomChoice();
    let result = "";

    if (userChoice === computerChoice) {
      result = " Tie!";
      ties++;
    } else if (
      (userChoice === "Rock" && computerChoice === "Scissors") ||
      (userChoice === "Paper" && computerChoice === "Rock") ||
      (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
      result = " You Win!";
      playerWins++;
    } else {
      result = " Computer Wins!";
      computerWins++;
    }

    roundCount++;
    updateUI(userChoice, computerChoice, result);
    highlightResult(result);
    updateScoreboard();
    addScoreRow(userChoice, computerChoice, result);

    if (roundCount >= 10) {
      gameOver = true;
      disableButtons(true);
      showPopup();
    } else {
      startTimer();
    }
  }

  function updateUI(userChoice, computerChoice, result) {
    playerText.textContent = `Player: ${userChoice}`;
    computerText.textContent = `Computer: ${computerChoice}`;
    resultText.textContent = result;

    playerText.classList.add("pop");
    computerText.classList.add("pop");
    setTimeout(() => {
      playerText.classList.remove("pop");
      computerText.classList.remove("pop");
    }, 250);
  }

  function highlightResult(result) {
    if (result.includes("You Win")) {
      document.body.style.backgroundColor = "#4CAF50"; // green
    } else if (result.includes("Computer")) {
      document.body.style.backgroundColor = "#E74C3C"; // red
    } else {
      document.body.style.backgroundColor = "#F1C40F"; // yellow
    }
    setTimeout(() => document.body.style.backgroundColor = "", 400);
  }

  function updateScoreboard() {
    playerScoreEl.textContent = playerWins;
    computerScoreEl.textContent = computerWins;
    tieScoreEl.textContent = ties;
  }

  function addScoreRow(player, comp, result) {
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
      <td>${roundCount}</td>
      <td>${player}</td>
      <td>${comp}</td>
      <td>${result}</td>
    `;
  }

  function showPopup() {
    popup.classList.remove("hidden");
    let message = "";
    if (playerWins > computerWins) message = " You are the Champion!";
    else if (computerWins > playerWins) message = "💻 Computer wins the game!";
    else message = " It's a tie overall!";

    popupMessage.innerHTML = `
      ${message}<br><br>
      <strong>Final Scores:</strong><br>
      You: ${playerWins}<br>
      Computer: ${computerWins}<br>
      Ties: ${ties}
    `;
  }

  restartBtn.addEventListener('click', () => {
    popup.classList.add("hidden");
    resetGame();
  });

  function resetGame() {
    roundCount = 0;
    playerWins = 0;
    computerWins = 0;
    ties = 0;
    gameOver = false;

    tableBody.innerHTML = "";
    playerText.textContent = "Player: -";
    computerText.textContent = "Computer: -";
    resultText.textContent = "Result will appear here...";

    updateScoreboard();
    disableButtons(false);
    startTimer();
  }

  // Start the first round
  startTimer();
});

