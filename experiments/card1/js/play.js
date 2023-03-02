class Play {
  create() {
    const width = this.game.config.width;
    const height = this.game.config.height;

    // Initialize the game
    let card = new Card("Clubs","2");
    card.create_game_object(this, width/2, height/2);
  }

  update() {
  	// Update the game
  }

  // Add any other method here
}
