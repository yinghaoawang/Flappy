// consts
const WALLWIDTH = 30;
const WALLGAPHEIGHT = 140;
const APPWIDTH = 800;
const APPHEIGHT = 600;

const app = new PIXI.Application(APPWIDTH, APPHEIGHT);
document.body.appendChild(app.view);
let rkey = keyboard(82),
  spacekey = keyboard(32);

let bird = null;
let rect_gfx = null;
let wall_man = new WallManager(app.stage);
let stage_objects = [];
app.stage.x = app.renderer.width / 2;

init();

function init() {
  app.ticker.add(delta => step(delta));
  app.ticker.start();

  spacekey.press = () => bird.jump();
  rkey.press = () => reset();

  wall_man.add_wall(200, 200);

  bird = new Bird(10, 20);
  stage_objects.push(bird);

  rect_gfx = new PIXI.Graphics();
  rect_gfx.beginFill(0x0000ff);
  rect_gfx.drawRect(0, 0, 10, 10);
  stage_objects.push(rect_gfx);

  stage_objects.forEach(obj => {
    app.stage.addChild(obj);
  });
}

function step(delta) {
  bird.step();
  app.stage.pivot.x = bird.x + 290;

  let wall = wall_man.get_wall(0);
  if (wall && wall.collidesWithObj(bird)) {
    let centered_pos = get_centered_pos(rect_gfx, wall.get_gap_bottom());
    rect_gfx.x = 750 + centered_pos.x;
    rect_gfx.y = centered_pos.y;
  }
  if (wall && !is_on_stage(app.stage, wall)) {
    wall_man.remove_wall_by_wall(wall);
  }
  //console.log(is_on_stage(bird));
}

function reset() {
  for (let i = 0; i < stage_objects.length; ++i) {
    let obj = stage_objects[i];
    app.stage.removeChild(obj);
    stage_objects.splice(i, 1);
    obj = null;
    --i;
  }
  wall_man.clear();

  app.ticker.stop();
  app.ticker = null;
  app.ticker = new PIXI.ticker.Ticker();
  spacekey.press = null;
  rkey.press = null;

  init();
}
