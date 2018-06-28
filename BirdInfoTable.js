class BirdInfoTable extends PIXI.Container {
  constructor(width, height, set_colors) {
    super();
    this.max_width = width;
    this.max_height = height;
    this.set_colors = set_colors;
    this.row_header = [];
    this.col_header = [];
    this.cells = [];
    this.cell_width = 50;
    this.cell_height = 50;
    this.rows = INFOMAXGEN;
    this.cols = BIRDCOUNT;
    this.init_row_header();
    this.init_col_header();
    this.init_cells();
  }

  init_row_header() {
    let cell_width = this.cell_width;
    let cell_height = this.cell_height;
    for (let i = 0; i < this.rows; ++i) {
      let cell = new PIXI.Container();
      cell.x = 0;
      cell.y = (i + 1) * cell_height;
      let text_value = i + 1;
      let gen_text_font = {
        fontFamily: "Times New Roman",
        fontSize: 20,
        align: "center"
      };
      let text_obj = new PIXI.Text(text_value, gen_text_font);
      text_obj.x = cell_width / 2;
      text_obj.y = cell_height / 4;
      cell.addChild(text_obj);
      this.row_header.push(cell);
      this.addChild(cell);
    }
  }

  init_col_header() {
    let cell_width = this.cell_width;
    let cell_height = this.cell_height;
    for (let i = 0; i < this.cols; ++i) {
      let cell = new PIXI.Container();
      cell.x = (i + 1) * cell_width;
      cell.y = 0;
      // preview bird with rect
      let rect = new PIXI.Graphics();
      console.log(set_colors);
      let bird_color = hash_to_hex(this.set_colors[i]);
      rect.beginFill(bird_color);
      rect.drawRect(0, 0, BIRDWIDTH, BIRDHEIGHT);
      rect.x = cell_width / 4;
      rect.y = cell_height / 4;
      cell.addChild(rect);
      this.col_header.push(cell);
      this.addChild(cell);
    }
  }

  init_cells() {
    let cell_width = this.cell_width;
    let cell_height = this.cell_height;
    for (let i = 0; i < this.rows; ++i) {
      this.cells[i] = [];
      for (let j = 0; j < this.cols; ++j) {
        let cell = new PIXI.Container();
        cell.y = (i + 1) * cell_width;
        cell.x = (j + 1) * cell_height;
        let rect = new PIXI.Graphics();
        rect.beginFill(hash_to_hex(get_random_hex_color()));
        rect.drawRect(0, 0, cell_width, cell_height);
        cell.addChild(rect);
        this.cells[i][j] = cell;
        this.addChild(cell);
      }
    }
  }
}
