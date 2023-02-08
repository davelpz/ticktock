let game = new Phaser.Game({
  width: 500,
  height: 340, 
  backgroundColor: '#3498db', 
  physics: { default: 'arcade' },
  parent: 'game', 
});

game.scene.add('load', Load);
game.scene.add('menu', Menu);
game.scene.add('play', Play);

game.scene.start('load');
