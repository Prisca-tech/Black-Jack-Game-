let sum = 0
let cards = []
isAlive = false
let startEl = document.getElementById("start-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let newEl = document.getElementById("new-el")


function randomCards() {
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    if (randomNumber === 1) {
        return 11
    }else if (randomNumber > 10) {
        return 10
    }else {
        return randomNumber
    }
}
startEl.addEventListener("click", function() {
   let card1 = randomCards()
    let card2 = randomCards()
    sum = card1 + card2
    cards = [card1, card2]
    isAlive = true
    renderGame()
})


function renderGame() {
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum 
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

newEl.addEventListener("click", function() {
    if (isAlive === true && sum < 21){
        let card = randomCards()
        sum += card
        cards.push(card)
        renderGame()
    }
})