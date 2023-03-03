let game = new Phaser.Game({
  width: 600,
  height: 1066,
  backgroundColor: '#3498db', 
  physics: { default: 'arcade' },
  parent: 'game', 
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 150,
      height: 266,
    },
    max: {
      width: 600,
      height: 1066,
    },
  },
});

game.scene.add('load', Load);
game.scene.add('menu', Menu);
game.scene.add('play', Play);

game.scene.start('load');
