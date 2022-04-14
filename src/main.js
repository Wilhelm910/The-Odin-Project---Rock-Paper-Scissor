document.addEventListener("DOMContentLoaded", () => {

const element = document.getElementById("start")
element.addEventListener("click",game)


function computerPlay() {
    let arr = ["rock", "paper", "scissor"]
    return arr[Math.floor(Math.random()*arr.length)]
}

function userPlay() {
    let str = prompt("Choose your weapon")
   return str.toLowerCase()
}

function round(userInput, computerInput) {
    let roundMessage = "none"
    let winner = "none"

    if (userInput === computerInput) {
        roundMessage = "Draw"
    } else if (userInput === "rock" && computerInput === "paper") {
        roundMessage = "You lost. Paper beats Rock!"
        winner = "Computer"
    } else if (userInput === "rock" && computerInput === "scissor") {
        roundMessage = "You won. Rock beats Scissor!"
        winner = "You"
    } else if (userInput === "paper" && computerInput === "rock") {
        roundMessage = "You won. Paper beats Rock!"
        winner = "You"
    } else if (userInput === "paper" && computerInput === "scissor") {
        roundMessage = "You lost. Scissor beats Paper!"
        winner = "Computer"
    } else if (userInput === "scissor" && computerInput === "rock") {
        roundMessage = "You lost. Rock beats Scissor!"
        winner = "Computer"
    } else if (userInput === "scissor" && computerInput === "paper") {
        roundMessage = "You won. Paper beats Scissor!"
        winner = "You"
    } else { roundMessage = "Choose a valid weapon"}
    console.log(roundMessage)
    return winner
}

function game() {

    let winCountYou = 0
    let winCountComputer = 0

    for ( let i = 0; i < 5; i++) {

        let currentWinner = round(userPlay(), computerPlay())

        if (currentWinner === "You") {
            winCountYou++
        } else if (currentWinner === "Computer") {
            winCountComputer++
        }
    }
    document.getElementById("countPlayer").innerHTML =`You got: ${winCountYou} points.`
    document.getElementById("countComputer").innerHTML =`The Computer got: ${winCountComputer} points`
    if (winCountYou > winCountComputer) {
        document.getElementById("winner").innerHTML = "You won the game"
    } else if (winCountYou < winCountComputer) {
        document.getElementById("winner").innerHTML = "The computer won the game"
    }
}

}) 
