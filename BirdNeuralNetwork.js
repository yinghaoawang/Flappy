class BirdNeuralNetwork extends NeuralNetwork {
    constructor(index) {
      super(2, 6, 1);
      this.index = index;
    }
  
    predict(input) {
      return super.predict([input.x, input.y]);
    }
  }