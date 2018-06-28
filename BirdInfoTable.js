class BirdInfoTable extends PIXI.Container {
  constructor(width, height, set_colors) {
    super();
    this.max_width = width;
    this.max_height = height;
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
      let text = new PIXI.Text(i + 1);
      cell.addChild(text);
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
      let rect = new PIXI.Graphics();
      rect.beginFill(0xff0000);
      rect.drawRect(0, 0, BIRDWIDTH, BIRDHEIGHT);
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
        rect.beginFill(0x00ff00);
        rect.drawRect(0, 0, BIRDWIDTH, BIRDHEIGHT);
        cell.addChild(rect);
        this.cells[i][j] = cell;
        this.addChild(cell);
      }
    }
  }
}
