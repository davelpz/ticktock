class Play {
  makeBall(x,y) {
    var ball = this.matter.add.image(x,y, 'ball', {

    });
    ball.setFriction(0.001, 0.001, 0.0)
    ball.setBounce(1.0);
    //ball.setCircle(10);
    ball.setMass(1.0);
  }

  makePeg(x,y) {
    var peg = this.matter.add.image(x,y, 'ball', {
    });
    peg.setFriction(0.000, 0.00, 0.0)
    //peg.setBounce(0.99);
    //peg.setCircle(10);
    peg.setStatic(true);
    peg.setScale(1.75);
    peg.setAngle(45);
  }

  makeBoard() {
    for (let y = 50; y < 800; y=y+50) {
      let offset = 0;
      if (y % 100 == 0) {
        offset = 50;
      }
      for (let x = 50+offset; x < 600; x=x+100) {
        const peg = this.makePeg(x, y);
      }
    }
  }

  create() {
  	// Initialize the game
    this.makeBall(305,10);
    this.makeBoard()

  }

  update() {
  	// Update the game
  }

  // Add any other method here
}
