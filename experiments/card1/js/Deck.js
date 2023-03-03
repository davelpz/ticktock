const SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
const RANKS = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

class Card {
    static WIDTH = 80;

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
        const prev_value = this.isFaceUp;
        this.isFaceUp = value;
        if (prev_value !== this.isFaceUp) {
            if (this.faceDown) {
                this.set_texture('card_52');
            } else {
                this.set_texture('card_' + this.cardIndex);
            }
        }
    }

    set faceDown(value) {
        this.faceUp = !value;
    }

    get game_object() {
        return this.go;
    }

    set game_object(value) {
        this.go = value;
    }

    get width() {
        return this.game_object?.displayWidth;
    }

    set width(value) {
        const aspect = this.game_object.width / this.game_object.height;
        this.game_object.displayWidth = value;
        this.game_object.displayHeight = value / aspect;
    }

    get height() {
        return this.game_object?.displayHeight;
    }

    set height(value) {
        const aspect = this.game_object.width / this.game_object.height;
        this.game_object.displayHeight = value;
        this.game_object.displayWidth = value * aspect;
    }

    create_game_object(scene, x, y) {
        //this.game_object = scene.add.image(x, y, 'card_' + this.cardIndex);
        this.game_object = scene.add.image(x, y, 'card_52');

        this.width = Card.WIDTH;
        this.game_object.setInteractive({
            draggable: true,
            useHandCursor: true
        });
        this.game_object.on('pointerdown', () => {
            console.log('pointerdown: ' + this.dump());
            this.faceUp = !this.faceUp;
        });
        this.game_object.on('dragstart', (pointer, dragX, dragY) => {
            console.log(dragX + "," + dragY);
            //this.game_object.x = dragX;
            //this.game_object.y = dragY;
        });
        this.game_object.on('drag', (pointer, dragX, dragY) => {
            console.log(dragX + "," + dragY);
            this.game_object.x = dragX;
            this.game_object.y = dragY;
        });
    }

    set_texture(name) {
        if (!this.game_object) {
            throw new Error("game_object is null");
        }
        const width = this.width;
        this.game_object.setTexture(name);
        this.width = width;
    }

    toString() {
        return this.rank + " of " + this.suit + (this.faceUp ? "(face up)" : " (face down)");
    }

    dump() {
        let result = this.toString();
        result += "(" + this.width + "," + this.height + ")";
        return result;
    }
}

class Stack {
    constructor() {
        this.cards = [];
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

    add(card) {
        this.cards.push(card);
    }

    remove(card) {
        let index = this.cards.indexOf(card);
        if (index >= 0) {
            this.cards.splice(index, 1);
        }
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

class Deck extends Stack {
    constructor() {
        super();
        for (let suit of SUITS) {
            for (let rank of RANKS) {
                this.add(new Card(suit, rank));
            }
        }
    }
}

