//Global
const hitButton = document.querySelector('#hit')
const standButton = document.querySelector('#stand')
const dealButton = document.querySelector('#deal')
const resetButton = document.querySelector('#reset')
// player ,dealer, cards
const playerHand = []
const dealerHand = []
let cards = []
let cardRemove = []
let newGameDeck = []
let pSum = 0
let cSum = 0
//Deck creator
// used https://devdojo.com/devdojo/create-a-deck-of-cards-in-javascript to learn how to create a dec of cards
class Card {
  constructor(value, name, suit) {
    this.name = name
    this.suit = suit
    this.value = value
  }
}
class Deck {
  constructor() {
    this.name = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
    this.suit = ['Diamonds', 'Spades', 'Hearts', 'Clubs']
    //iterates through each suit and name and combines them into a new card aswell as giving them a value of their index +1 giving us 52 card variations
    for (let s = 0; s < this.suit.length; s++) {
      for (let n = 0; n < this.name.length; n++) {
        if (n <= 9) {
          cards.push(new Card(n + 1, this.name[n], this.suit[s]))
        } else {
          cards.push(new Card(10, this.name[n], this.suit[s]))
        }
      }
    }
    return cards
  }
}
let gameDeck = new Deck()
console.log(gameDeck)
// add cards from deck to player and dealer hands
const dealCards = () => {
  const randomCard1 = Math.floor(Math.random() * gameDeck.length)
  const randomCard2 = Math.floor(Math.random() * gameDeck.length)
  const randomCard3 = Math.floor(Math.random() * gameDeck.length)
  const randomCard4 = Math.floor(Math.random() * gameDeck.length)

  const randomCard1Val = gameDeck[randomCard1]
  cardRemove.push(randomCard1Val)
  const randomCard2Val = gameDeck[randomCard2]
  cardRemove.push(randomCard2Val)
  const randomCard3Val = gameDeck[randomCard3]
  cardRemove.push(randomCard3Val)
  const randomCard4Val = gameDeck[randomCard4]
  cardRemove.push(randomCard4Val)

  newGameDeck = gameDeck.filter((deck) => {
    return (
      deck != randomCard1Val &&
      deck != randomCard2Val &&
      deck != randomCard3Val &&
      deck != randomCard4Val
    )
  })
  dealerHand.push(randomCard1Val, randomCard2Val)
  playerHand.push(randomCard3Val, randomCard4Val)

  for (let i = 0; i < playerHand.length; i++) {
    pSum += playerHand[i].value
  }
  for (let a = 0; a < dealerHand.length; a++) {
    cSum += dealerHand[a].value
  }

  console.log(dealerHand)
  console.log(cSum)
  console.log(playerHand)
  console.log(pSum)
  console.log(newGameDeck)
  dealButton.removeEventListener('click', dealCards)
}
//add card to playerhand on hit click
const compare = () => {
  if (pSum == cSum) {
    console.log('Push')
  } else if (pSum <= 21 && cSum < pSum) {
    console.log('Player Wins')
  } else if (cSum <= 21 && pSum < cSum) {
    console.log('Dealer Wins')
  }
  if (cSum > 21) {
    console.log('Dealer Busted, the player wins!')
  } else if (pSum > 21) {
    console.log('Player busted, Dealer Wins!')
  }
}

const hitScoreCheck = () => {
  if (pSum > 21) {
    stand()
  }
}

const hit = () => {
  const genCard = Math.floor(Math.random() * newGameDeck.length)
  const hitCard = newGameDeck[genCard]
  playerHand.push(hitCard)
  pSum += hitCard.value
  console.log(pSum)
  console.log(playerHand.length)

  if (playerHand.length >= 6) {
    hitButton.removeEventListener('click', hit)
  }

  hitScoreCheck()
}

const dealerHit = () => {
  const genCard = Math.floor(Math.random() * gameDeck.length)
  const hitCard = gameDeck[genCard]
  dealerHand.push(hitCard)
  cSum += hitCard.value
  console.log(cSum)
  console.log(dealerHand)
}

const stand = () => {
  while (cSum < 17 && pSum < 21) {
    dealerHit()
  }
  if (cSum > 17) {
    compare()
  }
}

const reset = () => {
  for (let i = 0; i < playerHand.length; i++) {
    playerHand.splice(0, 6)
  }
  console.log(playerHand)
  // dealCards()
}

//Event Handlers
dealButton.addEventListener('click', dealCards)
hitButton.addEventListener('click', hit)
standButton.addEventListener('click', stand)
resetButton.addEventListener('click', reset)
