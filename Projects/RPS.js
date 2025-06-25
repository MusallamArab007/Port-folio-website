// document.addEventListener('DOMContentLoaded', function () {
//     let player = document.getElementById("playerText");
//     let computer = document.getElementById("computerText");

//     let userchoice1 = document.getElementById("rck");
//     let userchoice2 = document.getElementById("ppr");
//     let userchoice3 = document.getElementById("ssrs");

//     let userScore = document.getElementById("tableBody");
//     let resultContainer = document.getElementById("para");
//     let roundCounter = 10;
//     let userWins = 0;
//     let computerWins = 0;

//     function getRandomChoice() {
//         const choices = ["Rock", "Paper", "Scissors"];
//         const randomIndex = Math.floor(Math.random() * choices.length);
//         return choices[randomIndex];
//     }

//     function displayChoices(userChoice, computerChoice) {
//         player.textContent = `Player: ${userChoice}`;
//         computer.textContent = `Computer: ${computerChoice}`;
//     }

//     function updateScore(userChoice, computerChoice, result) {
        
//         if (result === "You win!") {
//             userWins++;
//         } else if (result === "Computer wins!") {
//             computerWins++;
//         }
//     }

//     function showFinalScores() {
//         const newRow = userScore.insertRow();
//         const cell1 = newRow.insertCell(0);
//         const cell2 = newRow.insertCell(1);

//         cell1.textContent = `Player: ${userWins}`;
//         cell2.textContent = `Computer: ${computerWins}`;
//     }

//     function playRound(userChoice) {
//         const computerChoice = getRandomChoice();

//         displayChoices(userChoice, computerChoice);

//         let result = "";
//         if (userChoice === computerChoice) {
//             result = "It's a tie!";
//         } else if (
//             (userChoice === "Rock" && computerChoice === "Scissors") ||
//             (userChoice === "Paper" && computerChoice === "Rock") ||
//             (userChoice === "Scissors" && computerChoice === "Paper")
//         ) {
//             result = "You win!";
//         } else {
//             result = "Computer wins!";
//         }

//         updateScore(userChoice, computerChoice, result);
//         resultContainer.textContent = result;

//         if (roundCounter === 1) {
//             showFinalScores();
//             roundCounter = 10; 
//             userWins = 0; 
//             computerWins = 0; 
//         }
//     }

//     function showResult() {
//         const remainingRoundsContainer = document.getElementById("remainingRounds");
//         remainingRoundsContainer.textContent = `Rounds Remaining: ${--roundCounter}`;
//     }

//     userchoice1.addEventListener('click', function () {
//         for (let i = 0; i < 10; i++) {
//             playRound("Rock");
//             showResult();
//         }
//     });

//     userchoice2.addEventListener('click', function () {
//         for (let i = 0; i < 10; i++) {
//             playRound("Paper");
//             showResult();
//         }
//     });

//     userchoice3.addEventListener('click', function () {
//         for (let i = 0; i < 10; i++) {
//             playRound("Scissors");
//             showResult();
//         }
//     });
// });










