class MainMenuState extends State {
  constructor() {
    super();
  }
  on_enter() {
    this.title_label = new PIXI.Text("Flappy Bot", {
      fontFamily: "Times New Roman",
      fontSize: 50
    });
    this.title_label.x = APPWIDTH * 0.5;
    this.title_label.y = APPHEIGHT * 0.1;
    this.title_label.anchor.set(0.5);
    app.stage.addChild(this.title_label);

    let menu_x = APPWIDTH * 0.5;
    let menu_y = APPHEIGHT * 0.3;
    let menu_width = APPWIDTH * 0.6;
    let menu_height = APPWIDTH * 0.15;
    this.start_button = new MenuButton(
      menu_x,
      menu_y,
      menu_width,
      menu_height,
      "Start"
    );
    app.stage.addChild(this.start_button);
    this.start_button.click = (e) => {
      console.log("hello " + e);
    };
  }
  on_exit() {}
  update() {}
}
