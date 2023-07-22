function createDeck() {
    const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const suits = ['Hearts','Diamonds','Clubs','Spades'];

    const deck = [];
    for (const suit of suits) {
        for (const value of values) {

            deck.push({value, suit});
    }
 }


for (let i = deck.length - 1; i > 0; i --) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]]; 
}

return deck;
}

function playWar() {
    const deck = createDeck();
    const player1Hand = deck.slice(0,26);
    const player2Hand = deck.slice(26);

    let player1Score = 0;
    let player2Score = 0;
    
    for(let i = 0; i <26; i++) {
        const player1Card = player1Hand[i];
        const player2Card = player2Hand[i];
        if (player1Card.value > player2Card.value) {
            player1Score++;
        } else if (player1Card.value < player2Card.value) {
        player2Score++;
        }

    }

    console.log('Player 1 Score: ', player1Score);
    console.log('Player 2 Score:' , player2Score);

if (player1Score > player2Score) {
    console.log('Player 1 wins!');
} else if (player1Score < player2Score) {
    console.log('Player 2 wins!')
} else {
    console.log('It is a tie');
    }
}

    playWar()

    
    const chai = require('chai');
    const expect = chai.expect;
    
    const { createDeck } = require('./week6CA/index.js'); // Replace with the actual file path containing the functions.
    
    describe('createDeck', () => {
      it('should create a deck of 52 cards', () => {
        const deck = createDeck();
        expect(deck).to.have.lengthOf(52);
      });
    
      it('should contain unique cards', () => {
        const deck = createDeck();
        const cardSet = new Set(deck.map(card => `${card.value} ${card.suit}`));
        expect(cardSet.size).to.equal(52);
      });
    
      it('should contain valid card values and suits', () => {
        const deck = createDeck();
        const validValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    
        for (const card of deck) {
          expect(validValues).to.include(card.value);
          expect(validSuits).to.include(card.suit);
        }
      });
    });
    