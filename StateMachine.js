class StateMachine {
    constructor() {
        this.game_states = [];
    }
    push(state) {
        state.on_enter();
        this.game_states.push(state);
    }
    pop() {
        let top = this.peek();
        if (top == null) {
            console.log("Cannot pop empty state.");
        }
        top.on_exit();
        this.game_states.pop();
    }
    peek() {
        let index = this.game_states.length - 1;
        if (index < 0) return null;
        return this.game_states[index];
    }
    update() {
        let top = this.peek();
        if (top != null) {
            top.update();
        }
    }
}