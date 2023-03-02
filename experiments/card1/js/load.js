const card_images = [
  "images/cards/ace_of_clubs.png",
  "images/cards/2_of_clubs.png",
  "images/cards/3_of_clubs.png",
  "images/cards/4_of_clubs.png",
  "images/cards/5_of_clubs.png",
  "images/cards/6_of_clubs.png",
  "images/cards/7_of_clubs.png",
  "images/cards/8_of_clubs.png",
  "images/cards/9_of_clubs.png",
  "images/cards/10_of_clubs.png",
  "images/cards/jack_of_clubs2.png",
  "images/cards/queen_of_clubs2.png",
  "images/cards/king_of_clubs2.png",
  "images/cards/ace_of_diamonds.png",
  "images/cards/2_of_diamonds.png",
  "images/cards/3_of_diamonds.png",
  "images/cards/4_of_diamonds.png",
  "images/cards/5_of_diamonds.png",
  "images/cards/6_of_diamonds.png",
  "images/cards/7_of_diamonds.png",
  "images/cards/8_of_diamonds.png",
  "images/cards/9_of_diamonds.png",
  "images/cards/10_of_diamonds.png",
  "images/cards/jack_of_diamonds2.png",
  "images/cards/queen_of_diamonds2.png",
  "images/cards/king_of_diamonds2.png",
  "images/cards/ace_of_hearts.png",
  "images/cards/2_of_hearts.png",
  "images/cards/3_of_hearts.png",
  "images/cards/4_of_hearts.png",
  "images/cards/5_of_hearts.png",
  "images/cards/6_of_hearts.png",
  "images/cards/7_of_hearts.png",
  "images/cards/8_of_hearts.png",
  "images/cards/9_of_hearts.png",
  "images/cards/10_of_hearts.png",
  "images/cards/jack_of_hearts2.png",
  "images/cards/queen_of_hearts2.png",
  "images/cards/king_of_hearts2.png",
  "images/cards/ace_of_spades.png",
  "images/cards/2_of_spades.png",
  "images/cards/3_of_spades.png",
  "images/cards/4_of_spades.png",
  "images/cards/5_of_spades.png",
  "images/cards/6_of_spades.png",
  "images/cards/7_of_spades.png",
  "images/cards/8_of_spades.png",
  "images/cards/9_of_spades.png",
  "images/cards/10_of_spades.png",
  "images/cards/jack_of_spades2.png",
  "images/cards/queen_of_spades2.png",
  "images/cards/king_of_spades2.png",
  "images/cards/red_back2.png"
];
class Load {
  preload() {
    const width = this.game.config.width;
    const height = this.game.config.height;

    // Load all card images
    for (let i = 0; i < card_images.length; i++) {
        this.load.image('card_' + i, card_images[i]);
    }

    // Load all assets here
    // this.load.image('sprite', ‘assets/sprite.png’);
    // this.load.spritesheet('sprite', 'assets/sprite.png', { frameWidth: 20, frameHeight: 20 });
    // this.load.audio('sound', ['assets/sound.ogg', 'assets/sound.ogg.mp3']);

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
