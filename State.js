class State {
    constructor() {
        if (this.constructor === State) {
            throw new TypeError('Abstract class cannot be instantiated directly.'); 
        }
        if (this.on_enter() === undefined) {
            throw new TypeError('Class missing method from extended abstract class.');
        }
        if (this.on_exit() === undefined) {
            throw new TypeError('Class missing method from extended abstract class.');
        }
        if (this.update() === undefined) {
            throw new TypeError('Class missing method from extended abstract class.');
        }
    }
}