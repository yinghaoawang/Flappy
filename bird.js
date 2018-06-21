let BIRDWIDTH = 20;
let BIRDHEIGHT = 20;
let BIRDXV = 2;
let GRAVITY = .5;
let BIRDMAXYV = 4;
let BIRDJUMPV = -10;

class Bird extends PIXI.Sprite {
    constructor(x, y, texture_file) {
        if (texture_file === undefined) texture_file = 'bird.png';
        super(new PIXI.Texture.fromImage(texture_file));
        this.x = x;
        this.y = y;
        this.width = BIRDWIDTH;
        this.height = BIRDHEIGHT;
        this.xv = BIRDXV;
        this.yv = 0;
        this.alive = true;
        this.walls_passed = 0;
        // horizontal/vertical distance from target wall
        this.h_dist_f_tw = 0;
        this.v_dist_f_tw = 0;
    }
    pass_wall() {
        ++this.walls_passed;
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
    kill() {
        this.alive = false;
        this.setTexture(new PIXI.Texture.fromImage('dead-bird.png'));
        play_sound("game-over");
    }
    jump() {
        this.yv = BIRDJUMPV;
        play_sound("bird-jump");
    }
}