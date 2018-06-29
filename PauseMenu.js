class PauseMenu extends PIXI.Container {
  constructor(width, height) {
    super();
    let gray_bg = new PIXI.Graphics();
    gray_bg.beginFill(0x000000);
    gray_bg.drawRect(0, 0, APPWIDTH, APPHEIGHT);
    gray_bg.alpha = 0.6;
    gray_bg.delete_on_resume = true;
    this.addChild(gray_bg);

    let ic_width = width * 0.4;
    let ic_height = height * 0.6;

    this.inner_container = new PIXI.Container();
    this.inner_container.x = width / 2;
    this.inner_container.y = height / 2;
    this.inner_container.pivot.x = ic_width / 2;
    this.inner_container.pivot.y = ic_height * .5;
    this.addChild(this.inner_container);

    this.background = new PIXI.Graphics();
    this.background.beginFill(0xcccccc);

    this.background.drawRect(0, 0, ic_width, ic_height);
    this.inner_container.addChild(this.background);

    this.mm_button = new MenuButton(ic_width * .5, ic_height * .15, ic_width * .8, ic_height * .15, "Main Menu");
    this.inner_container.addChild(this.mm_button);

    this.resume_button = new MenuButton(ic_width * .5, ic_height * .35, ic_width * .8, ic_height * .15, "Resume");
    this.inner_container.addChild(this.resume_button);
  }
}
