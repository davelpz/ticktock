class Play {
  create() {
  	// Initialize the game
    this.createBoard();
    this.ball1 = this.makeBall(50, 10);
    this.ball2 = this.makeBall(150, 10);
    this.ball3 = this.makeBall(250, 10);
    this.ball4 = this.makeBall(350, 10);
    this.ball5 = this.makeBall(450, 10);
    this.ball6 = this.makeBall(550, 10);
  }

  makeBall(x,y) {
    let ball = this.physics.add.image(x, y, 'ball');
    ball.setOrigin(0.5, 0.5);
    ball.body.collideWorldBounds = false;
    ball.body.velocity.x = this.pickSpeed();;
    ball.body.gravity.y = 500;
    ball.body.bounce.x = this.pickBounce();
    ball.body.bounce.y = this.pickBounce();
    return ball;
  }

  createBoard() {
    this.pegs = this.physics.add.staticGroup();
    for (let y = 50; y < 800; y=y+50) {
      let offset = 0;
      if (y % 100 == 0) {
        offset = 50;
      }
      for (let x = 50+offset; x < 600; x=x+100) {
        const peg = this.physics.add.staticSprite(x, y, 'peg');
        peg.setFrame(0);
        //rotate 45 degrees
        peg.setAngle(45);
        this.pegs.add(peg);
      }
    }
  }

  update() {
  	// Update the game
    this.physics.collide(this.ball1, this.pegs);
    this.physics.collide(this.ball2, this.pegs);
    this.physics.collide(this.ball3, this.pegs);
    this.physics.collide(this.ball4, this.pegs);
    this.physics.collide(this.ball5, this.pegs);
    this.physics.collide(this.ball6, this.pegs);
    this.checkBall(this.ball1);
    this.checkBall(this.ball2);
    this.checkBall(this.ball3);
    this.checkBall(this.ball4);
    this.checkBall(this.ball5);
    this.checkBall(this.ball6);
  }

  checkBall(ball) {
    if (ball.x > 590) {
      ball.x = 590;
      ball.body.velocity.x = -100;
    }
    if (ball.x < 10) {
      ball.x = 10;
      ball.body.velocity.x = 100;
    }

    if (ball.y > 810) {
      ball.body.velocity.x = this.pickSpeed();
      ball.body.bounce.x = this.pickBounce();
      ball.body.bounce.y = this.pickBounce();
      ball.y = 0;
    }
  }

  pickBounce() {
    return Phaser.Math.RND.pick([.50, .55, .60, .65, .70, .75, .80, .85, .90, .95]);
  }

  pickSpeed() {
    return Phaser.Math.RND.pick([-200, -150, -100, -50, 50, 100, 150, 200]);
  }
  // Add any other method here
}
