class MainMenuState extends State {
  constructor() {
    super();
    this.start_function = undefined;
  }
  on_enter() {
    this.main_container = new PIXI.Container();
    this.title_label = new PIXI.Text("Flappy Bot", {
      fontFamily: "Times New Roman",
      fontSize: 50
    });
    this.title_label.x = APPWIDTH * 0.5;
    this.title_label.y = APPHEIGHT * 0.1;
    this.title_label.anchor.set(0.5);
    this.main_container.addChild(this.title_label);

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
    this.main_container.addChild(this.start_button);
    if (this.start_function != undefined) {
        this.start_button.click = this.start_function;
    }
    app.stage.addChild(this.main_container);
  }
  on_exit() {
      app.stage.removeChild(this.main_container);
  }
  set_start_function(fn) {
    this.start_function = fn;
  }
  update() {}
}
