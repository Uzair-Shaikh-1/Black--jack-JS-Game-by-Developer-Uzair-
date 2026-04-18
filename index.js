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

// let likesDocumentries = true
// let likesStartups = true

// if ( likesDocumentries === true && likesStartups === true){
//     recommendMovie()
// }




// if ( hasSolvedChallange === false && hasHintsLeft === false){
//     showsolution()
// }


// practice


// let cardss = [7, 3, 9]

// for (let p = 2; p < .lenght; p += 1) {
//     console.log(cardss[p])
// }

// let sentence = ["hello ", "my ", "name ", "is ", "per "]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.lenght; i++) {
//     greetingEl.textContent += sentence + ""
// }

// function race() {
//     let totalRaceTime = 100
// }

// let returnedValue = race()
// console.log(returnedValue)


// let castleListing = {
//     view: true,
//     site: "good",
//     landscape: 10,
//     tags: ["good", "nice"]
// }
// console.log(castleListing.view, castleListing.tags)

// object modal

// let person = {
//     info: "uzair",
//     age: 19,
//     country: "pakistan"

// }
// function logData() {
//     console.log(person.info + " is " + person.age + " years old and lives in  " + person.country)
// }
// logData()


// let age = 26

// if (age < 6) {
//     console.log("free")
// } else if (age < 17) {
//     console.log("child discount")
// }
// else if (age < 18) {
//     console.log("student discount")
// } else if (age < 27) {
//     console.log("full price")
// }
// else if (age < 67) {
//     console.log("senior citizen discount")
// }

// console.log(age)
// console.log("five largest countries in the world ")
// let largeCountries = ["china", "india", "indonesia", "pakistan"]

// largeCountries.pop()
// largeCountries.push("monaco")
// largeCountries.shift()
// largeCountries.unshift("mongolia")



// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i])
// }

// let dayOfMonth = 15
// let weekDay = "friday"

// if (dayOfMonth === 15 && weekDay === "friday") {
//     console.log("horror")
// } else {
//     console.log("nothing")
// }


// let hands = ["rock", "paper", "scissor"]

// function getHand() {
//     let randomIndex = Math.floor(Math.random() * 3)
//     return hands[randomIndex]
// }
// console.log(getHand())



// function getHand() {
//     let randomIndex = Math.floor(Math.random() * 3)
//     return hands[randomIndex]
// }
// console.log(getHand())





// function getHand() {
//     let randomIndex = Math.floor(Math.random() * 3)
//     return hands[randomIndex]
// }
// console.log(getHand())

// function sortFruit(){
//     for(let i = 0; i < fruits.lenght; i++){
//      if( fruits[i] ===  "apple"){
//         appleshelf.textContent +="apple"
//       }
//       else{
//         orangeshelf.textContent += "orange"
//       }
// }



