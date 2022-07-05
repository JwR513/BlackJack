//global obj
const deck = {
  king: [1, 2, 3, 4],
  queen: [1, 2, 3, 4],
  jack: [1, 2, 3, 4],
  ace: [1, 2, 3, 4],
  regular: [2, 3, 4, 5, 6, 7, 8, 9, 10]
}
// player and computer dealer
class Player {
  constructor(name) {
    this.name = name
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
