// create application canvas
const app = new PIXI.Application(APPWIDTH, APPHEIGHT, {
  backgroundColor: BACKGROUNDCOLOR
});
document.getElementsByClassName("container-game")[0].appendChild(app.view);

// key set
let rkey = keyboard(82);
let spacekey = keyboard(32);

let state_machine = new StateMachine();
let game_state = new GameState();
state_machine.push(game_state);
state_machine.pop();
state_machine.push(game_state);