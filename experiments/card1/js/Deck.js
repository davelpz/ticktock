const SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
const RANKS = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

class Card {
    constructor(suit, rank) {
        //check if suit is in SUITS
        if (!SUITS.includes(suit)) {
            throw new Error("Invalid suit: " + suit);
        }
        //check if rank is in RANKS
        if (!RANKS.includes(rank)) {
            throw new Error("Invalid rank: " + rank);
        }
        //get index of suit in SUITS
        let suitIndex = SUITS.indexOf(suit);
        //get index of rank in RANKS
        let rankIndex = RANKS.indexOf(rank);

        this.cardIndex = suitIndex * RANKS.length + rankIndex;

        this.isFaceUp = false;

        this.go = null;
    }

    get suit() {
        return SUITS[Math.trunc(this.cardIndex / RANKS.length)];
    }

    get rank() {
        return RANKS[this.cardIndex % RANKS.length];
    }

    get value() {
        return this.cardIndex;
    }

    get faceUp() {
        return this.isFaceUp;
    }

    get faceDown() {
        return !this.isFaceUp;
    }

    set faceUp(value) {
        this.isFaceUp = value;
    }

    set faceDown(value) {
        this.isFaceUp = !value;
    }

    get game_object() {
        return this.go;
    }

    set game_object(value) {
        this.go = value;
    }

    create_game_object(scene, x, y) {
        this.game_object = scene.add.image(x, y, 'card_'+this.cardIndex);
        this.game_object.setInteractive();
        this.game_object.on('pointerdown', () => {
            this.faceUp = !this.faceUp;
            console.log(this.toString());
        });
    }

    toString() {
        return this.rank + " of " + this.suit + (this.faceUp ? "(face up)" : " (face down)");
    }
}

class Deck {
    constructor() {
        this.cards = [];
        for (let suit of SUITS) {
            for (let rank of RANKS) {
                this.cards.push(new Card(suit, rank));
            }
        }
    }

    shuffle() {
        for (let i = 0; i < this.cards.length; i++) {
            let j = Math.floor(Math.random() * this.cards.length);
            let temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }

    draw() {
        return this.cards.pop();
    }

    top() {
        return this.cards[this.cards.length - 1];
    }

    getNthCard(n) {
        return this.cards[this.cards.length - 1 - n];
    }

    toString() {
        let result = "";
        for (let card of this.cards) {
            result += card.toString() + " ";
        }
        return result;
    }
}

