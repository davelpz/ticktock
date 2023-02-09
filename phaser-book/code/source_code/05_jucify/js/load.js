class Load {
  preload() {
    this.load.image('background', 'assets/background.png');
    this.load.spritesheet('player', 'assets/player2.png', { 
      frameWidth: 20, 
      frameHeight: 20, 
    });

    let loadLabel = this.add.text(250, 170, 'loading', { font: '30px Arial', fill: '#fff' });
    loadLabel.setOrigin(0.5, 0.5);
  }

  create() {
    this.scene.start('menu');
  }
}
