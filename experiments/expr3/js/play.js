
class Ball {
    constructor(x, y, scene) {
        this.x = x;
        this.y = y;
        this.radius = 10;

        const ball = scene.matter.add.image(x, y, 'ball', {});
        ball.setCircle(this.radius);
        ball.setFriction(0.5, 0.001, 0.0)
        ball.setBounce(Phaser.Math.RND.pick([.50, .55, .60, .65, .70, .75, .80, .85, .90, .95]));
        ball.setMass(Phaser.Math.RND.pick([.10, .20, .30, .40, .50, .60, .70, .80, .90, 1.0]));

        this.game_object = ball;
    }

    update() {
        if (this.game_object.y > Play.height+10) {
            //this.game_object.body.velocity.x = this.pickSpeed();
            //this.game_object.body.bounce.x = this.pickBounce();
            //this.game_object.body.bounce.y = this.pickBounce();
            this.game_object.x = Phaser.Math.RND.between(0, Play.width);
            this.game_object.y = 0;
            this.game_object.setBounce(Phaser.Math.RND.pick([.50, .55, .60, .65, .70, .75, .80, .85, .90, .95]));
        }
    }
}

class Play {
    static width = 0;
    static height = 0;
    constructor() {
        console.log(this);
    }

    makePeg(x, y) {
        const peg = this.add.circle(x, y, 17.5, 0xff0000, 1.0);
        this.matter.add.gameObject(peg, {shape: {type: 'circle', radius: 17.5}});

        peg.setFriction(0.000, 0.00, 0.0)
        peg.setBounce(0.8);
        peg.setStatic(true);

        return peg;
    }

    makeBoard(width, height) {
        for (let y = 50; y < height; y = y + 50) {
            let offset = 0;
            if (y % 100 === 0) {
                offset = 50;
            }
            for (let x = offset; x < width+10; x = x + 100) {
                this.makePeg(x, y);
            }
        }

        const side_width = 20;
        this.matter.add.rectangle(0 - (side_width / 2), height / 2, side_width, height, {
            isStatic: true,
            restitution: 0.8
        });
        this.matter.add.rectangle(width + (side_width / 2), height / 2, side_width, height, {
            isStatic: true,
            restitution: 0.8
        });

    }

    makeBalls(num_balls, width) {
        this.balls = [];
        const count = num_balls;
        const distance = width / count;
        const offset = distance / 2;
        for (let i = 0; i < count; i++) {
            const ball = new Ball(offset + (i * distance), Phaser.Math.RND.between(0, 10), this);
            this.balls.push(ball);
        }
    }

    create() {
        const width = this.game.config.width;
        const height = this.game.config.height;
        Play.width = width;
        Play.height = height;

        // Initialize the game
        //this.matter.world.setBounds().disableGravity();

        var arrow = '40 0 40 20 100 20 100 80 40 80 40 100 0 50';
        var chevron = '100 0 75 50 100 100 25 100 0 50 25 0';
        var star = '50 0 63 38 100 38 69 59 82 100 50 75 18 100 31 59 0 38 37 38';

        this.makeBoard(width, height);
        this.makeBalls(100, width);
        // var poly = this.add.circle(width/3, height/2, 20, 0x0000ff, 0.2);
        // this.matter.add.gameObject(poly, { shape: { type: 'circle', radius: 20 } });
        // poly.setStatic(true);
        //
        // var poly = this.add.polygon(width/2, height/2, arrow, 0x0000ff, 0.2);
        // this.matter.add.gameObject(poly, { shape: { type: 'fromVerts', verts: arrow, flagInternal: true } });
        //
        // poly.setVelocity(6, 3);
        // poly.setAngularVelocity(0.01);
        // poly.setBounce(1);
        // poly.setFriction(0, 0, 0);
        //
        //
        // var poly = this.add.polygon(width/2, height/3, chevron, 0xff0000, 0.2);
        //
        // this.matter.add.gameObject(poly, { shape: { type: 'fromVerts', verts: chevron, flagInternal: true } });
        //
        // poly.setVelocity(6, 3);
        // poly.setAngularVelocity(0.01);
        // poly.setBounce(1);
        // poly.setFriction(0, 0, 0);
        //
        // var poly = this.add.polygon(2*(width/3), 2*(height/3), star, 0x00ff00, 0.2);
        //
        // this.matter.add.gameObject(poly, { shape: { type: 'fromVerts', verts: star, flagInternal: true } });
        //
        // poly.setVelocity(4, -2);
        // poly.setBounce(1);
        // poly.setFriction(0, 0, 0);
        // poly.setFrictionAir(0.005);

    }

    update() {
        // Update the game
        this.balls.forEach((ball) => {
            ball.update();
        });

    }

    // Add any other method here
}
