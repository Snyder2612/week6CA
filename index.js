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
}
playWar()