//Deck creator
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
    let cards = []
    for (let i = 0; i < this.suit.length; i++) {
      for (let n = 0; n < this.name.length; n++) {
        cards.push(new Card(n + 1, this.name[n], this.suit[i]))
      }
    }
    return cards
  }
}
const myDeck = new Deck()
console.log(myDeck)

// player and computer dealer
class Player {
  constructor() {
    this.hand = []
  }
  hit() {}
  stand() {}
}
class Dealer {
  constructor(name, hand) {}
  dealerHit() {}
  dealerStand() {}
  deal() {}
}

// testing
