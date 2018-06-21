class BirdNeuralNetwork extends NeuralNetwork {
    constructor() {
      super(2, 6, 1);
    }
  
    predict(input) {
      return super.predict([input.x, input.y]);
    }
  }