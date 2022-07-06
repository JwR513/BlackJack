//Global
const hitButton = document.querySelector('#hit')
const standButton = document.querySelector('#stand')
const dealButton = document.querySelector('#deal')
// player and dealer
const player = {
  hand: []
}
const dealer = {
  hand: []
}
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
    //holds card objects in the deck
    let cards = []
    //iterates through each suit and name and combines them into a new card aswell as giving them a value of their index +1 giving us 52 card variations
    for (let s = 0; s < this.suit.length; s++) {
      for (let n = 0; n < this.name.length; n++) {
        cards.push(new Card(n + 1, this.name[n], this.suit[s]))
      }
    }
    return cards
  }
}
const gameDeck = new Deck()

console.log(gameDeck)
// add cards from deck to player and dealer hands
const dealCards = () => {
  const randomCard = Math.floor(Math.random() * gameDeck.length)
  dealer.hand.push(randomCard, randomCard)
}
console.log(dealer.hand)
dealCards()
//Event Handlers
// dealButton.addEventListener('click')
// hitButton.addEventListener('click')
// standButton.addEventListener('click')
