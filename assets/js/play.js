class Play {
  create() {
    const width = this.game.config.width;
    const height = this.game.config.height;

    // Initialize the game
    this.add.image(width/2, height/2, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
      speed: 100,
      scale: {start: 1, end: 0},
      blendMode: 'ADD'
    });

    var logo = this.physics.add.image(width/2, height/3, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
  }

  update() {
  	// Update the game
  }

  // Add any other method here
}
