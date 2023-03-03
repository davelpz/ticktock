class Play {
  create() {
    const width = this.game.config.width;
    const height = this.game.config.height;

    //place Cards in a circle
    const radius = width/2 - Card.WIDTH/2;
    const angle = 360 / 12;
    const center_x = width / 2;
    const center_y = height / 2;
    const deck = new Deck();
    deck.shuffle();
    for (let i = 0; i < deck.cards.length-4; i++) {
        const card = deck.cards[i];
        const x = center_x + radius * Math.cos(angle * i * Math.PI / 180);
        const y = center_y + radius * Math.sin(angle * i * Math.PI / 180);
        card.create_game_object(this, x, y);
    }
    //place the last 4 cards in a row
    for (let i = deck.cards.length-4; i < deck.cards.length; i++) {
        const card = deck.cards[i];
        card.create_game_object(this, center_x, center_y);
    }

    // Initialize the game
    //let card = new Card("Clubs","2");
    //card.create_game_object(this, width/2, height/2);
  }

  update() {
  	// Update the game
  }

  // Add any other method here
}
