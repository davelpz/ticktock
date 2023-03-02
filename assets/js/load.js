class Load {
  preload() {
    const width = this.game.config.width;
    const height = this.game.config.height;

    // Load all assets here
    // this.load.image('sprite', ‘assets/sprite.png’);
    // this.load.spritesheet('sprite', 'assets/sprite.png', { frameWidth: 20, frameHeight: 20 });
    // this.load.audio('sound', ['assets/sound.ogg', 'assets/sound.ogg.mp3']);
    this.load.setBaseURL('//labs.phaser.io');
    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');


    // Loading label
    this.loadLabel = this.add.text(width/2, height/2, 'loading\n0%', { font: '30px Arial', fill: '#fff', align: 'center' });
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
