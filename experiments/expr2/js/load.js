class Load {
  preload() {
    // Load all assets here
    // this.load.image('sprite', ‘assets/sprite.png’);
    // this.load.spritesheet('sprite', 'assets/sprite.png', { frameWidth: 20, frameHeight: 20 });
    // this.load.audio('sound', ['assets/sound.ogg', 'assets/sound.ogg.mp3']);
    this.load.image('ball', 'images/ball2.png');
    this.load.image('peg', 'images/peg.png');

    // Loading label
    this.loadLabel = this.add.text(300, 240, 'loading\n0%', { font: '30px Arial', fill: '#fff', align: 'center' });
    this.loadLabel.setOrigin(0.5, 0.5);
    this.load.on('progress', this.progress, this);
  }

  progress(value) {
    // Update loading progress
    let percentage = Math.round(value * 100) + '%';
    this.loadLabel.setText('loading\n' + percentage);
  }

  create() {
    // Start the menu scene
    this.scene.start('menu');
  }
}
