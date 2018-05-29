class Bird extends PIXI.Sprite {
    constructor(x, y) {
        super(new PIXI.Texture.fromImage('bird.png'));
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
        this.xv = 2;
        this.yv = 0;
    }
    step() {
        this.x += this.xv;
        if (this.yv <= 4)
            this.yv += .1;
        this.y += this.yv;
    }
    jump() {
        console.log("j");
        this.yv = -4;
    }
}