let game = new Phaser.Game({
  width: 600,
  height: 800,
  backgroundColor: '#3498db', 
  physics: {
    default: 'arcade',
    arcade: {
      x:0,
      y:0,
      width: 600,
      height: 800,
      checkCollision: {
        up: true,
        down: true,
        left: true,
        right: true
      },
      debug: true,
      debugShowBody: true,
      debugShowStaticBody: true,
      debugShowVelocity: true
    }
  },
  parent: 'game', 
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 150,
      height: 200,
    },
    max: {
      width: 600,
      height: 800,
    },
  },
});

game.scene.add('load', Load);
game.scene.add('menu', Menu);
game.scene.add('play', Play);

game.scene.start('load');
