let player = {
    info: "Uzair",
    chips: 145
}


let cards = [0]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.info + ": $" + player.chips


function getRandomCard() {

    let randomNumber = Math.floor(Math.random() * 12) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}




function startgame() {
    rendergame()
    isAlive = True
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

}


function rendergame() {
    cardEl.textContent = "Cards:"
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }


    sumEl.textContent = "sum: " + sum
    if (sum <= 20) {
        message = "do you want to draw a new card"
    } else if (sum === 21) {
        message = "You have got black jack"
        hasBlackJack = true
    } else {
        message = 'you are out of the game'
        isAlive = true

    }
    console.log(message)
    console.log(isAlive)
    messageEl.textContent = message

}

function newcard() {
    if (isAlive === true && hasBlackJack === false) {
        newcard()
    }
    console.log("Drawing a new card")
    let card = getRandomCard()
    sum += card
    cards.push(card)
    rendergame()
}

