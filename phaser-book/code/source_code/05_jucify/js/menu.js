class Menu {
  create(data) {
    let score = data.score ? data.score : 0;

    this.add.image(250, 170, 'background');

    let nameLabel = this.add.text(250, -50, 'Super Coin Box', { font: '50px Arial', fill: '#fff' });
    nameLabel.setOrigin(0.5, 0.5);
    this.tweens.add({
      targets: nameLabel, 
      y: 80,
      duration: 1000, 
      ease: 'bounce.out',
    });

    let scoreText = 'score: ' + score;
    let scoreLabel = this.add.text(250, 170, scoreText, { font: '25px Arial', fill: '#fff', align: 'center' });
    scoreLabel.setOrigin(0.5, 0.5);

    let startText = 'press the up arrow key to start';
    let startLabel = this.add.text(250, 260, startText, { font: '25px Arial', fill: '#fff' });
    startLabel.setOrigin(0.5, 0.5);
    this.tweens.add({
      targets: startLabel, 
      angle: { from: -2, to: 2 },
      duration: 1000, 
      yoyo: true,
      repeat: -1,
    });

    this.upKey = this.input.keyboard.addKey('up');
  }

  update() {
    if (this.upKey.isDown) {
      this.scene.start('play');
    }
  }
}
