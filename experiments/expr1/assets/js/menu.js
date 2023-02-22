class Menu {
  create() {
  	// Display the game's name
  	let nameLabel = this.add.text(300, 160, 'Game Name', { font: '70px Arial', fill: '#fff' });
    nameLabel.setOrigin(0.5, 0.5);

    // Display how to start the game
    let startText;
    if (this.sys.game.device.os.desktop) {
      startText = 'press the up arrow key to start';
    } else {
      startText = 'touch the screen to start';
    }
    let startLabel = this.add.text(300, 520, startText, { font: '25px Arial', fill: '#fff' });
    startLabel.setOrigin(0.5, 0.5);

    // Store the up arrow key
    this.upKey = this.input.keyboard.addKey('up');
  }

  update() {
  	// When the up arrow key is pressed
  	if (this.upKey.isDown || (!this.sys.game.device.os.desktop && this.input.activePointer.isDown)) {
      // Start the play scene
      this.scene.start('play');
  	}
  }
}
