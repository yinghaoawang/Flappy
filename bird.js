var BIRDWIDTH = 20;
var BIRDHEIGHT = 20;
var BIRDXV = 2;
var GRAVITY = .5;
var BIRDMAXYV = 4;
var BIRDJUMPV = -10;

class Bird extends PIXI.Sprite {
    constructor(x, y) {
        super(new PIXI.Texture.fromImage('bird.png'));
        this.x = x;
        this.y = y;
        this.width = BIRDWIDTH;
        this.height = BIRDHEIGHT;
        this.xv = BIRDXV;
        this.yv = 0;
    }
    step() {
        this.x += this.xv;
        if (this.yv <= BIRDMAXYV) {
            this.yv += GRAVITY;
        } else {
            this.yv = BIRDMAXYV;
        }
        this.y += this.yv;
    }
    jump() {
        console.log("j");
        this.yv = BIRDJUMPV;
    }
}