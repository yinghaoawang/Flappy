// create application canvas
const app = new PIXI.Application(APPWIDTH, APPHEIGHT, {
  backgroundColor: BACKGROUNDCOLOR
});
document.getElementsByClassName("container-game")[0].appendChild(app.view);

// global key set
let rkey = keyboard(82);
let spacekey = keyboard(32);
let esckey = keyboard(27);
let pkey = keyboard(80);

// holds the states of the game
let state_machine = new StateMachine();

// the state in which the simulation runs
let game_state = new GameState();

// the state in which it shows the main menu
let main_menu_state = new MainMenuState();
// link main menu to sim
main_menu_state.set_start_function(() => {
  state_machine.pop();
  state_machine.push(game_state);
});
state_machine.push(main_menu_state);