document.addEventListener("DOMContentLoaded", () => {



const rockBtn = document.getElementById("playrock")
const paperBtn = document.getElementById("playpaper")
const scissorBtn = document.getElementById("playscissor")
const youScore = document.querySelector(".youScore")
const compScore = document.querySelector(".compScore")
const message = document.querySelector(".message")




let userScore = 0
let computerScore = 0

function computerPlay() {
    let arr = ["rock", "paper","scissor"]
    return arr[Math.floor(Math.random() * arr.length )]
    }

function playGame(userInput) {

    computerInput = computerPlay()

   if (userScore < 5 && computerScore < 5) {
    
    if (userInput === computerInput) {
        message.textContent = `DRAW! 😬`
    } else if (userInput === "rock" && computerInput === "paper") {
        message.textContent = `You lost this round.. 😰`
        computerScore++
        compScore.textContent = computerScore
    } else if (userInput === "rock" && computerInput === "scissor") {
        message.textContent = `You won this round! 😎`
        userScore++
        youScore.textContent = userScore
    } else if (userInput === "paper" && computerInput === "rock") {
        message.textContent = `You won this round! 😎`
        userScore++
        youScore.textContent = userScore
    } else if (userInput === "paper" && computerInput === "scissor") {
        message.textContent = `You lost this round.. 😰`
        computerScore++
        compScore.textContent = computerScore
    } else if (userInput === "scissor" && computerInput === "rock") {
        message.textContent = `You lost this round.. 😰`
        computerScore++
        youScore.textContent = userScore
        compScore.textContent = computerScore
    } else if (userInput === "scissor" && computerInput === "paper") {
        message.textContent = `You won this round! 😎`
        userScore++
        youScore.textContent = userScore
    }
}
    
    if (userScore === 5 ) {
        console.log("The game is over. You won.")
    } else if (computerScore === 5) {
            console.log("The game is over. You lost.")
    }
    
    
}
rockBtn.addEventListener("click", function() {
    console.log("Check: Played Rock")
    playGame(rockBtn.value)
})
paperBtn.addEventListener("click", function() {
    console.log("Check: Played Paper")
    playGame(paperBtn.value)
})
scissorBtn.addEventListener("click", function() {
    console.log("Check: Played Scissor")
    playGame(scissorBtn.value)
})   


reload.addEventListener("click", function(){
    reloadThePage()
})
function reloadThePage(){
    window.location.reload();
} 

})