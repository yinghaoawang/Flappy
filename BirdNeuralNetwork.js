class BirdNeuralNetwork extends NeuralNetwork {
    constructor(index) {
      super(4, 6, 1);
      this.index = index;
    }
  
    predict(dist_from_ceil, dist_from_floor, dist_from_wall) {
      return super.predict([dist_from_ceil, dist_from_floor, dist_from_wall.x, dist_from_wall.y]);
    }
  }