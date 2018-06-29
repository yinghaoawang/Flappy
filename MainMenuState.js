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

    this.start_button = new MenuButton(
      APPWIDTH * 0.5,
      APPHEIGHT * 0.3,
      APPWIDTH * 0.6,
      APPWIDTH * 0.15,
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
    if (this.start_button != undefined) {
        this.start_button.click = this.start_function;
    }
  }
  update() {}
}
