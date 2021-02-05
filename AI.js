"use strict";

const Player = require("./Player");

class AI extends Player {
  constructor(name = "AI") {
    super(name);
  }

  chooseGesture(gestures) {
    let index = this.randomNumber(gestures.length);
    this.selectedGesture = gestures[index];
  }

  randomNumber(max = 1) {
    return Math.floor(Math.random() * max);
  }
}

module.exports = AI;
