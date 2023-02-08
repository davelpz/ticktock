let game = new Phaser.Game({
  width: 800,
  height: 600,
  backgroundColor: '#3498db', 
  physics: { default: 'arcade' },
  parent: 'phaser_div',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 200,
      height: 150,
    },
    max: {
      width: 800,
      height: 600,
    },
  },
});

game.scene.add('load', Load);
game.scene.add('menu', Menu);
game.scene.add('play', Play);

game.scene.start('load');
