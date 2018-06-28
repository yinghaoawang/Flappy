# Flappy
This is a Flappy Bird clone on Javascript using the Pixijs library.

## Neural Networks
I use neural networks with genetic algorithms (as opposed to backpropagation) to evolve populations
of birds to play the game. Inspired by this [youtube video](https://www.youtube.com/watch?v=aeWmdojEJf0).

- I use 3 inputs: vertical velocity (falling speed), horizontal distance from next wall gap, vertical distance from next wall gap
- a hidden layer
- 1 output layer: decision to jump