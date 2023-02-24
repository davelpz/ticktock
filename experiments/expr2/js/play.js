class Play {
  makeBall(x,y) {
    var ball = this.matter.add.image(x,y, 'ball', {

    });
    ball.setCircle(10);
    ball.setFriction(0.001, 0.001, 0.0)
    ball.setBounce(0.8);
    ball.setMass(1.0);

    return ball;
  }

  makePeg(x,y) {
    var peg = this.matter.add.image(x,y, 'peg', {
    });
    peg.setCircle(10);
    peg.setFriction(0.000, 0.00, 0.0)
    peg.setBounce(0.8);
    peg.setStatic(true);
  }

  makeBoard() {
    for (let y = 50; y < 800; y=y+50) {
      let offset = 0;
      if (y % 100 === 0) {
        offset = 50;
      }
      for (let x = 50+offset; x < 600; x=x+100) {
        this.makePeg(x, y);
      }
    }
  }

  create() {
  	// Initialize the game
    this.balls = [];
    var count = 100;
    var distance = 600 / count;
    var offset = distance / 2;
    for (let i = 0; i < count; i++) {
        const ball = this.makeBall(offset + (i * distance), Phaser.Math.RND.between(0,10));
        this.balls.push(ball);
    }

    this.makeBoard()
    this.matter.add.rectangle(-10,400,20,800,{
        isStatic: true
    });
    this.matter.add.rectangle(610,400,20,800,{
      isStatic: true
    });

  }

  update() {
  	// Update the game
    this.balls.forEach((ball) => {
      if (ball.y > 810) {
        //ball.body.velocity.x = this.pickSpeed();
        //ball.body.bounce.x = this.pickBounce();
        //ball.body.bounce.y = this.pickBounce();
        ball.x = Phaser.Math.RND.between(0,600);
        ball.y = 0;
      }
    });
  }

  // Add any other method here
}
