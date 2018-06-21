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
        this.steps_taken = 0;
    }
    get_dist_from_target_wall(target_wall) {
        let gap_bottom = target_wall.get_gap_bottom();
        let h_dist = (target_wall.x + target_wall.width) - (this.x);
        let v_dist = (gap_bottom.y) - (this.y + this.height);
        return {
            "x": h_dist,
            "y": v_dist
        };
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
        ++this.steps_taken;
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