document.addEventListener('DOMContentLoaded', function () {
    

    let player = document.getElementById("playerText");
    let computer = document.getElementById("computerText");

    let userchoice1 = document.getElementById("rck");
    let userchoice2 = document.getElementById("ppr");
    let userchoice3 = document.getElementById("ssrs");

    let userScore = document.getElementById("tableBody");

    function getRandomChoice() {
        
        const choices = ["Rock", "Paper", "Scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function displayChoices(userChoice, computerChoice) {
        
        player.textContent = `Player: ${userChoice}`;
        computer.textContent = `Computer: ${computerChoice}`;
    }

    function updateScore(userChoice, computerChoice) {
        
        const newRow = userScore.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        cell1.textContent = userChoice;
        cell2.textContent = computerChoice;
    }

    function playRound(userChoice) {
        const computerChoice = getRandomChoice();

        displayChoices(userChoice, computerChoice);

        
        if (userChoice === computerChoice) {
            
            showResult("It's a tie!");
        } else if (
            (userChoice === "Rock" && computerChoice === "Scissors") ||
            (userChoice === "Paper" && computerChoice === "Rock") ||
            (userChoice === "Scissors" && computerChoice === "Paper")
        ) {
            
            showResult("You win!");
        } else {
            
            showResult("Computer wins!");
        }

        updateScore(userChoice, computerChoice);
    }

    function showResult(result) {
        
        document.getElementById("para").textContent = result;
    }

    
    userchoice1.addEventListener('click', function () {
        playRound("Rock");
    });

    userchoice2.addEventListener('click', function () {
        playRound("Paper");
    });

    userchoice3.addEventListener('click', function () {
        playRound("Scissors");
    });
});




























// let player = document.getElementById("playerText");
// let computer = document.getElementById("computerText");

// let possibleChoices = document.querySelectorAll('choiceBtn');
// let userchoice1 = document.getElementById("rck");
// let userchoice2 = document.getElementById("ppr");
// let userchoice3 = document.getElementById("ssrs");
// var showReimaing = document.getElementById("para");

// let userScore = document.getElementById("tableBody");


// function main(){

//     function math(){
//         var arr = ["Rock", "Paper", "Scissors"];
//         var random = Math.floor(Math.random() * 3);
//         var comAns = arr[random];
//         return comAns;
//     }
//     // if ()
//     // {
//     //     alert("working");
//     // }
//     let comp = math();
//     console.log(comp);
//     console.log(math());
//     // var computerResult = math();
//     function runrock(){
//         var r = "Rock";
//         player.innerHTML =  player.innerText.replace("Rock", "");
//         player.innerHTML =  player.innerText.replace("Paper", "");
//         player.innerHTML =  player.innerText.replace("Scissors", "");
//         computer.innerHTML = computer.innerHTML.replace("Rock", "");
//         computer.innerHTML = computer.innerHTML.replace("Paper", "");
//         computer.innerHTML = computer.innerHTML.replace("Scissors", "");
//         player.innerHTML = player.innerText + r;
//         computer.innerHTML = computer.innerText + math();
//     }
    
//     function runpaper(){
//         var p = "Paper";
//         player.innerHTML =  player.innerText.replace("Rock", "");
//         player.innerHTML =  player.innerText.replace("Paper", "");
//         player.innerHTML =  player.innerText.replace("Scissors", "");
//         computer.innerHTML = computer.innerHTML.replace("Rock", "");
//         computer.innerHTML = computer.innerHTML.replace("Paper", "");
//         computer.innerHTML = computer.innerHTML.replace("Scissors", "");
//         player.innerHTML = player.innerText + p;
//         computer.innerHTML = computer.innerText + math();
//     }
//     function runscissor(){
//         var s = "Scissors";
//         player.innerHTML =  player.innerText.replace("Rock", "");
//         player.innerHTML =  player.innerText.replace("Paper", "");
//         player.innerHTML =  player.innerText.replace("Scissors", "");
//         computer.innerHTML = computer.innerHTML.replace("Rock", "");
//         computer.innerHTML = computer.innerHTML.replace("Paper", "");
//         computer.innerHTML = computer.innerHTML.replace("Scissors", "");
//         player.innerHTML = player.innerText + s;
//         computer.innerHTML = computer.innerText + math();
//     }
    // console.log(computerResult);
        
    // function check(){
    //     if (){
    //         alert("code is working");
    //         console.log("code is working");
    //     }
    //     else {
    //         console.log("code is not working");
    //     }
    // }
    
    // for(var i=0; i<=10; i++){
        // console.log(i);
        // userchoice1.addEventListener('click', ()=>{
        //     runrock();  
        //     // console.log(arr[0], comAns);
        //     // check();
        // })
        // userchoice2.addEventListener('click', ()=>{
        //     runpaper();    
        //     // check();
        // })
        // userchoice3.addEventListener('click', ()=>{
        //     runscissor();    
        //     // check();
        // })
        // // showReimaing.innerHTML = i;
    // }
   
// }
// var computerResult = math();
// var playerResult;
// if (player.innerHTML == player.innerText+"Rock"){
//     alert("Code is running");
// }
// main();







// if ((possibleChoices.value=="rock" && comAns=="Rock") || (possibleChoices.value=="paper" && comAns=="Paper") || (possibleChoices.value=="scissors" && comAns=="Scissors"))
// {
//     player.innerHTML = `Player: ${possibleChoices.value.uppercase()}`
//     computer.innerHTML = `Computer: ${comAns}`;
//     userScore.innerHTML += `<tr>
//                                 <td>Rock</td>
//                                 <td>Rock</td>
//                             </tr>`
// }
// else if (arr[random] == "Paper")
// {
//     player.innerHTML = `Player: Rock`
//     computer.innerHTML = "Computer: Paper";
//     userScore.innerHTML += `<tr>
//                                 <td>Rock</td>
//                                 <td>Paper</td>
//                             </tr>`
// }
// else if (arr[random] == "Scissors")
// {
//     player.innerHTML = `Player: Rock`
//     computer.innerHTML = "Computer: Scissors";
//     userScore.innerHTML += `<tr>
//                                 <td>Rock</td>
//                                 <td>Scissors</td>
//                             </tr>`
// }



    // userchoice1.addEventListener('click', () => {
        
    // })


// while(i>=1){
//     let random = Math.floor(Math.random() * 3 + 1);
    
//     userchoice1.addEventListener('click', () => {
//         if (userchoice1 == random[1])
//         {
//             player.innerHTML = `<img src="images/Rock.jpg">`
//             computer.innerHTML = `<img src="images/Rock.jpg">`;
//         }
//     })
    // console.log(comAns);

//     i--;
// }



// || (possibleChoices[1] == comAns[2]) || (possibleChoices[2] == comAns[3])