class Load {
  preload() {
    this.load.image('background', 'assets/background.png');
    this.load.spritesheet('player', 'assets/player2.png', { 
      frameWidth: 20, 
      frameHeight: 20, 
    });
    this.load.image('coin', 'assets/coin.png');
    this.load.image('enemy', 'assets/enemy.png');
    this.load.image('tileset', 'assets/tileset.png'); 
    this.load.tilemapTiledJSON('map', 'assets/map.json');
    this.load.audio('jump', ['assets/jump.ogg', 'assets/jump.mp3']);
    this.load.audio('coin', ['assets/coin.ogg', 'assets/coin.mp3']);
    this.load.audio('dead', ['assets/dead.ogg', 'assets/dead.mp3']);
    this.load.image('pixel', 'assets/pixel.png')
    this.load.spritesheet('mute', 'assets/muteButton.png', { 
      frameWidth: 28, 
      frameHeight: 22, 
    }); 

    this.loadLabel = this.add.text(250, 170, 'loading\n0%', { font: '30px Arial', fill: '#fff', align: 'center' });
    this.loadLabel.setOrigin(0.5, 0.5);
    this.load.on('progress', this.progress, this);
  }

  progress(value) {
    let percentage = Math.round(value * 100) + '%';
    this.loadLabel.setText('loading\n' + percentage);
  }

  create() {
    this.scene.start('menu');
  }
}
